// Materiale de seminar — sinteze și aplicații; fără dependențe externe.
const SEMINAR_DATA = {
  "units": [
    {
      "id": "seminar-economie",
      "number": "S1",
      "title": "Economia ca știință",
      "subtitle": "Noțiuni introductive, raționalitate și principii economice",
      "source": "Tema 1 - Economia ca stiinta.ppt",
      "sections": [
        {
          "id": "economie",
          "title": "Ce este economia?",
          "lead": "Economia înseamnă atât o realitate socială, cât și știința care o studiază.",
          "blocks": [
            {
              "type": "p",
              "text": "În materialul de seminar apar două accepțiuni: economia ca realitate economică (economy) și economia ca știință economică (economics). Știința economică folosește concepte, legi și modele pentru a explica deciziile și interdependențele."
            },
            {
              "type": "list",
              "items": [
                "Realitatea economică: agenți economici, relații de cooperare și concurență, producție, consum, economisire și schimb.",
                "Știința economică: ansamblu de cunoștințe, concepte, legi și modele despre aceste procese.",
                "Perspectiva economică urmărește alegerea mijloacelor disponibile pentru atingerea unor scopuri."
              ]
            },
            {
              "type": "note",
              "title": "Ideea centrală",
              "text": "Economia studiază decizii în condiții de constrângere, nu doar bani, firme sau prețuri."
            }
          ]
        },
        {
          "id": "micro-macro",
          "title": "Microeconomie și macroeconomie",
          "lead": "Diferența este nivelul la care analizăm comportamentul economic.",
          "blocks": [
            {
              "type": "list",
              "items": [
                "Microeconomia studiază comportamentul agenților elementari: gospodării și firme.",
                "Macroeconomia studiază comportamentul la nivel agregat: ansambluri precum sectorul financiar, sectorul public și restul lumii."
              ]
            },
            {
              "type": "example",
              "title": "Recunoaște perspectiva",
              "steps": [
                "De ce scumpește o firmă un produs? → Întrebare microeconomică.",
                "Cum evoluează rata inflației într-o economie? → Întrebare macroeconomică."
              ]
            },
            {
              "type": "note",
              "title": "Nu confunda",
              "text": "Micro și macro nu sunt două economii diferite; sunt două niveluri de analiză."
            }
          ]
        },
        {
          "id": "rationalitate",
          "title": "Raționalitate, eficacitate și eficiență",
          "lead": "O decizie poate să își atingă scopul fără să folosească resursele eficient.",
          "blocks": [
            {
              "type": "p",
              "text": "În sensul prezentat la seminar (Herbert Simon), comportamentul rațional urmărește un scop determinat, respectând constrângerile existente."
            },
            {
              "type": "list",
              "items": [
                "Eficacitate: atingerea scopului, indiferent de efortul depus.",
                "Eficiență: efect maxim pentru o unitate dată de efort, sau efort minim pentru o unitate de efect.",
                "Evaluarea eficienței presupune compararea efectelor cu eforturile sau a eforturilor cu efectele."
              ]
            },
            {
              "type": "note",
              "title": "Precizare din seminar",
              "text": "Nu combina criteriile într-o singură formulă vagă de tipul „efect maxim cu efort minim”. În material ele sunt criterii distincte, cu câte o mărime considerată dată."
            },
            {
              "type": "example",
              "title": "Exemplu simplu",
              "steps": [
                "Ambele metode ating obiectivul de a produce 100 de unități: sunt eficace.",
                "Dacă metoda A consumă 50 de ore și metoda B 40 de ore, B este mai eficientă, pentru același rezultat."
              ]
            }
          ]
        },
        {
          "id": "pozitiv-normativ",
          "title": "Economie pozitivă și normativă",
          "lead": "Separăm explicațiile despre ce este de opiniile despre ce ar trebui să fie.",
          "blocks": [
            {
              "type": "list",
              "items": [
                "Analiza pozitivă descrie fapte, relații și tendințe ale realității economice.",
                "Analiza normativă exprimă recomandări sau situații considerate dezirabile."
              ]
            },
            {
              "type": "example",
              "title": "Două afirmații",
              "steps": [
                "„Dacă prețul crește, cantitatea cerută tinde să scadă, în rest condiții identice.” → pozitivă.",
                "„Statul ar trebui să reducă o taxă.” → normativă."
              ]
            },
            {
              "type": "note",
              "title": "Verificare rapidă",
              "text": "Expresii precum „ar trebui” pot semnala o afirmație normativă; observațiile testabile sunt, de regulă, pozitive."
            }
          ]
        },
        {
          "id": "principii",
          "title": "Cele 10 principii ale lui Mankiw",
          "lead": "Materialul le grupează după decizie, funcționarea sistemului și corelațiile macroeconomice.",
          "blocks": [
            {
              "type": "p",
              "text": "Principii privind luarea deciziilor (1–4):"
            },
            {
              "type": "list",
              "items": [
                "1. Oamenii se confruntă cu alegeri.",
                "2. Costul unei alegeri este sacrificiul/renunțarea.",
                "3. Deciziile raționale folosesc analiza marginală.",
                "4. Oamenii reacționează la stimulente."
              ]
            },
            {
              "type": "p",
              "text": "Principii privind funcționarea sistemului (5–7):"
            },
            {
              "type": "list",
              "items": [
                "5. Schimbul contribuie, de regulă, la creșterea bunăstării.",
                "6. Piața este, de regulă, un mod potrivit de organizare a activității.",
                "7. Intervenția guvernamentală poate îmbunătăți, în anumite condiții, funcționarea pieței."
              ]
            },
            {
              "type": "p",
              "text": "Corelații macroeconomice (8–10), conform formulării din diapozitive:"
            },
            {
              "type": "list",
              "items": [
                "8. Emiterea de monedă în exces duce la creșterea prețurilor.",
                "9. Pe termen scurt, între inflație și șomaj este prezentată o corelație inversă.",
                "10. Bunăstarea socială depinde de potențialul productiv al economiei."
              ]
            },
            {
              "type": "note",
              "title": "Pentru seminar",
              "text": "Reține cele trei grupuri: 4 principii despre decizii, 3 despre sistem, 3 macroeconomice."
            }
          ]
        }
      ],
      "accent": "#E6EBF7",
      "icon": "◎"
    },
    {
      "id": "seminar-consumator",
      "number": "S3",
      "title": "Comportamentul consumatorului",
      "subtitle": "Gospodăria, utilitatea și alegerea optimă",
      "source": "Tema 3 - Teoria comportamentului consumatorului.ppt",
      "sections": [
        {
          "id": "gospodarie",
          "title": "Gospodăria și cele trei decizii",
          "lead": "Consumatorul decide ce cumpără, cât cumpără și de la cine.",
          "blocks": [
            {
              "type": "p",
              "text": "Gospodăria (menajul) este agentul economic elementar format din una sau mai multe persoane care își gestionează împreună venitul pentru consum."
            },
            {
              "type": "list",
              "items": [
                "Ce să consume? Alegerea tipurilor de bunuri.",
                "Cât să consume? Alegerea cantităților din fiecare bun.",
                "De la cine să cumpere? Alegerea ofertantului."
              ]
            },
            {
              "type": "note",
              "title": "Ipoteză de lucru",
              "text": "În modelul de la seminar, consumatorul rațional urmărește maximizarea satisfacției în limita venitului disponibil."
            }
          ]
        },
        {
          "id": "ut-um",
          "title": "Utilitate totală și marginală",
          "lead": "Fiecare unitate consumată poate aduce o satisfacție suplimentară diferită.",
          "blocks": [
            {
              "type": "p",
              "text": "Utilitatea totală (UT) este satisfacția cumulată. Utilitatea marginală (UM) este variația UT generată de o unitate suplimentară: UM = ΔUT / ΔQ."
            },
            {
              "type": "table",
              "headers": [
                "Q",
                "UT (utili)",
                "UM (utili)"
              ],
              "rows": [
                [
                  "0",
                  "0",
                  "—"
                ],
                [
                  "1",
                  "10",
                  "10"
                ],
                [
                  "2",
                  "18",
                  "8"
                ],
                [
                  "3",
                  "24",
                  "6"
                ],
                [
                  "4",
                  "28",
                  "4"
                ],
                [
                  "5",
                  "30",
                  "2"
                ],
                [
                  "6",
                  "30",
                  "0"
                ],
                [
                  "7",
                  "25",
                  "−5"
                ]
              ]
            },
            {
              "type": "graph",
              "kind": "utilitate"
            },
            {
              "type": "note",
              "title": "Legea utilității marginale descrescătoare",
              "text": "În tabelul original, UM scade la fiecare unitate. Când UM = 0, UT este maximă; când UM devine negativă, UT scade."
            }
          ]
        },
        {
          "id": "buget",
          "title": "Constrângerea bugetară",
          "lead": "Venitul și prețurile limitează combinațiile de bunuri pe care le putem cumpăra.",
          "blocks": [
            {
              "type": "p",
              "text": "Pentru două bunuri X și Y, cu prețurile Pₓ și Pᵧ, seminarul utilizează ecuația V = x·Pₓ + y·Pᵧ, sub ipoteza cheltuirii întregului venit, fără credit și economisire."
            },
            {
              "type": "example",
              "title": "Exemplul din diapozitive",
              "steps": [
                "Pₓ = 10 u.m./buc., Pᵧ = 20 u.m./buc. și venit V = 200 u.m.",
                "10x + 20y = 200; deci y = 10 − x/2.",
                "Intersecții: x = 20 dacă y = 0; y = 10 dacă x = 0. Panta = −1/2."
              ]
            },
            {
              "type": "graph",
              "kind": "budget"
            },
            {
              "type": "note",
              "title": "Reține",
              "text": "Dacă venitul crește și prețurile rămân constante, dreapta bugetului se deplasează paralel spre exterior."
            }
          ]
        },
        {
          "id": "indiferenta",
          "title": "Curbele de indiferență",
          "lead": "Combinații diferite de bunuri pot produce aceeași satisfacție.",
          "blocks": [
            {
              "type": "p",
              "text": "Curba de indiferență reunește coșurile de consum ce oferă aceluiași consumator același nivel de utilitate totală."
            },
            {
              "type": "list",
              "items": [
                "În modelul standard al seminarului, curba este convexă față de origine.",
                "Curbele unei familii nu se intersectează.",
                "Punctul de tangență dintre dreapta bugetului și o curbă de indiferență indică programul optim de consum (în modelul cu soluție interioară)."
              ]
            },
            {
              "type": "note",
              "title": "Înțelege, nu memora mecanic",
              "text": "Dacă poți obține mai multă utilitate la același buget, coșul inițial nu era optim."
            }
          ]
        },
        {
          "id": "optim",
          "title": "Optimul consumatorului",
          "lead": "Combină două condiții: bugetul și satisfacția marginală pe unitate monetară.",
          "blocks": [
            {
              "type": "p",
              "text": "Pentru bunurile X și Y, în optimul interior prezentat la seminar: UMₓ/Pₓ = UMᵧ/Pᵧ și x·Pₓ + y·Pᵧ = V."
            },
            {
              "type": "example",
              "title": "Exemplu din diapozitive, rezolvat",
              "steps": [
                "UMₓ = 22 − 4x; UMᵧ = 16 − y. Pₓ = 2, Pᵧ = 1, V = 13.",
                "Condiția de optim: (22 − 4x)/2 = 16 − y, deci y = 5 + 2x.",
                "Bugetul: 2x + y = 13. Înlocuind: 4x + 5 = 13 → x = 2.",
                "Atunci y = 9. Verificare: 2·2 + 9 = 13 și UMₓ/Pₓ = UMᵧ/Pᵧ = 7."
              ]
            },
            {
              "type": "practice",
              "title": "Încearcă singur",
              "description": "Folosind datele din exemplul seminarului, determină programul de consum (x, y).",
              "fields": [
                {
                  "label": "Cantitatea x",
                  "answer": 2,
                  "placeholder": "de ex. 2"
                },
                {
                  "label": "Cantitatea y",
                  "answer": 9,
                  "placeholder": "de ex. 9"
                }
              ],
              "solution": "Din (22 − 4x)/2 = 16 − y și 2x + y = 13 rezultă x = 2 și y = 9."
            },
            {
              "type": "note",
              "title": "Condiții de aplicare",
              "text": "Egalarea utilităților marginale raportate la preț descrie optimul interior din model, cu ipotezele seminarului."
            }
          ]
        }
      ],
      "accent": "#DAEAE0",
      "icon": "∑"
    },
    {
      "id": "seminar-utilitate",
      "number": "A",
      "title": "Utilitate · aplicații",
      "subtitle": "Clarificări, autoevaluare și probleme rezolvate",
      "source": "Utilitatea precizari; intrebari-raspunsuri;autoevaluare.docx",
      "sections": [
        {
          "id": "diferente",
          "title": "Utilitate intrinsecă vs. economică",
          "lead": "Același obiect poate avea utilitate economică diferită pentru persoane diferite.",
          "blocks": [
            {
              "type": "p",
              "text": "Utilitatea intrinsecă este capacitatea obiectivă a unui bun de a satisface o nevoie datorită proprietăților sale. Utilitatea economică reflectă aprecierea subiectivă a unui consumator concret."
            },
            {
              "type": "example",
              "title": "Exemplul umbrelei din fișă",
              "steps": [
                "O umbrelă te poate proteja de ploaie, indiferent de preferințele personale: utilitate intrinsecă.",
                "Dacă nu îți place culoarea ei sau deții deja suficiente umbrele, s-ar putea să nu îi atribui utilitate economică.",
                "Dacă începe să plouă și ai nevoie urgent de ea, utilitatea sa economică poate deveni mare."
              ]
            },
            {
              "type": "note",
              "title": "NU CONFUNDA",
              "text": "Utilitatea intrinsecă se referă la proprietățile bunului; utilitatea economică depinde de consumator, context și cantitate."
            }
          ]
        },
        {
          "id": "intrebari",
          "title": "Întrebări frecvente",
          "lead": "Răspunsuri scurte din fișa de seminar despre utilitatea economică.",
          "blocks": [
            {
              "type": "list",
              "items": [
                "Poate UM să fie negativă? Da; o unitate suplimentară poate provoca insatisfacție, iar UT scade.",
                "Contează împrejurările? Da; fișa compară aceeași umbrelă într-o situație obișnuită și în ploaie torențială.",
                "Contează cantitatea deținută? Da; utilitatea unei unități suplimentare poate scădea până la zero.",
                "De ce se optimizează consumul? Pentru a obține cea mai mare satisfacție posibilă în limitele resurselor disponibile."
              ]
            },
            {
              "type": "note",
              "title": "Atenție la barem",
              "text": "În autoevaluarea originală, afirmația „Utilitatea economică nu depinde de perioada în care este consumat un anumit bun” apare ca Adevărat, deși exemplele din aceeași fișă pun accent pe context. Am omis-o din grilele corectate automat; merită verificată la seminar."
            }
          ]
        },
        {
          "id": "mandarine",
          "title": "Problema 1 · mandarine",
          "lead": "Completează utilitatea totală folosind utilitățile marginale date.",
          "blocks": [
            {
              "type": "p",
              "text": "Ioana consumă patru mandarine, cu UM succesive de 100, 70, 40 și 0 utili. Fiecare nouă UT este UT anterioară + UM curentă, pornind de la UT(0) = 0."
            },
            {
              "type": "table",
              "headers": [
                "Mandarine",
                "1",
                "2",
                "3",
                "4"
              ],
              "rows": [
                [
                  "UM",
                  "100",
                  "70",
                  "40",
                  "0"
                ],
                [
                  "UT (completează)",
                  "100",
                  "170",
                  "?",
                  "?"
                ]
              ]
            },
            {
              "type": "practice",
              "title": "Completează tabelul",
              "description": "Calculează utilitatea totală după a treia și după a patra mandarină.",
              "fields": [
                {
                  "label": "UT după 3 mandarine",
                  "answer": 210,
                  "placeholder": "utili"
                },
                {
                  "label": "UT după 4 mandarine",
                  "answer": 210,
                  "placeholder": "utili"
                }
              ],
              "solution": "UT(3) = 100 + 70 + 40 = 210; UT(4) = 210 + 0 = 210. La UM = 0, UT nu mai crește."
            },
            {
              "type": "note",
              "title": "Rezultat din fișa de autoevaluare",
              "text": "UT crește cât timp UM este pozitivă. Când UM este zero, UT rămâne la valoarea maximă din acest exemplu."
            }
          ]
        },
        {
          "id": "buget-ovidiu",
          "title": "Problema 2 · buget individual",
          "lead": "Determină dacă bugetul săptămânal al lui Ovidiu este excedentar sau deficitar.",
          "blocks": [
            {
              "type": "p",
              "text": "Conform exercițiului din fișă: Ovidiu primește 100.000 lei de la părinți și 300.000 lei din distribuirea de pizza. Cheltuiește 10.000 lei pentru pateuri și 20.000 lei pentru suc în fiecare dintre cele 5 zile de școală implicate de rezolvarea fișei."
            },
            {
              "type": "example",
              "title": "Calculul din barem",
              "steps": [
                "Venituri: 100.000 + 300.000 = 400.000 lei.",
                "Cheltuieli: (10.000 + 20.000) × 5 = 150.000 lei.",
                "Sold: 400.000 − 150.000 = 250.000 lei. Buget excedentar."
              ]
            },
            {
              "type": "practice",
              "title": "Calculează soldul",
              "description": "Introdu suma excedentului săptămânal, în lei, conform datelor din barem.",
              "fields": [
                {
                  "label": "Excedent (lei)",
                  "answer": 250000,
                  "placeholder": "de ex. 250000"
                }
              ],
              "solution": "Venit 400.000 lei − cheltuieli 150.000 lei = excedent 250.000 lei."
            },
            {
              "type": "note",
              "title": "Notație",
              "text": "Păstrăm valorile monetare în lei exact ca în problema originală; nu le convertim în lei actuali."
            }
          ]
        },
        {
          "id": "recapitulare",
          "title": "Autoevaluare din fișă",
          "lead": "Trei întrebări tip grilă, apoi poți exersa și cu setul complet de seminar.",
          "blocks": [
            {
              "type": "list",
              "items": [
                "Când UM este pozitivă, UT crește.",
                "Autoturismul și combustibilul sunt bunuri complementare.",
                "Pantofii și sandalele pot fi bunuri substituibile."
              ]
            },
            {
              "type": "note",
              "title": "Autoevaluare",
              "text": "În secțiunea „Exersează”, selectează „Seminar” pentru grilele din fișă și întrebările de recapitulare realizate pe baza diapozitivelor."
            }
          ]
        }
      ],
      "accent": "#F1E8D8",
      "icon": "✎"
    }
  ],
  "quiz": [
    {
      "id": "s-doc-1",
      "section": "seminar-utilitate",
      "kind": "seminar",
      "q": "Când utilitatea marginală este pozitivă, utilitatea totală:",
      "options": [
        "Crește",
        "Scade",
        "Nu se modifică"
      ],
      "answer": 0,
      "origin": "Utilitatea precizari; intrebari-raspunsuri;autoevaluare.docx",
      "explanation": "UM pozitivă înseamnă un spor pozitiv al UT."
    },
    {
      "id": "s-doc-2",
      "section": "seminar-utilitate",
      "kind": "seminar",
      "q": "Autoturismul și combustibilul cu care funcționează sunt bunuri:",
      "options": [
        "Complementare",
        "Substituibile",
        "Fără utilitate economică"
      ],
      "answer": 0,
      "origin": "Utilitatea precizari; intrebari-raspunsuri;autoevaluare.docx",
      "explanation": "Sunt utilizate împreună pentru a satisface nevoia de transport."
    },
    {
      "id": "s-doc-3",
      "section": "seminar-utilitate",
      "kind": "seminar",
      "q": "O pereche de pantofi și o pereche de sandale pot fi bunuri:",
      "options": [
        "Substituibile",
        "Complementare",
        "Fără utilitate economică"
      ],
      "answer": 0,
      "origin": "Utilitatea precizari; intrebari-raspunsuri;autoevaluare.docx",
      "explanation": "Pot reprezenta variante alternative pentru aceeași nevoie."
    },
    {
      "id": "s-doc-t2",
      "section": "seminar-utilitate",
      "kind": "seminar",
      "q": "Adevărat sau fals? Utilitatea economică depinde de cantitatea consumată dintr-un bun.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "answer": 0,
      "origin": "Utilitatea precizari; intrebari-raspunsuri;autoevaluare.docx",
      "explanation": "Afirmația este marcată A în baremul furnizat."
    },
    {
      "id": "s-doc-t3",
      "section": "seminar-utilitate",
      "kind": "seminar",
      "q": "Adevărat sau fals? Utilitatea totală este întotdeauna descrescătoare.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "answer": 1,
      "origin": "Utilitatea precizari; intrebari-raspunsuri;autoevaluare.docx",
      "explanation": "Afirmația este marcată F în barem; UT poate crește până la sațietate."
    },
    {
      "id": "s-doc-t4",
      "section": "seminar-utilitate",
      "kind": "seminar",
      "q": "Adevărat sau fals? Utilitatea totală este suma utilităților marginale succesive, pornind de la UT(0) = 0.",
      "options": [
        "Adevărat",
        "Fals"
      ],
      "answer": 0,
      "origin": "Utilitatea precizari; intrebari-raspunsuri;autoevaluare.docx",
      "explanation": "Această relație este notată A în barem; ipoteza UT(0) = 0 este precizată aici."
    },
    {
      "id": "s-t1-1",
      "section": "seminar-economie",
      "kind": "seminar",
      "q": "Ce analizează în principal microeconomia?",
      "options": [
        "Comportamentul gospodăriilor și firmelor",
        "Doar inflația la nivelul economiei",
        "Exclusiv relațiile internaționale"
      ],
      "answer": 0,
      "origin": "Recapitulare adaptată din Tema 1 - Economia ca stiinta.ppt",
      "explanation": "Diapozitivele definesc microeconomia prin agenții economici elementari."
    },
    {
      "id": "s-t1-2",
      "section": "seminar-economie",
      "kind": "seminar",
      "q": "Care este exemplul unei afirmații normative?",
      "options": [
        "În anul trecut a crescut un preț",
        "Statul ar trebui să reducă o taxă",
        "Cererea a scăzut când a crescut prețul"
      ],
      "answer": 1,
      "origin": "Recapitulare adaptată din Tema 1 - Economia ca stiinta.ppt",
      "explanation": "Normativul formulează ce ar trebui să fie."
    },
    {
      "id": "s-t1-3",
      "section": "seminar-economie",
      "kind": "seminar",
      "q": "Două metode obțin același rezultat. Care este mai eficientă după criteriul efortului?",
      "options": [
        "Cea cu consumul mai mare",
        "Cea cu efortul mai mic",
        "Sunt automat la fel de eficiente"
      ],
      "answer": 1,
      "origin": "Recapitulare adaptată din Tema 1 - Economia ca stiinta.ppt",
      "explanation": "Pentru un rezultat dat, efortul se minimizează."
    },
    {
      "id": "s-t1-4",
      "section": "seminar-economie",
      "kind": "seminar",
      "q": "În materialul despre principiile lui Mankiw, „oamenii reacționează la stimulente” aparține:",
      "options": [
        "Principiilor luării deciziilor",
        "Corelațiilor macroeconomice",
        "Principiilor din statistică"
      ],
      "answer": 0,
      "origin": "Recapitulare adaptată din Tema 1 - Economia ca stiinta.ppt",
      "explanation": ""
    },
    {
      "id": "s-t1-5",
      "section": "seminar-economie",
      "kind": "seminar",
      "q": "Costul de oportunitate al unei alegeri este:",
      "options": [
        "Suma tuturor alternativelor",
        "Valoarea celei mai bune alternative sacrificate",
        "Doar suma de bani plătită"
      ],
      "answer": 1,
      "origin": "Recapitulare adaptată din Tema 1 - Economia ca stiinta.ppt",
      "explanation": ""
    },
    {
      "id": "s-t3-1",
      "section": "seminar-consumator",
      "kind": "seminar",
      "q": "În seria din seminar, la Q = 6 și UT = 30, utilitatea marginală a celei de-a șasea unități este:",
      "options": [
        "0",
        "6",
        "30"
      ],
      "answer": 0,
      "origin": "Recapitulare adaptată din Tema 3 - Teoria comportamentului consumatorului.ppt",
      "explanation": "UT(6) − UT(5) = 30 − 30 = 0."
    },
    {
      "id": "s-t3-2",
      "section": "seminar-consumator",
      "kind": "seminar",
      "q": "Ce se întâmplă când UM devine negativă?",
      "options": [
        "UT crește",
        "UT rămâne mereu constantă",
        "UT scade"
      ],
      "answer": 2,
      "origin": "Recapitulare adaptată din Tema 3 - Teoria comportamentului consumatorului.ppt",
      "explanation": ""
    },
    {
      "id": "s-t3-3",
      "section": "seminar-consumator",
      "kind": "seminar",
      "q": "Pentru Pₓ = 10, Pᵧ = 20 și V = 200, intersecția dreptei bugetului cu axa X este:",
      "options": [
        "10",
        "20",
        "200"
      ],
      "answer": 1,
      "origin": "Recapitulare adaptată din Tema 3 - Teoria comportamentului consumatorului.ppt",
      "explanation": "Întregul venit cheltuit pe X: x = V/Pₓ = 200/10 = 20."
    },
    {
      "id": "s-t3-4",
      "section": "seminar-consumator",
      "kind": "seminar",
      "q": "Ce descrie o curbă de indiferență?",
      "options": [
        "Combinații cu aceeași utilitate totală",
        "Prețuri egale pentru toate bunurile",
        "Venitul identic pentru toți consumatorii"
      ],
      "answer": 0,
      "origin": "Recapitulare adaptată din Tema 3 - Teoria comportamentului consumatorului.ppt",
      "explanation": ""
    },
    {
      "id": "s-t3-5",
      "section": "seminar-consumator",
      "kind": "seminar",
      "q": "Care este o condiție a optimului interior pentru două bunuri, în modelul seminarului?",
      "options": [
        "UMₓ/Pₓ = UMᵧ/Pᵧ",
        "UMₓ = Pₓ + Pᵧ",
        "x = y obligatoriu"
      ],
      "answer": 0,
      "origin": "Recapitulare adaptată din Tema 3 - Teoria comportamentului consumatorului.ppt",
      "explanation": ""
    },
    {
      "id": "s-t3-6",
      "section": "seminar-consumator",
      "kind": "seminar",
      "q": "În exemplul cu UMₓ = 22 − 4x, UMᵧ = 16 − y, Pₓ = 2, Pᵧ = 1 și V = 13, optimul calculat este:",
      "options": [
        "x = 2, y = 9",
        "x = 4, y = 5",
        "x = 1, y = 11"
      ],
      "answer": 0,
      "origin": "Recapitulare adaptată din Tema 3 - Teoria comportamentului consumatorului.ppt",
      "explanation": "Din egalarea utilităților marginale raportate la preț și din buget rezultă x = 2, y = 9."
    }
  ]
};
