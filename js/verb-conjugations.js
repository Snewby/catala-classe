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