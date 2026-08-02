#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Turn the Glossika Catalan newsletters into the app's data files.

Reads every .eml in glossikacatalan/ (kept locally, gitignored: they embed a
personal email address and per-subscriber tracking tokens) and writes:

    js/dialogs-data.js       var DIALOGS       27 A1 dialogues
    js/week-lessons-data.js  var WEEK_LESSONS  3 "Week N of 25" curriculum lessons

Run from the repo root:  python tools/build_glossika.py
"""

import email
import glob
import json
import os
import re
import sys
import unicodedata

SRC = "glossikacatalan"
OUT_DIALOGS = os.path.join("js", "dialogs-data.js")
OUT_WEEKS = os.path.join("js", "week-lessons-data.js")

# The source title is mojibake; the English title ("Asking for materials") confirms the intent.
TITLE_FIX = {"Demanant材料.eml": "Demanant material"}

# Everything from the first of these markers onward is newsletter chrome.
TERMINATORS = [
    "⭐⭐⭐⭐⭐ Leave a Review",
    "Copyright ©",
    "Native speakers are preparing",
    "You are receiving this email",
    "You are receiving this because",
]

# A speaker is a single capitalised token, optionally tagged "(dona)"/"(home)".
# The single-token rule is what rejects marketing shouts like "CYBER MONDAY ONLY:"
# and wrapped prose like "Spanish and Catalan:" without any special-casing.
SPEAKER_RE = re.compile(
    r"^([A-ZÀ-ÖØ-Þ][a-zà-öø-ÿ'’·.]*)"
    r"(?:\s*\((?:dona|home)\))?:\s+(\S.*)$"
)
NOT_SPEAKERS = {"Level", "Topic", "Vocabulary", "Notes", "Dialog", "Nota", "Notes"}

GLOSS_RE = re.compile(r"^(\S[^\n]{0,45}?)\s+[-–]\s+(\S.+)$")

# A promo line like "FRIDAY to SUNDAY 3 Days Only - Up to 50% Off!" is shaped exactly
# like a glossary row. Real multi-word Catalan headwords are lowercase, so a shouted
# token inside a multi-word headword means marketing. Single tokens (DNI, SMS) are kept.
SHOUTED = re.compile(r"(?:^|\s)[A-Z]{3,}(?:\s|$)")


def body(path):
    """The decoded text/plain part of an .eml (all 30 are quoted-printable utf-8)."""
    with open(path, encoding="utf-8", errors="replace") as fh:
        msg = email.message_from_file(fh)
    for part in msg.walk():
        if part.get_content_type() == "text/plain":
            return msg, part.get_payload(decode=True).decode("utf-8", errors="replace")
    return msg, ""


def truncate(text):
    cut = len(text)
    for marker in TERMINATORS:
        i = text.find(marker)
        if 0 <= i < cut:
            cut = i
    return text[:cut]


def slugify(s):
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"[^a-zA-Z0-9]+", "-", s).strip("-").lower()
    return s


def collapse(s):
    return re.sub(r"\s+", " ", s).strip()


# --------------------------------------------------------------------------- dialogues


def parse_dialog(fname, msg, text):
    lines = [l.rstrip() for l in truncate(text).split("\n")]

    # 1. Notes boundary FIRST: legacy files put notes as inline prose, and that prose
    #    contains lines that would otherwise look like speaker turns.
    notes_at = len(lines)
    notes = ""
    for i, l in enumerate(lines):
        s = l.strip()
        if s == "** Notes":
            notes_at = i
            notes = collapse(" ".join(lines[i + 2:]))
            break
        if s.startswith("Notes: "):
            notes_at = i
            notes = collapse(" ".join([s[len("Notes: "):]] + lines[i + 1:]))
            break
    notes = re.sub(r"\s*Confidence Level:.*$", "", notes).strip()

    # 2. Speaker turns, only above the notes boundary.
    speakers, turns, last_turn_at = [], [], -1
    for i, l in enumerate(lines[:notes_at]):
        m = SPEAKER_RE.match(l.strip())
        if not m:
            continue
        name, said = m.group(1), m.group(2).strip()
        if name in NOT_SPEAKERS:
            continue
        if name not in speakers:
            speakers.append(name)
        turns.append({"s": speakers.index(name), "t": said})
        last_turn_at = i

    # 3. Glossary: between the last turn and the notes. In legacy files this region
    #    sits inside a marketing block, so blocks cannot be dropped wholesale.
    voc, seen = [], set()
    for l in lines[last_turn_at + 1:notes_at]:
        s = l.strip()
        if not s or "http" in s or s.startswith("**") or s.startswith("--"):
            continue
        m = GLOSS_RE.match(s)
        if not m:
            continue
        ca, en = m.group(1).strip(), m.group(2).strip()
        if " " in ca and SHOUTED.search(ca):
            continue
        if ca.lower() in seen:
            continue
        seen.add(ca.lower())
        voc.append({"c": ca, "e": en})

    # Title: the first "** ..." header, minus the section headers.
    title = ""
    for l in lines:
        s = l.strip()
        if s.startswith("** "):
            cand = s[3:].strip()
            if cand not in ("Dialog", "Vocabulary", "Notes"):
                title = cand
                break
    title = TITLE_FIX.get(fname, title)

    # English title (new format: the line right after the title's ---- rule) or,
    # for legacy files, the one-line scene description with its trailing "(A1)".
    en_title = ""
    for i, l in enumerate(lines):
        if l.strip().startswith("** ") and l.strip()[3:].strip() not in ("Dialog", "Vocabulary", "Notes"):
            for cand in lines[i + 1:i + 5]:
                c = cand.strip()
                if not c or set(c) == {"-"} or c.startswith("▶") or "http" in c:
                    continue
                en_title = c
                break
            break
    level_m = re.search(r"\((A1|A2|B1|B2)\)\s*$", en_title)
    level = level_m.group(1) if level_m else None
    en_title = re.sub(r"\s*\((?:A1|A2|B1|B2)\)\s*$", "", en_title).strip()
    if level is None:
        m = re.search(r"CAT\s*[•·]\s*(A1|A2|B1|B2)", text)
        level = m.group(1) if m else "A1"

    m = re.search(r"(https://ai\.glossika\.com/dialogs/[^\s()?]+)", text)
    url = m.group(1) if m else None  # query string dropped: it carries the subscriber id

    date = ""
    raw_date = msg.get("Date", "")
    try:
        dt = email.utils.parsedate_to_datetime(raw_date)
        date = dt.strftime("%Y-%m-%d")
    except Exception:
        pass

    return {
        "slug": slugify(title),
        "title": title,
        "en": en_title,
        "lvl": level,
        "date": date,
        "sp": speakers,
        "lines": turns,
        "voc": voc,
        "notes": notes,
        "url": url,
    }


# ------------------------------------------------------------------------ week lessons

REGISTERS = ("Standard", "Casual")


def strip_ipa(s):
    return s.strip().strip("/").strip()


def parse_items(block, with_groups=False):
    """Scan records of register / Catalan / [IPA] /../ / gloss / English.

    Blank lines fall between every field, so this works on non-empty lines rather
    than on blank-line-delimited chunks. Any non-empty line that is not a register
    and not part of a record is a group heading ("Sequencing", "Giving examples").
    Mini-dialog turns put the register and the Catalan on one line: "— Standard Ho entens?".
    """
    lines = [l.strip() for l in block.split("\n") if l.strip()]
    groups, items, cur, i = [], [], None, 0
    while i < len(lines):
        m = re.match(r"^—\s*(Standard|Casual)\s+(.+)$", lines[i])
        if m:
            reg, ca, i = m.group(1), m.group(2).strip(), i + 1
        elif lines[i] in REGISTERS:
            reg, i = lines[i], i + 1
            if i >= len(lines):
                break
            ca, i = lines[i], i + 1
        else:
            if with_groups:
                cur = {"g": lines[i], "items": []}
                groups.append(cur)
            i += 1
            continue
        if i >= len(lines) or not lines[i].startswith("[IPA]"):
            continue
        ipa, i = strip_ipa(lines[i][len("[IPA]"):]), i + 1
        gl, i = (lines[i] if i < len(lines) else ""), i + 1
        en, i = (lines[i] if i < len(lines) else ""), i + 1
        rec = {"r": reg, "ca": ca, "ipa": ipa, "gl": gl,
               "en": re.sub(r"^—\s*", "", en).strip()}
        (cur["items"] if with_groups and cur else items).append(rec)
    return groups if with_groups else items


def parse_table(block):
    """A run of 3-line records under a "Català / IPA / English" header."""
    lines = [l.strip() for l in block.split("\n") if l.strip()]
    if lines[:3] == ["Català", "IPA", "English"]:
        lines = lines[3:]
    rows = []
    for i in range(0, len(lines) - 2, 3):
        rows.append({"ca": lines[i], "ipa": strip_ipa(lines[i + 1]), "en": lines[i + 2]})
    return rows


def section(text, start, *ends):
    i = text.find(start)
    if i < 0:
        return ""
    i += len(start)
    cut = len(text)
    for e in ends:
        j = text.find(e, i)
        if 0 <= j < cut:
            cut = j
    return text[i:cut]


def parse_week(text):
    text = truncate(text)
    w = int(re.search(r"Week (\d+) of 25", text).group(1))
    topic = re.search(r"^Topic:\s*(.+)$", text, re.M).group(1).strip()
    lvl = re.search(r"Level:\s*(A1|A2|B1|B2)", text).group(1)

    fl_block = section(text, "Functional Language", "Vocabulary & Situations")
    groups = [g for g in parse_items(fl_block, with_groups=True) if g["items"]]

    vs = section(text, "Vocabulary & Situations", "Phonics Drill")
    voc = parse_table(section(vs, "\nVocabulary\n", "\nNumbers\n"))
    num = parse_table(section(vs, "\nNumbers\n", "\nSituation Patterns\n"))
    sit = parse_items(section(vs, "Situation Patterns", "Mini-Dialog"))
    md = parse_items(vs[vs.find("Mini-Dialog") + len("Mini-Dialog"):])

    ph_block = section(text, "Phonics Drill", "Continue My Glossika")
    ph_lines = [l.strip() for l in ph_block.split("\n") if l.strip()]
    ph = {"t": ph_lines[0], "note": ph_lines[1], "rows": parse_table("\n".join(ph_lines[2:]))}

    return {"w": w, "topic": topic, "lvl": lvl, "fl": groups,
            "voc": voc, "num": num, "sit": sit, "md": md, "ph": ph}


# ------------------------------------------------------------------------------ emit

def j(v):
    return json.dumps(v, ensure_ascii=False)


def obj(pairs):
    """Unquoted keys, to match the house style of the other js/*.js data files."""
    return "{" + ",".join(k + ":" + v for k, v in pairs) + "}"


def emit_dialogs(records):
    out = [
        "// Glossika Catalan A1 dialogues, extracted from the newsletter emails.",
        "// Generated by tools/build_glossika.py - do not edit by hand.",
        "// Fields: id, slug, title (ca), en (English title / scene), lvl, date,",
        "//         sp (speaker names), lines ({s: index into sp, t: Catalan}),",
        "//         voc ({c: catalan, e: english}), notes, url (may be null).",
        "var DIALOGS=[",
    ]
    for r in records:
        lines = "[" + ",".join(obj([("s", str(l["s"])), ("t", j(l["t"]))]) for l in r["lines"]) + "]"
        voc = "[" + ",".join(obj([("c", j(v["c"])), ("e", j(v["e"]))]) for v in r["voc"]) + "]"
        out.append(obj([
            ("id", str(r["id"])), ("slug", j(r["slug"])), ("title", j(r["title"])),
            ("en", j(r["en"])), ("lvl", j(r["lvl"])), ("date", j(r["date"])),
            ("sp", j(r["sp"])), ("lines", lines), ("voc", voc),
            ("notes", j(r["notes"])), ("url", j(r["url"]) if r["url"] else "null"),
        ]) + ",")
    out.append("];")
    return "\n".join(out) + "\n"


def emit_weeks(records):
    def item(it):
        return obj([("r", j(it["r"])), ("ca", j(it["ca"])), ("ipa", j(it["ipa"])),
                    ("gl", j(it["gl"])), ("en", j(it["en"]))])

    def row(rw):
        return obj([("ca", j(rw["ca"])), ("ipa", j(rw["ipa"])), ("en", j(rw["en"]))])

    out = [
        "// Glossika Catalan A1 weekly curriculum lessons (weeks 18-20 of 25).",
        "// Generated by tools/build_glossika.py - do not edit by hand.",
        "// Fields: w (week), topic, lvl, fl (functional language groups), voc, num,",
        "//         sit (situation patterns), md (mini-dialog), ph (phonics drill).",
        "// IPA is stored bare; the UI adds the surrounding slashes.",
        "var WEEK_LESSONS=[",
    ]
    for r in records:
        fl = "[" + ",".join(
            obj([("g", j(g["g"])), ("items", "[" + ",".join(item(i) for i in g["items"]) + "]")])
            for g in r["fl"]) + "]"
        out.append(obj([
            ("w", str(r["w"])), ("topic", j(r["topic"])), ("lvl", j(r["lvl"])), ("fl", fl),
            ("voc", "[" + ",".join(row(x) for x in r["voc"]) + "]"),
            ("num", "[" + ",".join(row(x) for x in r["num"]) + "]"),
            ("sit", "[" + ",".join(item(x) for x in r["sit"]) + "]"),
            ("md", "[" + ",".join(item(x) for x in r["md"]) + "]"),
            ("ph", obj([("t", j(r["ph"]["t"])), ("note", j(r["ph"]["note"])),
                        ("rows", "[" + ",".join(row(x) for x in r["ph"]["rows"]) + "]")])),
        ]) + ",")
    out.append("];")
    return "\n".join(out) + "\n"


def write(path, text):
    with open(path, "w", encoding="utf-8", newline="\n") as fh:
        fh.write(text)


def main():
    if not os.path.isdir(SRC):
        sys.exit("missing %s/ - the .eml sources are kept locally and gitignored" % SRC)

    dialogs, weeks = [], []
    for path in sorted(glob.glob(os.path.join(SRC, "*.eml"))):
        fname = os.path.basename(path)
        msg, text = body(path)
        if re.search(r"Week \d+ of 25", text[:300]):
            weeks.append(parse_week(text))
        else:
            rec = parse_dialog(fname, msg, text)
            rec["id"] = len(dialogs) + 1
            dialogs.append(rec)
    weeks.sort(key=lambda r: r["w"])

    write(OUT_DIALOGS, emit_dialogs(dialogs))
    write(OUT_WEEKS, emit_weeks(weeks))

    n_lines = sum(len(d["lines"]) for d in dialogs)
    n_voc = sum(len(d["voc"]) for d in dialogs)
    uniq = len({v["c"].lower() for d in dialogs for v in d["voc"]})
    print("%s: %d dialogues, %d lines, %d glossary pairs (%d unique)"
          % (OUT_DIALOGS, len(dialogs), n_lines, n_voc, uniq))
    for d in dialogs:
        if len(d["sp"]) != 2:
            print("  ! %s has %d speakers: %s" % (d["title"], len(d["sp"]), d["sp"]))
        if not d["voc"]:
            print("  - %s has no glossary" % d["title"])
        if not d["notes"]:
            print("  - %s has no notes" % d["title"])
    print("%s: %d lessons" % (OUT_WEEKS, len(weeks)))
    for w in weeks:
        print("  week %d %-28s voc=%d num=%d sit=%d md=%d phonics=%d fl=%s"
              % (w["w"], w["topic"], len(w["voc"]), len(w["num"]), len(w["sit"]),
                 len(w["md"]), len(w["ph"]["rows"]),
                 "+".join(str(len(g["items"])) for g in w["fl"])))


if __name__ == "__main__":
    main()
