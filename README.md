# Microlearn — microeconomie, curs și seminar

Site de învățare construit integral cu **HTML, CSS și JavaScript**, fără framework-uri, pachete npm, server sau baze de date. Poate fi publicat direct pe **GitHub Pages**.

## Ce conține

**Curs**
- 4 capitole de microeconomie (raritatea, teoria consumatorului, cererea, costurile și profitul).
- 18 lecții scurte și 50 de formule organizate pe teme, cu fișe de memorie și copiere.
- 4 grafice interactive (FPP, bugetul consumatorului, cererea, costuri).
- 136 de întrebări pentru recapitularea cursului.

**Seminar — secțiune separată**
- 3 seturi tematice, **15 secțiuni**: economia ca știință; comportamentul consumatorului; utilitatea și autoevaluarea.
- Micro vs. macro, pozitiv vs. normativ, eficacitate vs. eficiență și cele 10 principii ale lui Mankiw (în formularea prezentării).
- Tabelul utilității totale și marginale, grafic UT/UM, dreapta bugetului și condiția de optim.
- Probleme numerice cu răspuns introdus și verificat automat: mandarine, bugetul lui Ovidiu, optimul consumatorului.
- **17 întrebări de seminar**: 6 din fișa de autoevaluare și 11 întrebări de recapitulare adaptate din diapozitive. Total site: **153 de întrebări**.
- Grilele se pot filtra după **curs / seminar**, apoi după capitol sau temă.

Interfața este responsive, are temă întunecată și memorează local în browser capitolele de curs și secțiunile de seminar parcurse. Nu există cont, colectare de date sau servicii externe.

## Deschidere locală

Deschide `index.html` în browser. Nu trebuie instalat nimic.

## Publicare pe GitHub Pages

1. Creează un repository GitHub (de exemplu, `microlearn`).
2. Încarcă **conținutul folderului `microeconomie-site` în rădăcina repository-ului** (`index.html`, fișierele `.js`, `style.css`, `favicon.svg`, etc.).
3. În repository, deschide **Settings → Pages**.
4. La **Build and deployment → Source**, alege **Deploy from a branch**.
5. Selectează **`main`** și **`/(root)`**, apoi **Save**.
6. Adresa site-ului va avea forma `https://UTILIZATOR.github.io/microlearn/` (în funcție de numele repo-ului).

Toate căile sunt relative și funcționează și în subdirectorul GitHub Pages. **Fișierul `seminar-data.js` trebuie încărcat și el**; fără el, site-ul actualizat nu pornește.

## Fișiere

| Fișier | Rol |
| --- | --- |
| `index.html` | Pagina site-ului, navigație și legături la scripturi |
| `style.css` | Aspect, mobil și temă întunecată |
| `data.js` | Lecțiile, formulele și grilele de curs |
| `seminar-data.js` | Cele 15 secțiuni și 17 întrebări de seminar |
| `app.js` | Navigație, verificare exerciții, teste, grafice și progres |
| `favicon.svg` | Iconița site-ului |
| `.nojekyll` | Evită procesarea Jekyll |

## Surse folosite

**Curs:**
- `Raritatea in economie -suport curs(1).docx`
- `Teoria consumatorului(4).docx`
- `Cererea -suport de curs(4).docx`
- `Teoria economica producatorului (II). Costurile de productie si profitul(1).ppt`
- `Formule_Microeconomie_pe_lectii(1).docx`
- `Grile_Economie_Corectate (1).docx`

**Seminar:**
- `Tema 1 - Economia ca stiinta.ppt`
- `Tema 3 - Teoria comportamentului consumatorului.ppt`
- `Utilitatea precizari; intrebari-raspunsuri;autoevaluare.docx`

Lecțiile sunt sinteze orientate spre studiu, nu copii integrale ale materialelor. Întrebările care nu apar literal în documente sunt etichetate „Recapitulare adaptată”.

**Notă privind baremul:** în documentul de autoevaluare, enunțul „Utilitatea economică nu depinde de perioada în care este consumat un anumit bun” este marcat „A”, deși explicațiile aceleiași fișe evidențiază influența împrejurărilor. Ca să nu producem un test cu răspuns discutabil, întrebarea nu este inclusă în evaluarea automată; neconcordanța este explicată în secțiunea de seminar „Întrebări frecvente”.

**Notă privind progresul:** progresul se salvează numai în `localStorage`, deci nu se sincronizează între dispozitive. Datele cursului anterior sunt păstrate când deschizi versiunea actualizată în același browser și pe aceeași adresă.
