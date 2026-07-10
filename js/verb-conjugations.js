// Verb conjugation data for Catalan and French
var VERB_DATA = [
  {
    ca: "ser",
    en: "to be",
    fr: "être",
    type: "permanent state",
    catalan: {
      pres: {jo:"soc", tu:"ets", "ell/ella/vostè":"és", nosaltres:"som", vosaltres:"sou", "ells/elles/vostès":"són"},
      perf: {jo:"vaig ser", tu:"vas ser", "ell/ella/vostè":"va ser", nosaltres:"vam ser", vosaltres:"vau ser", "ells/elles/vostès":"van ser"},
      imp: {jo:"era", tu:"eres", "ell/ella/vostè":"era", nosaltres:"èrem", vosaltres:"èreu", "ells/elles/vostès":"eren"},
      fut: {jo:"seré", tu:"seràs", "ell/ella/vostè":"serà", nosaltres:"serem", vosaltres:"sereu", "ells/elles/vostès":"seran"},
      cond: {jo:"seria", tu:"series", "ell/ella/vostè":"seria", nosaltres:"seríem", vosaltres:"seríeu", "ells/elles/vostès":"serien"},
      imper: {tu:"sigues", "vostè":"sigui", vosaltres:"sigueu", "vostès":"siguin"}
    },
    french: {
      pres: {je:"suis", tu:"es", "il/elle/vous":"est", nous:"sommes", vous:"êtes", "ils/elles":"sont"},
      perf: {je:"ai été", tu:"as été", "il/elle/vous":"a été", nous:"avons été", vous:"avez été", "ils/elles":"ont été"},
      imp: {je:"étais", tu:"étais", "il/elle/vous":"était", nous:"étions", vous:"étiez", "ils/elles":"étaient"},
      fut: {je:"serai", tu:"seras", "il/elle/vous":"sera", nous:"serons", vous:"serez", "ils/elles":"seront"},
      cond: {je:"serais", tu:"serais", "il/elle/vous":"serait", nous:"serions", vous:"seriez", "ils/elles":"seraient"},
      imper: {tu:"sois", "vous":"soyez", nous:"soyons"}
    }
  },
  {
    ca: "estar",
    en: "to be",
    fr: "être",
    type: "temporary state",
    catalan: {
      pres: {jo:"estic", tu:"estàs", "ell/ella/vostè":"està", nosaltres:"estem", vosaltres:"esteu", "ells/elles/vostès":"estan"},
      perf: {jo:"vaig estar", tu:"vas estar", "ell/ella/vostè":"va estar", nosaltres:"vam estar", vosaltres:"vau estar", "ells/elles/vostès":"van estar"},
      imp: {jo:"estava", tu:"estaves", "ell/ella/vostè":"estava", nosaltres:"estàvem", vosaltres:"estàveu", "ells/elles/vostès":"estaven"},
      fut: {jo:"estaré", tu:"estaràs", "ell/ella/vostè":"estarà", nosaltres:"estarem", vosaltres:"estareu", "ells/elles/vostès":"estaran"},
      cond: {jo:"estaria", tu:"estaries", "ell/ella/vostè":"estaria", nosaltres:"estaríem", vosaltres:"estaríeu", "ells/elles/vostès":"estarien"},
      imper: {tu:"estigues", "vostè":"estigui", vosaltres:"estigueu", "vostès":"estiguin"}
    },
    french: {
      pres: {je:"suis", tu:"es", "il/elle/vous":"est", nous:"sommes", vous:"êtes", "ils/elles":"sont"},
      perf: {je:"ai été", tu:"as été", "il/elle/vous":"a été", nous:"avons été", vous:"avez été", "ils/elles":"ont été"},
      imp: {je:"étais", tu:"étais", "il/elle/vous":"était", nous:"étions", vous:"étiez", "ils/elles":"étaient"},
      fut: {je:"serai", tu:"seras", "il/elle/vous":"sera", nous:"serons", vous:"serez", "ils/elles":"seront"},
      cond: {je:"serais", tu:"serais", "il/elle/vous":"serait", nous:"serions", vous:"seriez", "ils/elles":"seraient"},
      imper: {tu:"sois", "vous":"soyez", nous:"soyons"}
    }
  },
  {
    ca: "haver",
    en: "to have",
    fr: "avoir",
    type: "auxiliary",
    catalan: {
      pres: {jo:"he", tu:"has", "ell/ella/vostè":"ha", nosaltres:"hem", vosaltres:"heu", "ells/elles/vostès":"han"},
      perf: {jo:"vaig haver", tu:"vas haver", "ell/ella/vostè":"va haver", nosaltres:"vam haver", vosaltres:"vau haver", "ells/elles/vostès":"van haver"},
      imp: {jo:"havia", tu:"havies", "ell/ella/vostè":"havia", nosaltres:"havíem", vosaltres:"havíeu", "ells/elles/vostès":"havien"},
      fut: {jo:"hauré", tu:"hauràs", "ell/ella/vostè":"haurà", nosaltres:"haurem", vosaltres:"haureu", "ells/elles/vostès":"hauran"},
      cond: {jo:"hauria", tu:"hauries", "ell/ella/vostè":"hauria", nosaltres:"hauríem", vosaltres:"hauríeu", "ells/elles/vostès":"haurien"}
    },
    french: {
      pres: {je:"ai", tu:"as", "il/elle/vous":"a", nous:"avons", vous:"avez", "ils/elles":"ont"},
      perf: {je:"ai eu", tu:"as eu", "il/elle/vous":"a eu", nous:"avons eu", vous:"avez eu", "ils/elles":"ont eu"},
      imp: {je:"avais", tu:"avais", "il/elle/vous":"avait", nous:"avions", vous:"aviez", "ils/elles":"avaient"},
      fut: {je:"aurai", tu:"auras", "il/elle/vous":"aura", nous:"aurons", vous:"aurez", "ils/elles":"auront"},
      cond: {je:"aurais", tu:"aurais", "il/elle/vous":"aurait", nous:"aurions", vous:"auriez", "ils/elles":"auraient"}
    }
  },
  {
    ca: "tenir",
    en: "to have/hold",
    fr: "avoir/tenir",
    type: "possession",
    catalan: {
      pres: {jo:"tinc", tu:"tens", "ell/ella/vostè":"té", nosaltres:"tenim", vosaltres:"teniu", "ells/elles/vostès":"tenen"},
      perf: {jo:"vaig tenir", tu:"vas tenir", "ell/ella/vostè":"va tenir", nosaltres:"vam tenir", vosaltres:"vau tenir", "ells/elles/vostès":"van tenir"},
      imp: {jo:"tenia", tu:"tenies", "ell/ella/vostè":"tenia", nosaltres:"teníem", vosaltres:"teníeu", "ells/elles/vostès":"tenien"},
      fut: {jo:"tindré", tu:"tindràs", "ell/ella/vostè":"tindrà", nosaltres:"tindrem", vosaltres:"tindreu", "ells/elles/vostès":"tindran"},
      cond: {jo:"tindria", tu:"tindries", "ell/ella/vostè":"tindria", nosaltres:"tindríem", vosaltres:"tindríeu", "ells/elles/vostès":"tindrien"},
      imper: {tu:"tingues", "vostè":"tingui", vosaltres:"tingueu", "vostès":"tinguin"}
    },
    french: {
      pres: {je:"ai", tu:"as", "il/elle/vous":"a", nous:"avons", vous:"avez", "ils/elles":"ont"},
      perf: {je:"ai eu", tu:"as eu", "il/elle/vous":"a eu", nous:"avons eu", vous:"avez eu", "ils/elles":"ont eu"},
      imp: {je:"avais", tu:"avais", "il/elle/vous":"avait", nous:"avions", vous:"aviez", "ils/elles":"avaient"},
      fut: {je:"aurai", tu:"auras", "il/elle/vous":"aura", nous:"aurons", vous:"aurez", "ils/elles":"auront"},
      cond: {je:"aurais", tu:"aurais", "il/elle/vous":"aurait", nous:"aurions", vous:"auriez", "ils/elles":"auraient"},
      imper: {tu:"aie", "vous":"ayez", nous:"ayons"}
    }
  },
  {
    ca: "fer",
    en: "to do/make",
    fr: "faire",
    type: "irregular",
    catalan: {
      pres: {jo:"faig", tu:"fas", "ell/ella/vostè":"fa", nosaltres:"fem", vosaltres:"feu", "ells/elles/vostès":"fan"},
      perf: {jo:"vaig fer", tu:"vas fer", "ell/ella/vostè":"va fer", nosaltres:"vam fer", vosaltres:"vau fer", "ells/elles/vostès":"van fer"},
      imp: {jo:"feia", tu:"feies", "ell/ella/vostè":"feia", nosaltres:"fèiem", vosaltres:"fèieu", "ells/elles/vostès":"feien"},
      fut: {jo:"faré", tu:"faràs", "ell/ella/vostè":"farà", nosaltres:"farem", vosaltres:"fareu", "ells/elles/vostès":"faran"},
      cond: {jo:"faria", tu:"faries", "ell/ella/vostè":"faria", nosaltres:"faríem", vosaltres:"faríeu", "ells/elles/vostès":"farien"},
      imper: {tu:"fes", "vostè":"faci", vosaltres:"feu", "vostès":"facin"}
    },
    french: {
      pres: {je:"fais", tu:"fais", "il/elle/vous":"fait", nous:"faisons", vous:"faites", "ils/elles":"font"},
      perf: {je:"ai fait", tu:"as fait", "il/elle/vous":"a fait", nous:"avons fait", vous:"avez fait", "ils/elles":"ont fait"},
      imp: {je:"faisais", tu:"faisais", "il/elle/vous":"faisait", nous:"faisions", vous:"faisiez", "ils/elles":"faisaient"},
      fut: {je:"ferai", tu:"feras", "il/elle/vous":"fera", nous:"ferons", vous:"ferez", "ils/elles":"feront"},
      cond: {je:"ferais", tu:"ferais", "il/elle/vous":"ferait", nous:"ferions", vous:"feriez", "ils/elles":"feraient"},
      imper: {tu:"fais", "vous":"faites", nous:"faisons"}
    }
  },
  {
    ca: "anar",
    en: "to go",
    fr: "aller",
    type: "irregular",
    catalan: {
      pres: {jo:"vaig", tu:"vas", "ell/ella/vostè":"va", nosaltres:"anem", vosaltres:"aneu", "ells/elles/vostès":"van"},
      perf: {jo:"vaig anar", tu:"vas anar", "ell/ella/vostè":"va anar", nosaltres:"vam anar", vosaltres:"vau anar", "ells/elles/vostès":"van anar"},
      imp: {jo:"anava", tu:"anaves", "ell/ella/vostè":"anava", nosaltres:"anàvem", vosaltres:"anàveu", "ells/elles/vostès":"anaven"},
      fut: {jo:"aniré", tu:"aniràs", "ell/ella/vostè":"anirà", nosaltres:"anirem", vosaltres:"anireu", "ells/elles/vostès":"aniran"},
      cond: {jo:"aniria", tu:"aniries", "ell/ella/vostè":"aniria", nosaltres:"aniríem", vosaltres:"aniríeu", "ells/elles/vostès":"anirien"},
      imper: {tu:"vés", "vostè":"vagi", vosaltres:"aneu", "vostès":"vagin"}
    },
    french: {
      pres: {je:"vais", tu:"vas", "il/elle/vous":"va", nous:"allons", vous:"allez", "ils/elles":"vont"},
      perf: {je:"suis allé(e)", tu:"es allé(e)", "il/elle/vous":"est allé(e)", nous:"sommes allé(e)s", vous:"êtes allé(e)(s)", "ils/elles":"sont allé(e)s"},
      imp: {je:"allais", tu:"allais", "il/elle/vous":"allait", nous:"allions", vous:"alliez", "ils/elles":"allaient"},
      fut: {je:"irai", tu:"iras", "il/elle/vous":"ira", nous:"irons", vous:"irez", "ils/elles":"iront"},
      cond: {je:"irais", tu:"irais", "il/elle/vous":"irait", nous:"irions", vous:"iriez", "ils/elles":"iraient"},
      imper: {tu:"va", "vous":"allez", nous:"allons"}
    }
  },
  {
    ca: "dir",
    en: "to say/tell",
    fr: "dire",
    type: "irregular",
    catalan: {
      pres: {jo:"dic", tu:"dius", "ell/ella/vostè":"diu", nosaltres:"diem", vosaltres:"dieu", "ells/elles/vostès":"diuen"},
      perf: {jo:"vaig dir", tu:"vas dir", "ell/ella/vostè":"va dir", nosaltres:"vam dir", vosaltres:"vau dir", "ells/elles/vostès":"van dir"},
      imp: {jo:"deia", tu:"deies", "ell/ella/vostè":"deia", nosaltres:"dèiem", vosaltres:"dèieu", "ells/elles/vostès":"deien"},
      fut: {jo:"diré", tu:"diràs", "ell/ella/vostè":"dirà", nosaltres:"direm", vosaltres:"direu", "ells/elles/vostès":"diran"},
      cond: {jo:"diria", tu:"diries", "ell/ella/vostè":"diria", nosaltres:"diríem", vosaltres:"diríeu", "ells/elles/vostès":"dirien"},
      imper: {tu:"digues", "vostè":"digui", vosaltres:"digueu", "vostès":"diguin"}
    },
    french: {
      pres: {je:"dis", tu:"dis", "il/elle/vous":"dit", nous:"disons", vous:"dites", "ils/elles":"disent"},
      perf: {je:"ai dit", tu:"as dit", "il/elle/vous":"a dit", nous:"avons dit", vous:"avez dit", "ils/elles":"ont dit"},
      imp: {je:"disais", tu:"disais", "il/elle/vous":"disait", nous:"disions", vous:"disiez", "ils/elles":"disaient"},
      fut: {je:"dirai", tu:"diras", "il/elle/vous":"dira", nous:"dirons", vous:"direz", "ils/elles":"diront"},
      cond: {je:"dirais", tu:"dirais", "il/elle/vous":"dirait", nous:"dirions", vous:"diriez", "ils/elles":"diraient"},
      imper: {tu:"dis", "vous":"dites", nous:"disons"}
    }
  },
  {
    ca: "venir",
    en: "to come",
    fr: "venir",
    type: "irregular",
    catalan: {
      pres: {jo:"vinc", tu:"véns", "ell/ella/vostè":"ve", nosaltres:"venim", vosaltres:"veniu", "ells/elles/vostès":"venen"},
      perf: {jo:"vaig venir", tu:"vas venir", "ell/ella/vostè":"va venir", nosaltres:"vam venir", vosaltres:"vau venir", "ells/elles/vostès":"van venir"},
      imp: {jo:"venia", tu:"venies", "ell/ella/vostè":"venia", nosaltres:"veníem", vosaltres:"veníeu", "ells/elles/vostès":"venien"},
      fut: {jo:"vindré", tu:"vindràs", "ell/ella/vostè":"vindrà", nosaltres:"vindrem", vosaltres:"vindreu", "ells/elles/vostès":"vindran"},
      cond: {jo:"vindria", tu:"vindries", "ell/ella/vostè":"vindria", nosaltres:"vindríem", vosaltres:"vindríeu", "ells/elles/vostès":"vindrien"},
      imper: {tu:"vine", "vostè":"vingui", vosaltres:"veniu", "vostès":"vinguin"}
    },
    french: {
      pres: {je:"viens", tu:"viens", "il/elle/vous":"vient", nous:"venons", vous:"venez", "ils/elles":"viennent"},
      perf: {je:"suis venu(e)", tu:"es venu(e)", "il/elle/vous":"est venu(e)", nous:"sommes venu(e)s", vous:"êtes venu(e)(s)", "ils/elles":"sont venu(e)s"},
      imp: {je:"venais", tu:"venais", "il/elle/vous":"venait", nous:"venions", vous:"veniez", "ils/elles":"venaient"},
      fut: {je:"viendrai", tu:"viendras", "il/elle/vous":"viendra", nous:"viendrons", vous:"viendrez", "ils/elles":"viendront"},
      cond: {je:"viendrais", tu:"viendrais", "il/elle/vous":"viendrait", nous:"viendrions", vous:"viendriez", "ils/elles":"viendraient"},
      imper: {tu:"viens", "vous":"venez", nous:"venons"}
    }
  },
  {
    ca: "voler",
    en: "to want",
    fr: "vouloir",
    type: "irregular",
    catalan: {
      pres: {jo:"vull", tu:"vols", "ell/ella/vostè":"vol", nosaltres:"volem", vosaltres:"voleu", "ells/elles/vostès":"volen"},
      perf: {jo:"vaig voler", tu:"vas voler", "ell/ella/vostè":"va voler", nosaltres:"vam voler", vosaltres:"vau voler", "ells/elles/vostès":"van voler"},
      imp: {jo:"volia", tu:"volies", "ell/ella/vostè":"volia", nosaltres:"volíem", vosaltres:"volíeu", "ells/elles/vostès":"volien"},
      fut: {jo:"voldré", tu:"voldràs", "ell/ella/vostè":"voldrà", nosaltres:"voldrem", vosaltres:"voldreu", "ells/elles/vostès":"voldran"},
      cond: {jo:"voldria", tu:"voldries", "ell/ella/vostè":"voldria", nosaltres:"voldríem", vosaltres:"voldríeu", "ells/elles/vostès":"voldrien"},
      imper: {tu:"vulgues", "vostè":"vulgui", vosaltres:"vulgueu", "vostès":"vulguin"}
    },
    french: {
      pres: {je:"veux", tu:"veux", "il/elle/vous":"veut", nous:"voulons", vous:"voulez", "ils/elles":"veulent"},
      perf: {je:"ai voulu", tu:"as voulu", "il/elle/vous":"a voulu", nous:"avons voulu", vous:"avez voulu", "ils/elles":"ont voulu"},
      imp: {je:"voulais", tu:"voulais", "il/elle/vous":"voulait", nous:"voulions", vous:"vouliez", "ils/elles":"voulaient"},
      fut: {je:"voudrai", tu:"voudras", "il/elle/vous":"voudra", nous:"voudrons", vous:"voudrez", "ils/elles":"voudront"},
      cond: {je:"voudrais", tu:"voudrais", "il/elle/vous":"voudrait", nous:"voudrions", vous:"voudriez", "ils/elles":"voudraient"},
      imper: {tu:"veuille", "vous":"veuillez", nous:"veuillons"}
    }
  },
  {
    ca: "poder",
    en: "can/to be able",
    fr: "pouvoir",
    type: "irregular",
    catalan: {
      pres: {jo:"puc", tu:"pots", "ell/ella/vostè":"pot", nosaltres:"podem", vosaltres:"podeu", "ells/elles/vostès":"poden"},
      perf: {jo:"vaig poder", tu:"vas poder", "ell/ella/vostè":"va poder", nosaltres:"vam poder", vosaltres:"vau poder", "ells/elles/vostès":"van poder"},
      imp: {jo:"podia", tu:"podies", "ell/ella/vostè":"podia", nosaltres:"podíem", vosaltres:"podíeu", "ells/elles/vostès":"podien"},
      fut: {jo:"podré", tu:"podràs", "ell/ella/vostè":"podrà", nosaltres:"podrem", vosaltres:"podreu", "ells/elles/vostès":"podran"},
      cond: {jo:"podria", tu:"podries", "ell/ella/vostè":"podria", nosaltres:"podríem", vosaltres:"podríeu", "ells/elles/vostès":"podrien"}
    },
    french: {
      pres: {je:"peux", tu:"peux", "il/elle/vous":"peut", nous:"pouvons", vous:"pouvez", "ils/elles":"peuvent"},
      perf: {je:"ai pu", tu:"as pu", "il/elle/vous":"a pu", nous:"avons pu", vous:"avez pu", "ils/elles":"ont pu"},
      imp: {je:"pouvais", tu:"pouvais", "il/elle/vous":"pouvait", nous:"pouvions", vous:"pouviez", "ils/elles":"pouvaient"},
      fut: {je:"pourrai", tu:"pourras", "il/elle/vous":"pourra", nous:"pourrons", vous:"pourrez", "ils/elles":"pourront"},
      cond: {je:"pourrais", tu:"pourrais", "il/elle/vous":"pourrait", nous:"pourrions", vous:"pourriez", "ils/elles":"pourraient"}
    }
  },
  {
    ca: "saber",
    en: "to know",
    fr: "savoir",
    type: "irregular",
    catalan: {
      pres: {jo:"sé", tu:"saps", "ell/ella/vostè":"sap", nosaltres:"sabem", vosaltres:"sabeu", "ells/elles/vostès":"saben"},
      perf: {jo:"vaig saber", tu:"vas saber", "ell/ella/vostè":"va saber", nosaltres:"vam saber", vosaltres:"vau saber", "ells/elles/vostès":"van saber"},
      imp: {jo:"sabia", tu:"sabies", "ell/ella/vostè":"sabia", nosaltres:"sabíem", vosaltres:"sabíeu", "ells/elles/vostès":"sabien"},
      fut: {jo:"sabré", tu:"sabràs", "ell/ella/vostè":"sabrà", nosaltres:"sabrem", vosaltres:"sabreu", "ells/elles/vostès":"sabran"},
      cond: {jo:"sabria", tu:"sabries", "ell/ella/vostè":"sabria", nosaltres:"sabríem", vosaltres:"sabríeu", "ells/elles/vostès":"sabrien"},
      imper: {tu:"sàpigues", "vostè":"sàpiga", vosaltres:"sapigueu", "vostès":"sàpiguen"}
    },
    french: {
      pres: {je:"sais", tu:"sais", "il/elle/vous":"sait", nous:"savons", vous:"savez", "ils/elles":"savent"},
      perf: {je:"ai su", tu:"as su", "il/elle/vous":"a su", nous:"avons su", vous:"avez su", "ils/elles":"ont su"},
      imp: {je:"savais", tu:"savais", "il/elle/vous":"savait", nous:"savions", vous:"saviez", "ils/elles":"savaient"},
      fut: {je:"saurai", tu:"sauras", "il/elle/vous":"saura", nous:"saurons", vous:"saurez", "ils/elles":"sauront"},
      cond: {je:"saurais", tu:"saurais", "il/elle/vous":"saurait", nous:"saurions", vous:"sauriez", "ils/elles":"sauraient"},
      imper: {tu:"sache", "vous":"sachez", nous:"sachons"}
    }
  },
  {
    ca: "parlar",
    en: "to speak",
    fr: "parler",
    type: "regular -ar",
    catalan: {
      pres: {jo:"parlo", tu:"parles", "ell/ella/vostè":"parla", nosaltres:"parlem", vosaltres:"parleu", "ells/elles/vostès":"parlen"},
      perf: {jo:"vaig parlar", tu:"vas parlar", "ell/ella/vostè":"va parlar", nosaltres:"vam parlar", vosaltres:"vau parlar", "ells/elles/vostès":"van parlar"},
      imp: {jo:"parlava", tu:"parlaves", "ell/ella/vostè":"parlava", nosaltres:"parlàvem", vosaltres:"parlàveu", "ells/elles/vostès":"parlaven"},
      fut: {jo:"parlaré", tu:"parlaràs", "ell/ella/vostè":"parlarà", nosaltres:"parlarem", vosaltres:"parlareu", "ells/elles/vostès":"parlaran"},
      cond: {jo:"parlaria", tu:"parlaries", "ell/ella/vostè":"parlaria", nosaltres:"parlaríem", vosaltres:"parlaríeu", "ells/elles/vostès":"parlarien"},
      imper: {tu:"parla", "vostè":"parli", vosaltres:"parleu", "vostès":"parlin"}
    },
    french: {
      pres: {je:"parle", tu:"parles", "il/elle/vous":"parle", nous:"parlons", vous:"parlez", "ils/elles":"parlent"},
      perf: {je:"ai parlé", tu:"as parlé", "il/elle/vous":"a parlé", nous:"avons parlé", vous:"avez parlé", "ils/elles":"ont parlé"},
      imp: {je:"parlais", tu:"parlais", "il/elle/vous":"parlait", nous:"parlions", vous:"parliez", "ils/elles":"parlaient"},
      fut: {je:"parlerai", tu:"parleras", "il/elle/vous":"parlera", nous:"parlerons", vous:"parlerez", "ils/elles":"parleront"},
      cond: {je:"parlerais", tu:"parlerais", "il/elle/vous":"parlerait", nous:"parlerions", vous:"parleriez", "ils/elles":"parleraient"},
      imper: {tu:"parle", "vous":"parlez", nous:"parlons"}
    }
  },
  {
    ca: "menjar",
    en: "to eat",
    fr: "manger",
    type: "regular -ar",
    catalan: {
      pres: {jo:"menjo", tu:"menges", "ell/ella/vostè":"menja", nosaltres:"mengem", vosaltres:"mengeu", "ells/elles/vostès":"mengen"},
      perf: {jo:"vaig menjar", tu:"vas menjar", "ell/ella/vostè":"va menjar", nosaltres:"vam menjar", vosaltres:"vau menjar", "ells/elles/vostès":"van menjar"},
      imp: {jo:"menjava", tu:"menjaves", "ell/ella/vostè":"menjava", nosaltres:"menjàvem", vosaltres:"menjàveu", "ells/elles/vostès":"menjaven"},
      fut: {jo:"menjaré", tu:"menjaràs", "ell/ella/vostè":"menjarà", nosaltres:"menjarem", vosaltres:"menjareu", "ells/elles/vostès":"menjaran"},
      cond: {jo:"menjaria", tu:"menjaries", "ell/ella/vostè":"menjaria", nosaltres:"menjaríem", vosaltres:"menjaríeu", "ells/elles/vostès":"menjarien"},
      imper: {tu:"menja", "vostè":"mengi", vosaltres:"mengeu", "vostès":"mengin"}
    },
    french: {
      pres: {je:"mange", tu:"manges", "il/elle/vous":"mange", nous:"mangeons", vous:"mangez", "ils/elles":"mangent"},
      perf: {je:"ai mangé", tu:"as mangé", "il/elle/vous":"a mangé", nous:"avons mangé", vous:"avez mangé", "ils/elles":"ont mangé"},
      imp: {je:"mangeais", tu:"mangeais", "il/elle/vous":"mangeait", nous:"mangions", vous:"mangiez", "ils/elles":"mangeaient"},
      fut: {je:"mangerai", tu:"mangeras", "il/elle/vous":"mangera", nous:"mangerons", vous:"mangerez", "ils/elles":"mangeront"},
      cond: {je:"mangerais", tu:"mangerais", "il/elle/vous":"mangerait", nous:"mangerions", vous:"mangeriez", "ils/elles":"mangeraient"},
      imper: {tu:"mange", "vous":"mangez", nous:"mangeons"}
    }
  },
  {
    ca: "viure",
    en: "to live",
    fr: "vivre",
    type: "regular -re",
    catalan: {
      pres: {jo:"visc", tu:"vius", "ell/ella/vostè":"viu", nosaltres:"vivim", vosaltres:"viviu", "ells/elles/vostès":"viuen"},
      perf: {jo:"vaig viure", tu:"vas viure", "ell/ella/vostè":"va viure", nosaltres:"vam viure", vosaltres:"vau viure", "ells/elles/vostès":"van viure"},
      imp: {jo:"vivia", tu:"vivies", "ell/ella/vostè":"vivia", nosaltres:"vivíem", vosaltres:"vivíeu", "ells/elles/vostès":"vivien"},
      fut: {jo:"viuré", tu:"viuràs", "ell/ella/vostè":"viurà", nosaltres:"viurem", vosaltres:"viureu", "ells/elles/vostès":"viuran"},
      cond: {jo:"viuria", tu:"viuries", "ell/ella/vostè":"viuria", nosaltres:"viuríem", vosaltres:"viuríeu", "ells/elles/vostès":"viurien"},
      imper: {tu:"viu", "vostè":"visqui", vosaltres:"viviu", "vostès":"visquin"}
    },
    french: {
      pres: {je:"vis", tu:"vis", "il/elle/vous":"vit", nous:"vivons", vous:"vivez", "ils/elles":"vivent"},
      perf: {je:"ai vécu", tu:"as vécu", "il/elle/vous":"a vécu", nous:"avons vécu", vous:"avez vécu", "ils/elles":"ont vécu"},
      imp: {je:"vivais", tu:"vivais", "il/elle/vous":"vivait", nous:"vivions", vous:"viviez", "ils/elles":"vivaient"},
      fut: {je:"vivrai", tu:"vivras", "il/elle/vous":"vivra", nous:"vivrons", vous:"vivrez", "ils/elles":"vivront"},
      cond: {je:"vivrais", tu:"vivrais", "il/elle/vous":"vivrait", nous:"vivrions", vous:"vivriez", "ils/elles":"vivraient"},
      imper: {tu:"vis", "vous":"vivez", nous:"vivons"}
    }
  },
  {
    ca: "aprendre",
    en: "to learn",
    fr: "apprendre",
    type: "regular -re",
    catalan: {
      pres: {jo:"aprenc", tu:"aprens", "ell/ella/vostè":"aprèn", nosaltres:"aprenem", vosaltres:"apreneu", "ells/elles/vostès":"aprenen"},
      perf: {jo:"vaig aprendre", tu:"vas aprendre", "ell/ella/vostè":"va aprendre", nosaltres:"vam aprendre", vosaltres:"vau aprendre", "ells/elles/vostès":"van aprendre"},
      imp: {jo:"aprenia", tu:"aprenies", "ell/ella/vostè":"aprenia", nosaltres:"apreníem", vosaltres:"apreníeu", "ells/elles/vostès":"aprenien"},
      fut: {jo:"aprendré", tu:"aprendràs", "ell/ella/vostè":"aprendrà", nosaltres:"aprendrem", vosaltres:"aprendreu", "ells/elles/vostès":"aprendran"},
      cond: {jo:"aprendria", tu:"aprendries", "ell/ella/vostè":"aprendria", nosaltres:"aprendríem", vosaltres:"aprendríeu", "ells/elles/vostès":"aprendrien"},
      imper: {tu:"aprèn", "vostè":"aprengui", vosaltres:"apreneu", "vostès":"aprenguin"}
    },
    french: {
      pres: {je:"apprends", tu:"apprends", "il/elle/vous":"apprend", nous:"apprenons", vous:"apprenez", "ils/elles":"apprennent"},
      perf: {je:"ai appris", tu:"as appris", "il/elle/vous":"a appris", nous:"avons appris", vous:"avez appris", "ils/elles":"ont appris"},
      imp: {je:"apprenais", tu:"apprenais", "il/elle/vous":"apprenait", nous:"apprenions", vous:"appreniez", "ils/elles":"apprenaient"},
      fut: {je:"apprendrai", tu:"apprendras", "il/elle/vous":"apprendra", nous:"apprendrons", vous:"apprendrez", "ils/elles":"apprendront"},
      cond: {je:"apprendrais", tu:"apprendrais", "il/elle/vous":"apprendrait", nous:"apprendrions", vous:"apprendriez", "ils/elles":"apprendraient"},
      imper: {tu:"apprends", "vous":"apprenez", nous:"apprenons"}
    }
  },
  {
    ca: "córrer",
    en: "to run",
    fr: "courir",
    type: "regular -re",
    catalan: {
      pres: {jo:"corro", tu:"corres", "ell/ella/vostè":"corre", nosaltres:"correm", vosaltres:"correu", "ells/elles/vostès":"corren"},
      perf: {jo:"vaig córrer", tu:"vas córrer", "ell/ella/vostè":"va córrer", nosaltres:"vam córrer", vosaltres:"vau córrer", "ells/elles/vostès":"van córrer"},
      imp: {jo:"corria", tu:"corries", "ell/ella/vostè":"corria", nosaltres:"corríem", vosaltres:"corríeu", "ells/elles/vostès":"corrien"},
      fut: {jo:"correré", tu:"correràs", "ell/ella/vostè":"correrà", nosaltres:"correrem", vosaltres:"correreu", "ells/elles/vostès":"correran"},
      cond: {jo:"correria", tu:"correries", "ell/ella/vostè":"correria", nosaltres:"correríem", vosaltres:"correríeu", "ells/elles/vostès":"correrien"},
      imper: {tu:"corre", "vostè":"corri", vosaltres:"correu", "vostès":"corrin"}
    },
    french: {
      pres: {je:"cours", tu:"cours", "il/elle/vous":"court", nous:"courons", vous:"courez", "ils/elles":"courent"},
      perf: {je:"ai couru", tu:"as couru", "il/elle/vous":"a couru", nous:"avons couru", vous:"avez couru", "ils/elles":"ont couru"},
      imp: {je:"courais", tu:"courais", "il/elle/vous":"courait", nous:"courions", vous:"couriez", "ils/elles":"couraient"},
      fut: {je:"courrai", tu:"courras", "il/elle/vous":"courra", nous:"courrons", vous:"courrez", "ils/elles":"courront"},
      cond: {je:"courrais", tu:"courrais", "il/elle/vous":"courrait", nous:"courrions", vous:"courriez", "ils/elles":"courraient"},
      imper: {tu:"cours", "vous":"courez", nous:"courons"}
    }
  },
  {
    ca: "passar",
    en: "to pass/happen",
    fr: "passer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"passo", tu:"passes", "ell/ella/vostè":"passa", nosaltres:"passem", vosaltres:"passeu", "ells/elles/vostès":"passen"},
      perf: {jo:"vaig passar", tu:"vas passar", "ell/ella/vostè":"va passar", nosaltres:"vam passar", vosaltres:"vau passar", "ells/elles/vostès":"van passar"},
      imp: {jo:"passava", tu:"passaves", "ell/ella/vostè":"passava", nosaltres:"passàvem", vosaltres:"passàveu", "ells/elles/vostès":"passaven"},
      fut: {jo:"passaré", tu:"passaràs", "ell/ella/vostè":"passarà", nosaltres:"passarem", vosaltres:"passareu", "ells/elles/vostès":"passaran"},
      cond: {jo:"passaria", tu:"passaries", "ell/ella/vostè":"passaria", nosaltres:"passaríem", vosaltres:"passaríeu", "ells/elles/vostès":"passarien"},
      imper: {tu:"passa", "vostè":"passi", vosaltres:"passeu", "vostès":"passin"}
    },
    french: {
      pres: {je:"passe", tu:"passes", "il/elle/vous":"passe", nous:"passons", vous:"passez", "ils/elles":"passent"},
      perf: {je:"ai passé", tu:"as passé", "il/elle/vous":"a passé", nous:"avons passé", vous:"avez passé", "ils/elles":"ont passé"},
      imp: {je:"passais", tu:"passais", "il/elle/vous":"passait", nous:"passions", vous:"passiez", "ils/elles":"passaient"},
      fut: {je:"passerai", tu:"passeras", "il/elle/vous":"passera", nous:"passerons", vous:"passerez", "ils/elles":"passeront"},
      cond: {je:"passerais", tu:"passerais", "il/elle/vous":"passerait", nous:"passerions", vous:"passeriez", "ils/elles":"passeraient"},
      imper: {tu:"passe", "vous":"passez", nous:"passons"}
    }
  },
  {
    ca: "veure",
    en: "to see",
    fr: "voir",
    type: "irregular",
    catalan: {
      pres: {jo:"veig", tu:"veus", "ell/ella/vostè":"veu", nosaltres:"veiem", vosaltres:"veieu", "ells/elles/vostès":"veuen"},
      perf: {jo:"vaig veure", tu:"vas veure", "ell/ella/vostè":"va veure", nosaltres:"vam veure", vosaltres:"vau veure", "ells/elles/vostès":"van veure"},
      imp: {jo:"veia", tu:"veies", "ell/ella/vostè":"veia", nosaltres:"vèiem", vosaltres:"vèieu", "ells/elles/vostès":"veien"},
      fut: {jo:"veuré", tu:"veuràs", "ell/ella/vostè":"veurà", nosaltres:"veurem", vosaltres:"veureu", "ells/elles/vostès":"veuran"},
      cond: {jo:"veuria", tu:"veuries", "ell/ella/vostè":"veuria", nosaltres:"veuríem", vosaltres:"veuríeu", "ells/elles/vostès":"veurien"},
      imper: {tu:"veu", "vostè":"vegi", vosaltres:"veieu", "vostès":"vegin"}
    },
    french: {
      pres: {je:"vois", tu:"vois", "il/elle/vous":"voit", nous:"voyons", vous:"voyez", "ils/elles":"voient"},
      perf: {je:"ai vu", tu:"as vu", "il/elle/vous":"a vu", nous:"avons vu", vous:"avez vu", "ils/elles":"ont vu"},
      imp: {je:"voyais", tu:"voyais", "il/elle/vous":"voyait", nous:"voyions", vous:"voyiez", "ils/elles":"voyaient"},
      fut: {je:"verrai", tu:"verras", "il/elle/vous":"verra", nous:"verrons", vous:"verrez", "ils/elles":"verront"},
      cond: {je:"verrais", tu:"verrais", "il/elle/vous":"verrait", nous:"verrions", vous:"verriez", "ils/elles":"verraient"},
      imper: {tu:"vois", "vous":"voyez", nous:"voyons"}
    }
  },
  {
    ca: "dur",
    en: "to bring/carry",
    fr: "porter",
    type: "irregular",
    catalan: {
      pres: {jo:"duc", tu:"duus", "ell/ella/vostè":"duu", nosaltres:"duem", vosaltres:"dueu", "ells/elles/vostès":"duen"},
      perf: {jo:"vaig dur", tu:"vas dur", "ell/ella/vostè":"va dur", nosaltres:"vam dur", vosaltres:"vau dur", "ells/elles/vostès":"van dur"},
      imp: {jo:"duia", tu:"duies", "ell/ella/vostè":"duia", nosaltres:"dúiem", vosaltres:"dúieu", "ells/elles/vostès":"duien"},
      fut: {jo:"duré", tu:"duràs", "ell/ella/vostè":"durà", nosaltres:"durem", vosaltres:"dureu", "ells/elles/vostès":"duran"},
      cond: {jo:"duria", tu:"duries", "ell/ella/vostè":"duria", nosaltres:"duríem", vosaltres:"duríeu", "ells/elles/vostès":"durien"},
      imper: {tu:"duu", "vostè":"dugui", vosaltres:"dueu", "vostès":"duguin"}
    },
    french: {
      pres: {je:"porte", tu:"portes", "il/elle/vous":"porte", nous:"portons", vous:"portez", "ils/elles":"portent"},
      perf: {je:"ai porté", tu:"as porté", "il/elle/vous":"a porté", nous:"avons porté", vous:"avez porté", "ils/elles":"ont porté"},
      imp: {je:"portais", tu:"portais", "il/elle/vous":"portait", nous:"portions", vous:"portiez", "ils/elles":"portaient"},
      fut: {je:"porterai", tu:"porteras", "il/elle/vous":"portera", nous:"porterons", vous:"porterez", "ils/elles":"porteront"},
      cond: {je:"porterais", tu:"porterais", "il/elle/vous":"porterait", nous:"porterions", vous:"porteriez", "ils/elles":"porteraient"},
      imper: {tu:"porte", "vous":"portez", nous:"portons"}
    }
  },
  {
    ca: "agrair",
    en: "to thank",
    fr: "remercier",
    type: "regular -ir",
    catalan: {
      pres: {jo:"agraeixo", tu:"agraeixes", "ell/ella/vostè":"agraeix", nosaltres:"agraïm", vosaltres:"agraïu", "ells/elles/vostès":"agraeixen"},
      perf: {jo:"vaig agrair", tu:"vas agrair", "ell/ella/vostè":"va agrair", nosaltres:"vam agrair", vosaltres:"vau agrair", "ells/elles/vostès":"van agrair"},
      imp: {jo:"agraïa", tu:"agraïes", "ell/ella/vostè":"agraïa", nosaltres:"agraíem", vosaltres:"agraíeu", "ells/elles/vostès":"agraïen"},
      fut: {jo:"agrairé", tu:"agrairàs", "ell/ella/vostè":"agrairà", nosaltres:"agrairem", vosaltres:"agraireu", "ells/elles/vostès":"agrairan"},
      cond: {jo:"agrairia", tu:"agrairies", "ell/ella/vostè":"agrairia", nosaltres:"agrairíem", vosaltres:"agrairíeu", "ells/elles/vostès":"agrairien"},
      imper: {tu:"agraeix", "vostè":"agraeixi", vosaltres:"agraïu", "vostès":"agraeixin"}
    },
    french: {
      pres: {je:"remercie", tu:"remercies", "il/elle/vous":"remercie", nous:"remercions", vous:"remerciez", "ils/elles":"remercient"},
      perf: {je:"ai remercié", tu:"as remercié", "il/elle/vous":"a remercié", nous:"avons remercié", vous:"avez remercié", "ils/elles":"ont remercié"},
      imp: {je:"remerciais", tu:"remerciais", "il/elle/vous":"remerciait", nous:"remerciions", vous:"remerciiez", "ils/elles":"remerciaient"},
      fut: {je:"remercierai", tu:"remercieras", "il/elle/vous":"remerciera", nous:"remercierons", vous:"remercierez", "ils/elles":"remercieront"},
      cond: {je:"remercierais", tu:"remercierais", "il/elle/vous":"remercierait", nous:"remercierions", vous:"remercieriez", "ils/elles":"remercieraient"},
      imper: {tu:"remercie", "vous":"remerciez", nous:"remercions"}
    }
  },
  {
    ca: "deure",
    en: "to owe/must",
    fr: "devoir",
    type: "modal",
    catalan: {
      pres: {jo:"dec", tu:"deus", "ell/ella/vostè":"deu", nosaltres:"devem", vosaltres:"deveu", "ells/elles/vostès":"deuen"},
      perf: {jo:"vaig deure", tu:"vas deure", "ell/ella/vostè":"va deure", nosaltres:"vam deure", vosaltres:"vau deure", "ells/elles/vostès":"van deure"},
      imp: {jo:"devia", tu:"devies", "ell/ella/vostè":"devia", nosaltres:"devíem", vosaltres:"devíeu", "ells/elles/vostès":"devien"},
      fut: {jo:"deuré", tu:"deuràs", "ell/ella/vostè":"deurà", nosaltres:"deurem", vosaltres:"deureu", "ells/elles/vostès":"deuran"},
      cond: {jo:"deuria", tu:"deuries", "ell/ella/vostè":"deuria", nosaltres:"deuríem", vosaltres:"deuríeu", "ells/elles/vostès":"deurien"},
      imper: {tu:"deu", "vostè":"degui", vosaltres:"deveu", "vostès":"deguin"}
    },
    french: {
      pres: {je:"dois", tu:"dois", "il/elle/vous":"doit", nous:"devons", vous:"devez", "ils/elles":"doivent"},
      perf: {je:"ai dû", tu:"as dû", "il/elle/vous":"a dû", nous:"avons dû", vous:"avez dû", "ils/elles":"ont dû"},
      imp: {je:"devais", tu:"devais", "il/elle/vous":"devait", nous:"devions", vous:"deviez", "ils/elles":"devaient"},
      fut: {je:"devrai", tu:"devras", "il/elle/vous":"devra", nous:"devrons", vous:"devrez", "ils/elles":"devront"},
      cond: {je:"devrais", tu:"devrais", "il/elle/vous":"devrait", nous:"devrions", vous:"devriez", "ils/elles":"devraient"},
      imper: {tu:"dois", "vous":"devez", nous:"devons"}
    }
  },
  {
    ca: "conèixer",
    en: "to know/meet",
    fr: "connaître",
    type: "regular -er",
    catalan: {
      pres: {jo:"conec", tu:"coneixes", "ell/ella/vostè":"coneix", nosaltres:"coneixem", vosaltres:"coneixeu", "ells/elles/vostès":"coneixen"},
      perf: {jo:"vaig conèixer", tu:"vas conèixer", "ell/ella/vostè":"va conèixer", nosaltres:"vam conèixer", vosaltres:"vau conèixer", "ells/elles/vostès":"van conèixer"},
      imp: {jo:"coneixia", tu:"coneixies", "ell/ella/vostè":"coneixia", nosaltres:"coneixíem", vosaltres:"coneixíeu", "ells/elles/vostès":"coneixien"},
      fut: {jo:"coneixeré", tu:"coneixeràs", "ell/ella/vostè":"coneixerà", nosaltres:"coneixerem", vosaltres:"coneixereu", "ells/elles/vostès":"coneixeran"},
      cond: {jo:"coneixeria", tu:"coneixeries", "ell/ella/vostè":"coneixeria", nosaltres:"coneixeríem", vosaltres:"coneixeríeu", "ells/elles/vostès":"coneixerien"},
      imper: {tu:"coneix", "vostè":"conegui", vosaltres:"coneixeu", "vostès":"coneguin"}
    },
    french: {
      pres: {je:"connais", tu:"connais", "il/elle/vous":"connaît", nous:"connaissons", vous:"connaissez", "ils/elles":"connaissent"},
      perf: {je:"ai connu", tu:"as connu", "il/elle/vous":"a connu", nous:"avons connu", vous:"avez connu", "ils/elles":"ont connu"},
      imp: {je:"connaissais", tu:"connaissais", "il/elle/vous":"connaissait", nous:"connaissions", vous:"connaissiez", "ils/elles":"connaissaient"},
      fut: {je:"connaîtrai", tu:"connaîtras", "il/elle/vous":"connaîtra", nous:"connaîtrons", vous:"connaîtrez", "ils/elles":"connaîtront"},
      cond: {je:"connaîtrais", tu:"connaîtrais", "il/elle/vous":"connaîtrait", nous:"connaîtrions", vous:"connaîtriez", "ils/elles":"connaîtraient"},
      imper: {tu:"connais", "vous":"connaissez", nous:"connaissons"}
    }
  },
  {
    ca: "cabre",
    en: "to fit",
    fr: "tenir (dans)",
    type: "irregular",
    catalan: {
      pres: {jo:"cabo", tu:"caps", "ell/ella/vostè":"cap", nosaltres:"cabem", vosaltres:"cabeu", "ells/elles/vostès":"caben"},
      perf: {jo:"vaig cabre", tu:"vas cabre", "ell/ella/vostè":"va cabre", nosaltres:"vam cabre", vosaltres:"vau cabre", "ells/elles/vostès":"van cabre"},
      imp: {jo:"cabia", tu:"cabies", "ell/ella/vostè":"cabia", nosaltres:"cabíem", vosaltres:"cabíeu", "ells/elles/vostès":"cabien"},
      fut: {jo:"cabré", tu:"cabràs", "ell/ella/vostè":"cabrà", nosaltres:"cabrem", vosaltres:"cabreu", "ells/elles/vostès":"cabran"},
      cond: {jo:"cabria", tu:"cabries", "ell/ella/vostè":"cabria", nosaltres:"cabríem", vosaltres:"cabríeu", "ells/elles/vostès":"cabrien"},
      imper: {tu:"cap", "vostè":"càpiga", vosaltres:"cabeu", "vostès":"càpiguen"}
    },
    french: {
      pres: {je:"tiens", tu:"tiens", "il/elle/vous":"tient", nous:"tenons", vous:"tenez", "ils/elles":"tiennent"},
      perf: {je:"ai tenu", tu:"as tenu", "il/elle/vous":"a tenu", nous:"avons tenu", vous:"avez tenu", "ils/elles":"ont tenu"},
      imp: {je:"tenais", tu:"tenais", "il/elle/vous":"tenait", nous:"tenions", vous:"teniez", "ils/elles":"tenaient"},
      fut: {je:"tiendrai", tu:"tiendras", "il/elle/vous":"tiendra", nous:"tiendrons", vous:"tiendrez", "ils/elles":"tiendront"},
      cond: {je:"tiendrais", tu:"tiendrais", "il/elle/vous":"tiendrait", nous:"tiendrions", vous:"tiendriez", "ils/elles":"tiendraient"},
      imper: {tu:"tiens", "vous":"tenez", nous:"tenons"}
    }
  },
  {
    ca: "dormir",
    en: "to sleep",
    fr: "dormir",
    type: "regular -ir",
    catalan: {
      pres: {jo:"dormo", tu:"dorms", "ell/ella/vostè":"dorm", nosaltres:"dormim", vosaltres:"dormiu", "ells/elles/vostès":"dormen"},
      perf: {jo:"vaig dormir", tu:"vas dormir", "ell/ella/vostè":"va dormir", nosaltres:"vam dormir", vosaltres:"vau dormir", "ells/elles/vostès":"van dormir"},
      imp: {jo:"dormia", tu:"dormies", "ell/ella/vostè":"dormia", nosaltres:"dormíem", vosaltres:"dormíeu", "ells/elles/vostès":"dormien"},
      fut: {jo:"dormiré", tu:"dormiràs", "ell/ella/vostè":"dormirà", nosaltres:"dormirem", vosaltres:"dormireu", "ells/elles/vostès":"dormiran"},
      cond: {jo:"dormiria", tu:"dormiries", "ell/ella/vostè":"dormiria", nosaltres:"dormiríem", vosaltres:"dormiríeu", "ells/elles/vostès":"dormirien"},
      imper: {tu:"dorm", "vostè":"dormi", vosaltres:"dormiu", "vostès":"dormin"}
    },
    french: {
      pres: {je:"dors", tu:"dors", "il/elle/vous":"dort", nous:"dormons", vous:"dormez", "ils/elles":"dorment"},
      perf: {je:"ai dormi", tu:"as dormi", "il/elle/vous":"a dormi", nous:"avons dormi", vous:"avez dormi", "ils/elles":"ont dormi"},
      imp: {je:"dormais", tu:"dormais", "il/elle/vous":"dormait", nous:"dormions", vous:"dormiez", "ils/elles":"dormaient"},
      fut: {je:"dormirai", tu:"dormiras", "il/elle/vous":"dormira", nous:"dormirons", vous:"dormirez", "ils/elles":"dormiront"},
      cond: {je:"dormirais", tu:"dormirais", "il/elle/vous":"dormirait", nous:"dormirions", vous:"dormiriez", "ils/elles":"dormiraient"},
      imper: {tu:"dors", "vous":"dormez", nous:"dormons"}
    }
  },
  {
    ca: "néixer",
    en: "to be born",
    fr: "naître",
    type: "irregular",
    catalan: {
      pres: {jo:"neixo", tu:"neixes", "ell/ella/vostè":"neix", nosaltres:"naixem", vosaltres:"naixeu", "ells/elles/vostès":"neixen"},
      perf: {jo:"vaig néixer", tu:"vas néixer", "ell/ella/vostè":"va néixer", nosaltres:"vam néixer", vosaltres:"vau néixer", "ells/elles/vostès":"van néixer"},
      imp: {jo:"naixia", tu:"naixies", "ell/ella/vostè":"naixia", nosaltres:"naixíem", vosaltres:"naixíeu", "ells/elles/vostès":"naixien"},
      fut: {jo:"naixeré", tu:"naixeràs", "ell/ella/vostè":"naixerà", nosaltres:"naixerem", vosaltres:"naixereu", "ells/elles/vostès":"naixeran"},
      cond: {jo:"naixeria", tu:"naixeries", "ell/ella/vostè":"naixeria", nosaltres:"naixeríem", vosaltres:"naixeríeu", "ells/elles/vostès":"naixerien"},
      imper: {tu:"neix", "vostè":"neixi", vosaltres:"naixeu", "vostès":"neixin"}
    },
    french: {
      pres: {je:"nais", tu:"nais", "il/elle/vous":"naît", nous:"naissons", vous:"naissez", "ils/elles":"naissent"},
      perf: {je:"suis né(e)", tu:"es né(e)", "il/elle/vous":"est né(e)", nous:"sommes né(e)s", vous:"êtes né(e)s", "ils/elles":"sont né(e)s"},
      imp: {je:"naissais", tu:"naissais", "il/elle/vous":"naissait", nous:"naissions", vous:"naissiez", "ils/elles":"naissaient"},
      fut: {je:"naîtrai", tu:"naîtras", "il/elle/vous":"naîtra", nous:"naîtrons", vous:"naîtrez", "ils/elles":"naîtront"},
      cond: {je:"naîtrais", tu:"naîtrais", "il/elle/vous":"naîtrait", nous:"naîtrions", vous:"naîtriez", "ils/elles":"naîtraient"},
      imper: {tu:"nais", "vous":"naissez", nous:"naissons"}
    }
  },
  {
    ca: "arribar",
    en: "to arrive",
    fr: "arriver",
    type: "regular -ar",
    catalan: {
      pres: {jo:"arribo", tu:"arribes", "ell/ella/vostè":"arriba", nosaltres:"arribem", vosaltres:"arribeu", "ells/elles/vostès":"arriben"},
      perf: {jo:"vaig arribar", tu:"vas arribar", "ell/ella/vostè":"va arribar", nosaltres:"vam arribar", vosaltres:"vau arribar", "ells/elles/vostès":"van arribar"},
      imp: {jo:"arribava", tu:"arribaves", "ell/ella/vostè":"arribava", nosaltres:"arribàvem", vosaltres:"arribàveu", "ells/elles/vostès":"arribaven"},
      fut: {jo:"arribaré", tu:"arribaràs", "ell/ella/vostè":"arribarà", nosaltres:"arribarem", vosaltres:"arribareu", "ells/elles/vostès":"arribaran"},
      cond: {jo:"arribaria", tu:"arribaries", "ell/ella/vostè":"arribaria", nosaltres:"arribaríem", vosaltres:"arribaríeu", "ells/elles/vostès":"arribarien"},
      imper: {tu:"arriba", "vostè":"arribi", vosaltres:"arribeu", "vostès":"arribin"}
    },
    french: {
      pres: {je:"arrive", tu:"arrives", "il/elle/vous":"arrive", nous:"arrivons", vous:"arrivez", "ils/elles":"arrivent"},
      perf: {je:"suis arrivé(e)", tu:"es arrivé(e)", "il/elle/vous":"est arrivé(e)", nous:"sommes arrivé(e)s", vous:"êtes arrivé(e)s", "ils/elles":"sont arrivé(e)s"},
      imp: {je:"arrivais", tu:"arrivais", "il/elle/vous":"arrivait", nous:"arrivions", vous:"arriviez", "ils/elles":"arrivaient"},
      fut: {je:"arriverai", tu:"arriveras", "il/elle/vous":"arrivera", nous:"arriverons", vous:"arriverez", "ils/elles":"arriveront"},
      cond: {je:"arriverais", tu:"arriverais", "il/elle/vous":"arriverait", nous:"arriverions", vous:"arriveriez", "ils/elles":"arriveraient"},
      imper: {tu:"arrive", "vous":"arrivez", nous:"arrivons"}
    }
  },
  {
    ca: "treure",
    en: "to take out/remove",
    fr: "sortir/enlever",
    type: "irregular",
    catalan: {
      pres: {jo:"trec", tu:"treus", "ell/ella/vostè":"treu", nosaltres:"traiem", vosaltres:"traieu", "ells/elles/vostès":"treuen"},
      perf: {jo:"vaig treure", tu:"vas treure", "ell/ella/vostè":"va treure", nosaltres:"vam treure", vosaltres:"vau treure", "ells/elles/vostès":"van treure"},
      imp: {jo:"treia", tu:"treies", "ell/ella/vostè":"treia", nosaltres:"trèiem", vosaltres:"trèieu", "ells/elles/vostès":"treien"},
      fut: {jo:"treuré", tu:"treuràs", "ell/ella/vostè":"treurà", nosaltres:"treurem", vosaltres:"treureu", "ells/elles/vostès":"treuran"},
      cond: {jo:"treuria", tu:"treuries", "ell/ella/vostè":"treuria", nosaltres:"treuríem", vosaltres:"treuríeu", "ells/elles/vostès":"treurien"},
      imper: {tu:"treu", "vostè":"tregui", vosaltres:"traieu", "vostès":"treguin"}
    },
    french: {
      pres: {je:"enlève", tu:"enlèves", "il/elle/vous":"enlève", nous:"enlevons", vous:"enlevez", "ils/elles":"enlèvent"},
      perf: {je:"ai enlevé", tu:"as enlevé", "il/elle/vous":"a enlevé", nous:"avons enlevé", vous:"avez enlevé", "ils/elles":"ont enlevé"},
      imp: {je:"enlevais", tu:"enlevais", "il/elle/vous":"enlevait", nous:"enlevions", vous:"enleviez", "ils/elles":"enlevaient"},
      fut: {je:"enlèverai", tu:"enlèveras", "il/elle/vous":"enlèvera", nous:"enlèverons", vous:"enlèverez", "ils/elles":"enlèveront"},
      cond: {je:"enlèverais", tu:"enlèverais", "il/elle/vous":"enlèverait", nous:"enlèverions", vous:"enlèveriez", "ils/elles":"enlèveraient"},
      imper: {tu:"enlève", "vous":"enlevez", nous:"enlevons"}
    }
  },
  {
    ca: "escriure",
    en: "to write",
    fr: "écrire",
    type: "irregular",
    catalan: {
      pres: {jo:"escric", tu:"escrius", "ell/ella/vostè":"escriu", nosaltres:"escrivim", vosaltres:"escriviu", "ells/elles/vostès":"escriuen"},
      perf: {jo:"vaig escriure", tu:"vas escriure", "ell/ella/vostè":"va escriure", nosaltres:"vam escriure", vosaltres:"vau escriure", "ells/elles/vostès":"van escriure"},
      imp: {jo:"escrivia", tu:"escrivies", "ell/ella/vostè":"escrivia", nosaltres:"escrivíem", vosaltres:"escrivíeu", "ells/elles/vostès":"escrivien"},
      fut: {jo:"escriuré", tu:"escriuràs", "ell/ella/vostè":"escriurà", nosaltres:"escriurem", vosaltres:"escriureu", "ells/elles/vostès":"escriuran"},
      cond: {jo:"escriuria", tu:"escriuries", "ell/ella/vostè":"escriuria", nosaltres:"escriuríem", vosaltres:"escriuríeu", "ells/elles/vostès":"escriurien"},
      imper: {tu:"escriu", "vostè":"escrigui", vosaltres:"escriviu", "vostès":"escriguin"}
    },
    french: {
      pres: {je:"écris", tu:"écris", "il/elle/vous":"écrit", nous:"écrivons", vous:"écrivez", "ils/elles":"écrivent"},
      perf: {je:"ai écrit", tu:"as écrit", "il/elle/vous":"a écrit", nous:"avons écrit", vous:"avez écrit", "ils/elles":"ont écrit"},
      imp: {je:"écrivais", tu:"écrivais", "il/elle/vous":"écrivait", nous:"écrivions", vous:"écriviez", "ils/elles":"écrivaient"},
      fut: {je:"écrirai", tu:"écriras", "il/elle/vous":"écrira", nous:"écrirons", vous:"écrirez", "ils/elles":"écriront"},
      cond: {je:"écrirais", tu:"écrirais", "il/elle/vous":"écrirait", nous:"écririons", vous:"écririez", "ils/elles":"écriraient"},
      imper: {tu:"écris", "vous":"écrivez", nous:"écrivons"}
    }
  },
  {
    ca: "cantar",
    en: "to sing",
    fr: "chanter",
    type: "regular -ar",
    catalan: {
      pres: {jo:"canto", tu:"cantes", "ell/ella/vostè":"canta", nosaltres:"cantem", vosaltres:"canteu", "ells/elles/vostès":"canten"},
      perf: {jo:"vaig cantar", tu:"vas cantar", "ell/ella/vostè":"va cantar", nosaltres:"vam cantar", vosaltres:"vau cantar", "ells/elles/vostès":"van cantar"},
      imp: {jo:"cantava", tu:"cantaves", "ell/ella/vostè":"cantava", nosaltres:"cantàvem", vosaltres:"cantàveu", "ells/elles/vostès":"cantaven"},
      fut: {jo:"cantaré", tu:"cantaràs", "ell/ella/vostè":"cantarà", nosaltres:"cantarem", vosaltres:"cantareu", "ells/elles/vostès":"cantaran"},
      cond: {jo:"cantaria", tu:"cantaries", "ell/ella/vostè":"cantaria", nosaltres:"cantaríem", vosaltres:"cantaríeu", "ells/elles/vostès":"cantarien"},
      imper: {tu:"canta", "vostè":"canti", vosaltres:"canteu", "vostès":"cantin"}
    },
    french: {
      pres: {je:"chante", tu:"chantes", "il/elle/vous":"chante", nous:"chantons", vous:"chantez", "ils/elles":"chantent"},
      perf: {je:"ai chanté", tu:"as chanté", "il/elle/vous":"a chanté", nous:"avons chanté", vous:"avez chanté", "ils/elles":"ont chanté"},
      imp: {je:"chantais", tu:"chantais", "il/elle/vous":"chantait", nous:"chantions", vous:"chantiez", "ils/elles":"chantaient"},
      fut: {je:"chanterai", tu:"chanteras", "il/elle/vous":"chantera", nous:"chanterons", vous:"chanterez", "ils/elles":"chanteront"},
      cond: {je:"chanterais", tu:"chanterais", "il/elle/vous":"chanterait", nous:"chanterions", vous:"chanteriez", "ils/elles":"chanteraient"},
      imper: {tu:"chante", "vous":"chantez", nous:"chantons"}
    }
  },
  {
    ca: "canviar",
    en: "to change",
    fr: "changer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"canvio", tu:"canvies", "ell/ella/vostè":"canvia", nosaltres:"canviem", vosaltres:"canvieu", "ells/elles/vostès":"canvien"},
      perf: {jo:"vaig canviar", tu:"vas canviar", "ell/ella/vostè":"va canviar", nosaltres:"vam canviar", vosaltres:"vau canviar", "ells/elles/vostès":"van canviar"},
      imp: {jo:"canviava", tu:"canviaves", "ell/ella/vostè":"canviava", nosaltres:"canviàvem", vosaltres:"canviàveu", "ells/elles/vostès":"canviaven"},
      fut: {jo:"canviaré", tu:"canviaràs", "ell/ella/vostè":"canviarà", nosaltres:"canviarem", vosaltres:"canviareu", "ells/elles/vostès":"canviaran"},
      cond: {jo:"canviaria", tu:"canviaries", "ell/ella/vostè":"canviaria", nosaltres:"canviaríem", vosaltres:"canviaríeu", "ells/elles/vostès":"canviarien"},
      imper: {tu:"canvia", "vostè":"canviï", vosaltres:"canvieu", "vostès":"canviïn"}
    },
    french: {
      pres: {je:"change", tu:"changes", "il/elle/vous":"change", nous:"changeons", vous:"changez", "ils/elles":"changent"},
      perf: {je:"ai changé", tu:"as changé", "il/elle/vous":"a changé", nous:"avons changé", vous:"avez changé", "ils/elles":"ont changé"},
      imp: {je:"changeais", tu:"changeais", "il/elle/vous":"changeait", nous:"changions", vous:"changiez", "ils/elles":"changeaient"},
      fut: {je:"changerai", tu:"changeras", "il/elle/vous":"changera", nous:"changerons", vous:"changerez", "ils/elles":"changeront"},
      cond: {je:"changerais", tu:"changerais", "il/elle/vous":"changerait", nous:"changerions", vous:"changeriez", "ils/elles":"changeraient"},
      imper: {tu:"change", "vous":"changez", nous:"changeons"}
    }
  },
  {
    ca: "començar",
    en: "to begin/start",
    fr: "commencer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"començo", tu:"comences", "ell/ella/vostè":"comença", nosaltres:"comencem", vosaltres:"comenceu", "ells/elles/vostès":"comencen"},
      perf: {jo:"vaig començar", tu:"vas començar", "ell/ella/vostè":"va començar", nosaltres:"vam començar", vosaltres:"vau començar", "ells/elles/vostès":"van començar"},
      imp: {jo:"començava", tu:"començaves", "ell/ella/vostè":"començava", nosaltres:"començàvem", vosaltres:"començàveu", "ells/elles/vostès":"començaven"},
      fut: {jo:"començaré", tu:"començaràs", "ell/ella/vostè":"començarà", nosaltres:"començarem", vosaltres:"començareu", "ells/elles/vostès":"començaran"},
      cond: {jo:"començaria", tu:"començaries", "ell/ella/vostè":"començaria", nosaltres:"començaríem", vosaltres:"començaríeu", "ells/elles/vostès":"començarien"},
      imper: {tu:"comença", "vostè":"comenci", vosaltres:"comenceu", "vostès":"comencin"}
    },
    french: {
      pres: {je:"commence", tu:"commences", "il/elle/vous":"commence", nous:"commençons", vous:"commencez", "ils/elles":"commencent"},
      perf: {je:"ai commencé", tu:"as commencé", "il/elle/vous":"a commencé", nous:"avons commencé", vous:"avez commencé", "ils/elles":"ont commencé"},
      imp: {je:"commençais", tu:"commençais", "il/elle/vous":"commençait", nous:"commencions", vous:"commenciez", "ils/elles":"commençaient"},
      fut: {je:"commencerai", tu:"commenceras", "il/elle/vous":"commencera", nous:"commencerons", vous:"commencerez", "ils/elles":"commenceront"},
      cond: {je:"commencerais", tu:"commencerais", "il/elle/vous":"commencerait", nous:"commencerions", vous:"commenceriez", "ils/elles":"commenceraient"},
      imper: {tu:"commence", "vous":"commencez", nous:"commençons"}
    }
  },
  {
    ca: "acabar",
    en: "to finish/end",
    fr: "finir",
    type: "regular -ar",
    catalan: {
      pres: {jo:"acabo", tu:"acabes", "ell/ella/vostè":"acaba", nosaltres:"acabem", vosaltres:"acabeu", "ells/elles/vostès":"acaben"},
      perf: {jo:"vaig acabar", tu:"vas acabar", "ell/ella/vostè":"va acabar", nosaltres:"vam acabar", vosaltres:"vau acabar", "ells/elles/vostès":"van acabar"},
      imp: {jo:"acabava", tu:"acabaves", "ell/ella/vostè":"acabava", nosaltres:"acabàvem", vosaltres:"acabàveu", "ells/elles/vostès":"acabaven"},
      fut: {jo:"acabaré", tu:"acabaràs", "ell/ella/vostè":"acabarà", nosaltres:"acabarem", vosaltres:"acabareu", "ells/elles/vostès":"acabaran"},
      cond: {jo:"acabaria", tu:"acabaries", "ell/ella/vostè":"acabaria", nosaltres:"acabaríem", vosaltres:"acabaríeu", "ells/elles/vostès":"acabarien"},
      imper: {tu:"acaba", "vostè":"acabi", vosaltres:"acabeu", "vostès":"acabin"}
    },
    french: {
      pres: {je:"finis", tu:"finis", "il/elle/vous":"finit", nous:"finissons", vous:"finissez", "ils/elles":"finissent"},
      perf: {je:"ai fini", tu:"as fini", "il/elle/vous":"a fini", nous:"avons fini", vous:"avez fini", "ils/elles":"ont fini"},
      imp: {je:"finissais", tu:"finissais", "il/elle/vous":"finissait", nous:"finissions", vous:"finissiez", "ils/elles":"finissaient"},
      fut: {je:"finirai", tu:"finiras", "il/elle/vous":"finira", nous:"finirons", vous:"finirez", "ils/elles":"finiront"},
      cond: {je:"finirais", tu:"finirais", "il/elle/vous":"finirait", nous:"finirions", vous:"finiriez", "ils/elles":"finiraient"},
      imper: {tu:"finis", "vous":"finissez", nous:"finissons"}
    }
  },
  {
    ca: "prendre",
    en: "to take",
    fr: "prendre",
    type: "irregular",
    catalan: {
      pres: {jo:"prenc", tu:"prens", "ell/ella/vostè":"pren", nosaltres:"prenem", vosaltres:"preneu", "ells/elles/vostès":"prenen"},
      perf: {jo:"vaig prendre", tu:"vas prendre", "ell/ella/vostè":"va prendre", nosaltres:"vam prendre", vosaltres:"vau prendre", "ells/elles/vostès":"van prendre"},
      imp: {jo:"prenia", tu:"prenies", "ell/ella/vostè":"prenia", nosaltres:"preníem", vosaltres:"preníeu", "ells/elles/vostès":"prenien"},
      fut: {jo:"prendré", tu:"prendràs", "ell/ella/vostè":"prendrà", nosaltres:"prendrem", vosaltres:"prendreu", "ells/elles/vostès":"prendran"},
      cond: {jo:"prendria", tu:"prendries", "ell/ella/vostè":"prendria", nosaltres:"prendríem", vosaltres:"prendríeu", "ells/elles/vostès":"prendrien"},
      imper: {tu:"pren", "vostè":"prengui", vosaltres:"preneu", "vostès":"prenguin"}
    },
    french: {
      pres: {je:"prends", tu:"prends", "il/elle/vous":"prend", nous:"prenons", vous:"prenez", "ils/elles":"prennent"},
      perf: {je:"ai pris", tu:"as pris", "il/elle/vous":"a pris", nous:"avons pris", vous:"avez pris", "ils/elles":"ont pris"},
      imp: {je:"prenais", tu:"prenais", "il/elle/vous":"prenait", nous:"prenions", vous:"preniez", "ils/elles":"prenaient"},
      fut: {je:"prendrai", tu:"prendras", "il/elle/vous":"prendra", nous:"prendrons", vous:"prendrez", "ils/elles":"prendront"},
      cond: {je:"prendrais", tu:"prendrais", "il/elle/vous":"prendrait", nous:"prendrions", vous:"prendriez", "ils/elles":"prendraient"},
      imper: {tu:"prends", "vous":"prenez", nous:"prenons"}
    }
  },
  {
    ca: "llegir",
    en: "to read",
    fr: "lire",
    type: "regular -ir",
    catalan: {
      pres: {jo:"llegeixo", tu:"llegeixes", "ell/ella/vostè":"llegeix", nosaltres:"llegim", vosaltres:"llegiu", "ells/elles/vostès":"llegeixen"},
      perf: {jo:"vaig llegir", tu:"vas llegir", "ell/ella/vostè":"va llegir", nosaltres:"vam llegir", vosaltres:"vau llegir", "ells/elles/vostès":"van llegir"},
      imp: {jo:"llegia", tu:"llegies", "ell/ella/vostè":"llegia", nosaltres:"llegíem", vosaltres:"llegíeu", "ells/elles/vostès":"llegien"},
      fut: {jo:"llegiré", tu:"llegiràs", "ell/ella/vostè":"llegirà", nosaltres:"llegirem", vosaltres:"llegireu", "ells/elles/vostès":"llegiran"},
      cond: {jo:"llegiria", tu:"llegiries", "ell/ella/vostè":"llegiria", nosaltres:"llegiríem", vosaltres:"llegiríeu", "ells/elles/vostès":"llegirien"},
      imper: {tu:"llegeix", "vostè":"llegeixi", vosaltres:"llegiu", "vostès":"llegeixin"}
    },
    french: {
      pres: {je:"lis", tu:"lis", "il/elle/vous":"lit", nous:"lisons", vous:"lisez", "ils/elles":"lisent"},
      perf: {je:"ai lu", tu:"as lu", "il/elle/vous":"a lu", nous:"avons lu", vous:"avez lu", "ils/elles":"ont lu"},
      imp: {je:"lisais", tu:"lisais", "il/elle/vous":"lisait", nous:"lisions", vous:"lisiez", "ils/elles":"lisaient"},
      fut: {je:"lirai", tu:"liras", "il/elle/vous":"lira", nous:"lirons", vous:"lirez", "ils/elles":"liront"},
      cond: {je:"lirais", tu:"lirais", "il/elle/vous":"lirait", nous:"lirions", vous:"liriez", "ils/elles":"liraient"},
      imper: {tu:"lis", "vous":"lisez", nous:"lisons"}
    }
  },
  {
    ca: "trobar",
    en: "to find",
    fr: "trouver",
    type: "regular -ar",
    catalan: {
      pres: {jo:"trobo", tu:"trobes", "ell/ella/vostè":"troba", nosaltres:"trobem", vosaltres:"trobeu", "ells/elles/vostès":"troben"},
      perf: {jo:"vaig trobar", tu:"vas trobar", "ell/ella/vostè":"va trobar", nosaltres:"vam trobar", vosaltres:"vau trobar", "ells/elles/vostès":"van trobar"},
      imp: {jo:"trobava", tu:"trobaves", "ell/ella/vostè":"trobava", nosaltres:"trobàvem", vosaltres:"trobàveu", "ells/elles/vostès":"trobaven"},
      fut: {jo:"trobaré", tu:"trobaràs", "ell/ella/vostè":"trobarà", nosaltres:"trobarem", vosaltres:"trobareu", "ells/elles/vostès":"trobaran"},
      cond: {jo:"trobaria", tu:"trobaries", "ell/ella/vostè":"trobaria", nosaltres:"trobaríem", vosaltres:"trobaríeu", "ells/elles/vostès":"trobarien"},
      imper: {tu:"troba", "vostè":"trobi", vosaltres:"trobeu", "vostès":"trobin"}
    },
    french: {
      pres: {je:"trouve", tu:"trouves", "il/elle/vous":"trouve", nous:"trouvons", vous:"trouvez", "ils/elles":"trouvent"},
      perf: {je:"ai trouvé", tu:"as trouvé", "il/elle/vous":"a trouvé", nous:"avons trouvé", vous:"avez trouvé", "ils/elles":"ont trouvé"},
      imp: {je:"trouvais", tu:"trouvais", "il/elle/vous":"trouvait", nous:"trouvions", vous:"trouviez", "ils/elles":"trouvaient"},
      fut: {je:"trouverai", tu:"trouveras", "il/elle/vous":"trouvera", nous:"trouverons", vous:"trouverez", "ils/elles":"trouveront"},
      cond: {je:"trouverais", tu:"trouverais", "il/elle/vous":"trouverait", nous:"trouverions", vous:"trouveriez", "ils/elles":"trouveraient"},
      imper: {tu:"trouve", "vous":"trouvez", nous:"trouvons"}
    }
  },
  {
    ca: "sortir",
    en: "to go out/leave",
    fr: "sortir",
    type: "regular -ir",
    catalan: {
      pres: {jo:"surto", tu:"surts", "ell/ella/vostè":"surt", nosaltres:"sortim", vosaltres:"sortiu", "ells/elles/vostès":"surten"},
      perf: {jo:"vaig sortir", tu:"vas sortir", "ell/ella/vostè":"va sortir", nosaltres:"vam sortir", vosaltres:"vau sortir", "ells/elles/vostès":"van sortir"},
      imp: {jo:"sortia", tu:"sorties", "ell/ella/vostè":"sortia", nosaltres:"sortíem", vosaltres:"sortíeu", "ells/elles/vostès":"sortien"},
      fut: {jo:"sortiré", tu:"sortiràs", "ell/ella/vostè":"sortirà", nosaltres:"sortirem", vosaltres:"sortireu", "ells/elles/vostès":"sortiran"},
      cond: {jo:"sortiria", tu:"sortiries", "ell/ella/vostè":"sortiria", nosaltres:"sortiríem", vosaltres:"sortiríeu", "ells/elles/vostès":"sortirien"},
      imper: {tu:"surt", "vostè":"surti", vosaltres:"sortiu", "vostès":"surtin"}
    },
    french: {
      pres: {je:"sors", tu:"sors", "il/elle/vous":"sort", nous:"sortons", vous:"sortez", "ils/elles":"sortent"},
      perf: {je:"suis sorti(e)", tu:"es sorti(e)", "il/elle/vous":"est sorti(e)", nous:"sommes sorti(e)s", vous:"êtes sorti(e)s", "ils/elles":"sont sorti(e)s"},
      imp: {je:"sortais", tu:"sortais", "il/elle/vous":"sortait", nous:"sortions", vous:"sortiez", "ils/elles":"sortaient"},
      fut: {je:"sortirai", tu:"sortiras", "il/elle/vous":"sortira", nous:"sortirons", vous:"sortirez", "ils/elles":"sortiront"},
      cond: {je:"sortirais", tu:"sortirais", "il/elle/vous":"sortirait", nous:"sortirions", vous:"sortiriez", "ils/elles":"sortiraient"},
      imper: {tu:"sors", "vous":"sortez", nous:"sortons"}
    }
  },
  {
    ca: "enviar",
    en: "to send",
    fr: "envoyer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"envio", tu:"envies", "ell/ella/vostè":"envia", nosaltres:"enviem", vosaltres:"envieu", "ells/elles/vostès":"envien"},
      perf: {jo:"vaig enviar", tu:"vas enviar", "ell/ella/vostè":"va enviar", nosaltres:"vam enviar", vosaltres:"vau enviar", "ells/elles/vostès":"van enviar"},
      imp: {jo:"enviava", tu:"enviaves", "ell/ella/vostè":"enviava", nosaltres:"enviàvem", vosaltres:"enviàveu", "ells/elles/vostès":"enviaven"},
      fut: {jo:"enviaré", tu:"enviaràs", "ell/ella/vostè":"enviarà", nosaltres:"enviarem", vosaltres:"enviareu", "ells/elles/vostès":"enviaran"},
      cond: {jo:"enviaria", tu:"enviaries", "ell/ella/vostè":"enviaria", nosaltres:"enviaríem", vosaltres:"enviaríeu", "ells/elles/vostès":"enviarien"},
      imper: {tu:"envia", "vostè":"enviï", vosaltres:"envieu", "vostès":"enviïn"}
    },
    french: {
      pres: {je:"envoie", tu:"envoies", "il/elle/vous":"envoie", nous:"envoyons", vous:"envoyez", "ils/elles":"envoient"},
      perf: {je:"ai envoyé", tu:"as envoyé", "il/elle/vous":"a envoyé", nous:"avons envoyé", vous:"avez envoyé", "ils/elles":"ont envoyé"},
      imp: {je:"envoyais", tu:"envoyais", "il/elle/vous":"envoyait", nous:"envoyions", vous:"envoyiez", "ils/elles":"envoyaient"},
      fut: {je:"enverrai", tu:"enverras", "il/elle/vous":"enverra", nous:"enverrons", vous:"enverrez", "ils/elles":"enverront"},
      cond: {je:"enverrais", tu:"enverrais", "il/elle/vous":"enverrait", nous:"enverrions", vous:"enverriez", "ils/elles":"enverraient"},
      imper: {tu:"envoie", "vous":"envoyez", nous:"envoyons"}
    }
  },
  {
    ca: "rebre",
    en: "to receive",
    fr: "recevoir",
    type: "irregular",
    catalan: {
      pres: {jo:"rebo", tu:"reps", "ell/ella/vostè":"rep", nosaltres:"rebem", vosaltres:"rebeu", "ells/elles/vostès":"reben"},
      perf: {jo:"vaig rebre", tu:"vas rebre", "ell/ella/vostè":"va rebre", nosaltres:"vam rebre", vosaltres:"vau rebre", "ells/elles/vostès":"van rebre"},
      imp: {jo:"rebia", tu:"rebies", "ell/ella/vostè":"rebia", nosaltres:"rebíem", vosaltres:"rebíeu", "ells/elles/vostès":"rebien"},
      fut: {jo:"rebré", tu:"rebràs", "ell/ella/vostè":"rebrà", nosaltres:"rebrem", vosaltres:"rebreu", "ells/elles/vostès":"rebran"},
      cond: {jo:"rebria", tu:"rebries", "ell/ella/vostè":"rebria", nosaltres:"rebríem", vosaltres:"rebríeu", "ells/elles/vostès":"rebrien"},
      imper: {tu:"rep", "vostè":"rebi", vosaltres:"rebeu", "vostès":"rebin"}
    },
    french: {
      pres: {je:"reçois", tu:"reçois", "il/elle/vous":"reçoit", nous:"recevons", vous:"recevez", "ils/elles":"reçoivent"},
      perf: {je:"ai reçu", tu:"as reçu", "il/elle/vous":"a reçu", nous:"avons reçu", vous:"avez reçu", "ils/elles":"ont reçu"},
      imp: {je:"recevais", tu:"recevais", "il/elle/vous":"recevait", nous:"recevions", vous:"receviez", "ils/elles":"recevaient"},
      fut: {je:"recevrai", tu:"recevras", "il/elle/vous":"recevra", nous:"recevrons", vous:"recevrez", "ils/elles":"recevront"},
      cond: {je:"recevrais", tu:"recevrais", "il/elle/vous":"recevrait", nous:"recevrions", vous:"recevriez", "ils/elles":"recevraient"},
      imper: {tu:"reçois", "vous":"recevez", nous:"recevons"}
    }
  },
  {
    ca: "beure",
    en: "to drink",
    fr: "boire",
    type: "irregular",
    catalan: {
      pres: {jo:"bec", tu:"beus", "ell/ella/vostè":"beu", nosaltres:"bevem", vosaltres:"beveu", "ells/elles/vostès":"beuen"},
      perf: {jo:"vaig beure", tu:"vas beure", "ell/ella/vostè":"va beure", nosaltres:"vam beure", vosaltres:"vau beure", "ells/elles/vostès":"van beure"},
      imp: {jo:"bevia", tu:"bevies", "ell/ella/vostè":"bevia", nosaltres:"bevíem", vosaltres:"bevíeu", "ells/elles/vostès":"bevien"},
      fut: {jo:"beuré", tu:"beuràs", "ell/ella/vostè":"beurà", nosaltres:"beurem", vosaltres:"beureu", "ells/elles/vostès":"beuran"},
      cond: {jo:"beuria", tu:"beuries", "ell/ella/vostè":"beuria", nosaltres:"beuríem", vosaltres:"beuríeu", "ells/elles/vostès":"beurien"},
      imper: {tu:"beu", "vostè":"begui", vosaltres:"beveu", "vostès":"beguin"}
    },
    french: {
      pres: {je:"bois", tu:"bois", "il/elle/vous":"boit", nous:"buvons", vous:"buvez", "ils/elles":"boivent"},
      perf: {je:"ai bu", tu:"as bu", "il/elle/vous":"a bu", nous:"avons bu", vous:"avez bu", "ils/elles":"ont bu"},
      imp: {je:"buvais", tu:"buvais", "il/elle/vous":"buvait", nous:"buvions", vous:"buviez", "ils/elles":"buvaient"},
      fut: {je:"boirai", tu:"boiras", "il/elle/vous":"boira", nous:"boirons", vous:"boirez", "ils/elles":"boiront"},
      cond: {je:"boirais", tu:"boirais", "il/elle/vous":"boirait", nous:"boirions", vous:"boiriez", "ils/elles":"boiraient"},
      imper: {tu:"bois", "vous":"buvez", nous:"buvons"}
    }
  },
  {
    ca: "pujar",
    en: "to go up/upload",
    fr: "monter",
    type: "regular -ar",
    catalan: {
      pres: {jo:"pujo", tu:"puges", "ell/ella/vostè":"puja", nosaltres:"pugem", vosaltres:"pugeu", "ells/elles/vostès":"pugen"},
      perf: {jo:"vaig pujar", tu:"vas pujar", "ell/ella/vostè":"va pujar", nosaltres:"vam pujar", vosaltres:"vau pujar", "ells/elles/vostès":"van pujar"},
      imp: {jo:"pujava", tu:"pujaves", "ell/ella/vostè":"pujava", nosaltres:"pujàvem", vosaltres:"pujàveu", "ells/elles/vostès":"pujaven"},
      fut: {jo:"pujaré", tu:"pujaràs", "ell/ella/vostè":"pujarà", nosaltres:"pujarem", vosaltres:"pujareu", "ells/elles/vostès":"pujaran"},
      cond: {jo:"pujaria", tu:"pujaries", "ell/ella/vostè":"pujaria", nosaltres:"pujaríem", vosaltres:"pujaríeu", "ells/elles/vostès":"pujarien"},
      imper: {tu:"puja", "vostè":"pugi", vosaltres:"pugeu", "vostès":"pugin"}
    },
    french: {
      pres: {je:"monte", tu:"montes", "il/elle/vous":"monte", nous:"montons", vous:"montez", "ils/elles":"montent"},
      perf: {je:"suis monté(e)", tu:"es monté(e)", "il/elle/vous":"est monté(e)", nous:"sommes monté(e)s", vous:"êtes monté(e)s", "ils/elles":"sont monté(e)s"},
      imp: {je:"montais", tu:"montais", "il/elle/vous":"montait", nous:"montions", vous:"montiez", "ils/elles":"montaient"},
      fut: {je:"monterai", tu:"monteras", "il/elle/vous":"montera", nous:"monterons", vous:"monterez", "ils/elles":"monteront"},
      cond: {je:"monterais", tu:"monterais", "il/elle/vous":"monterait", nous:"monterions", vous:"monteriez", "ils/elles":"monteraient"},
      imper: {tu:"monte", "vous":"montez", nous:"montons"}
    }
  },
  {
    ca: "agafar",
    en: "to grab/take",
    fr: "attraper",
    type: "regular -ar",
    catalan: {
      pres: {jo:"agafo", tu:"agafes", "ell/ella/vostè":"agafa", nosaltres:"agafem", vosaltres:"agafeu", "ells/elles/vostès":"agafen"},
      perf: {jo:"vaig agafar", tu:"vas agafar", "ell/ella/vostè":"va agafar", nosaltres:"vam agafar", vosaltres:"vau agafar", "ells/elles/vostès":"van agafar"},
      imp: {jo:"agafava", tu:"agafaves", "ell/ella/vostè":"agafava", nosaltres:"agafàvem", vosaltres:"agafàveu", "ells/elles/vostès":"agafaven"},
      fut: {jo:"agafaré", tu:"agafaràs", "ell/ella/vostè":"agafarà", nosaltres:"agafarem", vosaltres:"agafareu", "ells/elles/vostès":"agafaran"},
      cond: {jo:"agafaria", tu:"agafaries", "ell/ella/vostè":"agafaria", nosaltres:"agafaríem", vosaltres:"agafaríeu", "ells/elles/vostès":"agafarien"},
      imper: {tu:"agafa", "vostè":"agafi", vosaltres:"agafeu", "vostès":"agafin"}
    },
    french: {
      pres: {je:"attrape", tu:"attrapes", "il/elle/vous":"attrape", nous:"attrapons", vous:"attrapez", "ils/elles":"attrapent"},
      perf: {je:"ai attrapé", tu:"as attrapé", "il/elle/vous":"a attrapé", nous:"avons attrapé", vous:"avez attrapé", "ils/elles":"ont attrapé"},
      imp: {je:"attrapais", tu:"attrapais", "il/elle/vous":"attrapait", nous:"attrapions", vous:"attrapiez", "ils/elles":"attrapaient"},
      fut: {je:"attraperai", tu:"attraperas", "il/elle/vous":"attrapera", nous:"attraperons", vous:"attraperez", "ils/elles":"attraperont"},
      cond: {je:"attraperais", tu:"attraperais", "il/elle/vous":"attraperait", nous:"attraperions", vous:"attraperiez", "ils/elles":"attraperaient"},
      imper: {tu:"attrape", "vous":"attrapez", nous:"attrapons"}
    }
  },
  {
    ca: "ajudar",
    en: "to help",
    fr: "aider",
    type: "regular -ar",
    catalan: {
      pres: {jo:"ajudo", tu:"ajudes", "ell/ella/vostè":"ajuda", nosaltres:"ajudem", vosaltres:"ajudeu", "ells/elles/vostès":"ajuden"},
      perf: {jo:"vaig ajudar", tu:"vas ajudar", "ell/ella/vostè":"va ajudar", nosaltres:"vam ajudar", vosaltres:"vau ajudar", "ells/elles/vostès":"van ajudar"},
      imp: {jo:"ajudava", tu:"ajudaves", "ell/ella/vostè":"ajudava", nosaltres:"ajudàvem", vosaltres:"ajudàveu", "ells/elles/vostès":"ajudaven"},
      fut: {jo:"ajudaré", tu:"ajudaràs", "ell/ella/vostè":"ajudarà", nosaltres:"ajudarem", vosaltres:"ajudareu", "ells/elles/vostès":"ajudaran"},
      cond: {jo:"ajudaria", tu:"ajudaries", "ell/ella/vostè":"ajudaria", nosaltres:"ajudaríem", vosaltres:"ajudaríeu", "ells/elles/vostès":"ajudarien"},
      imper: {tu:"ajuda", "vostè":"ajudi", vosaltres:"ajudeu", "vostès":"ajudin"}
    },
    french: {
      pres: {je:"aide", tu:"aides", "il/elle/vous":"aide", nous:"aidons", vous:"aidez", "ils/elles":"aident"},
      perf: {je:"ai aidé", tu:"as aidé", "il/elle/vous":"a aidé", nous:"avons aidé", vous:"avez aidé", "ils/elles":"ont aidé"},
      imp: {je:"aidais", tu:"aidais", "il/elle/vous":"aidait", nous:"aidions", vous:"aidiez", "ils/elles":"aidaient"},
      fut: {je:"aiderai", tu:"aideras", "il/elle/vous":"aidera", nous:"aiderons", vous:"aiderez", "ils/elles":"aideront"},
      cond: {je:"aiderais", tu:"aiderais", "il/elle/vous":"aiderait", nous:"aiderions", vous:"aideriez", "ils/elles":"aideraient"},
      imper: {tu:"aide", "vous":"aidez", nous:"aidons"}
    }
  },
  {
    ca: "ballar",
    en: "to dance",
    fr: "danser",
    type: "regular -ar",
    catalan: {
      pres: {jo:"ballo", tu:"balles", "ell/ella/vostè":"balla", nosaltres:"ballem", vosaltres:"balleu", "ells/elles/vostès":"ballen"},
      perf: {jo:"vaig ballar", tu:"vas ballar", "ell/ella/vostè":"va ballar", nosaltres:"vam ballar", vosaltres:"vau ballar", "ells/elles/vostès":"van ballar"},
      imp: {jo:"ballava", tu:"ballaves", "ell/ella/vostè":"ballava", nosaltres:"ballàvem", vosaltres:"ballàveu", "ells/elles/vostès":"ballaven"},
      fut: {jo:"ballaré", tu:"ballaràs", "ell/ella/vostè":"ballarà", nosaltres:"ballarem", vosaltres:"ballareu", "ells/elles/vostès":"ballaran"},
      cond: {jo:"ballaria", tu:"ballaries", "ell/ella/vostè":"ballaria", nosaltres:"ballaríem", vosaltres:"ballaríeu", "ells/elles/vostès":"ballarien"},
      imper: {tu:"balla", "vostè":"balli", vosaltres:"balleu", "vostès":"ballin"}
    },
    french: {
      pres: {je:"danse", tu:"danses", "il/elle/vous":"danse", nous:"dansons", vous:"dansez", "ils/elles":"dansent"},
      perf: {je:"ai dansé", tu:"as dansé", "il/elle/vous":"a dansé", nous:"avons dansé", vous:"avez dansé", "ils/elles":"ont dansé"},
      imp: {je:"dansais", tu:"dansais", "il/elle/vous":"dansait", nous:"dansions", vous:"dansiez", "ils/elles":"dansaient"},
      fut: {je:"danserai", tu:"danseras", "il/elle/vous":"dansera", nous:"danserons", vous:"danserez", "ils/elles":"danseront"},
      cond: {je:"danserais", tu:"danserais", "il/elle/vous":"danserait", nous:"danserions", vous:"danseriez", "ils/elles":"danseraient"},
      imper: {tu:"danse", "vous":"dansez", nous:"dansons"}
    }
  },
  {
    ca: "buscar",
    en: "to look for/search",
    fr: "chercher",
    type: "regular -ar",
    catalan: {
      pres: {jo:"busco", tu:"busques", "ell/ella/vostè":"busca", nosaltres:"busquem", vosaltres:"busqueu", "ells/elles/vostès":"busquen"},
      perf: {jo:"vaig buscar", tu:"vas buscar", "ell/ella/vostè":"va buscar", nosaltres:"vam buscar", vosaltres:"vau buscar", "ells/elles/vostès":"van buscar"},
      imp: {jo:"buscava", tu:"buscaves", "ell/ella/vostè":"buscava", nosaltres:"buscàvem", vosaltres:"buscàveu", "ells/elles/vostès":"buscaven"},
      fut: {jo:"buscaré", tu:"buscaràs", "ell/ella/vostè":"buscarà", nosaltres:"buscarem", vosaltres:"buscareu", "ells/elles/vostès":"buscaran"},
      cond: {jo:"buscaria", tu:"buscaries", "ell/ella/vostè":"buscaria", nosaltres:"buscaríem", vosaltres:"buscaríeu", "ells/elles/vostès":"buscarien"},
      imper: {tu:"busca", "vostè":"busqui", vosaltres:"busqueu", "vostès":"busquin"}
    },
    french: {
      pres: {je:"cherche", tu:"cherches", "il/elle/vous":"cherche", nous:"cherchons", vous:"cherchez", "ils/elles":"cherchent"},
      perf: {je:"ai cherché", tu:"as cherché", "il/elle/vous":"a cherché", nous:"avons cherché", vous:"avez cherché", "ils/elles":"ont cherché"},
      imp: {je:"cherchais", tu:"cherchais", "il/elle/vous":"cherchait", nous:"cherchions", vous:"cherchiez", "ils/elles":"cherchaient"},
      fut: {je:"chercherai", tu:"chercheras", "il/elle/vous":"cherchera", nous:"chercherons", vous:"chercherez", "ils/elles":"chercheront"},
      cond: {je:"chercherais", tu:"chercherais", "il/elle/vous":"chercherait", nous:"chercherions", vous:"chercheriez", "ils/elles":"chercheraient"},
      imper: {tu:"cherche", "vous":"cherchez", nous:"cherchons"}
    }
  },
  {
    ca: "caminar",
    en: "to walk",
    fr: "marcher",
    type: "regular -ar",
    catalan: {
      pres: {jo:"camino", tu:"camines", "ell/ella/vostè":"camina", nosaltres:"caminem", vosaltres:"camineu", "ells/elles/vostès":"caminen"},
      perf: {jo:"vaig caminar", tu:"vas caminar", "ell/ella/vostè":"va caminar", nosaltres:"vam caminar", vosaltres:"vau caminar", "ells/elles/vostès":"van caminar"},
      imp: {jo:"caminava", tu:"caminaves", "ell/ella/vostè":"caminava", nosaltres:"caminàvem", vosaltres:"caminàveu", "ells/elles/vostès":"caminaven"},
      fut: {jo:"caminaré", tu:"caminaràs", "ell/ella/vostè":"caminarà", nosaltres:"caminarem", vosaltres:"caminareu", "ells/elles/vostès":"caminaran"},
      cond: {jo:"caminaria", tu:"caminaries", "ell/ella/vostè":"caminaria", nosaltres:"caminaríem", vosaltres:"caminaríeu", "ells/elles/vostès":"caminarien"},
      imper: {tu:"camina", "vostè":"camini", vosaltres:"camineu", "vostès":"caminin"}
    },
    french: {
      pres: {je:"marche", tu:"marches", "il/elle/vous":"marche", nous:"marchons", vous:"marchez", "ils/elles":"marchent"},
      perf: {je:"ai marché", tu:"as marché", "il/elle/vous":"a marché", nous:"avons marché", vous:"avez marché", "ils/elles":"ont marché"},
      imp: {je:"marchais", tu:"marchais", "il/elle/vous":"marchait", nous:"marchions", vous:"marchiez", "ils/elles":"marchaient"},
      fut: {je:"marcherai", tu:"marcheras", "il/elle/vous":"marchera", nous:"marcherons", vous:"marcherez", "ils/elles":"marcheront"},
      cond: {je:"marcherais", tu:"marcherais", "il/elle/vous":"marcherait", nous:"marcherions", vous:"marcheriez", "ils/elles":"marcheraient"},
      imper: {tu:"marche", "vous":"marchez", nous:"marchons"}
    }
  },
  {
    ca: "comprar",
    en: "to buy",
    fr: "acheter",
    type: "regular -ar",
    catalan: {
      pres: {jo:"compro", tu:"compres", "ell/ella/vostè":"compra", nosaltres:"comprem", vosaltres:"compreu", "ells/elles/vostès":"compren"},
      perf: {jo:"vaig comprar", tu:"vas comprar", "ell/ella/vostè":"va comprar", nosaltres:"vam comprar", vosaltres:"vau comprar", "ells/elles/vostès":"van comprar"},
      imp: {jo:"comprava", tu:"compraves", "ell/ella/vostè":"comprava", nosaltres:"compràvem", vosaltres:"compràveu", "ells/elles/vostès":"compraven"},
      fut: {jo:"compraré", tu:"compraràs", "ell/ella/vostè":"comprarà", nosaltres:"comprarem", vosaltres:"comprareu", "ells/elles/vostès":"compraran"},
      cond: {jo:"compraria", tu:"compraries", "ell/ella/vostè":"compraria", nosaltres:"compraríem", vosaltres:"compraríeu", "ells/elles/vostès":"comprarien"},
      imper: {tu:"compra", "vostè":"compri", vosaltres:"compreu", "vostès":"comprin"}
    },
    french: {
      pres: {je:"achète", tu:"achètes", "il/elle/vous":"achète", nous:"achetons", vous:"achetez", "ils/elles":"achètent"},
      perf: {je:"ai acheté", tu:"as acheté", "il/elle/vous":"a acheté", nous:"avons acheté", vous:"avez acheté", "ils/elles":"ont acheté"},
      imp: {je:"achetais", tu:"achetais", "il/elle/vous":"achetait", nous:"achetions", vous:"achetiez", "ils/elles":"achetaient"},
      fut: {je:"achèterai", tu:"achèteras", "il/elle/vous":"achètera", nous:"achèterons", vous:"achèterez", "ils/elles":"achèteront"},
      cond: {je:"achèterais", tu:"achèterais", "il/elle/vous":"achèterait", nous:"achèterions", vous:"achèteriez", "ils/elles":"achèteraient"},
      imper: {tu:"achète", "vous":"achetez", nous:"achetons"}
    }
  },
  {
    ca: "contestar",
    en: "to answer",
    fr: "répondre",
    type: "regular -ar",
    catalan: {
      pres: {jo:"contesto", tu:"contestes", "ell/ella/vostè":"contesta", nosaltres:"contestem", vosaltres:"contesteu", "ells/elles/vostès":"contesten"},
      perf: {jo:"vaig contestar", tu:"vas contestar", "ell/ella/vostè":"va contestar", nosaltres:"vam contestar", vosaltres:"vau contestar", "ells/elles/vostès":"van contestar"},
      imp: {jo:"contestava", tu:"contestaves", "ell/ella/vostè":"contestava", nosaltres:"contestàvem", vosaltres:"contestàveu", "ells/elles/vostès":"contestaven"},
      fut: {jo:"contestaré", tu:"contestaràs", "ell/ella/vostè":"contestarà", nosaltres:"contestarem", vosaltres:"contestareu", "ells/elles/vostès":"contestaran"},
      cond: {jo:"contestaria", tu:"contestaries", "ell/ella/vostè":"contestaria", nosaltres:"contestaríem", vosaltres:"contestaríeu", "ells/elles/vostès":"contestarien"},
      imper: {tu:"contesta", "vostè":"contesti", vosaltres:"contesteu", "vostès":"contestin"}
    },
    french: {
      pres: {je:"réponds", tu:"réponds", "il/elle/vous":"répond", nous:"répondons", vous:"répondez", "ils/elles":"répondent"},
      perf: {je:"ai répondu", tu:"as répondu", "il/elle/vous":"a répondu", nous:"avons répondu", vous:"avez répondu", "ils/elles":"ont répondu"},
      imp: {je:"répondais", tu:"répondais", "il/elle/vous":"répondait", nous:"répondions", vous:"répondiez", "ils/elles":"répondaient"},
      fut: {je:"répondrai", tu:"répondras", "il/elle/vous":"répondra", nous:"répondrons", vous:"répondrez", "ils/elles":"répondront"},
      cond: {je:"répondrais", tu:"répondrais", "il/elle/vous":"répondrait", nous:"répondrions", vous:"répondriez", "ils/elles":"répondraient"},
      imper: {tu:"réponds", "vous":"répondez", nous:"répondons"}
    }
  },
  {
    ca: "creure",
    en: "to believe",
    fr: "croire",
    type: "irregular",
    catalan: {
      pres: {jo:"crec", tu:"creus", "ell/ella/vostè":"creu", nosaltres:"creiem", vosaltres:"creieu", "ells/elles/vostès":"creuen"},
      perf: {jo:"vaig creure", tu:"vas creure", "ell/ella/vostè":"va creure", nosaltres:"vam creure", vosaltres:"vau creure", "ells/elles/vostès":"van creure"},
      imp: {jo:"creia", tu:"creies", "ell/ella/vostè":"creia", nosaltres:"crèiem", vosaltres:"crèieu", "ells/elles/vostès":"creien"},
      fut: {jo:"creuré", tu:"creuràs", "ell/ella/vostè":"creurà", nosaltres:"creurem", vosaltres:"creureu", "ells/elles/vostès":"creuran"},
      cond: {jo:"creuria", tu:"creuries", "ell/ella/vostè":"creuria", nosaltres:"creuríem", vosaltres:"creuríeu", "ells/elles/vostès":"creurien"},
      imper: {tu:"creu", "vostè":"cregui", vosaltres:"creieu", "vostès":"creguin"}
    },
    french: {
      pres: {je:"crois", tu:"crois", "il/elle/vous":"croit", nous:"croyons", vous:"croyez", "ils/elles":"croient"},
      perf: {je:"ai cru", tu:"as cru", "il/elle/vous":"a cru", nous:"avons cru", vous:"avez cru", "ils/elles":"ont cru"},
      imp: {je:"croyais", tu:"croyais", "il/elle/vous":"croyait", nous:"croyions", vous:"croyiez", "ils/elles":"croyaient"},
      fut: {je:"croirai", tu:"croiras", "il/elle/vous":"croira", nous:"croirons", vous:"croirez", "ils/elles":"croiront"},
      cond: {je:"croirais", tu:"croirais", "il/elle/vous":"croirait", nous:"croirions", vous:"croiriez", "ils/elles":"croiraient"},
      imper: {tu:"crois", "vous":"croyez", nous:"croyons"}
    }
  },
  {
    ca: "decidir",
    en: "to decide",
    fr: "décider",
    type: "regular -ir (incoatiu)",
    catalan: {
      pres: {jo:"decideixo", tu:"decideixes", "ell/ella/vostè":"decideix", nosaltres:"decidim", vosaltres:"decidiu", "ells/elles/vostès":"decideixen"},
      perf: {jo:"vaig decidir", tu:"vas decidir", "ell/ella/vostè":"va decidir", nosaltres:"vam decidir", vosaltres:"vau decidir", "ells/elles/vostès":"van decidir"},
      imp: {jo:"decidia", tu:"decidies", "ell/ella/vostè":"decidia", nosaltres:"decidíem", vosaltres:"decidíeu", "ells/elles/vostès":"decidien"},
      fut: {jo:"decidiré", tu:"decidiràs", "ell/ella/vostè":"decidirà", nosaltres:"decidirem", vosaltres:"decidireu", "ells/elles/vostès":"decidiran"},
      cond: {jo:"decidiria", tu:"decidiries", "ell/ella/vostè":"decidiria", nosaltres:"decidiríem", vosaltres:"decidiríeu", "ells/elles/vostès":"decidirien"},
      imper: {tu:"decideix", "vostè":"decideixi", vosaltres:"decidiu", "vostès":"decideixin"}
    },
    french: {
      pres: {je:"décide", tu:"décides", "il/elle/vous":"décide", nous:"décidons", vous:"décidez", "ils/elles":"décident"},
      perf: {je:"ai décidé", tu:"as décidé", "il/elle/vous":"a décidé", nous:"avons décidé", vous:"avez décidé", "ils/elles":"ont décidé"},
      imp: {je:"décidais", tu:"décidais", "il/elle/vous":"décidait", nous:"décidions", vous:"décidiez", "ils/elles":"décidaient"},
      fut: {je:"déciderai", tu:"décideras", "il/elle/vous":"décidera", nous:"déciderons", vous:"déciderez", "ils/elles":"décideront"},
      cond: {je:"déciderais", tu:"déciderais", "il/elle/vous":"déciderait", nous:"déciderions", vous:"décideriez", "ils/elles":"décideraient"},
      imper: {tu:"décide", "vous":"décidez", nous:"décidons"}
    }
  },
  {
    ca: "deixar",
    en: "to leave/let",
    fr: "laisser",
    type: "regular -ar",
    catalan: {
      pres: {jo:"deixo", tu:"deixes", "ell/ella/vostè":"deixa", nosaltres:"deixem", vosaltres:"deixeu", "ells/elles/vostès":"deixen"},
      perf: {jo:"vaig deixar", tu:"vas deixar", "ell/ella/vostè":"va deixar", nosaltres:"vam deixar", vosaltres:"vau deixar", "ells/elles/vostès":"van deixar"},
      imp: {jo:"deixava", tu:"deixaves", "ell/ella/vostè":"deixava", nosaltres:"deixàvem", vosaltres:"deixàveu", "ells/elles/vostès":"deixaven"},
      fut: {jo:"deixaré", tu:"deixaràs", "ell/ella/vostè":"deixarà", nosaltres:"deixarem", vosaltres:"deixareu", "ells/elles/vostès":"deixaran"},
      cond: {jo:"deixaria", tu:"deixaries", "ell/ella/vostè":"deixaria", nosaltres:"deixaríem", vosaltres:"deixaríeu", "ells/elles/vostès":"deixarien"},
      imper: {tu:"deixa", "vostè":"deixi", vosaltres:"deixeu", "vostès":"deixin"}
    },
    french: {
      pres: {je:"laisse", tu:"laisses", "il/elle/vous":"laisse", nous:"laissons", vous:"laissez", "ils/elles":"laissent"},
      perf: {je:"ai laissé", tu:"as laissé", "il/elle/vous":"a laissé", nous:"avons laissé", vous:"avez laissé", "ils/elles":"ont laissé"},
      imp: {je:"laissais", tu:"laissais", "il/elle/vous":"laissait", nous:"laissions", vous:"laissiez", "ils/elles":"laissaient"},
      fut: {je:"laisserai", tu:"laisseras", "il/elle/vous":"laissera", nous:"laisserons", vous:"laisserez", "ils/elles":"laisseront"},
      cond: {je:"laisserais", tu:"laisserais", "il/elle/vous":"laisserait", nous:"laisserions", vous:"laisseriez", "ils/elles":"laisseraient"},
      imper: {tu:"laisse", "vous":"laissez", nous:"laissons"}
    }
  },
  {
    ca: "demanar",
    en: "to ask for/request",
    fr: "demander",
    type: "regular -ar",
    catalan: {
      pres: {jo:"demano", tu:"demanes", "ell/ella/vostè":"demana", nosaltres:"demanem", vosaltres:"demaneu", "ells/elles/vostès":"demanen"},
      perf: {jo:"vaig demanar", tu:"vas demanar", "ell/ella/vostè":"va demanar", nosaltres:"vam demanar", vosaltres:"vau demanar", "ells/elles/vostès":"van demanar"},
      imp: {jo:"demanava", tu:"demanaves", "ell/ella/vostè":"demanava", nosaltres:"demanàvem", vosaltres:"demanàveu", "ells/elles/vostès":"demanaven"},
      fut: {jo:"demanaré", tu:"demanaràs", "ell/ella/vostè":"demanarà", nosaltres:"demanarem", vosaltres:"demanareu", "ells/elles/vostès":"demanaran"},
      cond: {jo:"demanaria", tu:"demanaries", "ell/ella/vostè":"demanaria", nosaltres:"demanaríem", vosaltres:"demanaríeu", "ells/elles/vostès":"demanarien"},
      imper: {tu:"demana", "vostè":"demani", vosaltres:"demaneu", "vostès":"demanin"}
    },
    french: {
      pres: {je:"demande", tu:"demandes", "il/elle/vous":"demande", nous:"demandons", vous:"demandez", "ils/elles":"demandent"},
      perf: {je:"ai demandé", tu:"as demandé", "il/elle/vous":"a demandé", nous:"avons demandé", vous:"avez demandé", "ils/elles":"ont demandé"},
      imp: {je:"demandais", tu:"demandais", "il/elle/vous":"demandait", nous:"demandions", vous:"demandiez", "ils/elles":"demandaient"},
      fut: {je:"demanderai", tu:"demanderas", "il/elle/vous":"demandera", nous:"demanderons", vous:"demanderez", "ils/elles":"demanderont"},
      cond: {je:"demanderais", tu:"demanderais", "il/elle/vous":"demanderait", nous:"demanderions", vous:"demanderiez", "ils/elles":"demanderaient"},
      imper: {tu:"demande", "vous":"demandez", nous:"demandons"}
    }
  },
  {
    ca: "descansar",
    en: "to rest",
    fr: "se reposer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"descanso", tu:"descanses", "ell/ella/vostè":"descansa", nosaltres:"descansem", vosaltres:"descanseu", "ells/elles/vostès":"descansen"},
      perf: {jo:"vaig descansar", tu:"vas descansar", "ell/ella/vostè":"va descansar", nosaltres:"vam descansar", vosaltres:"vau descansar", "ells/elles/vostès":"van descansar"},
      imp: {jo:"descansava", tu:"descansaves", "ell/ella/vostè":"descansava", nosaltres:"descansàvem", vosaltres:"descansàveu", "ells/elles/vostès":"descansaven"},
      fut: {jo:"descansaré", tu:"descansaràs", "ell/ella/vostè":"descansarà", nosaltres:"descansarem", vosaltres:"descansareu", "ells/elles/vostès":"descansaran"},
      cond: {jo:"descansaria", tu:"descansaries", "ell/ella/vostè":"descansaria", nosaltres:"descansaríem", vosaltres:"descansaríeu", "ells/elles/vostès":"descansarien"},
      imper: {tu:"descansa", "vostè":"descansi", vosaltres:"descanseu", "vostès":"descansin"}
    },
    french: {
      pres: {je:"me repose", tu:"te reposes", "il/elle/vous":"se repose", nous:"nous reposons", vous:"vous reposez", "ils/elles":"se reposent"},
      perf: {je:"me suis reposé(e)", tu:"t'es reposé(e)", "il/elle/vous":"s'est reposé(e)", nous:"nous sommes reposé(e)s", vous:"vous êtes reposé(e)(s)", "ils/elles":"se sont reposé(e)s"},
      imp: {je:"me reposais", tu:"te reposais", "il/elle/vous":"se reposait", nous:"nous reposions", vous:"vous reposiez", "ils/elles":"se reposaient"},
      fut: {je:"me reposerai", tu:"te reposeras", "il/elle/vous":"se reposera", nous:"nous reposerons", vous:"vous reposerez", "ils/elles":"se reposeront"},
      cond: {je:"me reposerais", tu:"te reposerais", "il/elle/vous":"se reposerait", nous:"nous reposerions", vous:"vous reposeriez", "ils/elles":"se reposeraient"},
      imper: {tu:"repose-toi", "vous":"reposez-vous", nous:"reposons-nous"}
    }
  },
  {
    ca: "donar",
    en: "to give",
    fr: "donner",
    type: "regular -ar",
    catalan: {
      pres: {jo:"dono", tu:"dones", "ell/ella/vostè":"dona", nosaltres:"donem", vosaltres:"doneu", "ells/elles/vostès":"donen"},
      perf: {jo:"vaig donar", tu:"vas donar", "ell/ella/vostè":"va donar", nosaltres:"vam donar", vosaltres:"vau donar", "ells/elles/vostès":"van donar"},
      imp: {jo:"donava", tu:"donaves", "ell/ella/vostè":"donava", nosaltres:"donàvem", vosaltres:"donàveu", "ells/elles/vostès":"donaven"},
      fut: {jo:"donaré", tu:"donaràs", "ell/ella/vostè":"donarà", nosaltres:"donarem", vosaltres:"donareu", "ells/elles/vostès":"donaran"},
      cond: {jo:"donaria", tu:"donaries", "ell/ella/vostè":"donaria", nosaltres:"donaríem", vosaltres:"donaríeu", "ells/elles/vostès":"donarien"},
      imper: {tu:"dona", "vostè":"doni", vosaltres:"doneu", "vostès":"donin"}
    },
    french: {
      pres: {je:"donne", tu:"donnes", "il/elle/vous":"donne", nous:"donnons", vous:"donnez", "ils/elles":"donnent"},
      perf: {je:"ai donné", tu:"as donné", "il/elle/vous":"a donné", nous:"avons donné", vous:"avez donné", "ils/elles":"ont donné"},
      imp: {je:"donnais", tu:"donnais", "il/elle/vous":"donnait", nous:"donnions", vous:"donniez", "ils/elles":"donnaient"},
      fut: {je:"donnerai", tu:"donneras", "il/elle/vous":"donnera", nous:"donnerons", vous:"donnerez", "ils/elles":"donneront"},
      cond: {je:"donnerais", tu:"donnerais", "il/elle/vous":"donnerait", nous:"donnerions", vous:"donneriez", "ils/elles":"donneraient"},
      imper: {tu:"donne", "vous":"donnez", nous:"donnons"}
    }
  },
  {
    ca: "dutxar-se",
    en: "to shower",
    fr: "se doucher",
    type: "regular -ar (reflexiu)",
    catalan: {
      pres: {jo:"em dutxo", tu:"et dutxes", "ell/ella/vostè":"es dutxa", nosaltres:"ens dutxem", vosaltres:"us dutxeu", "ells/elles/vostès":"es dutxen"},
      perf: {jo:"em vaig dutxar", tu:"et vas dutxar", "ell/ella/vostè":"es va dutxar", nosaltres:"ens vam dutxar", vosaltres:"us vau dutxar", "ells/elles/vostès":"es van dutxar"},
      imp: {jo:"em dutxava", tu:"et dutxaves", "ell/ella/vostè":"es dutxava", nosaltres:"ens dutxàvem", vosaltres:"us dutxàveu", "ells/elles/vostès":"es dutxaven"},
      fut: {jo:"em dutxaré", tu:"et dutxaràs", "ell/ella/vostè":"es dutxarà", nosaltres:"ens dutxarem", vosaltres:"us dutxareu", "ells/elles/vostès":"es dutxaran"},
      cond: {jo:"em dutxaria", tu:"et dutxaries", "ell/ella/vostè":"es dutxaria", nosaltres:"ens dutxaríem", vosaltres:"us dutxaríeu", "ells/elles/vostès":"es dutxarien"},
      imper: {tu:"dutxa't", "vostè":"dutxi's", vosaltres:"dutxeu-vos", "vostès":"dutxin-se"}
    },
    french: {
      pres: {je:"me douche", tu:"te douches", "il/elle/vous":"se douche", nous:"nous douchons", vous:"vous douchez", "ils/elles":"se douchent"},
      perf: {je:"me suis douché(e)", tu:"t'es douché(e)", "il/elle/vous":"s'est douché(e)", nous:"nous sommes douché(e)s", vous:"vous êtes douché(e)(s)", "ils/elles":"se sont douché(e)s"},
      imp: {je:"me douchais", tu:"te douchais", "il/elle/vous":"se douchait", nous:"nous douchions", vous:"vous douchiez", "ils/elles":"se douchaient"},
      fut: {je:"me doucherai", tu:"te doucheras", "il/elle/vous":"se douchera", nous:"nous doucherons", vous:"vous doucherez", "ils/elles":"se doucheront"},
      cond: {je:"me doucherais", tu:"te doucherais", "il/elle/vous":"se doucherait", nous:"nous doucherions", vous:"vous doucheriez", "ils/elles":"se doucheraient"},
      imper: {tu:"douche-toi", "vous":"douchez-vous", nous:"douchons-nous"}
    }
  },
  {
    ca: "entendre",
    en: "to understand",
    fr: "comprendre",
    type: "irregular",
    catalan: {
      pres: {jo:"entenc", tu:"entens", "ell/ella/vostè":"entén", nosaltres:"entenem", vosaltres:"enteneu", "ells/elles/vostès":"entenen"},
      perf: {jo:"vaig entendre", tu:"vas entendre", "ell/ella/vostè":"va entendre", nosaltres:"vam entendre", vosaltres:"vau entendre", "ells/elles/vostès":"van entendre"},
      imp: {jo:"entenia", tu:"entenies", "ell/ella/vostè":"entenia", nosaltres:"enteníem", vosaltres:"enteníeu", "ells/elles/vostès":"entenien"},
      fut: {jo:"entendré", tu:"entendràs", "ell/ella/vostè":"entendrà", nosaltres:"entendrem", vosaltres:"entendreu", "ells/elles/vostès":"entendran"},
      cond: {jo:"entendria", tu:"entendries", "ell/ella/vostè":"entendria", nosaltres:"entendríem", vosaltres:"entendríeu", "ells/elles/vostès":"entendrien"},
      imper: {tu:"entén", "vostè":"entengui", vosaltres:"enteneu", "vostès":"entenguin"}
    },
    french: {
      pres: {je:"comprends", tu:"comprends", "il/elle/vous":"comprend", nous:"comprenons", vous:"comprenez", "ils/elles":"comprennent"},
      perf: {je:"ai compris", tu:"as compris", "il/elle/vous":"a compris", nous:"avons compris", vous:"avez compris", "ils/elles":"ont compris"},
      imp: {je:"comprenais", tu:"comprenais", "il/elle/vous":"comprenait", nous:"comprenions", vous:"compreniez", "ils/elles":"comprenaient"},
      fut: {je:"comprendrai", tu:"comprendras", "il/elle/vous":"comprendra", nous:"comprendrons", vous:"comprendrez", "ils/elles":"comprendront"},
      cond: {je:"comprendrais", tu:"comprendrais", "il/elle/vous":"comprendrait", nous:"comprendrions", vous:"comprendriez", "ils/elles":"comprendraient"},
      imper: {tu:"comprends", "vous":"comprenez", nous:"comprenons"}
    }
  },
  {
    ca: "entrar",
    en: "to enter/come in",
    fr: "entrer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"entro", tu:"entres", "ell/ella/vostè":"entra", nosaltres:"entrem", vosaltres:"entreu", "ells/elles/vostès":"entren"},
      perf: {jo:"vaig entrar", tu:"vas entrar", "ell/ella/vostè":"va entrar", nosaltres:"vam entrar", vosaltres:"vau entrar", "ells/elles/vostès":"van entrar"},
      imp: {jo:"entrava", tu:"entraves", "ell/ella/vostè":"entrava", nosaltres:"entràvem", vosaltres:"entràveu", "ells/elles/vostès":"entraven"},
      fut: {jo:"entraré", tu:"entraràs", "ell/ella/vostè":"entrarà", nosaltres:"entrarem", vosaltres:"entrareu", "ells/elles/vostès":"entraran"},
      cond: {jo:"entraria", tu:"entraries", "ell/ella/vostè":"entraria", nosaltres:"entraríem", vosaltres:"entraríeu", "ells/elles/vostès":"entrarien"},
      imper: {tu:"entra", "vostè":"entri", vosaltres:"entreu", "vostès":"entrin"}
    },
    french: {
      pres: {je:"entre", tu:"entres", "il/elle/vous":"entre", nous:"entrons", vous:"entrez", "ils/elles":"entrent"},
      perf: {je:"suis entré(e)", tu:"es entré(e)", "il/elle/vous":"est entré(e)", nous:"sommes entré(e)s", vous:"êtes entré(e)(s)", "ils/elles":"sont entré(e)s"},
      imp: {je:"entrais", tu:"entrais", "il/elle/vous":"entrait", nous:"entrions", vous:"entriez", "ils/elles":"entraient"},
      fut: {je:"entrerai", tu:"entreras", "il/elle/vous":"entrera", nous:"entrerons", vous:"entrerez", "ils/elles":"entreront"},
      cond: {je:"entrerais", tu:"entrerais", "il/elle/vous":"entrerait", nous:"entrerions", vous:"entreriez", "ils/elles":"entreraient"},
      imper: {tu:"entre", "vous":"entrez", nous:"entrons"}
    }
  },
  {
    ca: "esperar",
    en: "to wait/hope",
    fr: "attendre",
    type: "regular -ar",
    catalan: {
      pres: {jo:"espero", tu:"esperes", "ell/ella/vostè":"espera", nosaltres:"esperem", vosaltres:"espereu", "ells/elles/vostès":"esperen"},
      perf: {jo:"vaig esperar", tu:"vas esperar", "ell/ella/vostè":"va esperar", nosaltres:"vam esperar", vosaltres:"vau esperar", "ells/elles/vostès":"van esperar"},
      imp: {jo:"esperava", tu:"esperaves", "ell/ella/vostè":"esperava", nosaltres:"esperàvem", vosaltres:"esperàveu", "ells/elles/vostès":"esperaven"},
      fut: {jo:"esperaré", tu:"esperaràs", "ell/ella/vostè":"esperarà", nosaltres:"esperarem", vosaltres:"esperareu", "ells/elles/vostès":"esperaran"},
      cond: {jo:"esperaria", tu:"esperaries", "ell/ella/vostè":"esperaria", nosaltres:"esperaríem", vosaltres:"esperaríeu", "ells/elles/vostès":"esperarien"},
      imper: {tu:"espera", "vostè":"esperi", vosaltres:"espereu", "vostès":"esperin"}
    },
    french: {
      pres: {je:"attends", tu:"attends", "il/elle/vous":"attend", nous:"attendons", vous:"attendez", "ils/elles":"attendent"},
      perf: {je:"ai attendu", tu:"as attendu", "il/elle/vous":"a attendu", nous:"avons attendu", vous:"avez attendu", "ils/elles":"ont attendu"},
      imp: {je:"attendais", tu:"attendais", "il/elle/vous":"attendait", nous:"attendions", vous:"attendiez", "ils/elles":"attendaient"},
      fut: {je:"attendrai", tu:"attendras", "il/elle/vous":"attendra", nous:"attendrons", vous:"attendrez", "ils/elles":"attendront"},
      cond: {je:"attendrais", tu:"attendrais", "il/elle/vous":"attendrait", nous:"attendrions", vous:"attendriez", "ils/elles":"attendraient"},
      imper: {tu:"attends", "vous":"attendez", nous:"attendons"}
    }
  },
  {
    ca: "estimar",
    en: "to love",
    fr: "aimer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"estimo", tu:"estimes", "ell/ella/vostè":"estima", nosaltres:"estimem", vosaltres:"estimeu", "ells/elles/vostès":"estimen"},
      perf: {jo:"vaig estimar", tu:"vas estimar", "ell/ella/vostè":"va estimar", nosaltres:"vam estimar", vosaltres:"vau estimar", "ells/elles/vostès":"van estimar"},
      imp: {jo:"estimava", tu:"estimaves", "ell/ella/vostè":"estimava", nosaltres:"estimàvem", vosaltres:"estimàveu", "ells/elles/vostès":"estimaven"},
      fut: {jo:"estimaré", tu:"estimaràs", "ell/ella/vostè":"estimarà", nosaltres:"estimarem", vosaltres:"estimareu", "ells/elles/vostès":"estimaran"},
      cond: {jo:"estimaria", tu:"estimaries", "ell/ella/vostè":"estimaria", nosaltres:"estimaríem", vosaltres:"estimaríeu", "ells/elles/vostès":"estimarien"},
      imper: {tu:"estima", "vostè":"estimi", vosaltres:"estimeu", "vostès":"estimin"}
    },
    french: {
      pres: {je:"aime", tu:"aimes", "il/elle/vous":"aime", nous:"aimons", vous:"aimez", "ils/elles":"aiment"},
      perf: {je:"ai aimé", tu:"as aimé", "il/elle/vous":"a aimé", nous:"avons aimé", vous:"avez aimé", "ils/elles":"ont aimé"},
      imp: {je:"aimais", tu:"aimais", "il/elle/vous":"aimait", nous:"aimions", vous:"aimiez", "ils/elles":"aimaient"},
      fut: {je:"aimerai", tu:"aimeras", "il/elle/vous":"aimera", nous:"aimerons", vous:"aimerez", "ils/elles":"aimeront"},
      cond: {je:"aimerais", tu:"aimerais", "il/elle/vous":"aimerait", nous:"aimerions", vous:"aimeriez", "ils/elles":"aimeraient"},
      imper: {tu:"aime", "vous":"aimez", nous:"aimons"}
    }
  },
  {
    ca: "estudiar",
    en: "to study",
    fr: "étudier",
    type: "regular -ar",
    catalan: {
      pres: {jo:"estudio", tu:"estudies", "ell/ella/vostè":"estudia", nosaltres:"estudiem", vosaltres:"estudieu", "ells/elles/vostès":"estudien"},
      perf: {jo:"vaig estudiar", tu:"vas estudiar", "ell/ella/vostè":"va estudiar", nosaltres:"vam estudiar", vosaltres:"vau estudiar", "ells/elles/vostès":"van estudiar"},
      imp: {jo:"estudiava", tu:"estudiaves", "ell/ella/vostè":"estudiava", nosaltres:"estudiàvem", vosaltres:"estudiàveu", "ells/elles/vostès":"estudiaven"},
      fut: {jo:"estudiaré", tu:"estudiaràs", "ell/ella/vostè":"estudiarà", nosaltres:"estudiarem", vosaltres:"estudiareu", "ells/elles/vostès":"estudiaran"},
      cond: {jo:"estudiaria", tu:"estudiaries", "ell/ella/vostè":"estudiaria", nosaltres:"estudiaríem", vosaltres:"estudiaríeu", "ells/elles/vostès":"estudiarien"},
      imper: {tu:"estudia", "vostè":"estudiï", vosaltres:"estudieu", "vostès":"estudiïn"}
    },
    french: {
      pres: {je:"étudie", tu:"étudies", "il/elle/vous":"étudie", nous:"étudions", vous:"étudiez", "ils/elles":"étudient"},
      perf: {je:"ai étudié", tu:"as étudié", "il/elle/vous":"a étudié", nous:"avons étudié", vous:"avez étudié", "ils/elles":"ont étudié"},
      imp: {je:"étudiais", tu:"étudiais", "il/elle/vous":"étudiait", nous:"étudiions", vous:"étudiiez", "ils/elles":"étudiaient"},
      fut: {je:"étudierai", tu:"étudieras", "il/elle/vous":"étudiera", nous:"étudierons", vous:"étudierez", "ils/elles":"étudieront"},
      cond: {je:"étudierais", tu:"étudierais", "il/elle/vous":"étudierait", nous:"étudierions", vous:"étudieriez", "ils/elles":"étudieraient"},
      imper: {tu:"étudie", "vous":"étudiez", nous:"étudions"}
    }
  },
  {
    ca: "explicar",
    en: "to explain",
    fr: "expliquer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"explico", tu:"expliques", "ell/ella/vostè":"explica", nosaltres:"expliquem", vosaltres:"expliqueu", "ells/elles/vostès":"expliquen"},
      perf: {jo:"vaig explicar", tu:"vas explicar", "ell/ella/vostè":"va explicar", nosaltres:"vam explicar", vosaltres:"vau explicar", "ells/elles/vostès":"van explicar"},
      imp: {jo:"explicava", tu:"explicaves", "ell/ella/vostè":"explicava", nosaltres:"explicàvem", vosaltres:"explicàveu", "ells/elles/vostès":"explicaven"},
      fut: {jo:"explicaré", tu:"explicaràs", "ell/ella/vostè":"explicarà", nosaltres:"explicarem", vosaltres:"explicareu", "ells/elles/vostès":"explicaran"},
      cond: {jo:"explicaria", tu:"explicaries", "ell/ella/vostè":"explicaria", nosaltres:"explicaríem", vosaltres:"explicaríeu", "ells/elles/vostès":"explicarien"},
      imper: {tu:"explica", "vostè":"expliqui", vosaltres:"expliqueu", "vostès":"expliquin"}
    },
    french: {
      pres: {je:"explique", tu:"expliques", "il/elle/vous":"explique", nous:"expliquons", vous:"expliquez", "ils/elles":"expliquent"},
      perf: {je:"ai expliqué", tu:"as expliqué", "il/elle/vous":"a expliqué", nous:"avons expliqué", vous:"avez expliqué", "ils/elles":"ont expliqué"},
      imp: {je:"expliquais", tu:"expliquais", "il/elle/vous":"expliquait", nous:"expliquions", vous:"expliquiez", "ils/elles":"expliquaient"},
      fut: {je:"expliquerai", tu:"expliqueras", "il/elle/vous":"expliquera", nous:"expliquerons", vous:"expliquerez", "ils/elles":"expliqueront"},
      cond: {je:"expliquerais", tu:"expliquerais", "il/elle/vous":"expliquerait", nous:"expliquerions", vous:"expliqueriez", "ils/elles":"expliqueraient"},
      imper: {tu:"explique", "vous":"expliquez", nous:"expliquons"}
    }
  },
  {
    ca: "guanyar",
    en: "to win/earn",
    fr: "gagner",
    type: "regular -ar",
    catalan: {
      pres: {jo:"guanyo", tu:"guanyes", "ell/ella/vostè":"guanya", nosaltres:"guanyem", vosaltres:"guanyeu", "ells/elles/vostès":"guanyen"},
      perf: {jo:"vaig guanyar", tu:"vas guanyar", "ell/ella/vostè":"va guanyar", nosaltres:"vam guanyar", vosaltres:"vau guanyar", "ells/elles/vostès":"van guanyar"},
      imp: {jo:"guanyava", tu:"guanyaves", "ell/ella/vostè":"guanyava", nosaltres:"guanyàvem", vosaltres:"guanyàveu", "ells/elles/vostès":"guanyaven"},
      fut: {jo:"guanyaré", tu:"guanyaràs", "ell/ella/vostè":"guanyarà", nosaltres:"guanyarem", vosaltres:"guanyareu", "ells/elles/vostès":"guanyaran"},
      cond: {jo:"guanyaria", tu:"guanyaries", "ell/ella/vostè":"guanyaria", nosaltres:"guanyaríem", vosaltres:"guanyaríeu", "ells/elles/vostès":"guanyarien"},
      imper: {tu:"guanya", "vostè":"guanyi", vosaltres:"guanyeu", "vostès":"guanyin"}
    },
    french: {
      pres: {je:"gagne", tu:"gagnes", "il/elle/vous":"gagne", nous:"gagnons", vous:"gagnez", "ils/elles":"gagnent"},
      perf: {je:"ai gagné", tu:"as gagné", "il/elle/vous":"a gagné", nous:"avons gagné", vous:"avez gagné", "ils/elles":"ont gagné"},
      imp: {je:"gagnais", tu:"gagnais", "il/elle/vous":"gagnait", nous:"gagnions", vous:"gagniez", "ils/elles":"gagnaient"},
      fut: {je:"gagnerai", tu:"gagneras", "il/elle/vous":"gagnera", nous:"gagnerons", vous:"gagnerez", "ils/elles":"gagneront"},
      cond: {je:"gagnerais", tu:"gagnerais", "il/elle/vous":"gagnerait", nous:"gagnerions", vous:"gagneriez", "ils/elles":"gagneraient"},
      imper: {tu:"gagne", "vous":"gagnez", nous:"gagnons"}
    }
  },
  {
    ca: "jugar",
    en: "to play",
    fr: "jouer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"jugo", tu:"jugues", "ell/ella/vostè":"juga", nosaltres:"juguem", vosaltres:"jugueu", "ells/elles/vostès":"juguen"},
      perf: {jo:"vaig jugar", tu:"vas jugar", "ell/ella/vostè":"va jugar", nosaltres:"vam jugar", vosaltres:"vau jugar", "ells/elles/vostès":"van jugar"},
      imp: {jo:"jugava", tu:"jugaves", "ell/ella/vostè":"jugava", nosaltres:"jugàvem", vosaltres:"jugàveu", "ells/elles/vostès":"jugaven"},
      fut: {jo:"jugaré", tu:"jugaràs", "ell/ella/vostè":"jugarà", nosaltres:"jugarem", vosaltres:"jugareu", "ells/elles/vostès":"jugaran"},
      cond: {jo:"jugaria", tu:"jugaries", "ell/ella/vostè":"jugaria", nosaltres:"jugaríem", vosaltres:"jugaríeu", "ells/elles/vostès":"jugarien"},
      imper: {tu:"juga", "vostè":"jugui", vosaltres:"jugueu", "vostès":"juguin"}
    },
    french: {
      pres: {je:"joue", tu:"joues", "il/elle/vous":"joue", nous:"jouons", vous:"jouez", "ils/elles":"jouent"},
      perf: {je:"ai joué", tu:"as joué", "il/elle/vous":"a joué", nous:"avons joué", vous:"avez joué", "ils/elles":"ont joué"},
      imp: {je:"jouais", tu:"jouais", "il/elle/vous":"jouait", nous:"jouions", vous:"jouiez", "ils/elles":"jouaient"},
      fut: {je:"jouerai", tu:"joueras", "il/elle/vous":"jouera", nous:"jouerons", vous:"jouerez", "ils/elles":"joueront"},
      cond: {je:"jouerais", tu:"jouerais", "il/elle/vous":"jouerait", nous:"jouerions", vous:"joueriez", "ils/elles":"joueraient"},
      imper: {tu:"joue", "vous":"jouez", nous:"jouons"}
    }
  },
  {
    ca: "llevar-se",
    en: "to get up",
    fr: "se lever",
    type: "regular -ar (reflexiu)",
    catalan: {
      pres: {jo:"em llevo", tu:"et lleves", "ell/ella/vostè":"es lleva", nosaltres:"ens llevem", vosaltres:"us lleveu", "ells/elles/vostès":"es lleven"},
      perf: {jo:"em vaig llevar", tu:"et vas llevar", "ell/ella/vostè":"es va llevar", nosaltres:"ens vam llevar", vosaltres:"us vau llevar", "ells/elles/vostès":"es van llevar"},
      imp: {jo:"em llevava", tu:"et llevaves", "ell/ella/vostè":"es llevava", nosaltres:"ens llevàvem", vosaltres:"us llevàveu", "ells/elles/vostès":"es llevaven"},
      fut: {jo:"em llevaré", tu:"et llevaràs", "ell/ella/vostè":"es llevarà", nosaltres:"ens llevarem", vosaltres:"us llevareu", "ells/elles/vostès":"es llevaran"},
      cond: {jo:"em llevaria", tu:"et llevaries", "ell/ella/vostè":"es llevaria", nosaltres:"ens llevaríem", vosaltres:"us llevaríeu", "ells/elles/vostès":"es llevarien"},
      imper: {tu:"lleva't", "vostè":"llevi's", vosaltres:"lleveu-vos", "vostès":"llevin-se"}
    },
    french: {
      pres: {je:"me lève", tu:"te lèves", "il/elle/vous":"se lève", nous:"nous levons", vous:"vous levez", "ils/elles":"se lèvent"},
      perf: {je:"me suis levé(e)", tu:"t'es levé(e)", "il/elle/vous":"s'est levé(e)", nous:"nous sommes levé(e)s", vous:"vous êtes levé(e)(s)", "ils/elles":"se sont levé(e)s"},
      imp: {je:"me levais", tu:"te levais", "il/elle/vous":"se levait", nous:"nous levions", vous:"vous leviez", "ils/elles":"se levaient"},
      fut: {je:"me lèverai", tu:"te lèveras", "il/elle/vous":"se lèvera", nous:"nous lèverons", vous:"vous lèverez", "ils/elles":"se lèveront"},
      cond: {je:"me lèverais", tu:"te lèverais", "il/elle/vous":"se lèverait", nous:"nous lèverions", vous:"vous lèveriez", "ils/elles":"se lèveraient"},
      imper: {tu:"lève-toi", "vous":"levez-vous", nous:"levons-nous"}
    }
  },
  {
    ca: "mirar",
    en: "to look/watch",
    fr: "regarder",
    type: "regular -ar",
    catalan: {
      pres: {jo:"miro", tu:"mires", "ell/ella/vostè":"mira", nosaltres:"mirem", vosaltres:"mireu", "ells/elles/vostès":"miren"},
      perf: {jo:"vaig mirar", tu:"vas mirar", "ell/ella/vostè":"va mirar", nosaltres:"vam mirar", vosaltres:"vau mirar", "ells/elles/vostès":"van mirar"},
      imp: {jo:"mirava", tu:"miraves", "ell/ella/vostè":"mirava", nosaltres:"miràvem", vosaltres:"miràveu", "ells/elles/vostès":"miraven"},
      fut: {jo:"miraré", tu:"miraràs", "ell/ella/vostè":"mirarà", nosaltres:"mirarem", vosaltres:"mirareu", "ells/elles/vostès":"miraran"},
      cond: {jo:"miraria", tu:"miraries", "ell/ella/vostè":"miraria", nosaltres:"miraríem", vosaltres:"miraríeu", "ells/elles/vostès":"mirarien"},
      imper: {tu:"mira", "vostè":"miri", vosaltres:"mireu", "vostès":"mirin"}
    },
    french: {
      pres: {je:"regarde", tu:"regardes", "il/elle/vous":"regarde", nous:"regardons", vous:"regardez", "ils/elles":"regardent"},
      perf: {je:"ai regardé", tu:"as regardé", "il/elle/vous":"a regardé", nous:"avons regardé", vous:"avez regardé", "ils/elles":"ont regardé"},
      imp: {je:"regardais", tu:"regardais", "il/elle/vous":"regardait", nous:"regardions", vous:"regardiez", "ils/elles":"regardaient"},
      fut: {je:"regarderai", tu:"regarderas", "il/elle/vous":"regardera", nous:"regarderons", vous:"regarderez", "ils/elles":"regarderont"},
      cond: {je:"regarderais", tu:"regarderais", "il/elle/vous":"regarderait", nous:"regarderions", vous:"regarderiez", "ils/elles":"regarderaient"},
      imper: {tu:"regarde", "vous":"regardez", nous:"regardons"}
    }
  },
  {
    ca: "necessitar",
    en: "to need",
    fr: "avoir besoin de",
    type: "regular -ar",
    catalan: {
      pres: {jo:"necessito", tu:"necessites", "ell/ella/vostè":"necessita", nosaltres:"necessitem", vosaltres:"necessiteu", "ells/elles/vostès":"necessiten"},
      perf: {jo:"vaig necessitar", tu:"vas necessitar", "ell/ella/vostè":"va necessitar", nosaltres:"vam necessitar", vosaltres:"vau necessitar", "ells/elles/vostès":"van necessitar"},
      imp: {jo:"necessitava", tu:"necessitaves", "ell/ella/vostè":"necessitava", nosaltres:"necessitàvem", vosaltres:"necessitàveu", "ells/elles/vostès":"necessitaven"},
      fut: {jo:"necessitaré", tu:"necessitaràs", "ell/ella/vostè":"necessitarà", nosaltres:"necessitarem", vosaltres:"necessitareu", "ells/elles/vostès":"necessitaran"},
      cond: {jo:"necessitaria", tu:"necessitaries", "ell/ella/vostè":"necessitaria", nosaltres:"necessitaríem", vosaltres:"necessitaríeu", "ells/elles/vostès":"necessitarien"},
      imper: {tu:"necessita", "vostè":"necessiti", vosaltres:"necessiteu", "vostès":"necessitin"}
    },
    french: {
      pres: {je:"ai besoin", tu:"as besoin", "il/elle/vous":"a besoin", nous:"avons besoin", vous:"avez besoin", "ils/elles":"ont besoin"},
      perf: {je:"ai eu besoin", tu:"as eu besoin", "il/elle/vous":"a eu besoin", nous:"avons eu besoin", vous:"avez eu besoin", "ils/elles":"ont eu besoin"},
      imp: {je:"avais besoin", tu:"avais besoin", "il/elle/vous":"avait besoin", nous:"avions besoin", vous:"aviez besoin", "ils/elles":"avaient besoin"},
      fut: {je:"aurai besoin", tu:"auras besoin", "il/elle/vous":"aura besoin", nous:"aurons besoin", vous:"aurez besoin", "ils/elles":"auront besoin"},
      cond: {je:"aurais besoin", tu:"aurais besoin", "il/elle/vous":"aurait besoin", nous:"aurions besoin", vous:"auriez besoin", "ils/elles":"auraient besoin"}
    }
  },
  {
    ca: "netejar",
    en: "to clean",
    fr: "nettoyer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"netejo", tu:"neteges", "ell/ella/vostè":"neteja", nosaltres:"netegem", vosaltres:"netegeu", "ells/elles/vostès":"netegen"},
      perf: {jo:"vaig netejar", tu:"vas netejar", "ell/ella/vostè":"va netejar", nosaltres:"vam netejar", vosaltres:"vau netejar", "ells/elles/vostès":"van netejar"},
      imp: {jo:"netejava", tu:"netejaves", "ell/ella/vostè":"netejava", nosaltres:"netejàvem", vosaltres:"netejàveu", "ells/elles/vostès":"netejaven"},
      fut: {jo:"netejaré", tu:"netejaràs", "ell/ella/vostè":"netejarà", nosaltres:"netejarem", vosaltres:"netejareu", "ells/elles/vostès":"netejaran"},
      cond: {jo:"netejaria", tu:"netejaries", "ell/ella/vostè":"netejaria", nosaltres:"netejaríem", vosaltres:"netejaríeu", "ells/elles/vostès":"netejarien"},
      imper: {tu:"neteja", "vostè":"netegi", vosaltres:"netegeu", "vostès":"netegin"}
    },
    french: {
      pres: {je:"nettoie", tu:"nettoies", "il/elle/vous":"nettoie", nous:"nettoyons", vous:"nettoyez", "ils/elles":"nettoient"},
      perf: {je:"ai nettoyé", tu:"as nettoyé", "il/elle/vous":"a nettoyé", nous:"avons nettoyé", vous:"avez nettoyé", "ils/elles":"ont nettoyé"},
      imp: {je:"nettoyais", tu:"nettoyais", "il/elle/vous":"nettoyait", nous:"nettoyions", vous:"nettoyiez", "ils/elles":"nettoyaient"},
      fut: {je:"nettoierai", tu:"nettoieras", "il/elle/vous":"nettoiera", nous:"nettoierons", vous:"nettoierez", "ils/elles":"nettoieront"},
      cond: {je:"nettoierais", tu:"nettoierais", "il/elle/vous":"nettoierait", nous:"nettoierions", vous:"nettoieriez", "ils/elles":"nettoieraient"},
      imper: {tu:"nettoie", "vous":"nettoyez", nous:"nettoyons"}
    }
  },
  {
    ca: "obrir",
    en: "to open",
    fr: "ouvrir",
    type: "irregular",
    catalan: {
      pres: {jo:"obro", tu:"obres", "ell/ella/vostè":"obre", nosaltres:"obrim", vosaltres:"obriu", "ells/elles/vostès":"obren"},
      perf: {jo:"vaig obrir", tu:"vas obrir", "ell/ella/vostè":"va obrir", nosaltres:"vam obrir", vosaltres:"vau obrir", "ells/elles/vostès":"van obrir"},
      imp: {jo:"obria", tu:"obries", "ell/ella/vostè":"obria", nosaltres:"obríem", vosaltres:"obríeu", "ells/elles/vostès":"obrien"},
      fut: {jo:"obriré", tu:"obriràs", "ell/ella/vostè":"obrirà", nosaltres:"obrirem", vosaltres:"obrireu", "ells/elles/vostès":"obriran"},
      cond: {jo:"obriria", tu:"obriries", "ell/ella/vostè":"obriria", nosaltres:"obriríem", vosaltres:"obriríeu", "ells/elles/vostès":"obririen"},
      imper: {tu:"obre", "vostè":"obri", vosaltres:"obriu", "vostès":"obrin"}
    },
    french: {
      pres: {je:"ouvre", tu:"ouvres", "il/elle/vous":"ouvre", nous:"ouvrons", vous:"ouvrez", "ils/elles":"ouvrent"},
      perf: {je:"ai ouvert", tu:"as ouvert", "il/elle/vous":"a ouvert", nous:"avons ouvert", vous:"avez ouvert", "ils/elles":"ont ouvert"},
      imp: {je:"ouvrais", tu:"ouvrais", "il/elle/vous":"ouvrait", nous:"ouvrions", vous:"ouvriez", "ils/elles":"ouvraient"},
      fut: {je:"ouvrirai", tu:"ouvriras", "il/elle/vous":"ouvrira", nous:"ouvrirons", vous:"ouvrirez", "ils/elles":"ouvriront"},
      cond: {je:"ouvrirais", tu:"ouvrirais", "il/elle/vous":"ouvrirait", nous:"ouvririons", vous:"ouvririez", "ils/elles":"ouvriraient"},
      imper: {tu:"ouvre", "vous":"ouvrez", nous:"ouvrons"}
    }
  },
  {
    ca: "oferir",
    en: "to offer",
    fr: "offrir",
    type: "regular -ir (incoatiu)",
    catalan: {
      pres: {jo:"ofereixo", tu:"ofereixes", "ell/ella/vostè":"ofereix", nosaltres:"oferim", vosaltres:"oferiu", "ells/elles/vostès":"ofereixen"},
      perf: {jo:"vaig oferir", tu:"vas oferir", "ell/ella/vostè":"va oferir", nosaltres:"vam oferir", vosaltres:"vau oferir", "ells/elles/vostès":"van oferir"},
      imp: {jo:"oferia", tu:"oferies", "ell/ella/vostè":"oferia", nosaltres:"oferíem", vosaltres:"oferíeu", "ells/elles/vostès":"oferien"},
      fut: {jo:"oferiré", tu:"oferiràs", "ell/ella/vostè":"oferirà", nosaltres:"oferirem", vosaltres:"oferireu", "ells/elles/vostès":"oferiran"},
      cond: {jo:"oferiria", tu:"oferiries", "ell/ella/vostè":"oferiria", nosaltres:"oferiríem", vosaltres:"oferiríeu", "ells/elles/vostès":"oferirien"},
      imper: {tu:"ofereix", "vostè":"ofereixi", vosaltres:"oferiu", "vostès":"ofereixin"}
    },
    french: {
      pres: {je:"offre", tu:"offres", "il/elle/vous":"offre", nous:"offrons", vous:"offrez", "ils/elles":"offrent"},
      perf: {je:"ai offert", tu:"as offert", "il/elle/vous":"a offert", nous:"avons offert", vous:"avez offert", "ils/elles":"ont offert"},
      imp: {je:"offrais", tu:"offrais", "il/elle/vous":"offrait", nous:"offrions", vous:"offriez", "ils/elles":"offraient"},
      fut: {je:"offrirai", tu:"offriras", "il/elle/vous":"offrira", nous:"offrirons", vous:"offrirez", "ils/elles":"offriront"},
      cond: {je:"offrirais", tu:"offrirais", "il/elle/vous":"offrirait", nous:"offririons", vous:"offririez", "ils/elles":"offriraient"},
      imper: {tu:"offre", "vous":"offrez", nous:"offrons"}
    }
  },
  {
    ca: "pagar",
    en: "to pay",
    fr: "payer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"pago", tu:"pagues", "ell/ella/vostè":"paga", nosaltres:"paguem", vosaltres:"pagueu", "ells/elles/vostès":"paguen"},
      perf: {jo:"vaig pagar", tu:"vas pagar", "ell/ella/vostè":"va pagar", nosaltres:"vam pagar", vosaltres:"vau pagar", "ells/elles/vostès":"van pagar"},
      imp: {jo:"pagava", tu:"pagaves", "ell/ella/vostè":"pagava", nosaltres:"pagàvem", vosaltres:"pagàveu", "ells/elles/vostès":"pagaven"},
      fut: {jo:"pagaré", tu:"pagaràs", "ell/ella/vostè":"pagarà", nosaltres:"pagarem", vosaltres:"pagareu", "ells/elles/vostès":"pagaran"},
      cond: {jo:"pagaria", tu:"pagaries", "ell/ella/vostè":"pagaria", nosaltres:"pagaríem", vosaltres:"pagaríeu", "ells/elles/vostès":"pagarien"},
      imper: {tu:"paga", "vostè":"pagui", vosaltres:"pagueu", "vostès":"paguin"}
    },
    french: {
      pres: {je:"paie", tu:"paies", "il/elle/vous":"paie", nous:"payons", vous:"payez", "ils/elles":"paient"},
      perf: {je:"ai payé", tu:"as payé", "il/elle/vous":"a payé", nous:"avons payé", vous:"avez payé", "ils/elles":"ont payé"},
      imp: {je:"payais", tu:"payais", "il/elle/vous":"payait", nous:"payions", vous:"payiez", "ils/elles":"payaient"},
      fut: {je:"paierai", tu:"paieras", "il/elle/vous":"paiera", nous:"paierons", vous:"paierez", "ils/elles":"paieront"},
      cond: {je:"paierais", tu:"paierais", "il/elle/vous":"paierait", nous:"paierions", vous:"paieriez", "ils/elles":"paieraient"},
      imper: {tu:"paie", "vous":"payez", nous:"payons"}
    }
  },
  {
    ca: "pensar",
    en: "to think",
    fr: "penser",
    type: "regular -ar",
    catalan: {
      pres: {jo:"penso", tu:"penses", "ell/ella/vostè":"pensa", nosaltres:"pensem", vosaltres:"penseu", "ells/elles/vostès":"pensen"},
      perf: {jo:"vaig pensar", tu:"vas pensar", "ell/ella/vostè":"va pensar", nosaltres:"vam pensar", vosaltres:"vau pensar", "ells/elles/vostès":"van pensar"},
      imp: {jo:"pensava", tu:"pensaves", "ell/ella/vostè":"pensava", nosaltres:"pensàvem", vosaltres:"pensàveu", "ells/elles/vostès":"pensaven"},
      fut: {jo:"pensaré", tu:"pensaràs", "ell/ella/vostè":"pensarà", nosaltres:"pensarem", vosaltres:"pensareu", "ells/elles/vostès":"pensaran"},
      cond: {jo:"pensaria", tu:"pensaries", "ell/ella/vostè":"pensaria", nosaltres:"pensaríem", vosaltres:"pensaríeu", "ells/elles/vostès":"pensarien"},
      imper: {tu:"pensa", "vostè":"pensi", vosaltres:"penseu", "vostès":"pensin"}
    },
    french: {
      pres: {je:"pense", tu:"penses", "il/elle/vous":"pense", nous:"pensons", vous:"pensez", "ils/elles":"pensent"},
      perf: {je:"ai pensé", tu:"as pensé", "il/elle/vous":"a pensé", nous:"avons pensé", vous:"avez pensé", "ils/elles":"ont pensé"},
      imp: {je:"pensais", tu:"pensais", "il/elle/vous":"pensait", nous:"pensions", vous:"pensiez", "ils/elles":"pensaient"},
      fut: {je:"penserai", tu:"penseras", "il/elle/vous":"pensera", nous:"penserons", vous:"penserez", "ils/elles":"penseront"},
      cond: {je:"penserais", tu:"penserais", "il/elle/vous":"penserait", nous:"penserions", vous:"penseriez", "ils/elles":"penseraient"},
      imper: {tu:"pense", "vous":"pensez", nous:"pensons"}
    }
  },
  {
    ca: "perdre",
    en: "to lose",
    fr: "perdre",
    type: "irregular",
    catalan: {
      pres: {jo:"perdo", tu:"perds", "ell/ella/vostè":"perd", nosaltres:"perdem", vosaltres:"perdeu", "ells/elles/vostès":"perden"},
      perf: {jo:"vaig perdre", tu:"vas perdre", "ell/ella/vostè":"va perdre", nosaltres:"vam perdre", vosaltres:"vau perdre", "ells/elles/vostès":"van perdre"},
      imp: {jo:"perdia", tu:"perdies", "ell/ella/vostè":"perdia", nosaltres:"perdíem", vosaltres:"perdíeu", "ells/elles/vostès":"perdien"},
      fut: {jo:"perdré", tu:"perdràs", "ell/ella/vostè":"perdrà", nosaltres:"perdrem", vosaltres:"perdreu", "ells/elles/vostès":"perdran"},
      cond: {jo:"perdria", tu:"perdries", "ell/ella/vostè":"perdria", nosaltres:"perdríem", vosaltres:"perdríeu", "ells/elles/vostès":"perdrien"},
      imper: {tu:"perd", "vostè":"perdi", vosaltres:"perdeu", "vostès":"perdin"}
    },
    french: {
      pres: {je:"perds", tu:"perds", "il/elle/vous":"perd", nous:"perdons", vous:"perdez", "ils/elles":"perdent"},
      perf: {je:"ai perdu", tu:"as perdu", "il/elle/vous":"a perdu", nous:"avons perdu", vous:"avez perdu", "ils/elles":"ont perdu"},
      imp: {je:"perdais", tu:"perdais", "il/elle/vous":"perdait", nous:"perdions", vous:"perdiez", "ils/elles":"perdaient"},
      fut: {je:"perdrai", tu:"perdras", "il/elle/vous":"perdra", nous:"perdrons", vous:"perdrez", "ils/elles":"perdront"},
      cond: {je:"perdrais", tu:"perdrais", "il/elle/vous":"perdrait", nous:"perdrions", vous:"perdriez", "ils/elles":"perdraient"},
      imper: {tu:"perds", "vous":"perdez", nous:"perdons"}
    }
  },
  {
    ca: "portar",
    en: "to bring/carry/wear",
    fr: "porter",
    type: "regular -ar",
    catalan: {
      pres: {jo:"porto", tu:"portes", "ell/ella/vostè":"porta", nosaltres:"portem", vosaltres:"porteu", "ells/elles/vostès":"porten"},
      perf: {jo:"vaig portar", tu:"vas portar", "ell/ella/vostè":"va portar", nosaltres:"vam portar", vosaltres:"vau portar", "ells/elles/vostès":"van portar"},
      imp: {jo:"portava", tu:"portaves", "ell/ella/vostè":"portava", nosaltres:"portàvem", vosaltres:"portàveu", "ells/elles/vostès":"portaven"},
      fut: {jo:"portaré", tu:"portaràs", "ell/ella/vostè":"portarà", nosaltres:"portarem", vosaltres:"portareu", "ells/elles/vostès":"portaran"},
      cond: {jo:"portaria", tu:"portaries", "ell/ella/vostè":"portaria", nosaltres:"portaríem", vosaltres:"portaríeu", "ells/elles/vostès":"portarien"},
      imper: {tu:"porta", "vostè":"porti", vosaltres:"porteu", "vostès":"portin"}
    },
    french: {
      pres: {je:"porte", tu:"portes", "il/elle/vous":"porte", nous:"portons", vous:"portez", "ils/elles":"portent"},
      perf: {je:"ai porté", tu:"as porté", "il/elle/vous":"a porté", nous:"avons porté", vous:"avez porté", "ils/elles":"ont porté"},
      imp: {je:"portais", tu:"portais", "il/elle/vous":"portait", nous:"portions", vous:"portiez", "ils/elles":"portaient"},
      fut: {je:"porterai", tu:"porteras", "il/elle/vous":"portera", nous:"porterons", vous:"porterez", "ils/elles":"porteront"},
      cond: {je:"porterais", tu:"porterais", "il/elle/vous":"porterait", nous:"porterions", vous:"porteriez", "ils/elles":"porteraient"},
      imper: {tu:"porte", "vous":"portez", nous:"portons"}
    }
  },
  {
    ca: "posar",
    en: "to put/place",
    fr: "mettre",
    type: "regular -ar",
    catalan: {
      pres: {jo:"poso", tu:"poses", "ell/ella/vostè":"posa", nosaltres:"posem", vosaltres:"poseu", "ells/elles/vostès":"posen"},
      perf: {jo:"vaig posar", tu:"vas posar", "ell/ella/vostè":"va posar", nosaltres:"vam posar", vosaltres:"vau posar", "ells/elles/vostès":"van posar"},
      imp: {jo:"posava", tu:"posaves", "ell/ella/vostè":"posava", nosaltres:"posàvem", vosaltres:"posàveu", "ells/elles/vostès":"posaven"},
      fut: {jo:"posaré", tu:"posaràs", "ell/ella/vostè":"posarà", nosaltres:"posarem", vosaltres:"posareu", "ells/elles/vostès":"posaran"},
      cond: {jo:"posaria", tu:"posaries", "ell/ella/vostè":"posaria", nosaltres:"posaríem", vosaltres:"posaríeu", "ells/elles/vostès":"posarien"},
      imper: {tu:"posa", "vostè":"posi", vosaltres:"poseu", "vostès":"posin"}
    },
    french: {
      pres: {je:"mets", tu:"mets", "il/elle/vous":"met", nous:"mettons", vous:"mettez", "ils/elles":"mettent"},
      perf: {je:"ai mis", tu:"as mis", "il/elle/vous":"a mis", nous:"avons mis", vous:"avez mis", "ils/elles":"ont mis"},
      imp: {je:"mettais", tu:"mettais", "il/elle/vous":"mettait", nous:"mettions", vous:"mettiez", "ils/elles":"mettaient"},
      fut: {je:"mettrai", tu:"mettras", "il/elle/vous":"mettra", nous:"mettrons", vous:"mettrez", "ils/elles":"mettront"},
      cond: {je:"mettrais", tu:"mettrais", "il/elle/vous":"mettrait", nous:"mettrions", vous:"mettriez", "ils/elles":"mettraient"},
      imper: {tu:"mets", "vous":"mettez", nous:"mettons"}
    }
  },
  {
    ca: "preguntar",
    en: "to ask (a question)",
    fr: "demander",
    type: "regular -ar",
    catalan: {
      pres: {jo:"pregunto", tu:"preguntes", "ell/ella/vostè":"pregunta", nosaltres:"preguntem", vosaltres:"pregunteu", "ells/elles/vostès":"pregunten"},
      perf: {jo:"vaig preguntar", tu:"vas preguntar", "ell/ella/vostè":"va preguntar", nosaltres:"vam preguntar", vosaltres:"vau preguntar", "ells/elles/vostès":"van preguntar"},
      imp: {jo:"preguntava", tu:"preguntaves", "ell/ella/vostè":"preguntava", nosaltres:"preguntàvem", vosaltres:"preguntàveu", "ells/elles/vostès":"preguntaven"},
      fut: {jo:"preguntaré", tu:"preguntaràs", "ell/ella/vostè":"preguntarà", nosaltres:"preguntarem", vosaltres:"preguntareu", "ells/elles/vostès":"preguntaran"},
      cond: {jo:"preguntaria", tu:"preguntaries", "ell/ella/vostè":"preguntaria", nosaltres:"preguntaríem", vosaltres:"preguntaríeu", "ells/elles/vostès":"preguntarien"},
      imper: {tu:"pregunta", "vostè":"pregunti", vosaltres:"pregunteu", "vostès":"preguntin"}
    },
    french: {
      pres: {je:"demande", tu:"demandes", "il/elle/vous":"demande", nous:"demandons", vous:"demandez", "ils/elles":"demandent"},
      perf: {je:"ai demandé", tu:"as demandé", "il/elle/vous":"a demandé", nous:"avons demandé", vous:"avez demandé", "ils/elles":"ont demandé"},
      imp: {je:"demandais", tu:"demandais", "il/elle/vous":"demandait", nous:"demandions", vous:"demandiez", "ils/elles":"demandaient"},
      fut: {je:"demanderai", tu:"demanderas", "il/elle/vous":"demandera", nous:"demanderons", vous:"demanderez", "ils/elles":"demanderont"},
      cond: {je:"demanderais", tu:"demanderais", "il/elle/vous":"demanderait", nous:"demanderions", vous:"demanderiez", "ils/elles":"demanderaient"},
      imper: {tu:"demande", "vous":"demandez", nous:"demandons"}
    }
  },
  {
    ca: "preparar",
    en: "to prepare",
    fr: "préparer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"preparo", tu:"prepares", "ell/ella/vostè":"prepara", nosaltres:"preparem", vosaltres:"prepareu", "ells/elles/vostès":"preparen"},
      perf: {jo:"vaig preparar", tu:"vas preparar", "ell/ella/vostè":"va preparar", nosaltres:"vam preparar", vosaltres:"vau preparar", "ells/elles/vostès":"van preparar"},
      imp: {jo:"preparava", tu:"preparaves", "ell/ella/vostè":"preparava", nosaltres:"preparàvem", vosaltres:"preparàveu", "ells/elles/vostès":"preparaven"},
      fut: {jo:"prepararé", tu:"prepararàs", "ell/ella/vostè":"prepararà", nosaltres:"prepararem", vosaltres:"preparareu", "ells/elles/vostès":"prepararan"},
      cond: {jo:"prepararia", tu:"prepararies", "ell/ella/vostè":"prepararia", nosaltres:"prepararíem", vosaltres:"prepararíeu", "ells/elles/vostès":"prepararien"},
      imper: {tu:"prepara", "vostè":"prepari", vosaltres:"prepareu", "vostès":"preparin"}
    },
    french: {
      pres: {je:"prépare", tu:"prépares", "il/elle/vous":"prépare", nous:"préparons", vous:"préparez", "ils/elles":"préparent"},
      perf: {je:"ai préparé", tu:"as préparé", "il/elle/vous":"a préparé", nous:"avons préparé", vous:"avez préparé", "ils/elles":"ont préparé"},
      imp: {je:"préparais", tu:"préparais", "il/elle/vous":"préparait", nous:"préparions", vous:"prépariez", "ils/elles":"préparaient"},
      fut: {je:"préparerai", tu:"prépareras", "il/elle/vous":"préparera", nous:"préparerons", vous:"préparerez", "ils/elles":"prépareront"},
      cond: {je:"préparerais", tu:"préparerais", "il/elle/vous":"préparerait", nous:"préparerions", vous:"prépareriez", "ils/elles":"prépareraient"},
      imper: {tu:"prépare", "vous":"préparez", nous:"préparons"}
    }
  },
  {
    ca: "provar",
    en: "to try/taste",
    fr: "essayer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"provo", tu:"proves", "ell/ella/vostè":"prova", nosaltres:"provem", vosaltres:"proveu", "ells/elles/vostès":"proven"},
      perf: {jo:"vaig provar", tu:"vas provar", "ell/ella/vostè":"va provar", nosaltres:"vam provar", vosaltres:"vau provar", "ells/elles/vostès":"van provar"},
      imp: {jo:"provava", tu:"provaves", "ell/ella/vostè":"provava", nosaltres:"provàvem", vosaltres:"provàveu", "ells/elles/vostès":"provaven"},
      fut: {jo:"provaré", tu:"provaràs", "ell/ella/vostè":"provarà", nosaltres:"provarem", vosaltres:"provareu", "ells/elles/vostès":"provaran"},
      cond: {jo:"provaria", tu:"provaries", "ell/ella/vostè":"provaria", nosaltres:"provaríem", vosaltres:"provaríeu", "ells/elles/vostès":"provarien"},
      imper: {tu:"prova", "vostè":"provi", vosaltres:"proveu", "vostès":"provin"}
    },
    french: {
      pres: {je:"essaie", tu:"essaies", "il/elle/vous":"essaie", nous:"essayons", vous:"essayez", "ils/elles":"essaient"},
      perf: {je:"ai essayé", tu:"as essayé", "il/elle/vous":"a essayé", nous:"avons essayé", vous:"avez essayé", "ils/elles":"ont essayé"},
      imp: {je:"essayais", tu:"essayais", "il/elle/vous":"essayait", nous:"essayions", vous:"essayiez", "ils/elles":"essayaient"},
      fut: {je:"essaierai", tu:"essaieras", "il/elle/vous":"essaiera", nous:"essaierons", vous:"essaierez", "ils/elles":"essaieront"},
      cond: {je:"essaierais", tu:"essaierais", "il/elle/vous":"essaierait", nous:"essaierions", vous:"essaieriez", "ils/elles":"essaieraient"},
      imper: {tu:"essaie", "vous":"essayez", nous:"essayons"}
    }
  },
  {
    ca: "quedar",
    en: "to stay/remain",
    fr: "rester",
    type: "regular -ar",
    catalan: {
      pres: {jo:"quedo", tu:"quedes", "ell/ella/vostè":"queda", nosaltres:"quedem", vosaltres:"quedeu", "ells/elles/vostès":"queden"},
      perf: {jo:"vaig quedar", tu:"vas quedar", "ell/ella/vostè":"va quedar", nosaltres:"vam quedar", vosaltres:"vau quedar", "ells/elles/vostès":"van quedar"},
      imp: {jo:"quedava", tu:"quedaves", "ell/ella/vostè":"quedava", nosaltres:"quedàvem", vosaltres:"quedàveu", "ells/elles/vostès":"quedaven"},
      fut: {jo:"quedaré", tu:"quedaràs", "ell/ella/vostè":"quedarà", nosaltres:"quedarem", vosaltres:"quedareu", "ells/elles/vostès":"quedaran"},
      cond: {jo:"quedaria", tu:"quedaries", "ell/ella/vostè":"quedaria", nosaltres:"quedaríem", vosaltres:"quedaríeu", "ells/elles/vostès":"quedarien"},
      imper: {tu:"queda", "vostè":"quedi", vosaltres:"quedeu", "vostès":"quedin"}
    },
    french: {
      pres: {je:"reste", tu:"restes", "il/elle/vous":"reste", nous:"restons", vous:"restez", "ils/elles":"restent"},
      perf: {je:"suis resté(e)", tu:"es resté(e)", "il/elle/vous":"est resté(e)", nous:"sommes resté(e)s", vous:"êtes resté(e)(s)", "ils/elles":"sont resté(e)s"},
      imp: {je:"restais", tu:"restais", "il/elle/vous":"restait", nous:"restions", vous:"restiez", "ils/elles":"restaient"},
      fut: {je:"resterai", tu:"resteras", "il/elle/vous":"restera", nous:"resterons", vous:"resterez", "ils/elles":"resteront"},
      cond: {je:"resterais", tu:"resterais", "il/elle/vous":"resterait", nous:"resterions", vous:"resteriez", "ils/elles":"resteraient"},
      imper: {tu:"reste", "vous":"restez", nous:"restons"}
    }
  },
  {
    ca: "recordar",
    en: "to remember",
    fr: "se souvenir",
    type: "regular -ar",
    catalan: {
      pres: {jo:"recordo", tu:"recordes", "ell/ella/vostè":"recorda", nosaltres:"recordem", vosaltres:"recordeu", "ells/elles/vostès":"recorden"},
      perf: {jo:"vaig recordar", tu:"vas recordar", "ell/ella/vostè":"va recordar", nosaltres:"vam recordar", vosaltres:"vau recordar", "ells/elles/vostès":"van recordar"},
      imp: {jo:"recordava", tu:"recordaves", "ell/ella/vostè":"recordava", nosaltres:"recordàvem", vosaltres:"recordàveu", "ells/elles/vostès":"recordaven"},
      fut: {jo:"recordaré", tu:"recordaràs", "ell/ella/vostè":"recordarà", nosaltres:"recordarem", vosaltres:"recordareu", "ells/elles/vostès":"recordaran"},
      cond: {jo:"recordaria", tu:"recordaries", "ell/ella/vostè":"recordaria", nosaltres:"recordaríem", vosaltres:"recordaríeu", "ells/elles/vostès":"recordarien"},
      imper: {tu:"recorda", "vostè":"recordi", vosaltres:"recordeu", "vostès":"recordin"}
    },
    french: {
      pres: {je:"me souviens", tu:"te souviens", "il/elle/vous":"se souvient", nous:"nous souvenons", vous:"vous souvenez", "ils/elles":"se souviennent"},
      perf: {je:"me suis souvenu(e)", tu:"t'es souvenu(e)", "il/elle/vous":"s'est souvenu(e)", nous:"nous sommes souvenu(e)s", vous:"vous êtes souvenu(e)(s)", "ils/elles":"se sont souvenu(e)s"},
      imp: {je:"me souvenais", tu:"te souvenais", "il/elle/vous":"se souvenait", nous:"nous souvenions", vous:"vous souveniez", "ils/elles":"se souvenaient"},
      fut: {je:"me souviendrai", tu:"te souviendras", "il/elle/vous":"se souviendra", nous:"nous souviendrons", vous:"vous souviendrez", "ils/elles":"se souviendront"},
      cond: {je:"me souviendrais", tu:"te souviendrais", "il/elle/vous":"se souviendrait", nous:"nous souviendrions", vous:"vous souviendriez", "ils/elles":"se souviendraient"},
      imper: {tu:"souviens-toi", "vous":"souvenez-vous", nous:"souvenons-nous"}
    }
  },
  {
    ca: "sentir",
    en: "to feel/hear",
    fr: "sentir/entendre",
    type: "regular -ir",
    catalan: {
      pres: {jo:"sento", tu:"sents", "ell/ella/vostè":"sent", nosaltres:"sentim", vosaltres:"sentiu", "ells/elles/vostès":"senten"},
      perf: {jo:"vaig sentir", tu:"vas sentir", "ell/ella/vostè":"va sentir", nosaltres:"vam sentir", vosaltres:"vau sentir", "ells/elles/vostès":"van sentir"},
      imp: {jo:"sentia", tu:"senties", "ell/ella/vostè":"sentia", nosaltres:"sentíem", vosaltres:"sentíeu", "ells/elles/vostès":"sentien"},
      fut: {jo:"sentiré", tu:"sentiràs", "ell/ella/vostè":"sentirà", nosaltres:"sentirem", vosaltres:"sentireu", "ells/elles/vostès":"sentiran"},
      cond: {jo:"sentiria", tu:"sentiries", "ell/ella/vostè":"sentiria", nosaltres:"sentiríem", vosaltres:"sentiríeu", "ells/elles/vostès":"sentirien"},
      imper: {tu:"sent", "vostè":"senti", vosaltres:"sentiu", "vostès":"sentin"}
    },
    french: {
      pres: {je:"sens", tu:"sens", "il/elle/vous":"sent", nous:"sentons", vous:"sentez", "ils/elles":"sentent"},
      perf: {je:"ai senti", tu:"as senti", "il/elle/vous":"a senti", nous:"avons senti", vous:"avez senti", "ils/elles":"ont senti"},
      imp: {je:"sentais", tu:"sentais", "il/elle/vous":"sentait", nous:"sentions", vous:"sentiez", "ils/elles":"sentaient"},
      fut: {je:"sentirai", tu:"sentiras", "il/elle/vous":"sentira", nous:"sentirons", vous:"sentirez", "ils/elles":"sentiront"},
      cond: {je:"sentirais", tu:"sentirais", "il/elle/vous":"sentirait", nous:"sentirions", vous:"sentiriez", "ils/elles":"sentiraient"},
      imper: {tu:"sens", "vous":"sentez", nous:"sentons"}
    }
  },
  {
    ca: "servir",
    en: "to serve",
    fr: "servir",
    type: "regular -ir (incoatiu)",
    catalan: {
      pres: {jo:"serveixo", tu:"serveixes", "ell/ella/vostè":"serveix", nosaltres:"servim", vosaltres:"serviu", "ells/elles/vostès":"serveixen"},
      perf: {jo:"vaig servir", tu:"vas servir", "ell/ella/vostè":"va servir", nosaltres:"vam servir", vosaltres:"vau servir", "ells/elles/vostès":"van servir"},
      imp: {jo:"servia", tu:"servies", "ell/ella/vostè":"servia", nosaltres:"servíem", vosaltres:"servíeu", "ells/elles/vostès":"servien"},
      fut: {jo:"serviré", tu:"serviràs", "ell/ella/vostè":"servirà", nosaltres:"servirem", vosaltres:"servireu", "ells/elles/vostès":"serviran"},
      cond: {jo:"serviria", tu:"serviries", "ell/ella/vostè":"serviria", nosaltres:"serviríem", vosaltres:"serviríeu", "ells/elles/vostès":"servirien"},
      imper: {tu:"serveix", "vostè":"serveixi", vosaltres:"serviu", "vostès":"serveixin"}
    },
    french: {
      pres: {je:"sers", tu:"sers", "il/elle/vous":"sert", nous:"servons", vous:"servez", "ils/elles":"servent"},
      perf: {je:"ai servi", tu:"as servi", "il/elle/vous":"a servi", nous:"avons servi", vous:"avez servi", "ils/elles":"ont servi"},
      imp: {je:"servais", tu:"servais", "il/elle/vous":"servait", nous:"servions", vous:"serviez", "ils/elles":"servaient"},
      fut: {je:"servirai", tu:"serviras", "il/elle/vous":"servira", nous:"servirons", vous:"servirez", "ils/elles":"serviront"},
      cond: {je:"servirais", tu:"servirais", "il/elle/vous":"servirait", nous:"servirions", vous:"serviriez", "ils/elles":"serviraient"},
      imper: {tu:"sers", "vous":"servez", nous:"servons"}
    }
  },
  {
    ca: "seure",
    en: "to sit (down)",
    fr: "s'asseoir",
    type: "irregular",
    catalan: {
      pres: {jo:"sec", tu:"seus", "ell/ella/vostè":"seu", nosaltres:"seiem", vosaltres:"seieu", "ells/elles/vostès":"seuen"},
      perf: {jo:"vaig seure", tu:"vas seure", "ell/ella/vostè":"va seure", nosaltres:"vam seure", vosaltres:"vau seure", "ells/elles/vostès":"van seure"},
      imp: {jo:"seia", tu:"seies", "ell/ella/vostè":"seia", nosaltres:"sèiem", vosaltres:"sèieu", "ells/elles/vostès":"seien"},
      fut: {jo:"seuré", tu:"seuràs", "ell/ella/vostè":"seurà", nosaltres:"seurem", vosaltres:"seureu", "ells/elles/vostès":"seuran"},
      cond: {jo:"seuria", tu:"seuries", "ell/ella/vostè":"seuria", nosaltres:"seuríem", vosaltres:"seuríeu", "ells/elles/vostès":"seurien"},
      imper: {tu:"seu", "vostè":"segui", vosaltres:"seieu", "vostès":"seguin"}
    },
    french: {
      pres: {je:"m'assieds", tu:"t'assieds", "il/elle/vous":"s'assied", nous:"nous asseyons", vous:"vous asseyez", "ils/elles":"s'asseyent"},
      perf: {je:"me suis assis(e)", tu:"t'es assis(e)", "il/elle/vous":"s'est assis(e)", nous:"nous sommes assis(es)", vous:"vous êtes assis(es)", "ils/elles":"se sont assis(es)"},
      imp: {je:"m'asseyais", tu:"t'asseyais", "il/elle/vous":"s'asseyait", nous:"nous asseyions", vous:"vous asseyiez", "ils/elles":"s'asseyaient"},
      fut: {je:"m'assiérai", tu:"t'assiéras", "il/elle/vous":"s'assiéra", nous:"nous assiérons", vous:"vous assiérez", "ils/elles":"s'assiéront"},
      cond: {je:"m'assiérais", tu:"t'assiérais", "il/elle/vous":"s'assiérait", nous:"nous assiérions", vous:"vous assiériez", "ils/elles":"s'assiéraient"},
      imper: {tu:"assieds-toi", "vous":"asseyez-vous", nous:"asseyons-nous"}
    }
  },
  {
    ca: "tancar",
    en: "to close/shut",
    fr: "fermer",
    type: "regular -ar",
    catalan: {
      pres: {jo:"tanco", tu:"tanques", "ell/ella/vostè":"tanca", nosaltres:"tanquem", vosaltres:"tanqueu", "ells/elles/vostès":"tanquen"},
      perf: {jo:"vaig tancar", tu:"vas tancar", "ell/ella/vostè":"va tancar", nosaltres:"vam tancar", vosaltres:"vau tancar", "ells/elles/vostès":"van tancar"},
      imp: {jo:"tancava", tu:"tancaves", "ell/ella/vostè":"tancava", nosaltres:"tancàvem", vosaltres:"tancàveu", "ells/elles/vostès":"tancaven"},
      fut: {jo:"tancaré", tu:"tancaràs", "ell/ella/vostè":"tancarà", nosaltres:"tancarem", vosaltres:"tancareu", "ells/elles/vostès":"tancaran"},
      cond: {jo:"tancaria", tu:"tancaries", "ell/ella/vostè":"tancaria", nosaltres:"tancaríem", vosaltres:"tancaríeu", "ells/elles/vostès":"tancarien"},
      imper: {tu:"tanca", "vostè":"tanqui", vosaltres:"tanqueu", "vostès":"tanquin"}
    },
    french: {
      pres: {je:"ferme", tu:"fermes", "il/elle/vous":"ferme", nous:"fermons", vous:"fermez", "ils/elles":"ferment"},
      perf: {je:"ai fermé", tu:"as fermé", "il/elle/vous":"a fermé", nous:"avons fermé", vous:"avez fermé", "ils/elles":"ont fermé"},
      imp: {je:"fermais", tu:"fermais", "il/elle/vous":"fermait", nous:"fermions", vous:"fermiez", "ils/elles":"fermaient"},
      fut: {je:"fermerai", tu:"fermeras", "il/elle/vous":"fermera", nous:"fermerons", vous:"fermerez", "ils/elles":"fermeront"},
      cond: {je:"fermerais", tu:"fermerais", "il/elle/vous":"fermerait", nous:"fermerions", vous:"fermeriez", "ils/elles":"fermeraient"},
      imper: {tu:"ferme", "vous":"fermez", nous:"fermons"}
    }
  },
  {
    ca: "tornar",
    en: "to return/come back",
    fr: "retourner",
    type: "regular -ar",
    catalan: {
      pres: {jo:"torno", tu:"tornes", "ell/ella/vostè":"torna", nosaltres:"tornem", vosaltres:"torneu", "ells/elles/vostès":"tornen"},
      perf: {jo:"vaig tornar", tu:"vas tornar", "ell/ella/vostè":"va tornar", nosaltres:"vam tornar", vosaltres:"vau tornar", "ells/elles/vostès":"van tornar"},
      imp: {jo:"tornava", tu:"tornaves", "ell/ella/vostè":"tornava", nosaltres:"tornàvem", vosaltres:"tornàveu", "ells/elles/vostès":"tornaven"},
      fut: {jo:"tornaré", tu:"tornaràs", "ell/ella/vostè":"tornarà", nosaltres:"tornarem", vosaltres:"tornareu", "ells/elles/vostès":"tornaran"},
      cond: {jo:"tornaria", tu:"tornaries", "ell/ella/vostè":"tornaria", nosaltres:"tornaríem", vosaltres:"tornaríeu", "ells/elles/vostès":"tornarien"},
      imper: {tu:"torna", "vostè":"torni", vosaltres:"torneu", "vostès":"tornin"}
    },
    french: {
      pres: {je:"retourne", tu:"retournes", "il/elle/vous":"retourne", nous:"retournons", vous:"retournez", "ils/elles":"retournent"},
      perf: {je:"suis retourné(e)", tu:"es retourné(e)", "il/elle/vous":"est retourné(e)", nous:"sommes retourné(e)s", vous:"êtes retourné(e)(s)", "ils/elles":"sont retourné(e)s"},
      imp: {je:"retournais", tu:"retournais", "il/elle/vous":"retournait", nous:"retournions", vous:"retourniez", "ils/elles":"retournaient"},
      fut: {je:"retournerai", tu:"retourneras", "il/elle/vous":"retournera", nous:"retournerons", vous:"retournerez", "ils/elles":"retourneront"},
      cond: {je:"retournerais", tu:"retournerais", "il/elle/vous":"retournerait", nous:"retournerions", vous:"retourneriez", "ils/elles":"retourneraient"},
      imper: {tu:"retourne", "vous":"retournez", nous:"retournons"}
    }
  },
  {
    ca: "treballar",
    en: "to work",
    fr: "travailler",
    type: "regular -ar",
    catalan: {
      pres: {jo:"treballo", tu:"treballes", "ell/ella/vostè":"treballa", nosaltres:"treballem", vosaltres:"treballeu", "ells/elles/vostès":"treballen"},
      perf: {jo:"vaig treballar", tu:"vas treballar", "ell/ella/vostè":"va treballar", nosaltres:"vam treballar", vosaltres:"vau treballar", "ells/elles/vostès":"van treballar"},
      imp: {jo:"treballava", tu:"treballaves", "ell/ella/vostè":"treballava", nosaltres:"treballàvem", vosaltres:"treballàveu", "ells/elles/vostès":"treballaven"},
      fut: {jo:"treballaré", tu:"treballaràs", "ell/ella/vostè":"treballarà", nosaltres:"treballarem", vosaltres:"treballareu", "ells/elles/vostès":"treballaran"},
      cond: {jo:"treballaria", tu:"treballaries", "ell/ella/vostè":"treballaria", nosaltres:"treballaríem", vosaltres:"treballaríeu", "ells/elles/vostès":"treballarien"},
      imper: {tu:"treballa", "vostè":"treballi", vosaltres:"treballeu", "vostès":"treballin"}
    },
    french: {
      pres: {je:"travaille", tu:"travailles", "il/elle/vous":"travaille", nous:"travaillons", vous:"travaillez", "ils/elles":"travaillent"},
      perf: {je:"ai travaillé", tu:"as travaillé", "il/elle/vous":"a travaillé", nous:"avons travaillé", vous:"avez travaillé", "ils/elles":"ont travaillé"},
      imp: {je:"travaillais", tu:"travaillais", "il/elle/vous":"travaillait", nous:"travaillions", vous:"travailliez", "ils/elles":"travaillaient"},
      fut: {je:"travaillerai", tu:"travailleras", "il/elle/vous":"travaillera", nous:"travaillerons", vous:"travaillerez", "ils/elles":"travailleront"},
      cond: {je:"travaillerais", tu:"travaillerais", "il/elle/vous":"travaillerait", nous:"travaillerions", vous:"travailleriez", "ils/elles":"travailleraient"},
      imper: {tu:"travaille", "vous":"travaillez", nous:"travaillons"}
    }
  },
  {
    ca: "trucar",
    en: "to call/phone",
    fr: "appeler",
    type: "regular -ar",
    catalan: {
      pres: {jo:"truco", tu:"truques", "ell/ella/vostè":"truca", nosaltres:"truquem", vosaltres:"truqueu", "ells/elles/vostès":"truquen"},
      perf: {jo:"vaig trucar", tu:"vas trucar", "ell/ella/vostè":"va trucar", nosaltres:"vam trucar", vosaltres:"vau trucar", "ells/elles/vostès":"van trucar"},
      imp: {jo:"trucava", tu:"trucaves", "ell/ella/vostè":"trucava", nosaltres:"trucàvem", vosaltres:"trucàveu", "ells/elles/vostès":"trucaven"},
      fut: {jo:"trucaré", tu:"trucaràs", "ell/ella/vostè":"trucarà", nosaltres:"trucarem", vosaltres:"trucareu", "ells/elles/vostès":"trucaran"},
      cond: {jo:"trucaria", tu:"trucaries", "ell/ella/vostè":"trucaria", nosaltres:"trucaríem", vosaltres:"trucaríeu", "ells/elles/vostès":"trucarien"},
      imper: {tu:"truca", "vostè":"truqui", vosaltres:"truqueu", "vostès":"truquin"}
    },
    french: {
      pres: {je:"appelle", tu:"appelles", "il/elle/vous":"appelle", nous:"appelons", vous:"appelez", "ils/elles":"appellent"},
      perf: {je:"ai appelé", tu:"as appelé", "il/elle/vous":"a appelé", nous:"avons appelé", vous:"avez appelé", "ils/elles":"ont appelé"},
      imp: {je:"appelais", tu:"appelais", "il/elle/vous":"appelait", nous:"appelions", vous:"appeliez", "ils/elles":"appelaient"},
      fut: {je:"appellerai", tu:"appelleras", "il/elle/vous":"appellera", nous:"appellerons", vous:"appellerez", "ils/elles":"appelleront"},
      cond: {je:"appellerais", tu:"appellerais", "il/elle/vous":"appellerait", nous:"appellerions", vous:"appelleriez", "ils/elles":"appelleraient"},
      imper: {tu:"appelle", "vous":"appelez", nous:"appelons"}
    }
  },
  {
    ca: "usar",
    en: "to use",
    fr: "utiliser",
    type: "regular -ar",
    catalan: {
      pres: {jo:"uso", tu:"uses", "ell/ella/vostè":"usa", nosaltres:"usem", vosaltres:"useu", "ells/elles/vostès":"usen"},
      perf: {jo:"vaig usar", tu:"vas usar", "ell/ella/vostè":"va usar", nosaltres:"vam usar", vosaltres:"vau usar", "ells/elles/vostès":"van usar"},
      imp: {jo:"usava", tu:"usaves", "ell/ella/vostè":"usava", nosaltres:"usàvem", vosaltres:"usàveu", "ells/elles/vostès":"usaven"},
      fut: {jo:"usaré", tu:"usaràs", "ell/ella/vostè":"usarà", nosaltres:"usarem", vosaltres:"usareu", "ells/elles/vostès":"usaran"},
      cond: {jo:"usaria", tu:"usaries", "ell/ella/vostè":"usaria", nosaltres:"usaríem", vosaltres:"usaríeu", "ells/elles/vostès":"usarien"},
      imper: {tu:"usa", "vostè":"usi", vosaltres:"useu", "vostès":"usin"}
    },
    french: {
      pres: {je:"utilise", tu:"utilises", "il/elle/vous":"utilise", nous:"utilisons", vous:"utilisez", "ils/elles":"utilisent"},
      perf: {je:"ai utilisé", tu:"as utilisé", "il/elle/vous":"a utilisé", nous:"avons utilisé", vous:"avez utilisé", "ils/elles":"ont utilisé"},
      imp: {je:"utilisais", tu:"utilisais", "il/elle/vous":"utilisait", nous:"utilisions", vous:"utilisiez", "ils/elles":"utilisaient"},
      fut: {je:"utiliserai", tu:"utiliseras", "il/elle/vous":"utilisera", nous:"utiliserons", vous:"utiliserez", "ils/elles":"utiliseront"},
      cond: {je:"utiliserais", tu:"utiliserais", "il/elle/vous":"utiliserait", nous:"utiliserions", vous:"utiliseriez", "ils/elles":"utiliseraient"},
      imper: {tu:"utilise", "vous":"utilisez", nous:"utilisons"}
    }
  },
  {
    ca: "vestir-se",
    en: "to get dressed",
    fr: "s'habiller",
    type: "regular -ir (incoatiu, reflexiu)",
    catalan: {
      pres: {jo:"em vesteixo", tu:"et vesteixes", "ell/ella/vostè":"es vesteix", nosaltres:"ens vestim", vosaltres:"us vestiu", "ells/elles/vostès":"es vesteixen"},
      perf: {jo:"em vaig vestir", tu:"et vas vestir", "ell/ella/vostè":"es va vestir", nosaltres:"ens vam vestir", vosaltres:"us vau vestir", "ells/elles/vostès":"es van vestir"},
      imp: {jo:"em vestia", tu:"et vesties", "ell/ella/vostè":"es vestia", nosaltres:"ens vestíem", vosaltres:"us vestíeu", "ells/elles/vostès":"es vestien"},
      fut: {jo:"em vestiré", tu:"et vestiràs", "ell/ella/vostè":"es vestirà", nosaltres:"ens vestirem", vosaltres:"us vestireu", "ells/elles/vostès":"es vestiran"},
      cond: {jo:"em vestiria", tu:"et vestiries", "ell/ella/vostè":"es vestiria", nosaltres:"ens vestiríem", vosaltres:"us vestiríeu", "ells/elles/vostès":"es vestirien"},
      imper: {tu:"vesteix-te", "vostè":"vesteixi's", vosaltres:"vestiu-vos", "vostès":"vesteixin-se"}
    },
    french: {
      pres: {je:"m'habille", tu:"t'habilles", "il/elle/vous":"s'habille", nous:"nous habillons", vous:"vous habillez", "ils/elles":"s'habillent"},
      perf: {je:"me suis habillé(e)", tu:"t'es habillé(e)", "il/elle/vous":"s'est habillé(e)", nous:"nous sommes habillé(e)s", vous:"vous êtes habillé(e)(s)", "ils/elles":"se sont habillé(e)s"},
      imp: {je:"m'habillais", tu:"t'habillais", "il/elle/vous":"s'habillait", nous:"nous habillions", vous:"vous habilliez", "ils/elles":"s'habillaient"},
      fut: {je:"m'habillerai", tu:"t'habilleras", "il/elle/vous":"s'habillera", nous:"nous habillerons", vous:"vous habillerez", "ils/elles":"s'habilleront"},
      cond: {je:"m'habillerais", tu:"t'habillerais", "il/elle/vous":"s'habillerait", nous:"nous habillerions", vous:"vous habilleriez", "ils/elles":"s'habilleraient"},
      imper: {tu:"habille-toi", "vous":"habillez-vous", nous:"habillons-nous"}
    }
  },
  {
    ca: "viatjar",
    en: "to travel",
    fr: "voyager",
    type: "regular -ar",
    catalan: {
      pres: {jo:"viatjo", tu:"viatges", "ell/ella/vostè":"viatja", nosaltres:"viatgem", vosaltres:"viatgeu", "ells/elles/vostès":"viatgen"},
      perf: {jo:"vaig viatjar", tu:"vas viatjar", "ell/ella/vostè":"va viatjar", nosaltres:"vam viatjar", vosaltres:"vau viatjar", "ells/elles/vostès":"van viatjar"},
      imp: {jo:"viatjava", tu:"viatjaves", "ell/ella/vostè":"viatjava", nosaltres:"viatjàvem", vosaltres:"viatjàveu", "ells/elles/vostès":"viatjaven"},
      fut: {jo:"viatjaré", tu:"viatjaràs", "ell/ella/vostè":"viatjarà", nosaltres:"viatjarem", vosaltres:"viatjareu", "ells/elles/vostès":"viatjaran"},
      cond: {jo:"viatjaria", tu:"viatjaries", "ell/ella/vostè":"viatjaria", nosaltres:"viatjaríem", vosaltres:"viatjaríeu", "ells/elles/vostès":"viatjarien"},
      imper: {tu:"viatja", "vostè":"viatgi", vosaltres:"viatgeu", "vostès":"viatgin"}
    },
    french: {
      pres: {je:"voyage", tu:"voyages", "il/elle/vous":"voyage", nous:"voyageons", vous:"voyagez", "ils/elles":"voyagent"},
      perf: {je:"ai voyagé", tu:"as voyagé", "il/elle/vous":"a voyagé", nous:"avons voyagé", vous:"avez voyagé", "ils/elles":"ont voyagé"},
      imp: {je:"voyageais", tu:"voyageais", "il/elle/vous":"voyageait", nous:"voyagions", vous:"voyagiez", "ils/elles":"voyageaient"},
      fut: {je:"voyagerai", tu:"voyageras", "il/elle/vous":"voyagera", nous:"voyagerons", vous:"voyagerez", "ils/elles":"voyageront"},
      cond: {je:"voyagerais", tu:"voyagerais", "il/elle/vous":"voyagerait", nous:"voyagerions", vous:"voyageriez", "ils/elles":"voyageraient"},
      imper: {tu:"voyage", "vous":"voyagez", nous:"voyageons"}
    }
  }
];

// Pronoun mappings
var CATALAN_PRONOUNS = ["jo", "tu", "ell/ella/vostè", "nosaltres", "vosaltres", "ells/elles/vostès"];
var FRENCH_PRONOUNS = ["je", "tu", "il/elle/vous", "nous", "vous", "ils/elles"];

var PRONOUN_MAP = {
  "jo": "je",
  "tu": "tu",
  "ell/ella/vostè": "il/elle/vous",
  "nosaltres": "nous",
  "vosaltres": "vous",
  "ells/elles/vostès": "ils/elles"
};