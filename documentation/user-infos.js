var terminalsSect = 
    {"fr":"Terminaux","en":"Terminals",
     "ex":[
        {"pattern":"N(…)",  "fr":["Nom",'N("joueur")'],
                            "en":["Noun",'N("player")'] },
        {"pattern":"A(…)",  "fr":["Adjectif",'A("grand")'],
                            "en":["Adjective",'A("tall")'] },
        {"pattern":"Pro(…)","fr":["Pronom",'Pro("je")'],
                            "en":["Pronoun",'Pro("I")'] },
        {"pattern":"D(…)",  "fr":["Déterminant",'D("le")'],
                            "en":["Determines",'D("the")'] },
        {"pattern":"V(…)",  "fr":["Verbe",'V("apprendre")'],
                            "en":["Verb",'V("learn")'] },
        {"pattern":"Adv(…)","fr":["Adverbe",'Adv("bien")'],
                            "en":["Adverb",'Adv("well")'] },
        {"pattern":"C(…)",  "fr":["Conjonction",'C("et")'],
                            "en":["Conjunction",'C("and")']},
        {"pattern":'"…"',  "fr":["Texte brut",'"verbatim"'],
                            "en":["Raw text",'"verbatim"']},
        {"pattern":"Q(…)",  "fr":["Texte brut auquel on peut ajouter des <a href='#optionsFr'>options</a>",
                                  'Q("verbatim").tag("i")'],
                            "en":["Raw text to which <a href='#optionsEn'>options</a> can be added",
                                  'Q("verbatim").tag("i")']}
    ]};

var syntagmesSect =
    {"fr":"Syntagmes","en":"Phrases",
     "ex":[
         {"pattern":"S(…)", "fr":["Phrase",'S(NP(Pro("je")), VP(V("dormir")))'],
                            "en":["Sentence",'S(NP(Pro("I")), VP(V("sleep")))']},
         {"pattern":"NP(…)","fr":["Syntagme nominal",'NP(D("le"), N("voiture"))'],
                            "en":["Noun Phrase",'NP(D("the"), N("car"))']},
         {"pattern":"AP(…)","fr":["Syntagme adjectival",'AP(Adv("très"), A("grand"))'],
                            "en":["Adjective Phrase",'AP(Adv("very"), A("tall"))']},
         {"pattern":"AdvP(…)","fr":["Syntagme adverbial",'AdvP(Adv("bien"), Adv("heureusement"))'],
                            "en":["Adverbial Phrase",'AdvP(Adv("far"), Adv("back"))']},
         {"pattern":"VP(…)","fr":["Syntagme verbal",'VP(V("apprendre"), NP(D("le"), N("course")))'],
                            "en":["Verbal Phrase",'VP(V("enjoy"), NP(D("a"), N("meal")))']},
         {"pattern":"PP(…)","fr":["Syntagme Prépositionnel",'PP(P("à"), NP(N("minuit")))'],
                            "en":["Prepositional Phrase",'PP(P("at"), NP(N("midnight")))']},
         {"pattern":"CP(…)","fr":["Syntagme coordonné",'CP(C("et"), AP(A("vaillant")), AP(A("gentil")), AP(A("serviable")))'],
                            "en":["Coordinated Phrase",'CP(C("and"), AP(A("kind")), AP(A("strong")), AP(A("beautiful")))']},
         {"pattern":"SP(…)","fr":["Syntagme subordonné",'SP(Pro("que"), Pro("je"), VP(V("rencontrer").t("pc")))'],
                            "en":["Subordinated Phrase",'SP(Adv("that"), Pro("I"), VP(V("meet").t("ps")))']},
     ]};

var optionsSect=
     {"fr":"","en":"",
     "ex":[
           {"group":".t(…)","fr":'Temps (défaut "p")',"en":'Tense (default "p")'},
           {"pattern":"p", "fr":["présent",'V("avoir").t("p")'],
                           "en":["present",'V("have").t("p")']},
           {"pattern":"b", "fr":["infinitif",'V("avoir").t("b")'],
                           "en":["infinitive",'V("have").t("b")']},
           {"pattern":"i", "fr":["imparfait",'V("avoir").t("i")'],
                           "en":["",'']},
           {"pattern":"ps", "fr":["passé simple",'V("avoir").t("ps")'],
                           "en":["simple past",'V("have").t("ps")']},
           {"pattern":"f", "fr":["futur",'V("avoir").t("f")'],
                           "en":["future",'V("have").t("f")']},
           {"pattern":"ip", "fr":["impératif présent",'V("avoir").t("ip")'],
                           "en":["present imperative",'V("have").t("ip")']},
           {"pattern":"c", "fr":["conditionnel présent",'V("avoir").t("c")'],
                           "en":["",'']},
           {"pattern":"pr", "fr":["participe présent",'V("avoir").t("pr")'],
                           "en":["present participle",'V("have").t("pr")']},
           {"pattern":"s", "fr":["subjonctif présent",'V("avoir").t("s")'],
                           "en":["",'']},
           {"pattern":"si", "fr":["subjonctif imparfait",'V("avoir").t("si")'],
                           "en":["",'']},
           {"pattern":"pp", "fr":["participe passé",'V("avoir").t("pp")'],
                            "en":["past participle",'V("have").t("pp")']},
           {"pattern":"pc", "fr":["passé composé",'V("avoir").t("pc")'],
                           "en":["",'']},
           {"pattern":"pq", "fr":["plus-que-parfait",'V("avoir").t("pq")'],
                           "en":["",'']},
           {"pattern":"cp", "fr":["conditionnel passé",'V("avoir").t("cp")'],
                           "en":["",'']},
           {"pattern":"fa", "fr":["futur antérieur",'V("avoir").t("fa")'],
                           "en":["",'']},
           {"pattern":"spa", "fr":["subjonctif passé",'V("avoir").t("spa")'],
                           "en":["",'']},
           {"pattern":"spq", "fr":["subjonctif plus-que-parfait",'V("avoir").t("spq")'],
                             "en":["",'']},
           
           {"group":".perf(true)","fr":'perfect tense (ignoré en français)',
                                  "en":'perfect tense'},
           {"pattern":".perf(true)", "fr":["",''],
                            "en":["present perfect",'V("love").perf(true)']},
           {"pattern":".perf(true)", "fr":["",''],
                            "en":["past perfect",'V("love").t("ps").perf(true)']},
           {"pattern":".perf(true)", "fr":["",''],
                            "en":["future perfect",'V("love").t("f").perf(true)']},

           {"group":".n(…)","fr":'nombre (défaut .n("s")',
                                  "en":'number (default .n("s"))'},
           {"pattern":'.n("s")', "fr":["verbe au singulier",'V("manger").n("s")'],
                                 "en":["verb singular",'V("eat").n("s")']},
           {"pattern":'.n("p")', "fr":["verbe au pluriel",'V("manger").n("p")'],
                                 "en":["verb plural",'V("eat").n("p")']},
           {"pattern":'.n("s")', "fr":["nom au singulier",'N("joueur").n("s")'],
                                 "en":["noun singular",'N("player").n("s")']},
           {"pattern":'.n("p")', "fr":["nom au pluriel",'N("joueur").n("p")'],
                                 "en":["noun plural",'N("player").n("p")']},
           {"pattern":'.n("s")', "fr":["adjectif au singulier",'A("grand").n("s")'],
                                 "en":["adjective singular",'A("big").n("s")']},
           {"pattern":'.n("p")', "fr":["adjectif au pluriel",'A("grand").n("p")'],
                                 "en":["adjective plural",'A("big").n("p")']},
           {"pattern":'.n("p")', "fr":["déterminant au pluriel",'D("le").n("p")'],
                                 "en":["determiner plural",'D("a").n("p")']},

           {"group":".g(…)","fr":'Genre (défaut .g("m")',
                             "en":'Gender (default .g("m")'},
           {"pattern":'.g("m")', "fr":["nom masculin",'N("joueur").g("m")'],
                                       "en":["",'']},
           {"pattern":'.g("m")', "fr":["nom féminin",'N("joueur").g("f")'],
                                       "en":["",'']},
           {"pattern":'.g("m")', "fr":["adjectif masculin",'A("grand").g("m")'],
                                       "en":["",'']},
           {"pattern":'.g("m")', "fr":["adjectif féminin",'A("grand").g("f")'],
                                       "en":["",'']},
           {"pattern":'.g("m")', "fr":["déterminant masculin",'D("le").g("m")'],
                                       "en":["",'']},
           {"pattern":'.g("m")', "fr":["déterminant féminin",'D("le").g("f")'],
                                       "en":["",'']},
           
         
           {"group":".pe(…)","fr":'personne (défaut .pe(3)',
                                  "en":'person (default .pe(3))'},
           {"pattern":".pe(1)", "fr":["1ère personne du singulier",'V("avoir").pe(1)'],
                           "en":["first person singular",'V("be").pe(1)']},
           {"pattern":".pe(2)", "fr":["2e personne du singulier",'V("avoir").pe(2)'],
                           "en":["second person singular",'V("be").pe(2)']},
           {"pattern":".pe(3)", "fr":["3e personne du singulier",'V("avoir").pe(3)'],
                           "en":["third person singular",'V("be").pe(3)']},
           {"pattern":'.pe(1).n("p")', "fr":["1ère personne du pluriel",'V("avoir").pe(1).n("p")'],
                           "en":["first person plural",'V("be").pe(1).n("p")']},
           {"pattern":'.pe(2).n("p")', "fr":["2e personne du pluriel",'V("avoir").pe(2).n("p")'],
                           "en":["second person plural",'V("be").pe(2).n("p")']},
           {"pattern":'.pe(3).n("p")', "fr":["3e personne du pluriel",'V("avoir").pe(3).n("p")'],
                           "en":["third person plural",'V("be").pe(3).n("p")']},
           {"pattern":'.g("f").p(1)', "fr":["déterminant (adjectif possessif) féminin",'D("mon").g("f").pe(1)'],
                                       "en":["",'']},
           
           {"group":".f(…)","fr":'Comparaisons',"en":'Comparison'},
           {"pattern":'.f("co")', "fr":["comparatif",'A("bon").f("co")'],
                           "en":["comparative",'A("good").f("co")']},
           {"pattern":'.f("su")', "fr":["superlatif",'A("bon").f("su")'],
                           "en":["superlative",'A("good").f("su")']},
           
           {"group":".aux(…)","fr":"Changement d'auxiliaire, le défaut est donné par le lexique.",
                              "en":'Change of auxiliary (ignored in English)'},
           {"pattern":"", "fr":["par défaut",'V("aller").t("pc")'],
                           "en":["",'']},
           {"pattern":"", "fr":["par défaut",'V("changer").t("pc")'],
                           "en":["",'']},
           {"pattern":'.aux("avoir")', "fr":["auxiliaire avoir",'V("aller").t("pc").aux("avoir")'],
                           "en":["",'']},
           {"pattern":'.aux("être")', "fr":["auxiliaire être",'V("changer").t("pc").aux("être")'],
                           "en":["",'']},
]};

var pronomsSect={"fr":"","en":"",
    "ex":[{"group":"","fr":'Pronom sujet',"en":'Pronoun as subject'},
          {"pattern":".pe(1)", "fr":["1ère personne du singulier",'Pro("je").pe(1)'],
                           "en":["First person singular",'Pro("I").pe(1)']},
          {"pattern":".pe(2)", "fr":["2e personne du singulier",'Pro("je").pe(2)'],
                           "en":["Second person singular",'Pro("I").pe(2)']},
          {"pattern":".pe(3)", "fr":["3e personne du singulier",'Pro("je").pe(3)'],
                           "en":["Third person singular",'Pro("I").pe(3)']},
          {"pattern":'.pe(3).g("f")', "fr":["3e personne du féminin singulier",'Pro("je").pe(3).g("f")'],
                           "en":["Third person feminine singular",'Pro("I").pe(3).g("f")']},
          {"pattern":'.pe(3).g("n")', "fr":["",''],
                           "en":["Third person neutral singular",'Pro("I").pe(3).g("n")']},
          {"pattern":'.pe(1).n("p")', "fr":["1ère personne du pluriel",'Pro("je").pe(1).n("p")'],
                           "en":["First person plural",'Pro("I").pe(1).n("p")']},
          {"pattern":'.pe(2).n("p")', "fr":["2e personne du pluriel",'Pro("je").pe(2).n("p")'],
                           "en":["Second person plural",'Pro("I").pe(2).n("p")']},
          {"pattern":'.pe(3).n("p")', "fr":["3e personne du pluriel",'Pro("je").pe(3).n("p")'],
                           "en":["Third person plural",'Pro("I").pe(3).n("p")']},
          {"pattern":'.pe(3).n("p").g("f")', "fr":["3e personne du pluriel au féminin", 'Pro("je").pe(3).n("p").g("f")'],
                           "en":["",'']},

          {"group":"","fr":'Pronom sujet accentué',"en":'Pronoun as subject itself'},
          {"pattern":".pe(1)", "fr":["1ère personne du singulier",'Pro("moi").pe(1)'],
                           "en":["First person singular",'Pro("me").pe(1)']},
          {"pattern":".pe(2)", "fr":["2e personne du singulier",'Pro("moi").pe(2)'],
                           "en":["Second person singular",'Pro("me").pe(2)']},
          {"pattern":".pe(3)", "fr":["3e personne du singulier",'Pro("moi").pe(3)'],
                           "en":["Third person singular",'Pro("me").pe(3)']},
          {"pattern":'.pe(3).g("f")', "fr":["3e personne du féminin singulier",'Pro("moi").pe(3).g("f")'],
                           "en":["Third person feminine singular",'Pro("me").pe(3).g("f")']},
          {"pattern":'.pe(3).g("n")', "fr":["",''],
                           "en":["Third person neutral singular",'Pro("me").pe(3).g("n")']},
          {"pattern":'.pe(1).n("p")', "fr":["1ère personne du pluriel",'Pro("moi").pe(1).n("p")'],
                           "en":["First person plural",'Pro("me").pe(1).n("p")']},
          {"pattern":'.pe(2).n("p")', "fr":["2e personne du pluriel",'Pro("moi").pe(2).n("p")'],
                           "en":["Second person plural",'Pro("me").pe(2).n("p")']},
          {"pattern":'.pe(3).n("p")', "fr":["3e personne du pluriel",'Pro("moi").pe(3).n("p")'],
                           "en":["Third person plural",'Pro("me").pe(3).n("p")']},
          {"pattern":'.pe(3).n("p").g("f")', "fr":["3e personne du pluriel au féminin", 'Pro("moi").pe(3).n("p").g("f")'],
                           "en":["",'']},
]};

var formatSect={"fr":"","en":"",
"ex":[ 
       {"group":".b(…)","fr":'ajouter avant',"en":'add before'},
       {"pattern":'.b("-")', "fr":["Ajouter un tiret avant",'N("homme").b("-")'],
                     "en":["Add a dash before",'N("man").b("-")']},
       {"pattern":'.b("*")', "fr":["Ajouter une étoile avant",'N("homme").b("*")'],
                     "en":["Add a star before",'N("man").b("*")']},

       {"group":".a(…)","fr":'ajouter après',"en":'add after'},
       {"pattern":'.a(".")', "fr":["Ajouter un point après",'N("homme").a(".")'],
                     "en":["Add a dash before",'N("man").b("-")']},
       {"pattern":'.a("!")', "fr":["Ajouter point d'exclamation après",'N("homme").a("!")'],
                     "en":["Add an exclamation point after",'N("man").a("!")']},
       {"pattern":'.a(";")', "fr":["Ajouter point virgule après",'N("homme").a(";")'],
                     "en":["Add a semi-colon after",'N("man").a(";")']},
       {"pattern":'.a("...")', "fr":["Ajouter des points de suspension après",'N("homme").a("...")'],
                     "en":["Add an ellipsis after",'N("man").a("...")']},

       {"group":".en(…)","fr":'entourer',"en":'wrap with'},
       {"pattern":'.en(")")', "fr":["entourer de parenthèses",'N("homme").en(")")'],
                     "en":["Wrap within parentheses",'N("man").en(")")']},
       {"pattern":'.en("[")', "fr":["entourer de crochets",'N("homme").en("[")'],
                     "en":["Wrap within brackets",'N("man").en("[")']},
       {"pattern":'.en("*")', "fr":["entourer d'étoiles",'N("homme").en("*")'],
                     "en":["Wrap within stars",'N("man").en("*")']},
       {"pattern":'.en("*").en(")")', "fr":["entourer de plusieurs symboles",'N("homme").en("*").en("(")'],
                     "en":["Wrap within many symbols",'N("man").en("*").en("(")']},

       {"group":".lier(…)","fr":'lier',"en":'combine'},
       {"pattern":'.lier("-")', "fr":["lier par un trait d'union",'VP(V("lier").t("ip").lier(),Pro("le"))'],
                     "en":["Combine with a dash",'NP(N("mother").lier(),P("in").lier(),N("law"))']},

       {"group":"","fr":'',"en":''},
       {"pattern":'.cap()', "fr":["Mettre la première lettre en majuscule",'N("joueur").cap()'],
                     "en":["Capitalize first letter",'N("player").cap()']},

       {"group":".tag(…)","fr":"balise HTML","en":'HTML tag'},
       {"pattern":'.tag(<em>nom</em>,<em>{attributs}</em>)', 
             "fr":["italique souligné",'N("joueur").tag("i",{"style":"text-decoration:underline"})'],
            "en":["underline italics",'N("player").tag("i",{"style":"text-decoration:underline"})']},
       {"pattern":'', 
             "fr":["hyperlien",'N("joueur").tag("a",{"href":"http://www.google.com"})'],
             "en":["hyperlink",'N("player").tag("a",{"href":"http://www.google.com"})']},
       {"pattern":'', 
             "fr":["combinaison de balises",'N("maison").tag("b").tag("i")'],
             "en":["combining tags",'N("house").tag("b").tag("i")']},
]};

var nPmods={"fr":'',"en":'',
    "ex": [
        {"group":"","fr":"Placement de l'adjectif (dépendant de la langue)",
            "en":"Adjective positioning (language dependent)"},
        {"pattern":"", "fr":["Par défaut",'NP(D("le"),A("petit"),N("jouet"))'],
                           "en":["Default",'NP(D("the"),A("small"),N("toy"))']},
        {"pattern":"", "fr":["Par défaut",'NP(D("le"),A("bleu"),N("jouet"))'],
                           "en":["Default",'NP(D("the"),N("toy"),A("blue"))']},
        {"pattern":'.pos("pre")', "fr":["pré-posé",'NP(D("le"),A("bleu").pos("pre"),N("jouet"))'],
                           "en":["",'']},
        {"pattern":'.pos("post")', "fr":["postposé",'NP(D("le"),A("petit").pos("post"),N("jouet"))'],
                           "en":["",'']},

        {"group":".pro()","fr":"Pronominalisation","en":"Pronominalisation"},
        {"pattern":"", "fr":["du sujet",'S(NP(D("le"),N("joueur")).pro(),VP(V("jouer")))'],
                       "en":["of the subject",'S(NP(D("the"),N("player")).pro(),VP(V("play")))']},
        {"pattern":"", "fr":["de l'objet direct",'S(Pro("je"),VP(V("aimer"),NP(D("le"),N("pomme")).pro()))'],
                       "en":["of the direct object",'S(Pro("I"),VP(V("love"),NP(D("a"),N("apple").g("n")).pro()))']},
        {"pattern":"", 
         "fr":["de l'objet indirect",'S(Pro("je"),VP(V("aller"),PP(P("à"),NP(D("le"),N("maison")).pro())))'],
         "en":["of the indirect object",'S(Pro("I"),VP(V("go"),PP(P("to"),NP(D("a"),N("house").g("n")).pro())))']},
]};

var sentType={"fr":'',"en":'',
    "ex": [
       {"pattern":".typ({neg:true})",
        "fr":["Négation",'S(NP(D("le"),N("chat")),VP(V("aimer"),NP(D("le"),N("souris")))).typ({neg:true})'],
        "en":["Negation",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({neg:true})']},
       {"pattern":".typ({neg:true})",
        "fr":["Négation spéciale",'S(NP(D("le"),N("chat")),VP(V("aimer"),NP(D("le"),N("souris")))).typ({neg:"plus"})'],
        "en":["",'']},
       {"pattern":".typ({pas:true})",
        "fr":["Passive",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({pas:true})'],
        "en":["Passive",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({pas:true})']},
       {"pattern":".typ({prog:true})",
        "fr":["Progressive",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({prog:true})'],
        "en":["Progressive",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({prog:true})']},
       {"pattern":".typ({exc:true})",
        "fr":["Exclamative",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({exc:true})'],
        "en":["Exclamative",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({exc:true})']},
       {"pattern":'.typ({int:"yon"})',
        "fr":["Interrogative (oui/non)",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({int:"yon"})'],
        "en":["Interrogative (yes/no)",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({int:"yon"})']},
       {"pattern":'.typ({int:"wos"})',
        "fr":["Interrogative (sujet?)",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({int:"wos"})'],
        "en":["Interrogative (who?)",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({int:"wos"})']},
       {"pattern":'.typ({int:"wod"})',
        "fr":["Interrogative (que subit l'objet)",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({int:"wod"})'],
        "en":["Interrogative (who is the object)",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({int:"wod"})']},
       {"pattern":'.typ({int:"wad"})',
        "fr":["Interrogative (quoi subit l'objet)",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({int:"wad"})'],
        "en":["Interrogative (what is the object)",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({int:"wad"})']},
       {"pattern":'.typ({int:"woi"})',
        "fr":["Interrogative (à qui l'objet)",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({int:"woi"})'],
        "en":["Interrogative (to whom the object)",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({int:"woi"})']},
       {"pattern":'.typ({int:"whe"})',
        "fr":["Interrogative (où est l'action)",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({int:"whe"})'],
        "en":["Interrogative (where is the action)",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({int:"whe"})']},
       {"pattern":'.typ({int:"why"})',
        "fr":["Interrogative (pourquoi)",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({int:"why"})'],
        "en":["Interrogative (why)",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({int:"why"})']},
       {"pattern":'.typ({int:"whn"})',
        "fr":["Interrogative (quand)",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({int:"whn"})'],
        "en":["Interrogative (when)",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({int:"whn"})']},
       {"pattern":'.typ({int:"how"})',
        "fr":["Interrogative (comment est l'action)",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({int:"how"})'],
        "en":["Interrogative (who is the action)",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({int:"how"})']},
       {"pattern":'.typ({int:"muc"})',
        "fr":["Interrogative (combien est l'action)",'S(NP(D("le"),N("chat")), VP(V("aimer"),NP(D("le"),N("souris")))).typ({int:"muc"})'],
        "en":["Interrogative (how much is the action)",'S(NP(D("the"),N("cat")), VP(V("love"),NP(D("the"),N("mouse")))).typ({int:"muc"})']},
]};

var dateCreation={"fr":"Création d'une date","en":"Date creation",
    "ex":[
        {"pattern":'DT()',"fr":["Date courante",'DT()'],"en":["Current date",'DT()']},
        {"pattern":'DT(new Date(...))',"fr":["Date passée",'DT(new Date("2014-11-21T21:00:00"))'],
                                       "en":["Past date",'DT(new Date("2014-11-21T21:00:00"))']},
        {"pattern":'DT("YYYY-MM-DDTHH:mm(:ss)+TZ")',
                 "fr":["Heure selon le fuseau horaire choisi en entrée, heure locale en sortie",
                       'DT("2015-01-02T00:00:00+00:00")'],
                 "en":["Hour according to the given timezone, local time as output",
                       'DT("2015-01-02T00:00:00+00:00")']},
        {"pattern":'DT("YYYY-MM-DDTHH:mm(:ss)")',
                 "fr":["Par défaut, le fuseau horaire en entrée est le fuseau horaire du système (sous Firefox) alors que pour Safari ce sera l'heure GMT par défaut, dans tous les cas, c'est l'heure locale en sortie",
                       'DT("2015-01-02T00:00:00+00:00")'],
                 "en":["By default, the input timezone is the timezone of the system (with Firefox), but it is GMT with Safari;  local time as output",
                       'DT("2015-01-02T00:00:00+00:00")']},
        {"pattern":'DT("YYYY-MM-DD")',
                 "fr":["Si l'heure n'est pas indiquée, ce sera minuit GMT et l'heure locale en sortie",
                       'DT("2015-01-02")'],
                 "en":["When the hour is missing, it will midnight GMT but local time as output",
                       'DT("2015-01-02")']},
        {"pattern":'DT("YYYY/MM/DD HH:mm(:ss) +ZZZZ")',
                 "fr":["Heure selon le fuseau horaire choisi en entrée, heure locale en sortie",
                       'DT("2015/01/02 00:00:00 +0000")'],
                 "en":["Hour according to the given timezone, local time as output",
                       'DT("2015/01/02 00:00:00 +0000")']},
        {"pattern":'DT("YYYY/MM/DD HH:mm(:ss)")',
                 "fr":["Par défaut, le fuseau horaire en entrée est le fuseau horaire du système, heure locale en sortie",
                       'DT("2015/01/02 00:00:00")'],
                 "en":["By default, the input timezone is the system timezone, local time as output",
                       'DT("2015/01/02 00:00:00")']},
        {"pattern":'DT("YYYY/MM/DD")',
                 "fr":["Si l'heure n'est pas indiquée, ce sera minuit heure système et l'heure locale en sortie",
                       'DT("2015/01/02")'],
                 "en":["When the hour is missing, it will midnight system time but local time as output",
                       'DT("2015/01/02")']},

]};   

var dateOption={"fr":"Formatage d'une date (défaut <code>.nat()</code>)",
                "en":"Date formatting (default <code>.nat()</code>)",
    "ex":[
        {"pattern":'.nat()',"fr":["en lettres",'DT(new Date()).nat()'],
                            "en":["as words",'DT(new Date()).nat()']},
        {"pattern":'.nat(false)',"fr":["en chiffres",'DT(new Date()).nat(false)'],
                            "en":["as digits",'DT(new Date()).nat(false)']},
        {"group":'.dOpt({year: , month: , date: , day: , hour: , minute: , second: , nat:, det:, rtime:})',
                            "fr":"Contrôle de l'affichage de chacun des éléments de la date",
                            "en":"Control over the display of date components"},
        {"pattern":'.dOpt(..)',"fr":["Heure seulement",'DT().dOpt({year: false, month: false, date: false, day: false})'],
                            "en":["Time only",'DT().dOpt({year: false, month: false, date: false, day: false})']},
        {"pattern":'{nat:false}',"fr":["Affichage de l'heure et des minutes (en chiffres)",'DT().dOpt({year: false, month: false, date: false, day: false, second: false, nat:false})'],
                            "en":["Display hour and minutes as digits",'DT().dOpt({year: false, month: false, date: false, day: false, second: false, nat:false})']},
        {"pattern":'{det:false}',"fr":["Non affichage des déterminants de la date",'DT(new Date()).dOpt({det: false})'],
                            "en":["Do not display determiner",'DT(new Date()).dOpt({det: false})']},
        {"pattern":'{rtime:true}',"fr":["Date relative",'DT(new Date()).dOpt({rtime: true})'],
                            "en":["Relative date",'DT(new Date()).dOpt({rtime: true})']},
        {"pattern":'{rtime:true}',"fr":["Date relative avant",'var d = new Date(); d.setDate(d.getDate()-4); DT(d).dOpt({rtime: true});'],
                            "en":["Relative date before",'var d = new Date(); d.setDate(d.getDate()-4); DT(d).dOpt({rtime: true});']},
        {"pattern":'{rtime:true}',"fr":["Date relative après",'var d = new Date(); d.setDate(d.getDate()+10); DT(d).dOpt({rtime: true});'],
                            "en":["Relative date after",'var d = new Date(); d.setDate(d.getDate()+10); DT(d).dOpt({rtime: true});']},
        
]}; 

var numberFormat={"fr":"Formatage d'un nombre","en":"Number formatting",
    "ex":[
        {"pattern":"{mprecision:..}","fr":["arrondi",'NO(1.847584).dOpt({mprecision: 0})'],
                                     "en":["rounding",'NO(1.847584).dOpt({mprecision: 0})']},
        {"pattern":"{mprecision:..}","fr":["maximum 4 décimales",'NO(1.847584).dOpt({mprecision: 4})'],
                                     "en":["4 decimal rounding",'NO(1.847584).dOpt({mprecision: 4})']},
        {"pattern":"{raw:false}","fr":["nombre avec formattage",'NO("1.847584").dOpt({raw: false})'],
                                "en":["number with formatting",'NO("1.847584").dOpt({raw: false})']},
        {"pattern":"{raw:true}","fr":["nombre sans formattage",'NO("1 023,84").dOpt({raw: true})'],
                                "en":["raw number without formatting",'NO("1 023,84").dOpt({raw: true})']},
        {"pattern":"{nat:true}","fr":["nombre en toutes lettres",'NO("125").dOpt({nat: true})'],
                                "en":["number in words",'NO("125").dOpt({nat: true})']},
        {"pattern":"{ord:true}","fr":["nombre ordinal",'NO("10").dOpt({ord: true})'],
                                "en":["ordinal number",'NO("10").dOpt({ord: true})']},
]}; 

var numberAgreement={"fr":"Accord du nom selon le nombre","en":"Noun agreement in number",
    "ex":[{"pattern":"","fr":["avec zéro",'NP(NO(0), N("avion"))'],
                        "en":["with zero",'NP(NO(0), N("plane"))']},
          {"pattern":"","fr":["avec un entier",'NP(NO(2), N("avion"))'],
                        "en":["with an integer",'NP(NO(2), N("plane"))']},
          {"pattern":"","fr":["avec un réel",'NP(NO(0.24), N("livre"))'],
                        "en":["with a real",'NP(NO(0.24), N("pound"))']},
          {"pattern":"","fr":["avec un réel",'NP(NO(2.94), N("livre"))'],
                        "en":["with a real",'NP(NO(2.94), N("pound"))']},
          {"pattern":"","fr":["accord de l'adjectif",'NP(NO(2),A("rouge"), N("avion"))'],
                        "en":["",'']},
    
]};

var pomme,pommes,apple,apples,gars,boy;
var cloneUse={"fr":"Illustration de l'utilisation de <code>.clone()</code>",
              "en":"Simple example of use of <code>.clone()</code>",
    "ex":[
          {"pattern":"","fr":["déclaration",'pomme = NP(D("le"),N("pomme"))'],
                        "en":["declaration",'apple = NP(D("the"),N("apple"))']},
          {"pattern":"","fr":["déclaration",'gars = NP(D("le"),N("garçon")).n("p")'],
                        "en":["declaration",'boy = NP(D("a"),N("boy"))']},
          {"pattern":"","fr":["modification",'pomme.n("p")'],
                        "en":["modification",'apple.n("p")']},
          {"pattern":"","fr":["effet de bord visible",'pomme'],
                        "en":["side-effect occurred",'apple']},
          {"pattern":"","fr":["redéclaration",'pomme = NP(D("le"),N("pomme"))'],
                        "en":["redeclaration",'apple = NP(D("the"),N("apple"))']},
          {"pattern":"","fr":["sauve l'original",'pommes=pomme.clone().n("p")'],
                        "en":["save the original",'apples=apple.clone().n("p")']},
          {"pattern":"","fr":["original a bien été sauvé",'pomme'],
                        "en":["original was saved",'apple']},
          {"pattern":"","fr":["clone est utile pour la réutilisation",
                             'S(pomme.clone().a(","),gars,VP(V("manger"),pomme.clone().pro()))'],
                        "en":["close is useful for reuse",
                              'S(apple.clone().a(","),boy,VP(V("eat"),apple.clone().pro()))']},
          {"pattern":"","fr":["exemple précédent sans clone; <b>mauvais résultat</b> car <code>.pro()</code> a modifié <code>pomme</code> avant la réalisation",
                             'S(pomme.a(","),gars,VP(V("manger"),pomme.pro())).b("*")'],
                        "en":["previous example without clone; <b>bad result</b> because <code>.pro()</code> modified <code>apple</code> before the realisation",
                              'S(apple.a(","),boy,VP(V("eat"),apple.pro())).b("*")']},
        
]};

var addUse={"fr":"Illustration de l'utilisation de <code>.add(..)</code> en utilisant les variables de la section <code>.clone()</code>",
              "en":"Simple example of use of <code>..add(..)</code> using variables of the <code>.clone()</code> section",
    "ex":[{"pattern":"","fr":["ajout à un syntagme vide",'S().add(pomme)'],
                        "en":["add to an empty phrase",'S().add(apple)']},
          {"pattern":"","fr":["ajouts à un syntagme existant",
                              'CP(C("et"),NP(D("le"),N("fruit"))).add(pomme).add(gars)'],
                        "en":["add to an existing phrase",
                              'CP(C("and"),NP(D("a"),N("fruit"))).add(apple).add(boy)']},
          {"pattern":"","fr":["ajout avec position",'S(VP().add(V("aimer")).add(pomme)).add(gars,0)'],
                        "en":["add with position",'S(VP().add(V("love")).add(apple)).add(boy,0)']},
        
]};