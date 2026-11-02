// Conținut local, extras și adaptat din materialele furnizate.
const COURSE_DATA = {
  "modules": [
    {
      "id": "raritate",
      "number": "01",
      "title": "Raritatea în economie",
      "short": "De ce trebuie să alegem?",
      "subtitle": "Nevoi, resurse, cost de oportunitate și FPP",
      "accent": "#D7E8DF",
      "icon": "↗",
      "duration": "20 min",
      "source": "Raritatea in economie -suport curs(1).docx",
      "sections": [
        {
          "id": "nevoi",
          "title": "Nevoi și resurse",
          "lead": "Economia pornește de la o tensiune simplă: dorim mai mult decât ne permit resursele.",
          "blocks": [
            {
              "type": "p",
              "text": "Nevoile sunt în permanentă dezvoltare, în timp ce resursele economice sunt limitate. Această insuficiență relativă se numește raritate. Nu înseamnă că un bun este neapărat rar în natură, ci că nu avem suficient din el pentru toate utilizările dorite."
            },
            {
              "type": "list",
              "items": [
                "Bun liber: oferit de natură fără un efort economic semnificativ (exemplu din curs: aerul).",
                "Bun economic: obținut prin folosirea unor resurse și eforturi, deci limitat față de nevoi.",
                "Nevoile sunt nelimitate ca varietate, dar limitate în capacitate pentru un bun la un moment dat; se regenerează și concurează între ele."
              ]
            },
            {
              "type": "note",
              "title": "Reține diferența",
              "text": "O dorință nu este încă o resursă. Alegerile apar tocmai pentru că timpul, banii și factorii de producție sunt limitați."
            }
          ],
          "forms": [
            1
          ]
        },
        {
          "id": "resurse",
          "title": "Tipuri de resurse și eficiență",
          "lead": "Problema fundamentală: folosirea cât mai bună a resurselor disponibile.",
          "blocks": [
            {
              "type": "p",
              "text": "Resursele economice pot fi naturale, umane și create de oameni. Cursul grupează resursele în materiale (resurse naturale și capital) și umane (muncă și capacitatea întreprinzătorului); menționează și resursele informaționale."
            },
            {
              "type": "p",
              "text": "Capitalul cuprinde bunuri produse pentru a produce alte bunuri și servicii: echipamente, materii prime, calculatoare. Capacitatea întreprinzătorului privește asumarea riscului și combinarea resurselor."
            },
            {
              "type": "list",
              "items": [
                "Ce producem?",
                "Cât producem?",
                "Cum producem?",
                "Pentru cine producem?"
              ]
            },
            {
              "type": "note",
              "title": "Eficiență economică",
              "text": "Urmărim maximizarea raportului dintre rezultate și resursele consumate sau minimizarea raportului invers. Asta nu înseamnă doar să producem mai mult, ci să evităm risipa."
            }
          ],
          "forms": [
            1,
            2
          ]
        },
        {
          "id": "oportunitate",
          "title": "Costul de oportunitate",
          "lead": "Orice alegere are un cost, chiar dacă nu plătești direct bani.",
          "blocks": [
            {
              "type": "p",
              "text": "Costul de oportunitate este valoarea celei mai bune alternative la care renunți pentru a alege varianta curentă. Nu însumezi toate alternativele respinse: o iei în considerare pe cea mai bună dintre ele."
            },
            {
              "type": "example",
              "title": "Exemplu din suportul de curs",
              "steps": [
                "Poți urma un an de studii sau poți lucra la firme care oferă salarii de 2.000, 2.500 și 3.500 USD/an.",
                "Alegi să studiezi, deci renunți la cea mai bună ofertă: 3.500 USD/an.",
                "Costul de oportunitate al acestei decizii este de 3.500 USD/an (în cadrul exemplului, fără alte costuri incluse)."
              ]
            },
            {
              "type": "note",
              "title": "Capcană frecventă",
              "text": "Costul de oportunitate nu este suma celor trei salarii. Este valoarea celei mai bune opțiuni sacrificate."
            }
          ],
          "forms": [
            3
          ]
        },
        {
          "id": "fpp",
          "title": "Frontiera posibilităților de producție",
          "lead": "Graficul care leagă raritatea de alegerile de producție.",
          "blocks": [
            {
              "type": "p",
              "text": "FPP arată combinațiile maxime de două bunuri pe care o economie le poate produce pe termen scurt, folosind integral și eficient resursele disponibile."
            },
            {
              "type": "graph",
              "kind": "fpp"
            },
            {
              "type": "table",
              "headers": [
                "Punct",
                "Computere",
                "Mere (kg)"
              ],
              "rows": [
                [
                  "A",
                  "0",
                  "500"
                ],
                [
                  "B",
                  "100",
                  "400"
                ],
                [
                  "C",
                  "200",
                  "250"
                ],
                [
                  "D",
                  "250",
                  "90"
                ],
                [
                  "E",
                  "275",
                  "0"
                ]
              ]
            },
            {
              "type": "list",
              "items": [
                "Pe frontieră: producție eficientă, cu resurse folosite integral.",
                "În interior: producție posibilă, dar ineficientă sau cu resurse neutilizate.",
                "În exterior: combinație imposibilă pe termen scurt, la resursele actuale."
              ]
            },
            {
              "type": "example",
              "title": "Costul producerii unor computere în plus",
              "steps": [
                "De la B la C, computerele cresc de la 100 la 200: ΔX = +100.",
                "Merele scad de la 400 la 250: sunt sacrificate 150 kg.",
                "Costul de oportunitate pentru un computer suplimentar: 150 / 100 = 1,5 kg mere."
              ]
            },
            {
              "type": "note",
              "title": "Ce observi?",
              "text": "În tabelul original, costul de oportunitate al computerelor crește între segmente: 1 → 1,5 → 3,2 → 3,6 kg mere/computer."
            }
          ],
          "forms": [
            4,
            5
          ]
        }
      ]
    },
    {
      "id": "consumator",
      "number": "02",
      "title": "Teoria consumatorului",
      "short": "Cum alegem ce cumpărăm?",
      "subtitle": "Buget, preferințe, utilitate și echilibru",
      "accent": "#EAE4D5",
      "icon": "◎",
      "duration": "30 min",
      "source": "Teoria consumatorului(4).docx",
      "sections": [
        {
          "id": "buget",
          "title": "Constrângerea bugetară",
          "lead": "Cât îți dorești versus cât îți permiți.",
          "blocks": [
            {
              "type": "p",
              "text": "Pentru două bunuri x și y, consumatorul are un venit disponibil V și prețurile px și py. Cheltuiala totală nu poate depăși venitul disponibil. Pe linia bugetului, venitul este cheltuit integral."
            },
            {
              "type": "graph",
              "kind": "budget"
            },
            {
              "type": "list",
              "items": [
                "Intersecția cu axa x: V / px (dacă banii sunt cheltuiți doar pe x).",
                "Intersecția cu axa y: V / py (dacă banii sunt cheltuiți doar pe y).",
                "Panta liniei bugetului: −px / py."
              ]
            },
            {
              "type": "example",
              "title": "Un buget de 60 u.m.",
              "steps": [
                "Venit V = 60, preț px = 10, preț py = 5.",
                "Poți cumpăra cel mult 6 unități x sau 12 unități y.",
                "Coșul x = 3, y = 6 costă 3×10 + 6×5 = 60 și se află pe dreapta bugetului."
              ]
            },
            {
              "type": "note",
              "title": "Mișcare sau rotație?",
              "text": "Dacă se modifică doar venitul, dreapta bugetului se deplasează paralel. Dacă se modifică doar un preț, dreapta se rotește în jurul intersecției cu axa celuilalt bun."
            }
          ],
          "forms": [
            7,
            8,
            9,
            10,
            11,
            12
          ]
        },
        {
          "id": "preferinte",
          "title": "Preferințe și curbe de indiferență",
          "lead": "Mai multe coșuri pot oferi exact aceeași satisfacție.",
          "blocks": [
            {
              "type": "p",
              "text": "Curba de indiferență reunește combinațiile de bunuri care oferă consumatorului aceeași utilitate. În reprezentarea obișnuită, curbele sunt descrescătoare, convexe și nu se intersectează."
            },
            {
              "type": "p",
              "text": "Rata marginală de substituție (RMS) arată cât din bunul y ar accepta consumatorul să cedeze pentru o unitate în plus din x, păstrând aceeași utilitate. Ca modul al pantei: RMS = −dy/dx."
            },
            {
              "type": "list",
              "items": [
                "Bunuri perfect substituibile: curbe de indiferență drepte paralele.",
                "Bunuri perfect complementare: curbe în formă de L, cu consum în proporții fixe.",
                "Bun neutru: utilitatea nu depinde de consumul acelui bun."
              ]
            },
            {
              "type": "note",
              "title": "Important",
              "text": "La același nivel de utilitate, un consumator poate fi indiferent între coșuri diferite; asta nu înseamnă că bunurile au același preț."
            }
          ],
          "forms": [
            13,
            16,
            17
          ]
        },
        {
          "id": "utilitate",
          "title": "Utilitate totală și marginală",
          "lead": "Satisfacția suplimentară contează în deciziile de consum.",
          "blocks": [
            {
              "type": "p",
              "text": "Utilitatea totală (UT) reprezintă satisfacția asociată consumului. Utilitatea marginală (Umg) este sporul de utilitate la o unitate suplimentară din bunul studiat."
            },
            {
              "type": "p",
              "text": "Conform legii utilității marginale descrescătoare, unitățile succesive din același bun aduc de regulă sporuri tot mai mici de satisfacție. Până la saturație, UT poate crește în timp ce Umg scade. La saturație, Umg ajunge la zero, iar UT este maximă."
            },
            {
              "type": "example",
              "title": "Exemplu simplificat",
              "steps": [
                "Prima unitate oferă 10 unități de utilitate, a doua 7, a treia 4.",
                "Utilitatea totală devine 10, apoi 17, apoi 21.",
                "Umg a scăzut 10 → 7 → 4, deși UT a crescut."
              ]
            }
          ],
          "forms": [
            14,
            15
          ]
        },
        {
          "id": "optim",
          "title": "Optimul consumatorului",
          "lead": "Cea mai bună combinație pe care o poți plăti.",
          "blocks": [
            {
              "type": "p",
              "text": "În cazul unui optim interior cu curbe de indiferență netede, linia bugetului este tangentă la cea mai înaltă curbă de indiferență accesibilă. Acest lucru înseamnă egalitatea dintre RMS și raportul prețurilor."
            },
            {
              "type": "list",
              "items": [
                "Condiția de optim: RMS = px / py.",
                "Echivalent, pentru o soluție interioară: Umgx / px = Umgy / py.",
                "Condiția bugetară se folosește împreună cu cea de optim: px·x + py·y = V."
              ]
            },
            {
              "type": "example",
              "title": "Cum rezolvi o grilă cu două bunuri",
              "steps": [
                "Scrii condiția Umgx / px = Umgy / py.",
                "Introduci expresiile Umg și prețurile din enunț.",
                "Rezolvi împreună cu ecuația bugetului și verifici varianta care respectă ambele condiții."
              ]
            },
            {
              "type": "note",
              "title": "Excepții",
              "text": "Pentru bunuri perfect substituibile sau perfect complementare, optimul poate apărea într-un colț sau la vârful curbei în L; nu aplica mecanic regula tangenței."
            }
          ],
          "forms": [
            18,
            19,
            20,
            21,
            22,
            23
          ]
        }
      ]
    },
    {
      "id": "cerere",
      "number": "03",
      "title": "Cererea",
      "short": "Cum reacționăm la prețuri?",
      "subtitle": "Legea cererii, condiții și elasticități",
      "accent": "#DCE6EF",
      "icon": "⌁",
      "duration": "30 min",
      "source": "Cererea -suport de curs(4).docx",
      "sections": [
        {
          "id": "lege",
          "title": "Ce este cererea?",
          "lead": "Nu confundăm dorința cu cererea efectivă.",
          "blocks": [
            {
              "type": "p",
              "text": "Cererea individuală exprimă relația dintre prețul unui bun și cantitatea pe care o persoană dorește și poate să o cumpere într-o perioadă. Cererea pieței reprezintă suma cererilor individuale pentru același bun."
            },
            {
              "type": "p",
              "text": "Legea cererii arată relația inversă dintre preț și cantitatea cerută, în condițiile în care ceilalți factori rămân constanți (ceteris paribus)."
            },
            {
              "type": "graph",
              "kind": "demand"
            },
            {
              "type": "list",
              "items": [
                "Prețul unui bun crește → cantitatea cerută scade, de regulă.",
                "Prețul bunului scade → cantitatea cerută crește, de regulă.",
                "Modificarea prețului propriu produce o deplasare de-a lungul curbei, nu deplasarea întregii curbe."
              ]
            },
            {
              "type": "note",
              "title": "Două noțiuni diferite",
              "text": "„Cererea” este întreaga relație preț–cantitate. „Cantitatea cerută” este numărul de unități la un anumit preț."
            }
          ],
          "forms": [
            24,
            25
          ]
        },
        {
          "id": "factori",
          "title": "Ce deplasează curba cererii?",
          "lead": "Factorii non-preț schimbă cererea, nu doar un punct de pe curbă.",
          "blocks": [
            {
              "type": "p",
              "text": "Cursul distinge între o modificare a cantității cerute (când variază prețul propriu) și modificarea cererii (când se schimbă alte condiții)."
            },
            {
              "type": "list",
              "items": [
                "Venitul: pentru bunuri normale, creșterea venitului mărește cererea; pentru bunuri inferioare, relația se inversează.",
                "Preferințele: o preferință mai puternică pentru bun mărește cererea.",
                "Numărul consumatorilor: mai mulți cumpărători măresc cererea pieței.",
                "Bunuri substituibile: scumpirea bunului X poate crește cererea pentru Y.",
                "Bunuri complementare: scumpirea bunului X poate reduce cererea pentru Y.",
                "Așteptările: anticiparea unor scumpiri viitoare poate crește cererea prezentă."
              ]
            },
            {
              "type": "example",
              "title": "Cafea și ceai",
              "steps": [
                "Cafeaua și ceaiul sunt considerate substituibile în acest exemplu.",
                "Dacă prețul cafelei crește, unii cumpărători se orientează spre ceai.",
                "Cererea pentru ceai se deplasează spre dreapta, chiar dacă prețul ceaiului nu s-a schimbat."
              ]
            }
          ],
          "forms": [
            24
          ]
        },
        {
          "id": "elasticitate",
          "title": "Elasticitatea cererii la preț",
          "lead": "Cu cât de mult reacționează cantitatea la o schimbare de preț?",
          "blocks": [
            {
              "type": "p",
              "text": "Elasticitatea cererii la preț este raportul dintre variația procentuală a cantității cerute și variația procentuală a prețului. În mod obișnuit, coeficientul este negativ; pentru clasificare se folosește modulul lui."
            },
            {
              "type": "list",
              "items": [
                "|E| > 1: cerere elastică — cantitatea reacționează procentual mai mult decât prețul.",
                "|E| < 1: cerere inelastică — reacție procentuală mai mică.",
                "|E| = 1: elasticitate unitară.",
                "|E| = 0: perfect inelastică; |E| → ∞: perfect elastică."
              ]
            },
            {
              "type": "example",
              "title": "Exemplu: preț și cantitate",
              "steps": [
                "Prețul crește cu 10%, cantitatea cerută scade cu 20%.",
                "E = (−20%) / (+10%) = −2.",
                "|E| = 2 → cerere elastică."
              ]
            },
            {
              "type": "note",
              "title": "Corecție din fișa de formule",
              "text": "Pentru funcția Q = 10 − 2P la P = 2, rezultă Q = 6 și E = (−2) × (2/6) = −2/3 ≈ −0,67. Suportul de curs are o eroare aritmetică în acest exemplu; fișa de formule o semnalează explicit."
            }
          ],
          "forms": [
            26,
            27,
            28,
            29,
            30,
            33,
            34
          ]
        },
        {
          "id": "alte-elasticitati",
          "title": "Venit și elasticitate încrucișată",
          "lead": "Semnul coeficientului îți spune ce fel de bun analizezi.",
          "blocks": [
            {
              "type": "p",
              "text": "Elasticitatea la venit măsoară variația procentuală a cantității cerute raportată la variația procentuală a venitului. Elasticitatea încrucișată raportează variația cantității cerute din bunul X la modificarea prețului bunului Y."
            },
            {
              "type": "list",
              "items": [
                "Elasticitate la venit pozitivă → bun normal.",
                "Elasticitate la venit negativă → bun inferior.",
                "Elasticitate încrucișată pozitivă → bunuri substituibile.",
                "Elasticitate încrucișată negativă → bunuri complementare."
              ]
            },
            {
              "type": "example",
              "title": "Două prețuri, două bunuri",
              "steps": [
                "Dacă prețul bunului Y crește cu 5%, iar cantitatea cerută din X crește cu 10%:",
                "Exy = (+10%) / (+5%) = +2.",
                "Coeficientul pozitiv indică bunuri substituibile."
              ]
            }
          ],
          "forms": [
            31,
            32
          ]
        },
        {
          "id": "atipica",
          "title": "Cererea atipică",
          "lead": "Câteva cazuri se abat de la legea obișnuită a cererii.",
          "blocks": [
            {
              "type": "p",
              "text": "Suportul de curs prezintă situații în care, în anumite condiții, creșterea prețului poate fi asociată cu o creștere a cantității cerute."
            },
            {
              "type": "list",
              "items": [
                "Efectul Giffen: pentru anumite bunuri inferioare, efectul de venit poate domina efectul de substituție.",
                "Snobism și ostentație: un preț mare poate accentua atractivitatea unor bunuri cumpărate pentru statut.",
                "Aceste situații sunt excepții; nu înlocuiesc legea generală a cererii."
              ]
            },
            {
              "type": "note",
              "title": "Pentru grile",
              "text": "Caută în enunț dacă este vorba despre bunuri normale/inferioare, substituibile/complementare sau despre un caz atipic."
            }
          ],
          "forms": []
        }
      ]
    },
    {
      "id": "costuri",
      "number": "04",
      "title": "Costuri și profit",
      "short": "Cum ia decizii firma?",
      "subtitle": "CT, CF, CV, costuri marginale și pragul de rentabilitate",
      "accent": "#EDE2E1",
      "icon": "▤",
      "duration": "30 min",
      "source": "Teoria economica producatorului (II). Costurile de productie si profitul(1).ppt",
      "sections": [
        {
          "id": "costuri-tipuri",
          "title": "Cost explicit, implicit și profit",
          "lead": "O firmă poate avea profit contabil, dar alt profit economic.",
          "blocks": [
            {
              "type": "p",
              "text": "Costul de producție cuprinde cheltuielile asociate producerii și comercializării bunurilor sau serviciilor într-o perioadă. Prezentarea distinge costul explicit (contabil) de costul implicit — costul de oportunitate al resurselor proprii utilizate în firmă."
            },
            {
              "type": "list",
              "items": [
                "Profit contabil = încasări totale − costuri explicite.",
                "Profit economic = încasări totale − (costuri explicite + costuri implicite)."
              ]
            },
            {
              "type": "example",
              "title": "Profit contabil versus economic",
              "steps": [
                "Încasări VT = 10.000 u.m.; costuri explicite CT = 7.000 u.m.; costuri implicite CI = 2.000 u.m.",
                "Profit contabil = 10.000 − 7.000 = 3.000 u.m.",
                "Profit economic = 10.000 − (7.000 + 2.000) = 1.000 u.m."
              ]
            },
            {
              "type": "note",
              "title": "Atenție la notație",
              "text": "În prezentarea de curs, CT este folosit pentru costul explicit/contabil la calculul profitului. În analiza costurilor totale, CT = CF + CV."
            }
          ],
          "forms": [
            35,
            36,
            37
          ]
        },
        {
          "id": "fixe-variabile",
          "title": "Costuri fixe și variabile",
          "lead": "Nu toate cheltuielile reacționează la schimbarea producției.",
          "blocks": [
            {
              "type": "p",
              "text": "Pe termen scurt, costul fix (CF) este independent de volumul producției și există și atunci când Q = 0. Costul variabil (CV) se modifică odată cu Q. Costul total este suma lor."
            },
            {
              "type": "graph",
              "kind": "cost"
            },
            {
              "type": "example",
              "title": "Funcția din prezentare",
              "steps": [
                "CT(Q) = Q² + 5Q + 20.",
                "CF = 20 este termenul constant, independent de Q.",
                "CV(Q) = Q² + 5Q este componenta variabilă."
              ]
            },
            {
              "type": "note",
              "title": "Verificare rapidă",
              "text": "La Q = 0, CV(0) = 0 și CT(0) = CF = 20 în acest exemplu."
            }
          ],
          "forms": [
            38,
            39,
            40
          ]
        },
        {
          "id": "medii",
          "title": "Costurile medii",
          "lead": "Cât ne costă, în medie, o unitate?",
          "blocks": [
            {
              "type": "p",
              "text": "Indicatorii medii raportează costurile la volumul producției Q, pentru Q > 0. Costul fix mediu scade pe măsură ce producția crește, dacă CF rămâne constant."
            },
            {
              "type": "list",
              "items": [
                "Cost mediu total: ctm = CT / Q.",
                "Cost fix mediu: cfm = CF / Q.",
                "Cost variabil mediu: cvm = CV / Q.",
                "Relație de verificare: ctm = cfm + cvm."
              ]
            },
            {
              "type": "table",
              "headers": [
                "Q",
                "CF",
                "CV",
                "CT",
                "ctm"
              ],
              "rows": [
                [
                  "1",
                  "200",
                  "160",
                  "360",
                  "360"
                ],
                [
                  "2",
                  "200",
                  "250",
                  "450",
                  "225"
                ],
                [
                  "3",
                  "200",
                  "331",
                  "531",
                  "177"
                ],
                [
                  "4",
                  "200",
                  "508",
                  "708",
                  "177"
                ],
                [
                  "5",
                  "200",
                  "700",
                  "900",
                  "180"
                ],
                [
                  "6",
                  "200",
                  "900",
                  "1100",
                  "≈183"
                ]
              ]
            },
            {
              "type": "note",
              "title": "Date din prezentare",
              "text": "Tabelul de mai sus folosește exemplul numeric cu CF = 200 din diapozitive. Unele valori medii sunt rotunjite în sursă."
            }
          ],
          "forms": [
            41,
            42,
            43,
            44
          ]
        },
        {
          "id": "marginal",
          "title": "Costul marginal",
          "lead": "Ce cost suplimentar generează o unitate în plus?",
          "blocks": [
            {
              "type": "p",
              "text": "Costul marginal (cmg) arată variația costului total pentru o creștere a cantității produse. În calcul discret: cmg = ΔCT/ΔQ. Pentru funcții continue se calculează derivata CT în raport cu Q."
            },
            {
              "type": "example",
              "title": "Din funcția CT(Q) = Q² + 5Q + 20",
              "steps": [
                "Derivăm în raport cu Q: cmg(Q) = 2Q + 5.",
                "La Q = 3, costul marginal punctual este 2×3 + 5 = 11 u.m. pe unitate.",
                "Atenție: diferența discretă CT(4) − CT(3) = 12; derivata și creșterea pe un interval de o unitate nu sunt identice pentru o funcție neliniară."
              ]
            },
            {
              "type": "list",
              "items": [
                "Dacă cmg < ctm, costul mediu total scade.",
                "Dacă cmg > ctm, costul mediu total crește.",
                "Dacă cmg = ctm, ctm este minim (în cadrul curbelor descrise în prezentare)."
              ]
            }
          ],
          "forms": [
            45,
            46,
            47,
            48
          ]
        },
        {
          "id": "rentabilitate",
          "title": "Pragul de rentabilitate",
          "lead": "Când firma trece de la pierdere la profit?",
          "blocks": [
            {
              "type": "p",
              "text": "Pragul de rentabilitate (Qr) este volumul pentru care încasările totale egalează costurile totale. Profitul este zero. În modelul simplificat din prezentare, prețul unitar p și costul variabil mediu cvm sunt constante."
            },
            {
              "type": "example",
              "title": "Exemplu de prag de rentabilitate",
              "steps": [
                "Cost fix CF = 300 u.m., preț p = 20 u.m./buc., cvm = 10 u.m./buc.",
                "Qr = 300 / (20 − 10) = 30 bucăți.",
                "La 30 bucăți: VT = 600, CT = 300 + 10×30 = 600 → profit zero.",
                "Sub 30 bucăți: pierdere. Peste 30 bucăți: profit, în ipotezele modelului."
              ]
            },
            {
              "type": "note",
              "title": "Condiție esențială",
              "text": "Formula Qr = CF/(p − cvm) presupune p > cvm; altfel marja unitară nu acoperă costul fix."
            }
          ],
          "forms": [
            49,
            50,
            51,
            52
          ]
        }
      ]
    }
  ],
  "formulas": [
    {
      "id": 1,
      "module": "raritate",
      "title": "EFICIENȚĂ ECONOMICĂ — EXPRIMARE A DEFINIȚIEI  ·  exprimare simbolică",
      "expr": "Eficiență = Rezultate / Consum de resurse",
      "detail": "Raportul se maximizează: obținerea unui rezultat mai mare pentru resurse date."
    },
    {
      "id": 2,
      "module": "raritate",
      "title": "RAPORTUL INVERS  ·  exprimare simbolică",
      "expr": "Consum de resurse / Rezultate",
      "detail": "Raportul se minimizează, pentru un nivel de rezultat dat."
    },
    {
      "id": 3,
      "module": "raritate",
      "title": "COST DE OPORTUNITATE — DEFINIȚIE  ·  exprimare a definiției",
      "expr": "CO = valoarea celei mai bune alternative sacrificate",
      "detail": "Exemplul din curs: renunțarea la un salariu de 3.500 USD/an pentru studii => CO = 3.500 USD/an."
    },
    {
      "id": 4,
      "module": "raritate",
      "title": "COSTUL OPORTUN PENTRU SPORUL BUNULUI Y",
      "expr": "COY = − ΔX / ΔY",
      "detail": "ΔX este negativ atunci când renunți la X; minusul face costul oportun pozitiv. Formula apare în curs."
    },
    {
      "id": 5,
      "module": "raritate",
      "title": "COSTUL OPORTUN PENTRU SPORUL BUNULUI X  ·  formă simetrică, dedusă",
      "expr": "COX = − ΔY / ΔX",
      "detail": "Aceeași relație, cu rolurile bunurilor inversate."
    },
    {
      "id": 7,
      "module": "consumator",
      "title": "CONSTRÂNGEREA BUGETARĂ",
      "expr": "px · x + py · y ≤ V",
      "detail": "x, y = cantități; pₓ, pᵧ = prețuri; V = venitul consumatorului. Toate combinațiile accesibile respectă inegalitatea."
    },
    {
      "id": 8,
      "module": "consumator",
      "title": "DREAPTA (LINIA) BUGETULUI",
      "expr": "px · x + py · y = V",
      "detail": "Egalitatea înseamnă cheltuirea integrală a venitului."
    },
    {
      "id": 9,
      "module": "consumator",
      "title": "ECUAȚIA DREPTEI BUGETULUI ÎN FUNCȚIE DE Y  ·  formă echivalentă",
      "expr": "y = V / py − (px / py) · x",
      "detail": "Forma echivalentă prezentată în suport printr-o ecuație inserată ca imagine."
    },
    {
      "id": 10,
      "module": "consumator",
      "title": "INTERSECȚII CU AXELE  ·  dedusă direct",
      "expr": "xmax = V / px      ;      ymax = V / py",
      "detail": "Se obțin când întreaga sumă este cheltuită pe un singur bun."
    },
    {
      "id": 11,
      "module": "consumator",
      "title": "PANTA LINIEI BUGETULUI",
      "expr": "dy/dx = − px / py",
      "detail": "În valoare absolută, raportul prețurilor indică schimbul posibil între bunuri."
    },
    {
      "id": 12,
      "module": "consumator",
      "title": "DACĂ AMBELE PREȚURI CRESC DE N ORI",
      "expr": "n · px · x + n · py · y = V  ⇔  px · x + py · y = V / n",
      "detail": "Echivalent cu reducerea venitului real de n ori, în ipotezele din curs."
    },
    {
      "id": 13,
      "module": "consumator",
      "title": "UTILITATE CONSTANTĂ PE CURBA DE INDIFERENȚĂ  ·  notare explicativă",
      "expr": "U(x, y) = constant",
      "detail": "Exprimare simbolică a definiției: toate combinațiile de pe aceeași curbă oferă aceeași utilitate."
    },
    {
      "id": 14,
      "module": "consumator",
      "title": "UTILITATE MARGINALĂ A BUNULUI X",
      "expr": "Umgx = dUT / dx",
      "detail": "UT = utilitatea totală; derivata exprimă sporul de utilitate la o unitate suplimentară din x."
    },
    {
      "id": 15,
      "module": "consumator",
      "title": "UTILITATE MARGINALĂ A BUNULUI Y  ·  dedusă",
      "expr": "Umgy = dUT / dy",
      "detail": "Expresia simetrică pentru bunul y."
    },
    {
      "id": 16,
      "module": "consumator",
      "title": "VARIAȚIA UTILITĂȚII PE ACEEAȘI CURBĂ",
      "expr": "Umgx · dx + Umgy · dy = 0",
      "detail": "Deplasarea pe aceeași curbă păstrează utilitatea totală constantă."
    },
    {
      "id": 17,
      "module": "consumator",
      "title": "RATA MARGINALĂ DE SUBSTITUȚIE (RMS)",
      "expr": "RMS = − dy/dx = Umgx / Umgy",
      "detail": "RMS pozitivă reprezintă modulul pantei curbei de indiferență."
    },
    {
      "id": 18,
      "module": "consumator",
      "title": "CONDIȚIA DE TANGENTA ÎN OPTIMUL INTERIOR",
      "expr": "RMS = px / py",
      "detail": "La optim, modulul pantei curbei de indiferență este egal cu raportul prețurilor."
    },
    {
      "id": 19,
      "module": "consumator",
      "title": "REGULA UTILITĂȚII MARGINALE PE UNITATE MONETARĂ  ·  dedusă din condiția optimului",
      "expr": "Umgx / px = Umgy / py",
      "detail": "Formă echivalentă: utilitatea marginală pe leu cheltuit este aceeași pentru ambele bunuri."
    },
    {
      "id": 20,
      "module": "consumator",
      "title": "BUNURI PERFECT SUBSTITUIBILE, LA SUBSTITUȚIE 1:1",
      "expr": "px > py ⇒ se alege y;   px < py ⇒ se alege x",
      "detail": "Dacă utilitatea oferită de o unitate este aceeași, consumatorul alege bunul mai ieftin. În cazul pₓ = pᵧ, poate alege orice combinație pe buget."
    },
    {
      "id": 21,
      "module": "consumator",
      "title": "BUNURI PERFECT COMPLEMENTARE, PROPORȚIE 1:1",
      "expr": "x = y = m      ;      m(px + py) = V",
      "detail": "Optimul este la vârful curbei în L (consum în aceeași cantitate din ambele bunuri)."
    },
    {
      "id": 22,
      "module": "consumator",
      "title": "CANTITATEA OPTIMĂ DE PERECHI COMPLEMENTARE",
      "expr": "m = V / (px + py)",
      "detail": "Formula rezultă din ecuația bugetară pentru x = y = m."
    },
    {
      "id": 23,
      "module": "consumator",
      "title": "BUN NEUTRU Y (TOATĂ CHELTUIALA PE X)",
      "expr": "y = 0  ⇒  V = px · x  ⇒  x = V / px",
      "detail": "Consumatorul nu cheltuiește bani pe bunul neutru y."
    },
    {
      "id": 24,
      "module": "cerere",
      "title": "CEREREA PIEȚEI (AGREGAREA CERERILOR INDIVIDUALE)  ·  transcriere simbolică a definiției",
      "expr": "Qpiață(P) = Σ Qi(P)",
      "detail": "Cantitatea totală cerută la un preț este suma cantităților cerute de consumatori."
    },
    {
      "id": 25,
      "module": "cerere",
      "title": "LEGEA CERERII — RELAȚIA DINTRE PREȚ ȘI CANTITATE  ·  transcriere simbolică",
      "expr": "P ↑ ⇒ Q ↓       ;       P ↓ ⇒ Q ↑",
      "detail": "Relație inversă, celelalte condiții menținute constante."
    },
    {
      "id": 26,
      "module": "cerere",
      "title": "VARIAȚII ABSOLUTE ȘI PROCENTUALE",
      "expr": "ΔQ = Q1 − Q0      ;      ΔP = P1 − P0",
      "detail": "%ΔQ = (ΔQ/Q₀)·100%; %ΔP = (ΔP/P₀)·100%."
    },
    {
      "id": 27,
      "module": "cerere",
      "title": "ELASTICITATEA CERERII LA PREȚ — VARIANTA DE BAZĂ",
      "expr": "Ec/p = (%ΔQ) / (%ΔP) = (ΔQ/Q0) / (ΔP/P0)",
      "detail": "Coeficientul este, în mod obișnuit, negativ deoarece Q și P evoluează în sensuri opuse."
    },
    {
      "id": 28,
      "module": "cerere",
      "title": "ELASTICITATE LA MIJLOCUL INTERVALULUI (ARC)",
      "expr": "Ec/p = [ΔQ / ((Q0+Q1)/2)] / [ΔP / ((P0+P1)/2)]",
      "detail": "Se ia drept bază media celor două cantități, respectiv a celor două prețuri."
    },
    {
      "id": 29,
      "module": "cerere",
      "title": "ELASTICITATEA ÎNTR-UN PUNCT",
      "expr": "Ec/p = (dQ/dP) · (P/Q)",
      "detail": "Pentru o funcție de cerere Q = f(P), se folosește derivata față de preț."
    },
    {
      "id": 31,
      "module": "cerere",
      "title": "ELASTICITATEA CERERII LA VENIT",
      "expr": "Ec/V = (%ΔQ) / (%ΔV) = (ΔQ/Q0) / (ΔV/V0)",
      "detail": "E(c/V) > 0 pentru bunuri normale; E(c/V) < 0 pentru bunuri inferioare."
    },
    {
      "id": 32,
      "module": "cerere",
      "title": "ELASTICITATEA ÎNCRUCIȘATĂ A CERERII",
      "expr": "Ecx/py = (%ΔQx) / (%ΔPy)",
      "detail": "E(cx/py) > 0 pentru substituibile; E(cx/py) < 0 pentru complementare. Cantitatea lui x reacționează la prețul lui y."
    },
    {
      "id": 33,
      "module": "cerere",
      "title": "DATELE EXEMPLULUI",
      "expr": "Q = 10 − 2P      ;      P = 2  ⇒  Q = 6",
      "detail": "Din funcția de cerere rezultă dQ/dP = −2."
    },
    {
      "id": 34,
      "module": "cerere",
      "title": "APLICAREA CORECTĂ A ELASTICITĂȚII PUNCTUALE  ·  corecție aritmetică explicită",
      "expr": "Ec/p = (−2) · (2/6) = −2/3 ≈ −0,67",
      "detail": "În suport apare „−6”; acesta nu rezultă din formula indicată și din valorile exemplului."
    },
    {
      "id": 35,
      "module": "costuri",
      "title": "PROFITUL CONTABIL",
      "expr": "Pr = VT − CT",
      "detail": "VT = încasări totale; CT = cost explicit/contabil, în notația din prezentare."
    },
    {
      "id": 36,
      "module": "costuri",
      "title": "PROFITUL ECONOMIC",
      "expr": "Pre = VT − (CT + CI)",
      "detail": "CI = costul implicit, respectiv costul de oportunitate al resurselor firmei."
    },
    {
      "id": 37,
      "module": "costuri",
      "title": "ÎNCASĂRILE TOTALE LA PREȚ UNITAR CONSTANT",
      "expr": "VT = p · Q",
      "detail": "p = preț/unitate, Q = volum al producției vândute, în ipoteza din exemplul de rentabilitate."
    },
    {
      "id": 38,
      "module": "costuri",
      "title": "COMPONENTELE COSTULUI TOTAL",
      "expr": "CT = CF + CV",
      "detail": "CF = cost fix pe termen scurt (independent de Q); CV = cost variabil (depinde de Q)."
    },
    {
      "id": 39,
      "module": "costuri",
      "title": "FUNCȚIA COSTULUI TOTAL",
      "expr": "CT = f(Q)",
      "detail": "Q = volumul fizic al producției. În prezentare: CT = Q² + 5Q + 20."
    },
    {
      "id": 40,
      "module": "costuri",
      "title": "DESCOMPUNEREA EXEMPLULUI DIN PREZENTARE  ·  dedusă",
      "expr": "CT = Q² + 5Q + 20;    CF = 20;    CV = Q² + 5Q",
      "detail": "Identificarea componentei fixe și a celei variabile se face pentru acest exemplu de funcție."
    },
    {
      "id": 41,
      "module": "costuri",
      "title": "COST MEDIU TOTAL",
      "expr": "ctm = CT / Q",
      "detail": "Costul unei unități de produs, mediat pe întreaga producție (Q > 0)."
    },
    {
      "id": 42,
      "module": "costuri",
      "title": "COST FIX MEDIU",
      "expr": "cfm = CF / Q",
      "detail": "Pe măsură ce Q crește, cfm scade dacă CF este constant."
    },
    {
      "id": 43,
      "module": "costuri",
      "title": "COST VARIABIL MEDIU",
      "expr": "cvm = CV / Q",
      "detail": "Costul variabil total raportat la cantitatea produsă."
    },
    {
      "id": 44,
      "module": "costuri",
      "title": "RELAȚIA DINTRE COSTURILE MEDII",
      "expr": "ctm = cfm + cvm",
      "detail": "Rezultă prin împărțirea relației CT = CF + CV la Q."
    },
    {
      "id": 45,
      "module": "costuri",
      "title": "COST MARGINAL — VARIAȚIE DISCRETĂ",
      "expr": "cmg = ΔCT / ΔQ",
      "detail": "Costul producției suplimentare; dacă ΔQ = 1, cmg = diferența dintre costurile totale succesive."
    },
    {
      "id": 46,
      "module": "costuri",
      "title": "COST MARGINAL — FORMĂ CONTINUĂ",
      "expr": "cmg = dCT / dQ = CT′(Q)",
      "detail": "Costul marginal este derivata funcției costului total."
    },
    {
      "id": 47,
      "module": "costuri",
      "title": "EXEMPLU DE COST MARGINAL  ·  dedusă",
      "expr": "CT = Q² + 5Q + 20  ⇒  cmg = 2Q + 5",
      "detail": "Derivarea funcției CT(Q) din prezentare."
    },
    {
      "id": 48,
      "module": "costuri",
      "title": "RAPORTUL COST MARGINAL / MEDIU TOTAL",
      "expr": "cmg > ctm ⇒ ctm ↑;   cmg = ctm ⇒ ctm minim;   cmg < ctm ⇒ ctm ↓",
      "detail": "Corelații similare sunt valabile între cmg și cvm (în zona valorilor minime)."
    },
    {
      "id": 49,
      "module": "costuri",
      "title": "DEFINIȚIA PRAGULUI DE RENTABILITATE",
      "expr": "VT = CT   ⇔   Pr = 0",
      "detail": "La Qr, firma nu obține nici profit, nici pierdere în modelul contabil folosit."
    },
    {
      "id": 50,
      "module": "costuri",
      "title": "EGALITATEA VENITURILOR CU CHELTUIELILE",
      "expr": "p · Qr = CF + cvm · Qr",
      "detail": "În acest model, costul variabil mediu cvm este presupus constant pentru calculul pragului."
    },
    {
      "id": 51,
      "module": "costuri",
      "title": "PRAGUL DE RENTABILITATE",
      "expr": "Qr = CF / (p − cvm)",
      "detail": "Relația din prezentare. Condiție de utilizare: p > cvm."
    },
    {
      "id": 52,
      "module": "costuri",
      "title": "PROFITUL ÎN MODELUL LINIAR AL PRAGULUI  ·  dedusă",
      "expr": "Pr(Q) = (p − cvm) · Q − CF",
      "detail": "Expresie echivalentă obținută din Pr = VT − CT."
    }
  ],
  "quiz": [
    {
      "id": "r1",
      "section": "raritate",
      "q": "Care este cauza fundamentală a alegerilor economice?",
      "options": [
        "Resursele sunt limitate față de nevoi",
        "Nevoile sunt întotdeauna zero",
        "Banii au aceeași valoare peste tot",
        "Toate bunurile sunt libere"
      ],
      "answer": 0,
      "origin": "Recapitulare creată pe baza suportului de curs"
    },
    {
      "id": "r2",
      "section": "raritate",
      "q": "Ce reprezintă costul de oportunitate?",
      "options": [
        "Totalul tuturor alternativelor posibile",
        "Cheltuiala bănească efectivă",
        "Cea mai bună alternativă sacrificată",
        "Valoarea bunului ales"
      ],
      "answer": 2,
      "origin": "Recapitulare creată pe baza suportului de curs"
    },
    {
      "id": "r3",
      "section": "raritate",
      "q": "Care dintre următoarele este un bun liber în exemplul din curs?",
      "options": [
        "Un calculator",
        "Aerul respirat",
        "O mașină",
        "O carte cumpărată"
      ],
      "answer": 1,
      "origin": "Recapitulare creată pe baza suportului de curs"
    },
    {
      "id": "r4",
      "section": "raritate",
      "q": "O combinație de producție aflată în interiorul FPP indică:",
      "options": [
        "Utilizare ineficientă sau incompletă a resurselor",
        "Producție imposibilă cu resursele date",
        "Utilizare eficientă maximă a resurselor",
        "Cost de oportunitate zero obligatoriu"
      ],
      "answer": 0,
      "origin": "Recapitulare creată pe baza suportului de curs"
    },
    {
      "id": "r5",
      "section": "raritate",
      "q": "O combinație aflată în exteriorul FPP este:",
      "options": [
        "Întotdeauna mai ieftină",
        "Imposibilă pe termen scurt cu resursele actuale",
        "Neapărat optimă",
        "Obligatoriu aleasă de consumatori"
      ],
      "answer": 1,
      "origin": "Recapitulare creată pe baza suportului de curs"
    },
    {
      "id": "r6",
      "section": "raritate",
      "q": "De la B (100 computere, 400 kg mere) la C (200 computere, 250 kg mere), cât este costul de oportunitate al unui computer suplimentar?",
      "options": [
        "0,5 kg mere",
        "1 kg mere",
        "1,5 kg mere",
        "2 kg mere"
      ],
      "answer": 2,
      "origin": "Recapitulare creată pe baza suportului de curs"
    },
    {
      "id": "r7",
      "section": "raritate",
      "q": "Care este întrebarea economică legată de distribuirea bunurilor și veniturilor?",
      "options": [
        "Pentru cine producem?",
        "Cum numărăm resursele?",
        "Când expiră capitalul?",
        "Câte nevoi există?"
      ],
      "answer": 0,
      "origin": "Recapitulare creată pe baza suportului de curs"
    },
    {
      "id": "r8",
      "section": "raritate",
      "q": "Dacă o economie produce pe FPP, aceasta folosește resursele:",
      "options": [
        "Doar pe cele naturale",
        "Integral și eficient",
        "Numai pe cele umane",
        "Sub capacitatea disponibilă"
      ],
      "answer": 1,
      "origin": "Recapitulare creată pe baza suportului de curs"
    },
    {
      "id": "r9",
      "section": "raritate",
      "q": "Într-o decizie între trei locuri de muncă cu salarii de 2.000, 2.500 și 3.500 u.m., dacă alegi să studiezi, care este costul de oportunitate salarial?",
      "options": [
        "2.000",
        "2.500",
        "3.500",
        "8.000"
      ],
      "answer": 2,
      "origin": "Recapitulare creată pe baza suportului de curs"
    },
    {
      "id": "r10",
      "section": "raritate",
      "q": "În curs, capitalul economic se referă la:",
      "options": [
        "Doar bani lichizi",
        "Bunuri produse pentru producerea altor bunuri și servicii",
        "Exclusiv terenuri naturale",
        "Numai capacitatea antreprenorului"
      ],
      "answer": 1,
      "origin": "Recapitulare creată pe baza suportului de curs"
    },
    {
      "id": "g1",
      "section": "consumator",
      "q": "Atunci când se consumă în mod succesiv unităţi din acelaşi bun economic, până la saturaţie",
      "options": [
        "Umg creşte şi UT scade",
        "Umg rămâne constantă şi UT scade",
        "Umg descreşte în aceeaşi măsură cu UT",
        "Umg creşte în aceeaşi măsură cu UT",
        "Umg descreşte iar UT creşte."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g2",
      "section": "consumator",
      "q": "Panta curbei de indiferenţă este",
      "options": [
        "raportul dintre preţurile bunurilor",
        "dreapta bugetului",
        "raportul dintre utilitatea totală a bunului substituit şi utilitatea totală a  bunului care îl substituie",
        "rata marginală de substituţie",
        "raportul dintre utilitatea totală a bunului care substituie şi utilitatea totală a bunului substituit."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g3",
      "section": "consumator",
      "q": "Prin consumul succesiv a unor unităţi din acelaşi bun economic, până la saturaţie, utilitatea totală este",
      "options": [
        "pozitivă şi descrescătoare",
        "negativă",
        "zero",
        "descrescătoare",
        "pozitivă şi crescătoare."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g4",
      "section": "consumator",
      "q": "Utilitatea totală este maximă atunci când",
      "options": [
        "UmgA=UmgB",
        "UmgA/PB=UmgB/PA",
        "UmgA/UmgB=PA",
        "UmgA/PA=UmgB/PB",
        "UmgB/UmgA=PA/PB."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g5",
      "section": "consumator",
      "q": "Un individ are un venit disponibil Vd=20 u.m. El consumă două bunuri X şi Y cu preţurile Px=1 u.m. şi Py=2 u.m. În condiţiile în care Umgx=10-Qx iar Umgy=28-2Qy, programul de consum care asigură echilibrul consumatorului este",
      "options": [
        "2X şi 3Y",
        "4X şi 8Y",
        "3X şi 2Y",
        "8X şi 4Y",
        "2X şi 5Y."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g6",
      "section": "consumator",
      "q": "Funcţia utilităţii totale a unui individ este UT=5+3Qx, unde Qx reprezintă cantitatea consumată din bunul X. În condiţiile în care Px=2 u.m., iar venitul disponibil al individului este Vd=200 u.m., utilitatea marginală a consumului din bunul X este",
      "options": [
        "2",
        "3",
        "1",
        "4",
        "5."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g7",
      "section": "consumator",
      "q": "Conform legii lui Gossen, atunci când se consumă unităţi succesive dintr-un bun, intensitatea nevoii umane pentru bunul respectiv",
      "options": [
        "scade",
        "creşte",
        "nu se modifică",
        "întâi creşte, apoi scade",
        "se accentuează."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g8",
      "section": "consumator",
      "q": "Dacă utilitatea marginală a unui bun este zero, atunci utilitatea totală este",
      "options": [
        "zero",
        "negativă",
        "crescătoare",
        "descrescătoare",
        "maximă şi constantă."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g9",
      "section": "consumator",
      "q": "Curba coşurilor de consum care generează acelaşi nivel al utilităţii consumului se numeşte",
      "options": [
        "linie a bugetului",
        "curbă a cererii",
        "curbă a ofertei",
        "curbă de indiferenţă",
        "izocost."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g10",
      "section": "consumator",
      "q": "Curbele de indiferenţă au o pantă negativă deoarece",
      "options": [
        "atunci când consumatorul obţine o cantitate suplimentară dintr-un bun, trebuie să renunţe la o cantitate din celălalt bun pentru a păstra utilitatea constantă",
        "atunci când consumatorul obţine o cantitate suplimentară dintr-un bun, trebuie să obţină o cantitate suplimentară şi din celălalt bun pentru a păstra utilitatea constantă",
        "rata marginală de substituţie nu este constantă",
        "rata marginală de substituţie este pozitivă",
        "nici un răspuns din cele de mai sus."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g11",
      "section": "consumator",
      "q": "Diferenţa dintre valoarea bunului – cât de mult suntem dispuşi să plătim pentru a-l procura - şi preţul aferent acelui bun pe piaţă, la un moment dat, reprezintă",
      "options": [
        "surplusul producătorului",
        "surplusul de venituri la bugetul statului",
        "surplusul de cantitate pe piaţă",
        "surplusul consumatorului",
        "isoutilitatea."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g12",
      "section": "consumator",
      "q": "Panta curbei de indiferenţă este",
      "options": [
        "raportul dintre preţurile bunurilor",
        "unitară",
        "raportul dintre utilitatea totală a bunului substituit şi utilitatea totală a bunului care îl substituie",
        "raportul dintre utilitatea totală a bunului care substituie şi utilitatea totală a bunului substituit",
        "rata marginală de substituţie în consum."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g13",
      "section": "consumator",
      "q": "Sporul de utilitate obţinut prin consumul succesiv al unor unităţi suplimentare dintr-un bun este",
      "options": [
        "constant",
        "întotdeauna negativ",
        "întotdeauna pozitiv",
        "de regulă crescător",
        "descrescător."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g14",
      "section": "consumator",
      "q": "Două curbe de indiferenţă ale unui consumator se intersectează doar atunci când",
      "options": [
        "utilitatea a două variante de consum de pe aceeaşi curbă este egală",
        "ratele marginale de substituţie pentru cele două curbe sunt egale",
        "consumatorul consumă excesiv de mult dintr-un bun",
        "bunurile sunt substituibile",
        "nici un răspuns, pentru că două curbe de indiferenţă ale unui consumator nu se pot intersecta."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g15",
      "section": "consumator",
      "q": "Venitul disponibil al unui individ este de 240 u.m. El achiziţionează două bunuri la preţurile px= 8 u.m. şi py = 12 u.m.. Dacă preţul lui Y scade de la 12 u.m. la 8 u.m. atunci",
      "options": [
        "linia bugetului pentru acest consumator se deplasează spre dreapta",
        "linia bugetului pentru acest consumator se deplasează spre stânga",
        "linia bugetului pentru acest consumator nu se modifică",
        "cantitatea achiziţionată din bunul X se reduce",
        "cantitatea achiziţionată din bunul Y creşte."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g16",
      "section": "consumator",
      "q": "Dacă un consumator cumpără două bunuri A şi B într-o anumită combinaţie, creşterea preţului bunului A ceteris paribus va determina",
      "options": [
        "o modificare a curbelor de indiferenţă  a consumatorului",
        "reducerea preţului relativ al bunului B",
        "o reducere a venitului nominal al consumatorului",
        "a+b",
        "a+c."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g17",
      "section": "consumator",
      "q": "Dacă produsul dintre utilitatea marginală a unui bun X şi preţul unui bun substituibil Y este 48, preţul bunului X este de 8 u.m., iar utilitatea totală este maximă, atunci utilitatea marginală a bunului Y este",
      "options": [
        "384",
        "6",
        "8",
        "24",
        "22."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g19",
      "section": "consumator",
      "q": "Dacă utilitatea marginală a ultimei unităţi din bunul X este de trei ori mai mare decât cea a ultimei unităţi din bunul Y, un consumator îşi asigură starea de echilibru atunci când",
      "options": [
        "preţul unitar al bunului X este de trei ori mai mare decât cel al bunului Y",
        "preţurile unitare ale lui X şi Y sunt egale",
        "preţul unitar al bunului X reprezintă 33% din cel al bunului Y",
        "preţul unitar al bunului X este cu 33% superior celui al bunului Y",
        "nici una dintre alternativele de mai sus."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g20",
      "section": "consumator",
      "q": "Obiectivul consumatorului raţional, adică maximizarea utilităţii totale, este atins atunci când",
      "options": [
        "utilitatea marginală este maximă",
        "utilitatea marginală este identică pentru toate bunurile care intră în consum",
        "utilitatea marginală aferentă ultimei unităţi monetare cheltuită pentru fiecare bun este aceeaşi",
        "preţurile de achiziţie ale bunurilor sunt minime",
        "toate bunurile economice sunt distribuite în mod gratuit."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g21",
      "section": "consumator",
      "q": "Legea utilităţii marginale descrescătoare arată că",
      "options": [
        "pe măsură ce creşte cantitatea consumată dintr-un bun, satisfacţia totală creşte cu o rată crescătoare",
        "pe măsură ce creşte cantitatea consumată dintr-un bun, satisfacţia adusă de ultima unitate creşte",
        "odată cu creşterea consumului succesiv dintr-un bun, satisfacţia aferentă ultimei unităţi este inferioară celei consumate anterior",
        "pe măsură ce creşte cantitatea consumată dintr-un bun, satisfacţia totală scade",
        "o nouă unitate consumată dintr-un bun se adresează unei nevoi în creştere."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g22",
      "section": "consumator",
      "q": "Identificaţi relaţia corectă dintre utilitatea marginală şi utilitatea totală în urma consumului unei unităţi suplimentare dintr-un bun de către un consumator raţional",
      "options": [
        "scade; creşte cu o rată descrescătoare",
        "creşte; creşte",
        "scade; creşte cu o rată crescătoare",
        "creşte; scade cu o rată descrescătoare",
        "creşte; rămâne constantă."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g23",
      "section": "consumator",
      "q": "Adam Smith nu a putut explica paradoxul valorii (apă – diamant) deoarece nu a făcut distincţia dintre",
      "options": [
        "cerere – ofertă",
        "utilitate individuală – utilitate marginală",
        "utilitate marginală – utilitate totală",
        "surplusul consumatorului – surplusul producătorului",
        "preţuri de piaţă - preţuri administrate."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g24",
      "section": "consumator",
      "q": "Surplusul consumatorului este reprezentat grafic de",
      "options": [
        "aria cuprinsă între axa orizontală a graficului şi preţul pieţei",
        "aria situată sub curba cererii şi deasupra axei orizontale a graficului",
        "aria situată deasupra preţului pieţei şi între curba cererii şi ordonată",
        "aria cuprinsă între curba cererii şi axele de coordonate",
        "aria situată sub preţul de echilibru şi deasupra ofertei."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g25",
      "section": "consumator",
      "q": "Atunci când un consumator acordă o importanţă mai mare programului de consum A în comparaţie cu programul de consum B, putem afirma că",
      "options": [
        "între A şi B există o relaţie de indiferenţă",
        "între A şi B există o relaţie de strictă preferinţă",
        "satisfacţia conferită de A este mai mică în comparaţie cu cea a programului B",
        "satisfacţia conferită de A este identică cu cea a programului B",
        "b + c."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g26",
      "section": "consumator",
      "q": "Ansamblul de combinaţii de consum de la care consumatorul se aşteaptă să obţină acelaşi nivel de satisfacţie reprezintă ",
      "options": [
        "curba de izoproducţie",
        "curba de indiferenţă",
        "harta curbelor de indiferenţă",
        "setul combinaţiilor slab preferate",
        "dreapta bugetului."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g27",
      "section": "consumator",
      "q": "Curbele de indiferenţă au în mod normal pante negative deoarece",
      "options": [
        "creşterea consumului din bunul X implică creşterea consumului din bunul Y, astfel încât utilitatea totală să rămână constantă",
        "creşterea consumului din bunul X implică reducerea consumului din Y, astfel încât utilitatea totală să rămână constantă",
        "rata marginală de substituţie este constantă",
        "rata marginală de substituţie este pozitivă",
        "creşterea consumului din bunul X nu influenţează consumul din bunul Y."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g28",
      "section": "consumator",
      "q": "Fie următoarea ecuaţie a bugetului 100 = 2X + 4Y. Panta liniei bugetului este",
      "options": [
        "-2/4",
        "4",
        "2/4",
        "25",
        "1/4."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g29",
      "section": "consumator",
      "q": "Dacă are loc o creştere a preţului bunului X (aflat pe abscisă), în condiţiile caeteris paribus, panta liniei bugetului va",
      "options": [
        "creşte",
        "scădea",
        "rămâne constantă",
        "se va reduce la jumătate",
        "toate cele de mai sus."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g31",
      "section": "consumator",
      "q": "Când utilitatea marginală a bunului X este descrescătoare, dar pozitivă, utilitatea totală resimţită de consumator",
      "options": [
        "devine negativă",
        "creşte cu o rată crescătoare",
        "scade",
        "creşte cu o rată descrescătoare",
        "rămâne neschimbată."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g32",
      "section": "consumator",
      "q": "Funcţia utilităţii totale scontate a se obţine este de tipul U(x,y)=xy2+10. Venitul disponibil al consumatorului este de 54 u.m. Preţurile sunt: 1 u.m./buc. pentru bunul X, respectiv de 4 u.m./buc. pentru bunul Y. Cantitatea din cele două bunuri care va fi achiziţionată în condiţiile echilibrului sunt ",
      "options": [
        "x=18, y=9",
        "x=10, y=12",
        "x=6, y=12",
        "x=9, y=18,",
        "x= 12, y= 6."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g33",
      "section": "consumator",
      "q": "Un consumator are funcţia de UT(x,y)=xy2. El dispune de un buget de 240 u.m. săptămânal iar preţurile bunurilor sunt Px=2 şi Py=4. Programul de achiziţie care îi asigură echilibrul şi mărimea satisfacţiei totale pe care o realizează reprezintă",
      "options": [
        "40X, 60Y şi 40000",
        "40X, 40Y şi 64000",
        "20X, 60Y şi 54000",
        "10X, 20Y şi 30000",
        "60X, 40Y şi 64000."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g34",
      "section": "consumator",
      "q": "Deplasarea dreptei bugetului consumatorului spre dreapta, paralel cu cea iniţială, este determinata de",
      "options": [
        "o scădere a venitului consumatorului",
        "o creştere a preţului bunului X, conţinut în programul de consum",
        "o scădere a preţului bunului Y, conţinut în programul de consum",
        "o creştere a venitului consumatorului",
        "o scădere în aceeaşi proporţie a preturilor celor doua bunuri X şi Y."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g35",
      "section": "consumator",
      "q": "Reducerea bugetului de achiziţii pentru consumator şi a preţurilor bunurilor x şi y în aceeaşi proporţie, conduce la",
      "options": [
        "o deplasare spre dreapta a dreptei bugetului",
        "o deplasare spre stânga a dreptei bugetului",
        "o scădere a pantei dreptei bugetului",
        "aceeaşi utilitate totală resimţită de  consumator",
        "o scădere a utilităţii totale resimţită de consumator."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g36",
      "section": "consumator",
      "q": "Punctul de tangenţă a dreptei bugetului şi a isophelimei indică",
      "options": [
        "echilibrul static al consumatorului",
        "echilibrul static al producătorului",
        "nivelul producţiei optime",
        "programul de achiziţii care maximizează utilitatea totală",
        "nici un răspuns corect."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g37",
      "section": "consumator",
      "q": "Un consumator dispune de un venit de 90 u.m. În urma consumului a două bunuri X şi Y el obţine o utilitate totală dată de următoarea funcţie : UT(X,Y)=3X2Y, iar preţurile celor două bunuri sunt Px=20 u.m. şi Py=10 u.m. Programul de consum care maximizează utilitatea totală şi valoarea acesteia este",
      "options": [
        "X=7, Y=2, UT=105",
        "X=3, Y=3, UT=91",
        "X=3, Y=4, UT=108",
        "X=3, Y=3, UT=81",
        "X=5, Y=2, UT=150."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g38",
      "section": "consumator",
      "q": "Un consumator achiziţionează doar alimente şi îmbrăcăminte, considerate bunuri normale. Presupunând că preţul la alimente înregistrează o scădere, vom observa cum achiziţiile de îmbrăcăminte ",
      "options": [
        "scad datorită efectului de venit",
        "cresc datorită efectului de venit",
        "cresc datorită efectului de substituţie",
        "scad datorită efectului de substituţie",
        "rămân constante doarece cererea pentru îmbrăcăminte este relativ inelastică."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g39",
      "section": "consumator",
      "q": "Care dintre următoarele exprimă legea utilităţii marginale descrescânde ?",
      "options": [
        "cu cât o persoană consumă mai mult dintr-un bun, cu atât mai mică este utilitatea pe care o obţine din consumul acelui bun",
        "cu cât se consumă mai mult dintr-un bun, satisfacţia adiţională pe care o obţine de pe urma consumului unei  unităţi suplimentare scade",
        "cu cât se consumă mai puţin dintr-un bun, cu atât utilitatea pe care o obţine este mai mică",
        "cu cât se consumă mai puţin dintr-un bun, satisfacţia adiţională resimţită de pe urma unei unităţi suplimentare este  mai mică",
        "nici una dintre cele de mai sus"
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g41",
      "section": "consumator",
      "q": "În cazul bunurilor normale panta curbei de indiferenţă este",
      "options": [
        "crescătoare",
        "descrescătoare",
        "constantǎ",
        "infinit",
        "nulă."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g42",
      "section": "consumator",
      "q": "Dacǎ un consumator se deplasează de-a lungul aceleiaşi curbe de indiferenţǎ pierderea de utilitate trebuie sǎ fie",
      "options": [
        ">1",
        "0",
        "<1",
        "cu o valoare imposibil de precizat",
        "negativă"
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g43",
      "section": "consumator",
      "q": "Dacǎ venitul consumatorului creşte , iar preţul celor douǎ bunuri nu se modificǎ, nivelul utilităţii unui individ ",
      "options": [
        "creşte",
        "scade",
        "rămâne constant",
        "depinde de preferinţele relative",
        "este negativă."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g44",
      "section": "consumator",
      "q": "Dacă preţul unui bun Giffen scade venitul real al consumatorului va",
      "options": [
        "scade",
        "rămâne neschimbat",
        "nu este afectat de către modificarea preţurilor relative ale bunurilor",
        "creşte",
        "scade datorită inferiorităţii bunurilor"
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g45",
      "section": "cerere",
      "q": "Cererea pentru bunul x este elastică, iar preţul înregistrează o scădere. Ca rezultat, venitul total obţinut de vânzător",
      "options": [
        "creşte",
        "scade",
        "rămâne neschimbat",
        "creşte dacă este bun Giffen",
        "scade dacă este bun de lux."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g46",
      "section": "cerere",
      "q": "Bunurile x şi y sunt complementare. Px scade, iar Py este constant. Cererea săptămânală pentru bunul y",
      "options": [
        "creşte",
        "scade",
        "rămâne neschimbată.",
        "nu putem determina modificarea",
        "scade dacă este un bun Giffen"
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g47",
      "section": "cerere",
      "q": "Bunul „x” este un bun Giffen. Dacă venitul consumatorului scade, cererea pentru acest bun (caeteris paribus)",
      "options": [
        "creşte",
        "scade",
        "rămâne neschimbată.",
        "pe termen scurt scade",
        "dacă este bun de lux creşte."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g48",
      "section": "cerere",
      "q": "Elasticitatea cererii pentru automobile este de 0,5 în raport de preţ şi 2,5 în raport de veniturile consumatorilor. În t0, cererea anuală de automobile=10000 bucăţi. În t1 se scontează creşterea preţurilor cu 10%, iar a veniturilor menajelor cu 8%. Cantitatea de automobile cerute (caeteris paribus)",
      "options": [
        "creste cu 25% si devine12500",
        "scade cu 15% şi devine 8500",
        "rămâne neschimbată",
        "creşte cu 15% şi devine 11500",
        "creşte, dar nu poate fi determinată creşterea."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g50",
      "section": "cerere",
      "q": "În t1, preţul unui bun normal este 90%P0, iar cantitatea cerută este 1,2Q0.De aici rezultă că",
      "options": [
        "venitul total creşte",
        "cererea este elastică, iar Kec/p este 2",
        "venitul se reduce cu 8%",
        "profiturile producătorilor şi vânzătorilor în mod sigur vor creşte",
        "cererea este elastică, dar nu se poate calcula Kec/p"
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g52",
      "section": "cerere",
      "q": "Cererea pieţei pentru un bun oarecare, să presupunem agroalimentar este comparativ cu nevoile pentru acest bun",
      "options": [
        "identică",
        "superioară",
        "inferioară",
        "inferioară dacă se percep accize",
        "identică dacă se percepe TVA."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g53",
      "section": "cerere",
      "q": "Îngrjorarea faţă de efectele gripei aviare determină modificări asupra configuraţiei curbei cererii pentru carnea de pasăre şi cea de vită, peşte etc. Evoluţiile acestora s-au concretizat în",
      "options": [
        "au rămas neschimbate pentru că nu s-a schimbat preţul",
        "s-au deplasat la stânga",
        "cea pentru carne de vită s-a deplasat la dreapta pentru că s-a redus preţul şi la cele pentru pasăre şi peşte la stânga pentru că a crescut preţul",
        "prima la stânga, celelalte la dreapta pentru că s-a modificat numărul de consumatori",
        "toate s-au deplasat la dreapta."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g55",
      "section": "cerere",
      "q": "Pentru menajele de tineri căsătoriţi, Kec/v pentru bunul „x” este de 1,2. Veniturile acestora vor creşte în anul următor în medie cu 10%, caeteris paribus. Ca rezultat, ponderea cheltuielilor pentru bunul „x” în bugetul familiilor de tineri",
      "options": [
        "creşte cu 2%",
        "scade cu 5%",
        "rămâne neschimbată",
        "creşte cu 12%",
        "scade cu 12%"
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g56",
      "section": "cerere",
      "q": "Kec/p are valoarea 1,6, iar preţul va scădea cu 5%. Ca rezultat al creşterii cererii şi producţiei din bunul „x” CT va creşte cu 6%. Ca rezultat, profitul total",
      "options": [
        "creşte",
        "scade",
        "rămâne neschimbat",
        "poate fi mai mic, mai mare sau egal ca profitul anterior",
        "creşte dacă piaţa este de oligopol."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g57",
      "section": "cerere",
      "q": "Preţurile la manualele universitare cresc. Cererea pentru acestea pentru studenţii care nu au acces la Internet este",
      "options": [
        "elastică",
        "inelastică",
        "cu elasticitate unitară",
        "încrucişată",
        "perfect inelastică."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g58",
      "section": "cerere",
      "q": "Pentru cetăţenii pasionaţi să se informeze din presa centrală şi având acces la Internet, dacă preţul ziarelor creşte, cererea pentru acestea se manifestă ca fiind",
      "options": [
        "elastică",
        "inelastică",
        "cu elasticitate unitară",
        "încrucişată",
        "perfect inelastică"
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g59",
      "section": "cerere",
      "q": "Bunurile x si y sunt perfect substituibile. Dacǎ preţul bunului x va creşte ",
      "options": [
        "cantitatea cerutǎ din bunul x va creşte, iar cea din bunul y va scădea",
        "cantitatea cerutǎ din bunul x va scǎdea, iar cea din bunul y va creşte",
        "cantitatea cerutǎ din cele doua bunuri va creşte",
        "cantitatea cerutǎ din cele doua bunuri va scădea ",
        "nu se poate determina."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g60",
      "section": "cerere",
      "q": "Dacă preţul creioanelor creşte cu 10%, iar încasările din vânzări se reduc cu 15%, atunci cererea pentru creioane este",
      "options": [
        "perfect  inelastică în raport cu preţul",
        "cu elasticitate unitară în raport cu preţul",
        "elastică în funcţie de preţ",
        "inelastică în raport cu preţul",
        "perfect elastică în raport cu preţul."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g61",
      "section": "cerere",
      "q": "Curba cererii se deduce din",
      "options": [
        "comportamentul consumatorului raţional",
        "curba venit –consum",
        "curba izoutilităţii",
        "frontiera posibilităţilor de producţie",
        "curba lui Engel."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g62",
      "section": "cerere",
      "q": "Se cunosc următoarele date despre bunul x: Px=10, Qx=100 şi Ec/p=5. În aceste condiţii, forma generală a funcţiei cererii este",
      "options": [
        "600-50P",
        "600+50P",
        "400-20P",
        "500-10P",
        "700-60P."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g63",
      "section": "cerere",
      "q": "Fie curba cererii P=20-4Q. Pentru Q=4, să se stabilească natura elasticităţii cererii",
      "options": [
        "elastică",
        "inelastică",
        "unitară",
        "perfect elastică",
        "perfect inelastică."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g64",
      "section": "cerere",
      "q": "Elasticitatea cererii pentru computere este de 0,8 în raport de preţ şi 2 în raport de veniturile consumatorilor. În t0, cererea anuală de computere este de 1000 bucăţi. În t1, se scontează creşterea preţurilor cu 10%, iar a veniturilor cu 3 %. Care dintre următoarele afirmaţii referitoare la cantitatea de computere cerută este adevărată",
      "options": [
        "scade cu 2% şi devine 920",
        "scade cu 2% şi devine 980",
        "creşte cu 2% şi devine 1020",
        "creşte cu 14% şi devine1140",
        "scade cu 8% şi devine 920."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g65",
      "section": "cerere",
      "q": "Presupunem că venitul unor consumatori a crescut cu 10%, iar cererea pentru bunul X a înregistrat o scădere cu 5%. În acest caz, bunul X este, pentru respectivii consumatori",
      "options": [
        "inferior",
        "normal",
        "substituibil",
        "complementar",
        "nici un răspuns corect."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g66",
      "section": "cerere",
      "q": "Nivelul coeficientului elasticităţii cererii în funcţie de venit în cazul bunurilor inferioare este",
      "options": [
        "Kec/v = 1",
        "Kec/v > 1",
        "Kec/v > 0",
        "Kec/v < 0",
        "0>Kec/v < 1"
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g67",
      "section": "cerere",
      "q": "La echilibru preţul este 10 u.m iar cantitatea 20 unităţi. Se ştie că în acest caz elasticitatea cererii funcţie de preţ este 2. Putem deduce din aceste date că forma generală a funcţiei cererii este",
      "options": [
        "Qc= 40-4P",
        "Qc = 60 – 2P",
        "Qc= 60 – 4 P",
        "Qc= 40 – P",
        "Qc= 60 – P."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g69",
      "section": "cerere",
      "q": "Bunurile cu elasticitate ridicată",
      "options": [
        "au un grad de substituire ridicat",
        "se substituie greu în consum",
        "sunt considerate bunuri necesare",
        "au o pondere cât mai mică în bugetul unei persoane",
        "a-d false."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g70",
      "section": "cerere",
      "q": "În cazul unei curbe liniare a cererii",
      "options": [
        "avem aceeaşi valoare a coeficientului de elasticitate a cererii în orice punct al curbei",
        "nivelul elasticităţii este dat de panta curbei",
        "valoarea coeficientului de elasticitate  este 0 la intersecţia curbei cererii cu ordonata",
        "elasticitatea cererii în funcţie de preţ este diferită pentru diferite puncte de pe curbă",
        "este elastică în jumătatea superioară, inelastică în cea inferioară şi unitară la mijloc"
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g71",
      "section": "cerere",
      "q": "Care dintre următoarele schimbări conduc la o creştere a cererii pentru bunul X",
      "options": [
        "scăderea costului de producţie",
        "creşterea veniturilor consumatorilor, dacă X este un bun inferior",
        "scăderea veniturilor consumatorilor, dacă X este un bun normal",
        "creşterea preţurilor la bunurile substituibile",
        "scăderea preţului bunului X."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g72",
      "section": "cerere",
      "q": "Care dintre următoarele ar duce la creşterea cererii pentru hartie reciclată ?",
      "options": [
        "o creştere a preţului la hîrtia obişnuită ",
        "o creştere a taxelor pe producţie de hârtie în general ",
        "o scădere a interesului pentru protecţia mediului înconjurător ",
        "o scădere a subvenţiilor pentru producerea de hârtie în general ",
        "nici una din cele de mai sus."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g73",
      "section": "cerere",
      "q": "Presupunem că la oricare punct de pe curba cererii pentru bunul x Ecp este egală cu 1 şi că la preţul de 5u.m. cantitatea cerută este de 75 unităţi. Dacă preţul creşte la 25, atunci cantitatea cerută va scădea cu ",
      "options": [
        "20 ",
        "30 ",
        "40 ",
        "50 ",
        "60."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g74",
      "section": "cerere",
      "q": "Cererea pentru un bun înregistrează cea mai mare elasticitate dacă bunul respectiv ",
      "options": [
        "poate fi substituit şi este un bun de strictă necesitate relativ ieftin",
        "poate fi substituit şi este un bun de strictă necesitate relativ scump",
        "poate fi substituit şi este un bun de lux relativ ieftin",
        "nu poate fi substituit şi este un bun de lux relativ scump",
        "poate fi substituit şi este un bun de lux relativ scump."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g76",
      "section": "cerere",
      "q": "Atunci când funcţia cererii are forma Qc= 250*1/P, cererea este ",
      "options": [
        "elastică",
        "inelastica",
        "perfect elastică",
        "perfect inelastică",
        "cu elasticitate unitară."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g77",
      "section": "cerere",
      "q": "Pentru a spori cifra de afaceri a unei firme ce operează pe o piaţă cu cerere elastică întreprinzatorul va trebui ",
      "options": [
        "să măreasca preţul ",
        "să reducă preţul ",
        "să scadă costul mediu pe produs ",
        "să scadă costul marginal ",
        "să aleagă producţia pentru care costul marginal este egal cu venitul marginal."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g79",
      "section": "cerere",
      "q": "Dacă la o creştere cu 10% a preţului o firmă îşi pierde un sfert din clientelă, cererea este",
      "options": [
        "elastică",
        "inelastică",
        "cu elasticitate unitară",
        "încrucişată",
        "perfect inelastică."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g80",
      "section": "cerere",
      "q": "Cantitatea cerutǎ dintr-un anumit bun depinde de",
      "options": [
        "venit",
        "preţul acelui bun",
        "preferinţele consumatorilor",
        "previziunile consumatorilor",
        "numărul de consumatori."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g82",
      "section": "cerere",
      "q": "Creşterea preţului determină reducerea încasărilor producătorilor. În aceste condiţii",
      "options": [
        "cererea este elastică în raport cu preţul",
        "cererea este inelastică în raport cu preţul",
        "cererea este crescătoare în raport cu preţul",
        "producătorii nu-şi maximizează profiturile",
        "producătorii nu-şi minimizează costurile."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g83",
      "section": "cerere",
      "q": "Când preţul unui bun este de 150 lei, cererea pentru acest bun este de 100 buc. Când preţul devine 180 lei şi ştiind că unui procent în modificarea preţului îi corespund 2 procente în modificarea cererii, nivelul cererii devine",
      "options": [
        "40 buc",
        "160 buc",
        "140 buc",
        "60 buc",
        "50 buc."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g84",
      "section": "cerere",
      "q": "Dacă bunurile X şi Y sunt substituibile, creşterea preţului bunului X determină",
      "options": [
        "creşterea cantităţii cerute din bunul X şi scăderea cantităţii cerute din bunul Y",
        "scăderea cantităţii cerute din ambele bunuri",
        "creşterea cantităţii cerute din ambele bunuri",
        "menţinerea constantă a cantităţii cerute atât din bunul X, cât şi din bunul Y",
        "scăderea cantităţii cerute din bunul X şi creşterea cantităţii cerute din bunul Y."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g85",
      "section": "cerere",
      "q": "Dacă bunurile X şi Y sunt complementare, creşterea preţului bunului X determină",
      "options": [
        "scăderea cantităţii cerute din ambele bunuri",
        "creşterea cantităţii cerute din bunul X şi scăderea cantităţii cerute pentru bunul Y",
        "creşterea cantităţii cerute din ambele bunuri",
        "menţinerea constantă a cantităţii cerute atât din bunul X, cât şi din bunul Y",
        "scăderea cantităţii cerute din bunul X şi creşterea cantităţii cerute din bunul Y."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g86",
      "section": "cerere",
      "q": "În situaţia în care cererea pentru produsele agricole este inelastică",
      "options": [
        "reducerea preţurilor determină o creştere a veniturilor încasate de producători",
        "reducerea preţurilor determină o reducere a veniturilor producătorilor",
        "creşterea preţurilor determină o reducere a veniturilor producătorilor",
        "creşterea preţurilor nu conduce la diferenţieri în veniturile producătorilor",
        "procentul de reducere a preţurilor este mai mic decât cel de creştere a cererii."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g87",
      "section": "cerere",
      "q": "În cazul unui coeficient pozitiv de elasticitate încrucişată a cererii pentru bunul A în raport cu preţul bunului B, bunurile A şi B sunt",
      "options": [
        "complementare",
        "substituibile",
        "inferioare",
        "sub standardele admise de calitate",
        "de lux."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g88",
      "section": "cerere",
      "q": "În cazul unui coeficient negativ de elasticitate încrucişată a cererii pentru bunul A în raport cu preţul bunului B, bunurile A şi B sunt",
      "options": [
        "substituibile",
        "inferioare",
        "sub standardele admise de calitate",
        "de lux",
        "complementare."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g89",
      "section": "cerere",
      "q": "Curba cererii este descrescătoare pentru că",
      "options": [
        "utilitatea totală este descrescătoare",
        "utilitatea marginală este descrescătoare",
        "utilitatea totală este crescătoare",
        "utilitatea marginală este crescătoare",
        "utilitatea marginală este constantă."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g91",
      "section": "cerere",
      "q": "Elasticitatea cererii pentru calculatoare este 2 în raport cu preţul şi 0,6 în raport cu veniturile cumpărătorilor. Creşterea cu 1% a veniturilor şi scăderea cu 1% a preţului generează",
      "options": [
        "creşterea cererii cu 2,6%",
        "creşterea cererii cu 1,4%",
        "creşterea cererii cu 1%",
        "reducerea cererii cu 1%",
        "reducerea cererii cu 1,4%."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g92",
      "section": "cerere",
      "q": "În situaţia în care pe piaţă preţul unei mărfi creşte de la 100 la 120 de u.m., iar cererea zilnică se reduce de la 500 la 400 de unităţi există o cerere",
      "options": [
        "elastică",
        "inelastică",
        "cu elasticitate unitară",
        "perfect elastică",
        "perfect inelastică."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g93",
      "section": "cerere",
      "q": "Curba cererii totale pe piaţa unui bun normal se deplasează spre dreapta dacă",
      "options": [
        "preţul bunului scade caeteris paribus",
        "venitul disponibil al consumatorilor scade",
        "preţul unui bun complementar scade",
        "preţul unui bun substitut scade",
        "bunul nu are substitute."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g94",
      "section": "cerere",
      "q": "Atunci când coeficientul elasticităţii cererii pentru bunul A în raport cu modificarea preţului bunului B are valoare negativă, cele două bunuri sunt",
      "options": [
        "complementare",
        "neutre",
        "indiferente pentru consumator",
        "rele",
        "substituibile."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g95",
      "section": "cerere",
      "q": "Un bun este considerat inferior dacă",
      "options": [
        "cererea sa scade, când venitul scade",
        "cererea sa scade, când venitul creşte",
        "cererea sa creşte, când venitul creşte",
        "cantitatea cerută creşte, când preţul scade c.p.",
        "cantitatea cerută scade, când preţul creşte c.p."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g96",
      "section": "cerere",
      "q": "Bunurile normale sunt",
      "options": [
        "bunurile a căror cerere scade odată cu sporirea veniturilor",
        "bunuri a căror cerere creşte odată cu sporirea veniturilor",
        "produsele divizibile",
        "bunurile a căror cerere rămâne constantă odată cu sporirea veniturilor",
        "bunuri Giffen."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g97",
      "section": "cerere",
      "q": "Diagrama orizontală a cererii unui bun arată că",
      "options": [
        "cererea este perfect inelastică",
        "cantitatea cerută este infinită la un anumit nivel al preţului",
        "coeficientul elasticităţii cererii în funcţie de preţ este 0",
        "coeficientul elasticităţii cererii în funcţie de preţ este 1",
        "nici o variantă nu este corectă."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g98",
      "section": "cerere",
      "q": "Diagrama verticală a cererii unui bun arată că",
      "options": [
        "cererea este perfect elastică",
        "cantitatea cerută este constantă la un anumit nivel al preţului",
        "coeficientul elasticităţii cererii în funcţie de preţ este 0",
        "coeficientul elasticităţii cererii în funcţie de preţ este -1",
        "nici o variantă nu este corectă."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g100",
      "section": "cerere",
      "q": "Daca A şi B sunt două bunuri perfect complementare, iar preţul bunului A va creşte, ce se va întâmpla cu cererea pentru cele doua bunuri?",
      "options": [
        "cantitatea cerută din bunul A va creşte, iar cea din bunul B va scădea",
        "cantitatea cerută din cele doua bunuri va rămâne constantă",
        "cantitatea cerută din ambele bunuri va scădea",
        "cantitatea din bunul A va scădea, iar cea din bunul B va creşte",
        "cantitatea cerută din ambele bunuri va creşte."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g101",
      "section": "cerere",
      "q": "Factorii care determină elasticitatea cererii in funcţie de preţ sunt: 1) gradul necesităţii în consum; 2) costul stocării; 3) taxele şi subsidiile; 4) gradul de substituire a bunurilor; 5)1-4 corecte.",
      "options": [
        "2,5",
        "1,4",
        "2,3,5",
        "1,3,4",
        "2,4"
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g102",
      "section": "cerere",
      "q": "Atunci când coeficientul elasticităţii cererii la preţ este egal cu 1, iar preţul se reduce, cum evoluează venitul total încasat de vânzător?",
      "options": [
        "se reduce",
        "creste",
        "ramane constant",
        "este negativ",
        "a-d false."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g104",
      "section": "costuri",
      "q": "Pe termen scurt, atunci când costul variabil total creşte mai rapid decât producţia",
      "options": [
        "costul fix mediu rămâne constant",
        "costul variabil mediu scade",
        "costul variabil mediu rămâne constant",
        "costul total mediu scade, creşte sau rămâne constant",
        "costul fix mediu creşte."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g105",
      "section": "costuri",
      "q": "Atunci când funcţia costului total este CT=15+2Q",
      "options": [
        "costul fix mediu este egal cu 15",
        "costul variabil mediu este egal cu 2Q",
        "costul marginal este mai mic decât costul fix total",
        "costul marginal este mai mare decât costul fix total",
        "costul marginal este egal cu costul fix total."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g106",
      "section": "costuri",
      "q": "Pe termen scurt, atunci când costul variabil creşte în acelaşi ritm cu producţia",
      "options": [
        "costul variabil mediu creşte",
        "costul variabil mediu scade",
        "costul fix mediu rămâne constant",
        "costul total mediu creşte",
        "costul total mediu scade."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g108",
      "section": "costuri",
      "q": "Presupunem că o firmă realizează un volum al producţiei Q =5 unităţi. La acest nivel al producţiei costul fix mediu este de 1 u.m. iar funcţia costului marginal este Cmg =2Q. În acest caz, costul total al producţiei este ",
      "options": [
        "10 ",
        "15 ",
        "20 ",
        "25 ",
        "30."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g109",
      "section": "costuri",
      "q": "În situaţia în care costurile totale (CT) depind de producţie (Q) conform relaţiei CT=5+3Q+2Q2",
      "options": [
        "CF=5+3Q",
        "CVM=3+2Q",
        "CTM=3+2Q",
        "CVM=3Q+2Q2",
        "CFM=(5/Q) +3."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g110",
      "section": "costuri",
      "q": "Pe măsura creşterii producţiei, punctul de minim al curbei costului total mediu",
      "options": [
        "este atins înaintea minimului costului variabil mediu",
        "se află deasupra şi la stânga punctului minim al costului variabil mediu",
        "corespunde intersecţiei curbelor costului marginal şi costului total mediu",
        "are în stânga o curbă a costului variabil mediu în scădere",
        "are în dreapta o curbă a costului marginal în scădere."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g111",
      "section": "costuri",
      "q": "Un producător utilizează doi factori de producţie ale căror preţuri sunt egale. În scopul minimizării costului total, producătorul trebuie să utilizeze în producţie",
      "options": [
        "cantităţi egale din cei doi factori de producţie",
        "cantităţile factorilor de producţie pentru care productivităţile marginale ale factorilor sunt maxime",
        "cantităţile factorilor de producţie ce corespund maximului fiecărei productivităţii medii",
        "cantităţile ce corespund egalităţii dintre cele două productivităţi marginale",
        "doar unul dintre cei doi factori de producţie."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g112",
      "section": "costuri",
      "q": "Faţă de costul contabil, costul economic este",
      "options": [
        "mai mare",
        "mai mic",
        "egal",
        "mai mic, cu costurile explicite",
        "mai mic, cu costurile implicite."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g113",
      "section": "costuri",
      "q": "Pe termen scurt, atunci când costul variabil total creşte mai puţin decât producţia",
      "options": [
        "costul fix mediu rămâne constant",
        "costul variabil mediu creşte",
        "costul variabil mediu rămâne constant",
        "costul total mediu scade",
        "costul fix mediu creşte."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g114",
      "section": "costuri",
      "q": "Presupunem că o firmă are într-o lună un volum al producţiei Q=5 unităţi. La acest nivel al producţiei costul fix mediu, CFM=1 u.m., iar funcţia costului marginal este Cmg=2Q. În acest caz costul total al producţiei este",
      "options": [
        "10",
        "15",
        "20",
        "25",
        "30."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g115",
      "section": "costuri",
      "q": "O firmă produce 200.000 de bucăţi anual, pe care le vinde la un preţ de 5 u.m./buc. Costurile explicite de producţie sunt de 750.000 u.m., iar costurile implicite, de 200.000 u.m. În aceste condiţii, profitul contabil şi economic sunt, respectiv",
      "options": [
        "200.000 u.m.; 25.000 u.m.",
        "150.000 u.m.; 50.000 u.m.",
        "125.000 u.m.; 75.000 u.m.",
        "100.000 u.m.; 50.000 u.m.",
        "250.000 u.m.; 50.000 u.m."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g116",
      "section": "costuri",
      "q": "Atunci când costurile totale (CT) depind de producţie (Q) conform relaţiei CT=15+2Q",
      "options": [
        "CFM=15",
        "CVM=2Q",
        "Cmg<CVM",
        "Cmg>CVM",
        "Cmg=CVM."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g120",
      "section": "costuri",
      "q": "Pragul de rentabilitate reflectă acel volum de producţie pentru care",
      "options": [
        "costurile de producţie nu sunt acoperite de încasările totale",
        "încasările totale depăşesc costurile de producţie",
        "profitul este nul",
        "preţul este mai mic decât minimul costului mediu total",
        "preţul este mai mic decât minimul costului variabil mediu."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g124",
      "section": "costuri",
      "q": "La o societate comercială, costul variabil mediu este de 20 u.m. iar nivelul producţiei la care profitul este nul 50 bucăţi. Dacă preţul unitar este egal cu 40 u.m., atunci costul total, costul total mediu şi profitul total sunt",
      "options": [
        "1250; 25; 0",
        "3000; 60; 0",
        "2000; 40; 0",
        "2000; 80; 0",
        "4000; 80; 0."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g126",
      "section": "costuri",
      "q": "În situaţia în care preţul de vânzare al unui bun este de 10 u.m., costurile fixe totale sunt de 5000 u.m., iar costul variabil unitar de 5 u.m., pragul de rentabilitate pentru producerea acelui bun este de",
      "options": [
        "200 unităţi",
        "300 unităţi",
        "400 unităţi",
        "500 unităţi",
        "1000 unităţi."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g128",
      "section": "costuri",
      "q": "Costul total mediu se reduce dacă",
      "options": [
        "se achiziţionează o nouă tehnologie care reduce consumurile specifice",
        "preţurile materiilor prime cresc",
        "mâna de lucru devine mai scumpă",
        "salariile cresc într-un ritm superior productivităţii mâinii de lucru",
        "rata de amortizare creşte."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g131",
      "section": "costuri",
      "q": "La creşterea producţiei cu 75%, costul variabil sporeşte cu 50%. Ce evoluţie apreciaţi că înregistrează costul total mediu?",
      "options": [
        "creşte",
        "scade",
        "nu se modifică",
        "poate creşte, scade sau rămâne constant",
        "informaţia este insuficientă pentru a determina evoluţia costului mediu."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g132",
      "section": "costuri",
      "q": "Dacă producţia unei întreprinderi creşte cu 25%, atunci costul fix mediu",
      "options": [
        "creşte cu 20%",
        "scade cu 20%",
        "creşte cu 25%",
        "rămâne constant",
        "creşte sau scade în funcţie de evoluţia costurilor variabile."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g133",
      "section": "costuri",
      "q": "Care dintre următoarele afirmaţii privesc noţiunea de cost variabil?",
      "options": [
        "se referă la factorii de producţie integral consumaţi într-un singur proces de producţie",
        "se referă la factorii de producţie consumaţi treptat într-un proces de producţie",
        "include consumurile de factori de producţie care se modifică odată cu schimbarea volumului de producţie",
        "include consumurile de factori de producţie care nu se modifică la schimbarea volumului de producţie",
        "toate afirmaţiile de mai sus sunt corecte."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g136",
      "section": "costuri",
      "q": "Identificaţi afirmaţia adevărată în condiţiile creşterii costurilor variabile în aceeaşi proporţie cu producţia",
      "options": [
        "costul total mediu este constant",
        "costul total mediu se reduce",
        "costul total mediu creşte",
        "costul fix mediu este constant",
        "costul variabil mediu scade."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g139",
      "section": "costuri",
      "q": "Să presupunem că o firmă produce ultima unitate dintr-un bun la un cost de 5 u.m., iar venitul obţinut din vânzarea acesteia se ridică la 8 u.m. În aceste condiţii",
      "options": [
        "profitul total obţinut de firmă se reduce",
        "profitul marginal este -3",
        "firma trebuie să reducă producţia în scopul maximizării profitului",
        "venitul marginal este inferior costului marginal, deci firma înregistrează pierderi",
        "profitul total creşte cu 3 u.m ."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g142",
      "section": "costuri",
      "q": "Costul total mediu reprezintă",
      "options": [
        "costul aferent ultimei unităţi de producţie",
        "cheltuiala medie făcută pe o unitate de producţie",
        "cheltuielile totale aferente obţinerii producţiei",
        "sporul de cheltuieli generat de obţinerea unei unităţi suplimentare de producţie",
        "totalitatea cheltuielilor cu materiile prime raportate la o unitate de producţie."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g143",
      "section": "costuri",
      "q": "Atunci când costul variabil mediu este descrescător, în mod obligatoriu",
      "options": [
        "costul marginal trebuie să scadă",
        "costul marginal trebui să crească",
        "costul marginal este inferior celui variabil mediu",
        "costul fix mediu trebuie să crească",
        "costul fix trebuie să scadă."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g144",
      "section": "costuri",
      "q": "Pe măsură ce are loc creşterea producţiei, diferenţa dintre costul total mediu şi cel variabil mediu",
      "options": [
        "tinde să crească",
        "tinde să scadă",
        "nu se modifică",
        "este zero",
        "nici una din cele de mai sus."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g146",
      "section": "costuri",
      "q": "Costul total mediu intersectează costul marginal atunci când",
      "options": [
        "costul marginal înregistrează valoarea sa minimă",
        "costul variabil mediu înregistrează valoarea sa minimă",
        "costul total mediu înregistrează valoarea sa minimă",
        "costul fix mediu scade",
        "costul marginal înregistrează valoarea sa maximă."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g150",
      "section": "costuri",
      "q": "Pragul de rentabilitate reflectă acea situaţie în care",
      "options": [
        "veniturile totale sunt egale cu costurile variabile",
        "costurile fixe sunt nule",
        "preţul este egal cu suma dintre CFM şi CVM",
        "costurile totale sunt inferioare veniturilor totale",
        "profitul marginal este zero."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g151",
      "section": "costuri",
      "q": "Fie funcţia costului total CT = Q2 + 4. Să se determine nivelul producţiei până la care costul total mediu scade",
      "options": [
        "4",
        "2",
        "16",
        "-4",
        "6."
      ],
      "answer": 1,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g156",
      "section": "costuri",
      "q": "Costul total mediu scade atunci când",
      "options": [
        "costul marginal este mai mare decât costul total mediu şi producţia creşte",
        "costul variabil mediu creşte pentru valori ale producţiei peste nivelul corespunzător costului total mediu minim",
        "costul marginal este negativ",
        "curba costului marginal se află deasupra curbei costului variabil mediu dar sub curba costului total mediu şi producţia creşte",
        "curba costului marginal se află deasupra curbei costului total mediu."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g157",
      "section": "costuri",
      "q": "Când costul marginal este mai mic decât costul total mediu şi producţia creşte, atunci",
      "options": [
        "costul total mediu creşte",
        "costul total mediu este minim",
        "costul marginal este nul",
        "costul variabil mediu poate să crească",
        "nici o variantă nu este corectă."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g158",
      "section": "costuri",
      "q": "Ionuţ este managerul propriei sale afaceri având încasări de 100 mil. lei/lună dar şi costuri explicite de 30 mil. lei. Pentru a se dedica în întregime noii activităţi a trebuit să renunţe la locul de muncă pe care îl avea anterior şi care îi asigura un salariu de 20 mil. lei lunar. În acest caz",
      "options": [
        "profitul economic este mai mare decât profitul contabil",
        "profitul contabil este de 50 mil. lei iar cel economic de 80 mil. lei",
        "profitul contabil este de 70 mil. lei iar cel economic de 50 mil. lei",
        "profitul contabil este de 70 mil. lei iar cel economic de 80 mil. lei",
        "profitul contabil este de 50 mil. lei iar cel economic de 70 mil. lei"
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g160",
      "section": "costuri",
      "q": "Funcţia costului total pentru firma „Beta” este dată de relaţia CT = 6Q2 + 4Q + 54. Care este nivelul producţiei pentru care costul total mediu este minim ?",
      "options": [
        "Q = 3 u.",
        "Q = 9 u.",
        "Q = 12 u.",
        "Q = 6 u",
        "Q = 15 u."
      ],
      "answer": 0,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g161",
      "section": "costuri",
      "q": "Firma „Costs” are funcţia costurilor totale de forma CT = 4Q3 - 16Q2 + 20Q + 30. Producţia pentru care costul variabil mediu este minim şi costul fix per unitatea de produs astfel obţinută sunt",
      "options": [
        "Q = 2 u., CFM = 10 u.m.",
        "Q = 6 u., CFM = 5 u.m.",
        "Q = 2 u., CFM = 15 u.m.",
        "Q = 5 u., CFM = 6 u.m",
        "Q = 5 u., CFM = 8 u.m."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g164",
      "section": "costuri",
      "q": "În mod normal, costul explicit în raport cu cel implicit este",
      "options": [
        "mai mare",
        "mai mic",
        "egal",
        "mai mare sau mai mic",
        "mai mic sau egal."
      ],
      "answer": 3,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g166",
      "section": "costuri",
      "q": "Dacă costul total (CT) al unui producător se exprimă prin relaţia CT=4+10Q, unde Q este producţia, una din afirmaţiile următoare este adevărată ",
      "options": [
        "costul total este constant ",
        "costul marginal este egal cu costul total mediu ",
        "costul marginal este descrescător",
        "costul marginal este mai mare decât costul total mediu",
        "costul marginal este mai mic decât costul total mediu."
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g167",
      "section": "costuri",
      "q": "Dacă în urma creşterii producţiei Cmg>CVM, o propoziţie este adevărată",
      "options": [
        "costul variabil mediu scade",
        "costul variabil mediu este minim",
        "costul variabil mediu creşte",
        "costul fix mediu creşte",
        "costul fix mediu este minim."
      ],
      "answer": 2,
      "origin": "Grile_Economie_Corectate (1).docx"
    },
    {
      "id": "g171",
      "section": "costuri",
      "q": "Funcţia costului total este: CT=20+4Q-4Q2+Q3. Costul fix şi volumul producţiei la care costul variabil mediu este minim sunt",
      "options": [
        "20 ; 4",
        "0 ; 2",
        "20 ; 3",
        "0 ; 4",
        "20 ; 2"
      ],
      "answer": 4,
      "origin": "Grile_Economie_Corectate (1).docx"
    }
  ]
};
