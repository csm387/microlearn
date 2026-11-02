# Microlearn 2 — curs, seminar și exerciții

Un site **static**, în limba română, pentru învățarea microeconomiei din materialele încărcate. Creat doar cu **HTML, CSS și JavaScript** (fără React, npm, backend, cookies de urmărire, conturi sau servicii externe). Este pregătit pentru **GitHub Pages**.

## Ce găsești în site

### Curs și seminar
- **4 capitole de curs / 18 lecții**: raritatea în economie, teoria consumatorului, cererea, costuri și profit.
- **3 materiale de seminar / 15 secțiuni**: economia ca știință, comportamentul consumatorului, utilitatea și aplicațiile.
- Lecții concise, tabele, exemple explicate, **33 de verificări rapide** (câte una pentru fiecare secțiune).
- **4 grafice vizuale**: frontiera posibilităților de producție (interactivă), linia bugetului (interactivă), curba cererii (interactivă), costurile (interactiv); plus graficul UT/UM bazat pe tabelul seminarului.

### Exersează și revizuiește
- **153 de grile** în total, filtrabile după sursă (curs / seminar) și capitol; feedback imediat, explicații acolo unde materialul le permite.
- Recapitulare automată a întrebărilor greșite, istoric local de până la 30 de teste și detalierea greșelilor la final.
- Testul în desfășurare poate fi reluat după actualizarea paginii în aceeași sesiune a browserului.
- **50 de formule**, cu căutare, fișe de memorare, copiere și salvare.
- **Laborator** cu trei calculatoare: constrângerea bugetară, elasticitatea cererii și costurile/profitul. Ipotezele sunt descrise în pagină; exemplele sunt ilustrative.

### Organizare personală
- **Căutare globală** prin lecții, seminare și formule (`Ctrl+K` sau `⌘K`).
- Secțiunea **Colecția mea**: lecții și formule salvate, notițe, istoric, greșeli de repetat.
- **Progres local** pentru toate cele 33 de secțiuni, fără cont; continuarea studiului de unde ai rămas.
- **Export / import JSON** pentru mutarea progresului și notițelor între dispozitive. Importul înlocuiește datele locale doar după confirmare.
- Interfață responsive, temă luminoasă/întunecată, accesibilitate pentru tastatură, mod offline după prima vizită pe HTTPS (datorită service worker-ului).

## Publicare pe GitHub Pages

1. Creează un repository public sau privat în contul tău GitHub, conform planului disponibil (de exemplu `microlearn`).
2. Încarcă **fișierele din acest folder direct în rădăcina repository-ului** — nu folderul care le conține. Fișierul `index.html` trebuie să fie la rădăcină.
3. Deschide **Settings → Pages → Build and deployment**.
4. Setează **Deploy from a branch**, ramura **`main`**, directorul **`/(root)`**, apoi salvează.
5. Adresa va fi de forma `https://UTILIZATOR.github.io/microlearn/`, în funcție de numele repository-ului.

Nu ai nevoie de terminal, build, compilare sau pachete. Toate căile sunt **relative**, inclusiv cele ale service worker-ului, deci funcționează și în subdirectoarele GitHub Pages.

## Rulare locală

Poți deschide direct fișierul `index.html` în browser. Lecțiile, testele, formulele și calculatoarele funcționează fără server. Instalarea offline (service worker) nu se activează la deschiderea de tip `file://`; se activează pe `https://` sau `localhost`.

## Fișiere

| Fișier | Rol |
| --- | --- |
| `index.html` | Pagina și structura aplicației |
| `style.css` | Interfața, responsive, temă întunecată |
| `data.js` | Lecții, formule, grile de curs |
| `seminar-data.js` | Conținut și grile de seminar |
| `app.js` | Navigare, testare, grafice, progres, căutare, laborator |
| `favicon.svg` | Iconița site-ului |
| `manifest.webmanifest` | Date pentru instalarea site-ului |
| `service-worker.js` | Cache offline după prima încărcare HTTPS |
| `.nojekyll` | Dezactivează procesarea Jekyll din Pages |

## Surse

**Curs**: `Raritatea in economie -suport curs(1).docx`, `Teoria consumatorului(4).docx`, `Cererea -suport de curs(4).docx`, `Teoria economica producatorului (II). Costurile de productie si profitul(1).ppt`, `Formule_Microeconomie_pe_lectii(1).docx`, `Grile_Economie_Corectate (1).docx`.

**Seminar**: `Tema 1 - Economia ca stiinta.ppt`, `Tema 3 - Teoria comportamentului consumatorului.ppt`, `Utilitatea precizari; intrebari-raspunsuri;autoevaluare.docx`.

Lecțiile sunt **sinteze pentru studiu**, nu reproduceri integrale ale fișierelor. Întrebările adaptate sunt identificate separat de cele preluate din materiale. Verificările rapide și calculatoarele sunt auxiliare create pentru studiu din conceptele și formulele suporturilor. În fișa de autoevaluare există o contradicție între barem și explicație cu privire la dependența utilității economice de perioada consumului; site-ul semnalează problema și nu o evaluează automat.

## Date, confidențialitate și actualizări

Site-ul nu trimite progresul către vreun server; îl păstrează în `localStorage` pe browserul și adresa de unde este accesat. Sesiunea de test în curs se păstrează temporar în `sessionStorage`. Nu se sincronizează automat între telefon și calculator; folosește export/import pentru asta. La ștergerea datelor browserului se poate pierde progresul neexportat.

Dacă modifici site-ul și îl republici pe GitHub Pages, browserul încearcă să preia versiunea nouă mai întâi de pe rețea, folosind copia offline numai când conexiunea nu funcționează. În cazul modificărilor infrastructurii de caching, modifică și constanta `CACHE` din `service-worker.js`.
