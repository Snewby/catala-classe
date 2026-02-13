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