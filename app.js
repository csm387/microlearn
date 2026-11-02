/* Microlearn — JavaScript simplu, fără framework-uri sau dependențe externe. */
'use strict';
const {modules: MODULES, formulas: FORMULAS} = COURSE_DATA;
const SEMINAR_UNITS = SEMINAR_DATA.units;
const QUESTIONS = [...COURSE_DATA.quiz, ...SEMINAR_DATA.quiz];
const TOTAL_SEMINAR_SECTIONS = SEMINAR_UNITS.reduce((sum, u) => sum + u.sections.length, 0);
const TOTAL_SECTIONS = MODULES.reduce((sum, m) => sum + m.sections.length, 0);
const root = document.querySelector('#app');
const storageKey = 'microlearn-v1';
let state = loadState();
let quizSession = (()=>{try{const saved=JSON.parse(sessionStorage.getItem('microlearn-active-quiz')||'null');return saved&&Array.isArray(saved.questions)&&Number.isInteger(saved.index)?saved:null;}catch{return null;}})();
let flashIndex = 0;
let flashFlipped = false;
let formulaQuery = '';
let formulaFilter = 'toate';
let formulaMode = 'lista';
let toastTimer = null;
const $ = (q, parent=document) => parent.querySelector(q);
const $$ = (q, parent=document) => [...parent.querySelectorAll(q)];
function loadState(){try {const a=JSON.parse(localStorage.getItem(storageKey)||'{}');return {completed: Array.isArray(a.completed)?a.completed:[],seminarCompleted:Array.isArray(a.seminarCompleted)?a.seminarCompleted:[],last:a.last||null,lastSeminar:a.lastSeminar||null,dark:!!a.dark};}catch{return {completed:[],seminarCompleted:[],last:null,lastSeminar:null,dark:false};}}
function saveState(){try{localStorage.setItem(storageKey,JSON.stringify(state));}catch{/* Site-ul funcționează și dacă stocarea este dezactivată. */}}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function percent(n,base){return base?Math.round(n/base*100):0;}
function num(n){return new Intl.NumberFormat('ro-RO',{maximumFractionDigits:1}).format(n);}
function progress(m){const done=m.sections.filter(x=>state.completed.includes(m.id+'/'+x.id)).length;return {done,total:m.sections.length,pct:percent(done,m.sections.length)};}
function totalProgress(){return percent(state.completed.length+state.seminarCompleted.length,TOTAL_SECTIONS+TOTAL_SEMINAR_SECTIONS);}
function seminarProgress(u){const done=u.sections.filter(x=>state.seminarCompleted.includes(u.id+'/'+x.id)).length;return {done,total:u.sections.length,pct:percent(done,u.sections.length)};}
function seminarTotalProgress(){return percent(state.seminarCompleted.length,TOTAL_SEMINAR_SECTIONS);}
function seminarLink(u,s=u.sections[0]){return "#seminar/"+u.id+"/"+s.id;}
function moduleById(id){return MODULES.find(m=>m.id===id);}
function sectionById(mod,id){return mod?.sections.find(s=>s.id===id);}
function modLink(m){return '#lectie/'+m.id+'/'+m.sections[0].id;}
function secLink(m,s){return '#lectie/'+m.id+'/'+s.id;}
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2200);}
function setTheme(){document.body.classList.toggle('dark',state.dark);$('#themeToggle').textContent=state.dark?'☀':'☾';$('#themeToggle').setAttribute('aria-label',state.dark?'Activează tema luminoasă':'Activează tema întunecată');}
function sidebar(){
 $('#chapterNav').innerHTML=MODULES.map(m=>`<a class="chapter-link" data-chapter="${m.id}" href="${modLink(m)}"><span class="chapter-index">${m.number}</span><span>${esc(m.title)}</span></a>`).join('');
 updateProgress();
}
function updateProgress(){const pct=totalProgress();$('#sideProgress').textContent=pct+'%';$('#sideProgressBar').style.width=pct+'%';}
function setNav(active,moduleId){$$('[data-nav]').forEach(a=>{let yes=a.dataset.nav===active;a.classList.toggle('active',yes);if(yes)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});$$('[data-chapter]').forEach(a=>a.classList.toggle('active',a.dataset.chapter===moduleId));}
function closeMenu(){const side=$('#sidebar');side.classList.remove('open');$('#mobileOverlay').hidden=true;$('#menuToggle').setAttribute('aria-expanded','false');}
function render(){
 const hash=decodeURIComponent(location.hash.slice(1)||'acasa');const parts=hash.split('/');const route=parts[0];let active='acasa',chapter=null,context='ACASĂ';
 if(route==='lectie'){
  const m=moduleById(parts[1]);if(!m){location.hash='lectii';return;}
  const s=sectionById(m,parts[2])||m.sections[0];active='lectii';chapter=m.id;context=m.title.toUpperCase();
  renderReader(m,s);state.last={module:m.id,section:s.id};saveState();
 }else if(route==='lectii'){active='lectii';context='LECȚII';renderLessons();}
 else if(route==='seminar'){active='seminar';context='SEMINAR';const u=SEMINAR_UNITS.find(x=>x.id===parts[1]);if(u){const sec=u.sections.find(x=>x.id===parts[2])||u.sections[0];renderSeminarReader(u,sec);state.lastSeminar={unit:u.id,section:sec.id};saveState();}else renderSeminarHome();}
 else if(route==='laborator'){active='laborator';context='LABORATOR';renderLab();}
 else if(route==='colectie'){active='colectie';context='COLECȚIA MEA';renderCollection();}
 else if(route==='formule'){active='formule';context='FORMULE';formulaMode=parts[1]==='fise'?'fise':'lista';renderFormulas();}
 else if(route==='teste'){active='teste';context='EXERCIȚII';quizSession=null;renderQuizSetup(parts[1]==='seminar'?'seminar':'toate');}
 else if(route==='quiz'){active='teste';context='TEST';if(quizSession)renderQuiz();else{location.hash='teste';return;}}
 else{renderHome();}
 setNav(active,chapter);$('#headerContext').textContent=context;updateProgress();closeMenu();window.scrollTo({top:0,behavior:'instant'});
}
function header(label,title,lead){return `<section class="heading-area"><div class="eyebrow">${label}</div><h1>${title}</h1>${lead?`<p class="page-lead">${lead}</p>`:''}</section>`;}
function moduleCard(m){const p=progress(m);return `<a href="${modLink(m)}" class="card module-card"><div class="module-top"><div class="module-icon" style="background:${m.accent}">${m.icon}</div><span class="module-arrow">↗</span></div><div class="module-index">CAPITOLUL ${m.number} · ${m.duration}</div><h3>${esc(m.title)}</h3><p>${esc(m.short)}</p><div class="module-bottom"><span>${p.done}/${p.total} lecții parcurse</span><div class="track"><span style="width:${p.pct}%"></span></div><span>${p.pct}%</span></div></a>`;}
function heroGraph(){return `<svg class="hero-art" viewBox="0 0 400 280" aria-label="Grafic stilizat cu o curbă ascendentă" role="img"><defs><linearGradient id="curveBG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#74b68a" stop-opacity=".22"/><stop offset="1" stop-color="#74b68a" stop-opacity="0"/></linearGradient></defs><g>${[40,90,140,190,240].map(y=>`<path class="art-grid" d="M25 ${y}H380"/>`).join('')}${[25,97,169,241,313,380].map(x=>`<path class="art-grid" d="M${x} 22V250"/>`).join('')}</g><path d="M30 231C92 219 111 160 161 183S243 129 281 97S342 75 378 36V252H30Z" fill="url(#curveBG)"/><path class="art-line" d="M30 231C92 219 111 160 161 183S243 129 281 97S342 75 378 36"/>${[[30,231],[161,183],[281,97],[378,36]].map(([x,y])=>`<circle class="art-point" cx="${x}" cy="${y}" r="7"/>`).join('')}<rect x="234" y="20" width="116" height="33" rx="8" fill="#fff" opacity=".88"/><text x="245" y="42" font-size="12">Progres, pas cu pas</text></svg>`;}
function renderHome(){
 const next = (state.last && moduleById(state.last.module)) ? state.last : {module:MODULES[0].id,section:MODULES[0].sections[0].id};
 const nextMod=moduleById(next.module),nextSec=sectionById(nextMod,next.section)||nextMod.sections[0];
 root.innerHTML=`<section class="hero"><div class="hero-content"><div class="eyebrow" style="color:#387754">ÎNVĂȚAT PE BUNE, FĂRĂ COMPLICAȚII</div><h1>Microeconomie.<br><em>Pe înțelesul tău.</em></h1><p>Patru capitole de curs, seminare separate, formule la îndemână și exerciții rezolvate. Puțin câte puțin, până se leagă totul.</p><div class="hero-btns"><a href="${secLink(nextMod,nextSec)}" class="button">${state.last?'Continuă învățarea':'Începe să înveți'} <span>↗</span></a><a href="#teste" class="button button-secondary">Exersează cu grile</a></div></div>${heroGraph()}</section>
 <div class="overview-line"><span><span class="mini-dot"></span> 4 capitole de curs</span><span class="sep"></span><span>3 seturi de seminar</span><span class="sep"></span><span>${TOTAL_SECTIONS} lecții scurte</span><span class="sep"></span><span>${FORMULAS.length} formule</span><span class="sep"></span><span>${QUESTIONS.length} întrebări</span></div>
 <section><div class="section-top"><div><h2>Harta ta de învățare</h2><p>Începe cu bazele și avansează în ritmul tău.</p></div><a class="arrow-link" href="#lectii">Toate lecțiile ↗</a></div><div class="module-grid">${MODULES.map(moduleCard).join('')}</div></section>
 <section class="next-section"><div class="section-top"><div><h2>Aplicații de seminar, pas cu pas</h2><p>Exemple numerice, autoevaluare și explicațiile din cele trei materiale de seminar.</p></div><a class="arrow-link" href="#seminar">Intră la seminar ↗</a></div><a href="#seminar" class="card seminar-home-promo"><div class="promo-icon">✎</div><div><strong>De la teorie la probleme rezolvate</strong><p>Utilitate marginală, constrângerea bugetară și decizii economice.</p></div><span aria-hidden="true">↗</span></a></section><section class="next-section"><div class="section-top"><div><h2>O pauză bună de recapitulare</h2><p>Uneori, cel mai bun mod de a înțelege e să verifici ce ai reținut.</p></div></div><div class="card quick-card"><div class="quick-graphic">◈</div><div><h3>10 întrebări. Fără presiune.</h3><p>Exersezi, primești feedback imediat și revii la ce mai trebuie fixat.</p></div><a class="button button-secondary" href="#teste">Începe un test ↗</a></div></section>`;
}
function renderLessons(){root.innerHTML=header('DRUMUL TĂU DE STUDIU','Lecții, în ordine logică.','Informația esențială din suporturile tale de curs, împărțită în bucăți ușor de parcurs.')+`<div class="lessons-stack">${MODULES.map(m=>{const p=progress(m);return `<a href="${modLink(m)}" class="card lesson-row"><div class="module-icon" style="background:${m.accent}">${m.icon}</div><div><div class="eyebrow" style="margin:0 0 7px">CAPITOL ${m.number}</div><h3>${esc(m.title)}</h3><p>${esc(m.subtitle)}</p></div><div class="meta"><span>${p.done}/${p.total} lecții</span><strong>${p.pct}%</strong><span>↗</span></div></a>`;}).join('')}</div>`;}
function renderSeminarHome(){
 const last=state.lastSeminar,u=last?SEMINAR_UNITS.find(x=>x.id===last.unit):null;
 root.innerHTML=header('MATERIALE DE SEMINAR','Seminar: înțelege și aplică.','Am păstrat separat explicațiile de curs și aplicațiile de seminar. Alege o temă și exersează în ritmul tău.')+
 `<div class="seminar-summary"><span class="pill">${TOTAL_SEMINAR_SECTIONS} secțiuni</span><span class="pill">${SEMINAR_DATA.quiz.length} grile de seminar</span><span class="pill">${seminarTotalProgress()}% parcurs</span></div>`+
 (u?`<a class="seminar-continue" href="${seminarLink(u,u.sections.find(x=>x.id===last.section)||u.sections[0])}">↗ Continuă de unde ai rămas: ${esc(u.title)}</a>`:'')+
 `<div class="lessons-stack">${SEMINAR_UNITS.map(u=>{const p=seminarProgress(u);return `<a class="card lesson-row" href="${seminarLink(u)}"><div class="module-icon" style="background:${u.accent}">${u.icon}</div><div><div class="eyebrow" style="margin:0 0 7px">MATERIAL ${esc(u.number)}</div><h3>${esc(u.title)}</h3><p>${esc(u.subtitle)}</p><p class="seminar-row-source">${esc(u.source)}</p></div><div class="meta"><span>${p.done}/${p.total} secțiuni</span><strong>${p.pct}%</strong><span>↗</span></div></a>`;}).join('')}</div>`+
 `<div class="seminar-bottom-link"><a class="button" href="#teste/seminar">Exersează grilele de seminar →</a></div>`;
}
function renderSeminarReader(u,s){
 const index=u.sections.indexOf(s),key=u.id+'/'+s.id,done=state.seminarCompleted.includes(key);
 const next=u.sections[index+1];
 root.innerHTML=`<div class="breadcrumb"><a href="#seminar">Seminar</a><span>›</span><span>${esc(u.title)}</span><span>›</span><span>${index+1}/${u.sections.length}</span></div>
 <div class="reader-header"><div class="eyebrow">MATERIAL ${esc(u.number)} / SECȚIUNEA ${String(index+1).padStart(2,'0')}</div><h1>${esc(u.title)}</h1><p>${esc(u.subtitle)}</p><div class="reader-meta"><span class="pill">${esc(u.source)}</span><span class="pill">${seminarProgress(u).pct}% parcurs</span></div></div>
 <nav class="section-tabs" aria-label="Secțiunile materialului de seminar">${u.sections.map((x,i)=>`<a class="section-tab ${s.id===x.id?'active':''}" ${s.id===x.id?'aria-current="step"':''} href="${seminarLink(u,x)}">${state.seminarCompleted.includes(u.id+'/'+x.id)?'✓ ':''}${i+1}. ${esc(x.title)}</a>`).join('')}</nav>
 <div class="reader-layout"><article class="reading"><h2>${esc(s.title)}</h2><p class="lead">${esc(s.lead)}</p>${s.blocks.map(renderBlock).join('')}
 <div class="lesson-actions"><div class="left-action"><button class="button ${done?'button-secondary':'button-soft'}" data-seminar-complete="${key}" type="button">${done?'✓ Secțiune parcursă':'✓ Marchează ca învățată'}</button></div><div>${next?`<a class="button" href="${seminarLink(u,next)}">Următoarea secțiune →</a>`:`<a class="button" href="#teste/seminar">Rezolvă grile de seminar →</a>`}</div></div></article>
 <aside class="formula-side"><h4>DIN MATERIALELE DE SEMINAR</h4><div class="aside-formula"><div class="name">Sursa acestei teme</div><div class="seminar-source">${esc(u.source)}</div></div><div class="aside-formula"><div class="name">Cum să înveți</div><div class="seminar-source">Citește explicația, încearcă singur aplicațiile și verifică rezultatul.</div></div><a href="#seminar" class="aside-link">← Înapoi la toate seminarele</a><a href="#teste/seminar" class="aside-link">Grile de seminar ↗</a></aside></div>`;
 $$('[data-graph]').forEach(bindGraph);
}
function renderPractice(b){
 return `<div class="example-block practice-card"><div class="example-label">✎ Aplică singur</div><h3>${esc(b.title)}</h3><p>${esc(b.description)}</p><div class="practice-fields">${b.fields.map((f,i)=>`<label class="practice-label"><span>${esc(f.label)}</span><input inputmode="decimal" type="text" autocomplete="off" placeholder="${esc(f.placeholder)}" data-practice-field="${i}" aria-label="${esc(f.label)}"></label>`).join('')}</div><div class="practice-actions"><button class="button button-soft" type="button" data-practice-check>Verifică răspunsul</button><details class="practice-details"><summary>Arată rezolvarea</summary><p>${esc(b.solution)}</p></details></div><p class="practice-feedback" role="status" aria-live="polite"></p><span class="practice-answers" data-answers="${esc(JSON.stringify(b.fields.map(f=>f.answer)))}" hidden></span></div>`;
}
function markSeminarComplete(key){
 if(!state.seminarCompleted.includes(key)){state.seminarCompleted.push(key);toast('Secțiune de seminar parcursă.');}else{state.seminarCompleted=state.seminarCompleted.filter(x=>x!==key);toast('Marcajul a fost eliminat.');}saveState();render();
}
function checkPractice(button){
 const card=button.closest('.practice-card');if(!card)return;
 const answers=JSON.parse($('.practice-answers',card).dataset.answers);
 const fields=$$('[data-practice-field]',card);
 let checked=0;
 fields.forEach((field,i)=>{
  const value=Number(field.value.trim().replace(/\s/g,'').replace(',','.'));
  const correct=field.value.trim()!==''&&Number.isFinite(value)&&Math.abs(value-answers[i])<0.0001;
  field.classList.toggle('is-correct',correct);field.classList.toggle('is-wrong',!correct);if(correct)checked++;
 });
 const feedback=$('.practice-feedback',card);const all=checked===fields.length;
 feedback.textContent=all?'✓ Corect! Ai rezolvat problema.':`Ai ${checked} din ${fields.length} răspunsuri corecte. Verifică pașii sau deschide rezolvarea.`;
 feedback.classList.toggle('ok',all);
}

function renderBlock(b){
 switch(b.type){
  case 'p': return `<p>${esc(b.text)}</p>`;
  case 'list':return `<ul>${b.items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
  case 'note':return `<aside class="note-block"><strong>✦ ${esc(b.title)}</strong><p>${esc(b.text)}</p></aside>`;
  case 'example':return `<div class="example-block"><div class="example-label">✎ Exercițiu explicat</div><h3>${esc(b.title)}</h3><ol class="example-steps">${b.steps.map(t=>`<li>${esc(t)}</li>`).join('')}</ol></div>`;
  case 'graph':return `<div class="graph-panel" data-graph="${b.kind}">${renderGraph(b.kind)}</div>`;
  case 'practice':return renderPractice(b);
  case 'table':return `<div class="reading-table"><table><thead><tr>${b.headers.map(t=>`<th scope="col">${esc(t)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(row=>`<tr>${row.map(t=>`<td>${esc(t)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  default:return '';
 }
}
function renderReader(m,s){
 const index=m.sections.indexOf(s),done=state.completed.includes(m.id+'/'+s.id);
 const refs=s.forms.map(i=>FORMULAS.find(f=>f.id===i)).filter(Boolean);
 const nav=m.sections.map((x,i)=>`<a class="section-tab ${s.id===x.id?'active':''}" href="${secLink(m,x)}" ${s.id===x.id?'aria-current="step"':''}>${state.completed.includes(m.id+'/'+x.id)?'✓ ':''}${i+1}. ${esc(x.title)}</a>`).join('');
 const next=index<m.sections.length-1?m.sections[index+1]:null;
 root.innerHTML=`<div class="breadcrumb"><a href="#lectii">Lecții</a><span>›</span><a href="${modLink(m)}">${esc(m.title)}</a><span>›</span><span>${index+1}/${m.sections.length}</span></div>
 <div class="reader-header"><div class="eyebrow">CAPITOL ${m.number} / LECȚIA ${String(index+1).padStart(2,'0')}</div><h1>${esc(m.title)}</h1><p>${esc(m.subtitle)}</p><div class="reader-meta"><span class="pill">${m.duration} · capitol complet</span><span class="pill">${progress(m).pct}% parcurs</span></div></div>
 <nav class="section-tabs" aria-label="Lecțiile capitolului">${nav}</nav>
 <div class="reader-layout"><article class="reading"><h2>${esc(s.title)}</h2><p class="lead">${esc(s.lead)}</p>${s.blocks.map(renderBlock).join('')}
 <div class="lesson-actions"><div class="left-action"><button class="button ${done?'button-secondary':'button-soft'}" data-complete="${m.id}/${s.id}" type="button">${done?'✓ Lecție parcursă':'✓ Marchează ca învățată'}</button></div><div>${next?`<a class="button" href="${secLink(m,next)}">Următoarea lecție →</a>`:`<a class="button" href="#teste">Testează-te →</a>`}</div></div></article>
 <aside class="formula-side"><h4>FORMULE DE ȚINUT MINTE</h4>${refs.length?refs.map(f=>`<div class="aside-formula"><div class="name">${esc(f.title)}</div><div class="expression">${esc(f.expr)}</div></div>`).join(''):'<div class="aside-formula"><div class="name">Această secțiune este conceptuală.</div></div>'}<a href="#formule" class="aside-link">Vezi toate formulele ↗</a></aside></div>`;
 $$('[data-graph]').forEach(bindGraph);
}
function makeGraphFrame(title,body,description,controls='',sourceLabel='DIN MATERIALUL DE CURS'){return `<div class="graph-panel-header"><strong>${esc(title)}</strong><small>${controls?'SIMULARE INTERACTIVĂ':sourceLabel}</small></div><svg viewBox="0 0 600 288" role="img" aria-label="${esc(title)}">${body}</svg>${controls?`<div class="graph-controls">${controls}</div>`:''}<p class="graph-caption">${description}</p>`;}
function coords(x,y){return `${x.toFixed(1)},${y.toFixed(1)}`;}
function frameAxes(xLabel,yLabel){const lines=[];for(let i=0;i<6;i++){const xx=65+i*94,yy=24+i*42;lines.push(`<path class="graph-grid" d="M${xx} 21V233"/><path class="graph-grid" d="M65 ${yy}H535"/>`);}return lines.join('')+`<path class="graph-axis" d="M65 20V235H540"/><text class="graph-label" x="541" y="253" text-anchor="end">${xLabel}</text><text class="graph-label" x="59" y="16">${yLabel}</text>`;}
function renderGraph(kind,values={}){
 if(kind==='utilitate'){const UT=[0,10,18,24,28,30,30,25],UM=[0,10,8,6,4,2,0,-5];const X=i=>65+i*65, Yut=v=>225-v*5.8, Yum=v=>162-v*9;const poly=(arr,fn)=>arr.map((v,i)=>(i?'L':'M')+coords(X(i),fn(v))).join(' ');const a=frameAxes('Cantitate Q','Utilitate');const marks=UT.map((v,i)=>`<circle class="graph-dot" cx="${X(i)}" cy="${Yut(v)}" r="4"/>`).join('');const graph=`${a}<path class="graph-line" d="${poly(UT,Yut)}"/>${marks}<path class="graph-line-blue" d="${poly(UM,Yum)}"/><text class="graph-strong" x="450" y="45">UT (verde)</text><text class="graph-label" x="450" y="62">UM (albastru, altă scară)</text><text class="graph-strong" x="440" y="116">UM = 0 la Q = 6</text>`;return makeGraphFrame('UT și UM — datele seminarului',graph,'Evoluția din tabelul seminarului. Curbele UT și UM au scări verticale diferite pentru lizibilitate.','','DIN MATERIALUL DE SEMINAR');}

 let body=frameAxes(kind==='fpp'?'Computere':kind==='budget'?'Bunul X':kind==='demand'?'Cantitate Q':'Producție Q',kind==='fpp'?'Mere (kg)':kind==='budget'?'Bunul Y':kind==='demand'?'Preț P':'Cost (u.m.)');
 if(kind==='fpp'){
  const points=[[0,500],[100,400],[200,250],[250,90],[275,0]];const to=([x,y])=>[65+x/290*470,233-y/520*208];const path=points.map((p,i)=>(i?'L':'M')+coords(...to(p))).join(' ');const fill=path+' L'+coords(...to([275,0]))+' L65,233 Z';
  body+=`<path class="graph-line" d="${path}"/>`+points.map((p,i)=>{const [x,y]=to(p);return `<circle class="graph-dot" cx="${x}" cy="${y}" r="5"/><text class="graph-strong" x="${x+9}" y="${y-9}">${'ABCDE'[i]}</text>`;}).join('');
  return makeGraphFrame('Frontiera posibilităților de producție',body,'Datele din suportul de curs: computere și mere. Punctele A–E sunt combinații eficiente.');
 }
 if(kind==='budget'){
  const V=Number(values.V??60),px=Number(values.px??10),py=Number(values.py??5), xmax=V/px, ymax=V/py;
  const maxX=22,maxY=24;const x=65+Math.min(xmax/maxX,1)*470,y=233-Math.min(ymax/maxY,1)*209;
  body+=`<path class="graph-line" d="M65 ${y}L${x} 233"/><circle class="graph-dot" cx="65" cy="${y}" r="5"/><circle class="graph-dot" cx="${x}" cy="233" r="5"/><text class="graph-strong" x="78" y="${Math.max(30,y-10)}">${num(ymax)} Y</text><text class="graph-strong" x="${Math.min(480,x)}" y="257">${num(xmax)} X</text>`;
  const ctr=`<label>Venit <input type="range" data-key="V" min="30" max="120" step="10" value="${V}"><output>${V}</output></label><label>Preț X <input type="range" data-key="px" min="5" max="15" step="1" value="${px}"><output>${px}</output></label><label>Preț Y <input type="range" data-key="py" min="3" max="12" step="1" value="${py}"><output>${py}</output></label>`;
  return makeGraphFrame('Dreapta bugetului',body,`V = ${V}, px = ${px}, py = ${py}. Intersecțiile sunt V/px = ${num(xmax)} și V/py = ${num(ymax)}.`,ctr);
 }
 if(kind==='demand'){
  const P=Number(values.P??8);const q=100-5*P;const to=(Q,pr)=>[65+Q/105*470,233-pr/20*209];const [x1,y1]=to(100,0),[x2,y2]=to(0,20),[dotx,doty]=to(q,P);
  body+=`<path class="graph-line" d="M${coords(x2,y2)}L${coords(x1,y1)}"/><path d="M${dotx} ${doty}V233M65 ${doty}H${dotx}" fill="none" stroke="#86b69a" stroke-dasharray="5,5" stroke-width="1.5"/><circle class="graph-dot" cx="${dotx}" cy="${doty}" r="7"/><text class="graph-strong" x="${dotx+12}" y="${doty-11}">(${q}, ${P})</text>`;
  const ctr=`<label>Preț P <input type="range" data-key="P" min="2" max="18" step="1" value="${P}"><output>${P}</output></label>`;
  return makeGraphFrame('Legea cererii',body,`Exemplu ilustrativ: Q = 100 − 5P. La prețul ${P}, cantitatea cerută este ${q}. Miști punctul pe aceeași curbă.`,ctr);
 }
 if(kind==='cost'){
  const Q=Number(values.Q??6), maxQ=12, maxC=260;const to=(q,c)=>[65+q/maxQ*470,233-c/maxC*209];
  const samples=Array.from({length:61},(_,i)=>i/5);const pathFor=fn=>samples.map((t,i)=>(i?'L':'M')+coords(...to(t,fn(t)))).join(' ');
  const CT=q=>q*q+5*q+20,CV=q=>q*q+5*q;
  const [dotx,doty]=to(Q,CT(Q));body+=`<path class="graph-line" d="${pathFor(CT)}"/><path class="graph-line-blue" d="${pathFor(CV)}"/><path d="M65 ${to(0,20)[1]}H535" stroke="#e3a877" stroke-width="2" stroke-dasharray="6 4"/><circle class="graph-dot" cx="${dotx}" cy="${doty}" r="6"/><text class="graph-strong" x="${Math.max(65,dotx-30)}" y="${Math.max(17,doty-13)}">CT=${CT(Q)}</text><text class="graph-strong" x="500" y="41">CT</text><text class="graph-label" x="500" y="70">CV</text>`;
  const ctr=`<label>Producție Q <input type="range" data-key="Q" min="1" max="12" step="1" value="${Q}"><output>${Q}</output></label>`;
  return makeGraphFrame('Evoluția costurilor',body,`Funcția din prezentare: CT = Q² + 5Q + 20. Pentru Q = ${Q}, CT = ${CT(Q)}, CV = ${CV(Q)}, CF = 20.`,ctr);
 }
 return '';
}
function bindGraph(el){const kind=el.dataset.graph;$$('input[type=range]',el).forEach(input=>input.addEventListener('input',()=>{const values=Object.fromEntries($$('input[type=range]',el).map(x=>[x.dataset.key,x.value]));el.innerHTML=renderGraph(kind,values);bindGraph(el);}));}
function renderFormulas(){
 root.innerHTML=header('TRUSA TA DE RECAPITULARE','Formule, fără să le cauți peste tot.','Toate relațiile de calcul din fișa de formule, organizate după cele patru lecții. Schimbă în modul „Fișe” ca să le înveți activ.')+`<div class="mode-toggle" role="group" aria-label="Mod de studiu"><button type="button" class="${formulaMode==='lista'?'active':''}" data-mode="lista">▤ Bibliotecă de formule</button><button type="button" class="${formulaMode==='fise'?'active':''}" data-mode="fise">◈ Fișe de memorie</button></div><section id="formulaContent"></section>`;
 renderFormulaContent();
}
function renderFormulaContent(){const el=$('#formulaContent');if(!el)return;
 if(formulaMode==='fise'){
  const f=FORMULAS[flashIndex%FORMULAS.length];el.innerHTML=`<div class="flash-study"><div class="flash-meta"><span>${flashIndex+1} / ${FORMULAS.length} fișe</span><span>${esc(moduleById(f.module).title)}</span></div><button class="flashcard" id="flipFlash" type="button" aria-label="Întoarce fișa"><span class="micro-label">${flashFlipped?'RĂSPUNS':'ÎNTREBARE'}</span><strong>${esc(flashFlipped?f.expr:f.title)}</strong>${flashFlipped?`<p>${esc(f.detail)}</p>`:''}<small>${flashFlipped?'Apasă pentru a vedea întrebarea':'Apasă pentru a arăta formula'}</small></button><div class="flash-buttons"><button class="button button-secondary" id="prevFlash" type="button">← Înapoi</button><button class="button button-soft" id="flipFlashBtn" type="button">${flashFlipped?'Ascunde răspunsul':'Arată răspunsul'}</button><button class="button" id="nextFlash" type="button">Următoarea →</button></div></div>`;
 }else{
  const items=FORMULAS.filter(f=>(formulaFilter==='toate'||f.module===formulaFilter)&&(!formulaQuery||[f.title,f.expr,f.detail].join(' ').toLocaleLowerCase('ro-RO').includes(formulaQuery.toLocaleLowerCase('ro-RO'))));
  el.innerHTML=`<div class="search-row"><label class="search-field"><span aria-hidden="true">⌕</span><input id="formulaSearch" type="search" value="${esc(formulaQuery)}" placeholder="Caută o formulă, un simbol, un concept…" aria-label="Caută formule" autocomplete="off"></label></div><div class="filter-pills" role="group" aria-label="Filtrează formulele"><button class="filter-pill ${formulaFilter==='toate'?'active':''}" data-filter="toate">Toate (${FORMULAS.length})</button>${MODULES.map(m=>`<button class="filter-pill ${formulaFilter===m.id?'active':''}" data-filter="${m.id}">${esc(m.title)}</button>`).join('')}</div><div class="subtle-line">${items.length} formule afișate</div><div id="formulaList" class="formula-list">${items.length?items.map(f=>formulaCard(f)).join(''):'<div class="empty-state">Nu am găsit formule pentru căutarea ta. Încearcă alt termen.</div>'}</div>`;
 }
}
function formulaCard(f){const m=moduleById(f.module);return `<article class="card formula-card"><div class="formula-card-head"><span class="tag">CAP. ${m.number} · ${esc(m.title)}</span><span class="tag">ƒ</span></div><h3>${esc(f.title)}</h3><div class="formula-expr">${esc(f.expr)}</div><p>${esc(f.detail)}</p><button class="text-button" data-copy-formula="${f.id}" type="button">Copiază formula ↗</button></article>`;}
function filteredQuestions(source='toate',section='toate'){
 return QUESTIONS.filter(q=>(source==='toate'||(source==='seminar'?q.kind==='seminar':q.kind!=='seminar'))&&(section==='toate'||q.section===section));
}
function renderQuizSetup(defaultSource='toate'){
 root.innerHTML=`<div class="quiz-intro">${header('EXERSEAZĂ FĂRĂ PRESIUNE','Cât de bine ai înțeles?','Alege cursul sau seminarul, răspunde la grile și vezi imediat unde ai greșit. Fără cronometru.')}<div class="quiz-ornament" aria-hidden="true">a<span style="color:#70aa81">/</span>b</div></div>
 <div class="card settings-panel"><h3>Pregătește un test</h3><div class="settings-row"><div><label class="field-label" for="quizSource">Material</label><select class="select" id="quizSource"><option value="toate" ${defaultSource==='toate'?'selected':''}>Curs + seminar</option><option value="curs">Doar curs</option><option value="seminar" ${defaultSource==='seminar'?'selected':''}>Doar seminar</option></select></div><div><label class="field-label" for="quizModule">Capitol / temă</label><select class="select" id="quizModule"></select></div><div><label class="field-label" for="quizCount">Număr de întrebări</label><select class="select" id="quizCount"><option value="10">10 întrebări · test rapid</option><option value="20">20 întrebări · aprofundare</option><option value="all">Toate întrebările disponibile</option></select></div></div>
 <div class="settings-footer"><p>Grile din fișiere și întrebări de recapitulare, etichetate după sursă.</p><button class="button" id="startQuiz" type="button">Începe testul →</button></div></div><div id="quizAvailable" class="subtle-line"></div>`;
 updateQuizModuleOptions();
}
function updateQuizModuleOptions(){
 const source=$('#quizSource')?.value||'toate',sel=$('#quizModule');if(!sel)return;
 const cats=[...MODULES.map(m=>({id:m.id,title:m.title,kind:'curs'})),...SEMINAR_UNITS.map(u=>({id:u.id,title:u.title,kind:'seminar'}))];
 const options=cats.filter(c=>source==='toate'||c.kind===source);
 sel.innerHTML=`<option value="toate">Toate temele (${filteredQuestions(source).length} întrebări)</option>`+options.map(c=>`<option value="${c.id}">${esc(c.title)} (${filteredQuestions(source,c.id).length})</option>`).join('');
 $('#quizAvailable').textContent=`${filteredQuestions(source).length} întrebări disponibile pentru materialul selectat. Întrebările adaptate sunt marcate distinct de cele reproduse din fișă.`;
}
function shuffle(a){const v=a.slice();for(let i=v.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[v[i],v[j]]=[v[j],v[i]];}return v;}
function startQuiz(){const chapter=$('#quizModule').value,requested=$('#quizCount').value,source=$('#quizSource').value;let pool=shuffle(filteredQuestions(source,chapter));if(requested!=='all')pool=pool.slice(0,Number(requested));if(!pool.length){toast('Nu există întrebări pentru această selecție.');return;}quizSession={questions:pool,index:0,answers:{},wrongIds:[]};location.hash='quiz';}
function currentQuizQuestion(){return quizSession.questions[quizSession.index];}
function renderQuiz(){if(!quizSession){location.hash='teste';return;}if(quizSession.index>=quizSession.questions.length){renderQuizResults();return;}
 const s=quizSession,q=currentQuizQuestion(),m=moduleById(q.section)||SEMINAR_UNITS.find(u=>u.id===q.section),answer=s.answers[q.id];
 const opts=q.options.map((o,i)=>{let cls='';if(answer!==undefined){if(i===q.answer)cls='correct';else if(i===answer)cls='incorrect';}return `<button class="answer ${cls}" type="button" data-answer="${i}" ${answer!==undefined?'disabled':''}><span class="answer-key">${'ABCDE'[i]}</span><span>${esc(o)}</span></button>`;}).join('');
 root.innerHTML=`<div class="question-wrap"><div class="breadcrumb"><a href="#teste">Teste</a><span>›</span><span>${esc(m.title)}</span></div><div class="question-top"><span>Întrebarea ${s.index+1} din ${s.questions.length}</span><span>${Object.keys(s.answers).filter(k=>s.questions.some(q=>q.id===k&&q.answer===s.answers[k])).length} corecte</span></div><div class="quiz-progress"><span style="width:${percent(s.index+1,s.questions.length)}%"></span></div><section class="card question-card"><div class="question-kicker">${esc(m.title)}</div><h2>${esc(q.q)}</h2><div class="answers">${opts}</div>${answer!==undefined?`<div class="answer-feedback ${answer===q.answer?'':'wrong'}"><strong>${answer===q.answer?'✓ Corect!':'✕ Nu chiar.'}</strong>${answer===q.answer?'Ai ales răspunsul corect.':`Varianta corectă: ${'ABCDE'[q.answer]} — ${esc(q.options[q.answer])}`}${q.explanation?`<p class="answer-why">${esc(q.explanation)}</p>`:''}</div>`:''}<div class="question-bottom"><span class="source-small">${esc(q.origin)}</span>${answer!==undefined?`<button class="button" id="nextQuestion" type="button">${s.index+1===s.questions.length?'Vezi rezultatul':'Următoarea întrebare'} →</button>`:''}</div></section></div>`;
}
function answerQuiz(choice){const q=currentQuizQuestion();if(!q||quizSession.answers[q.id]!==undefined)return;quizSession.answers[q.id]=choice;if(choice!==q.answer)quizSession.wrongIds.push(q.id);renderQuiz();}
function renderQuizResults(){const s=quizSession,n=s.questions.length,wrong=s.wrongIds.length,correct=n-wrong,score=percent(correct,n);root.innerHTML=`<div class="card result-card"><div class="eyebrow">TEST FINALIZAT</div><h2>${score>=85?'Foarte bine!':score>=60?'Bun progres!':'Continuăm să exersăm.'}</h2><div class="result-score">${score}%</div><p>Ai răspuns corect la <strong>${correct} din ${n}</strong> întrebări. ${wrong?'Poți reface doar întrebările greșite sau poți încerca un test nou.':'Ai rezolvat toate întrebările din acest test!'}</p><div class="mini-stats"><span><strong>${correct}</strong> corecte</span><span><strong>${wrong}</strong> de revăzut</span></div><div class="result-actions">${wrong?'<button id="retryWrong" class="button" type="button">Reia cele greșite ↻</button>':''}<a href="#teste" class="button button-secondary">Test nou →</a><a href="#lectii" class="button button-secondary">Înapoi la lecții</a></div></div>`;}
function retryWrong(){if(!quizSession?.wrongIds.length)return;const missed=quizSession.questions.filter(q=>quizSession.wrongIds.includes(q.id));quizSession={questions:shuffle(missed),index:0,answers:{},wrongIds:[]};renderQuiz();window.scrollTo(0,0);}
function markComplete(key){if(!state.completed.includes(key)){state.completed.push(key);toast('Lecție marcată ca parcursă.');}else{state.completed=state.completed.filter(k=>k!==key);toast('Marcajul a fost eliminat.');}saveState();render();}
function copyFormula(id){const f=FORMULAS.find(x=>x.id===id);if(!f)return;const text=f.title+'\n'+f.expr+'\n'+f.detail;if(navigator.clipboard?.writeText){navigator.clipboard.writeText(text).then(()=>toast('Formula a fost copiată.'),()=>fallbackCopy(text));}else fallbackCopy(text);}
function fallbackCopy(text){const area=document.createElement('textarea');area.value=text;area.style.position='fixed';area.style.left='-9999px';document.body.appendChild(area);area.select();try{document.execCommand('copy');toast('Formula a fost copiată.');}catch{toast('Copierea nu este disponibilă în acest browser.');}area.remove();}
function refreshFormulaListOnly(){const el=$('#formulaContent');if(!el)return;const items=FORMULAS.filter(f=>(formulaFilter==='toate'||f.module===formulaFilter)&&(!formulaQuery||[f.title,f.expr,f.detail].join(' ').toLocaleLowerCase('ro-RO').includes(formulaQuery.toLocaleLowerCase('ro-RO'))));const list=$('#formulaList');if(list)list.innerHTML=items.length?items.map(formulaCard).join(''):'<div class="empty-state">Nu am găsit formule pentru căutarea ta. Încearcă alt termen.</div>';const count=$('.subtle-line',el);if(count)count.textContent=`${items.length} formule afișate`;}
function openSources(){const list=$('#sourcesList');const docs=[...MODULES.map(x=>x.source),'Grile_Economie_Corectate (1).docx','Formule_Microeconomie_pe_lectii(1).docx',...SEMINAR_UNITS.map(u=>u.source)];list.innerHTML='<ul>'+docs.map(x=>`<li>${esc(x)}</li>`).join('')+'</ul>';$('#sourceDialog').showModal();}
function globalClicks(e){const t=e.target.closest('button');if(!t)return;
 if(t.dataset.complete){markComplete(t.dataset.complete);return;}
 if(t.dataset.seminarComplete){markSeminarComplete(t.dataset.seminarComplete);return;}
 if(t.hasAttribute('data-practice-check')){checkPractice(t);return;}
 if(t.dataset.copyFormula){copyFormula(Number(t.dataset.copyFormula));return;}
 if(t.dataset.answer!==undefined){answerQuiz(Number(t.dataset.answer));return;}
 if(t.dataset.filter){formulaFilter=t.dataset.filter;renderFormulaContent();return;}
 if(t.dataset.mode){formulaMode=t.dataset.mode;flashFlipped=false;location.hash='formule'+(formulaMode==='fise'?'/fise':'');if(location.hash==='#formule')renderFormulas();return;}
 switch(t.id){case 'startQuiz':startQuiz();break;case 'nextQuestion':quizSession.index++;renderQuiz();window.scrollTo(0,0);break;case 'retryWrong':retryWrong();break;case 'flipFlash':case 'flipFlashBtn':flashFlipped=!flashFlipped;renderFormulaContent();break;case 'nextFlash':flashIndex=(flashIndex+1)%FORMULAS.length;flashFlipped=false;renderFormulaContent();break;case 'prevFlash':flashIndex=(flashIndex-1+FORMULAS.length)%FORMULAS.length;flashFlipped=false;renderFormulaContent();break;}
}
function init(){sidebar();setTheme();window.addEventListener('hashchange',render);document.addEventListener('click',globalClicks);document.addEventListener('change',e=>{if(e.target.id==='quizSource')updateQuizModuleOptions();});$('#menuToggle').addEventListener('click',()=>{const side=$('#sidebar');const on=side.classList.toggle('open');$('#mobileOverlay').hidden=!on;$('#menuToggle').setAttribute('aria-expanded',String(on));});$('#mobileOverlay').addEventListener('click',closeMenu);$('#themeToggle').addEventListener('click',()=>{state.dark=!state.dark;saveState();setTheme();});$('#sourcesButton').addEventListener('click',openSources);$('#closeSources').addEventListener('click',()=>$('#sourceDialog').close());document.addEventListener('input',e=>{if(e.target.id==='formulaSearch'){formulaQuery=e.target.value;refreshFormulaListOnly();}});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();if(location.hash==='#formule/fise'&&e.code==='Space'&&e.target.tagName!=='BUTTON'&&e.target.tagName!=='INPUT'){e.preventDefault();flashFlipped=!flashFlipped;renderFormulaContent();}});render();}

/* Microlearn 2 — instrumente de învățare. Datele rămân locale și nu se trimit nicăieri. */
const EXTRAS_KEY='microlearn-extras-v2';
function loadExtras(){
 try{const x=JSON.parse(localStorage.getItem(EXTRAS_KEY)||'{}');return {
  bookmarks:Array.isArray(x.bookmarks)?x.bookmarks:[],
  favoriteFormulas:Array.isArray(x.favoriteFormulas)?x.favoriteFormulas:[],
  notes:x.notes&&typeof x.notes==='object'&&!Array.isArray(x.notes)?x.notes:{},
  missed:Array.isArray(x.missed)?x.missed:[],
  results:Array.isArray(x.results)?x.results.slice(-30):[]
 };}catch{return {bookmarks:[],favoriteFormulas:[],notes:{},missed:[],results:[]};}
}
let extras=loadExtras();
function saveExtras(){try{localStorage.setItem(EXTRAS_KEY,JSON.stringify(extras));}catch{toast('Spațiul de stocare este indisponibil.');}}
const normalizeText=t=>String(t??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const bookmarkName=k=>{
 const [kind,id,sec]=k.split('/');
 if(kind==='c'){const m=moduleById(id),s=m?.sections.find(x=>x.id===sec);return m&&s?{title:s.title,sub:m.title,url:secLink(m,s),kind:'Curs'}:null;}
 const u=SEMINAR_UNITS.find(x=>x.id===id),s=u?.sections.find(x=>x.id===sec);
 return u&&s?{title:s.title,sub:u.title,url:seminarLink(u,s),kind:'Seminar'}:null;
};
function allLessonRecords(){return [...MODULES.flatMap(m=>m.sections.map(s=>({key:`c/${m.id}/${s.id}`,title:s.title,sub:m.title,url:secLink(m,s),kind:'Curs',full:[s.lead,...s.blocks.flatMap(b=>[b.text,b.title,...(b.items||[]),...(b.steps||[])])].filter(Boolean).join(' ')}))),...SEMINAR_UNITS.flatMap(u=>u.sections.map(s=>({key:`s/${u.id}/${s.id}`,title:s.title,sub:u.title,url:seminarLink(u,s),kind:'Seminar',full:[s.lead,...s.blocks.flatMap(b=>[b.text,b.title,...(b.items||[]),...(b.steps||[])])].filter(Boolean).join(' ')})) )];}
function nextLesson(){
 const lesson=MODULES.flatMap(m=>m.sections.map(s=>({m,s}))).find(({m,s})=>!state.completed.includes(`${m.id}/${s.id}`));
 if(lesson)return {url:secLink(lesson.m,lesson.s),name:lesson.s.title,group:lesson.m.title,label:'Următoarea lecție de curs'};
 const semin=SEMINAR_UNITS.flatMap(u=>u.sections.map(s=>({u,s}))).find(({u,s})=>!state.seminarCompleted.includes(`${u.id}/${s.id}`));
 return semin?{url:seminarLink(semin.u,semin.s),name:semin.s.title,group:semin.u.title,label:'Următorul seminar'}:null;
}
function latestScore(){return extras.results.length?extras.results[extras.results.length-1]:null;}
function summaryPill(label,value){return `<div class="study-stat"><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`;}
const oldHome=renderHome;
renderHome=function(){
 oldHome();
 const next=nextLesson(),result=latestScore(),done=state.completed.length+state.seminarCompleted.length;
 const focus=`<section class="focus-panel" aria-label="Plan de studiu"><div class="focus-main"><span class="focus-kicker">PASUL URMĂTOR</span><h2>${next?esc(next.name):'Ai parcurs toate secțiunile!'}</h2><p>${next?esc(next.group)+' · '+esc(next.label):'Poți consolida materia rezolvând câteva grile.'}</p><a class="button" href="${next?next.url:'#teste'}">${next?'Deschide lecția':'Începe recapitularea'} <span aria-hidden="true">→</span></a></div><div class="focus-stats">${summaryPill('secțiuni parcurse',`${done}/${TOTAL_SECTIONS+TOTAL_SEMINAR_SECTIONS}`)}${summaryPill('salvate',extras.bookmarks.length)}${summaryPill('de repetat',extras.missed.length)}${result?summaryPill('ultimul test',result.score+'%'):''}</div></section>`;
 $('.overview-line')?.insertAdjacentHTML('afterend',focus);
 const quick=$('.quick-card');if(quick&&extras.missed.length){quick.insertAdjacentHTML('beforeend',`<button type="button" class="text-button compact-extra" data-review-mistakes>Repetă cele ${extras.missed.length} greșite ↗</button>`);}
};

function quickCheckHtml(q){if(!q)return '';
 return `<section class="quick-check" aria-label="Verifică ce ai reținut"><div class="quick-check-header"><span class="eyebrow">VERIFICĂ DACĂ AI REȚINUT</span><span class="quiet-tag">1 întrebare</span></div><h3>${esc(q.q)}</h3><div class="quick-check-options" role="group" aria-label="Variante de răspuns">${q.options.map((o,i)=>`<button type="button" data-quick-answer="${i}" data-quick-id="${esc(q.id)}"><span>${'ABCDE'[i]}.</span> ${esc(o)}</button>`).join('')}</div><p class="quick-check-feedback" role="status" aria-live="polite"></p></section>`;
}
function insertReaderTools(kind,id,s,sectionIndex){
 const key=`${kind}/${id}/${s.id}`,saved=extras.bookmarks.includes(key);
 const label=kind==='c'?'lecție':'secțiune';
 const tools=`<div class="reader-tools"><span class="reading-caption">${sectionIndex+1} · ${esc(s.title)} <span class="reader-dot">•</span> ${Math.max(2,Math.round((s.blocks.length+2)*1.15))} min de citit</span><button type="button" class="bookmark-button ${saved?'is-saved':''}" data-bookmark="${esc(key)}" aria-pressed="${saved}">${saved?'★ Salvată':'☆ Salvează '+label}</button></div>`;
 $('.section-tabs')?.insertAdjacentHTML('afterend',tools);
 const q=CHECKPOINTS[key]||null;
 const article=$('.reading'),actions=$('.lesson-actions');
 if(article&&actions){
  const memo=extras.notes[key]||'';
  actions.insertAdjacentHTML('beforebegin',`${quickCheckHtml(q)}<details class="study-notes"><summary><span>✎ Notițele mele</span><small>Private, doar în browser</small></summary><label for="noteEditor">Scrie pe scurt ceea ce vrei să reții:</label><textarea id="noteEditor" data-note="${esc(key)}" rows="4" placeholder="O idee, o formulă, o nelămurire...">${esc(memo)}</textarea><p class="notes-hint">Salvare automată pe dispozitiv · poți exporta notițele din „Colecția mea”.</p></details>`);
 }
}
const CHECKPOINTS={
 "c/raritate/nevoi": {
  "id": "checkpoint-c-raritate-nevoi",
  "q": "De ce apare problema rarității?",
  "options": [
   "Resursele nu sunt suficiente pentru toate nevoile",
   "Toate bunurile sunt gratuite",
   "Nevoile oamenilor sunt identice"
  ],
  "answer": 0,
  "explanation": "Raritatea exprimă insuficiența resurselor în raport cu nevoile."
 },
 "c/raritate/resurse": {
  "id": "checkpoint-c-raritate-resurse",
  "q": "Care alegere exprimă eficiența economică?",
  "options": [
   "Consumarea tuturor resurselor, indiferent de rezultat",
   "Obținerea unui rezultat maxim dintr-un efort dat",
   "Renunțarea la orice investiție"
  ],
  "answer": 1,
  "explanation": "Materialul definește eficiența prin rezultate raportate la efort sau invers."
 },
 "c/raritate/oportunitate": {
  "id": "checkpoint-c-raritate-oportunitate",
  "q": "Ce reprezintă costul de oportunitate?",
  "options": [
   "Suma tuturor variantelor respinse",
   "Taxele plătite pentru varianta aleasă",
   "Cea mai bună alternativă sacrificată"
  ],
  "answer": 2,
  "explanation": "Se ia în considerare cea mai bună oportunitate pierdută, nu suma tuturor."
 },
 "c/raritate/fpp": {
  "id": "checkpoint-c-raritate-fpp",
  "q": "Ce indică un punct din interiorul FPP?",
  "options": [
   "O combinație imposibilă",
   "Resurse neutilizate integral sau ineficient",
   "O combinație maxim eficientă"
  ],
  "answer": 1,
  "explanation": "Punctele de pe frontieră presupun utilizarea integrală și eficientă a resurselor."
 },
 "c/consumator/buget": {
  "id": "checkpoint-c-consumator-buget",
  "q": "Care este condiția de accesibilitate a unui coș de bunuri?",
  "options": [
   "pₓ·x + pᵧ·y ≤ V",
   "pₓ + pᵧ = x + y",
   "x·y > V"
  ],
  "answer": 0,
  "explanation": "Cheltuiala pentru cele două bunuri nu poate depăși venitul disponibil."
 },
 "c/consumator/preferinte": {
  "id": "checkpoint-c-consumator-preferinte",
  "q": "Ce au în comun combinațiile situate pe aceeași curbă de indiferență?",
  "options": [
   "Același cost de producție",
   "Aceleași cantități din toate bunurile",
   "Același nivel de utilitate"
  ],
  "answer": 2,
  "explanation": "Curba de indiferență reunește coșuri cu satisfacție egală."
 },
 "c/consumator/utilitate": {
  "id": "checkpoint-c-consumator-utilitate",
  "q": "Cum se calculează utilitatea marginală?",
  "options": [
   "UT × Q",
   "ΔUT / ΔQ",
   "V / P"
  ],
  "answer": 1,
  "explanation": "Utilitatea marginală este sporul de satisfacție asociat consumului suplimentar."
 },
 "c/consumator/optim": {
  "id": "checkpoint-c-consumator-optim",
  "q": "În modelul cu optim interior, ce relație descrie echilibrul consumatorului?",
  "options": [
   "UMₓ/Pₓ = UMᵧ/Pᵧ",
   "UTₓ = UTᵧ în orice situație",
   "Pₓ = Pᵧ întotdeauna"
  ],
  "answer": 0,
  "explanation": "La optim, utilitatea marginală obținută pe unitatea monetară este egală între bunuri."
 },
 "c/cerere/lege": {
  "id": "checkpoint-c-cerere-lege",
  "q": "Potrivit legii cererii, dacă prețul unui bun scade, ceteris paribus:",
  "options": [
   "Cantitatea cerută scade",
   "Cantitatea cerută rămâne obligatoriu zero",
   "Cantitatea cerută tinde să crească"
  ],
  "answer": 2,
  "explanation": "Legea cererii descrie relația inversă dintre preț și cantitatea cerută."
 },
 "c/cerere/factori": {
  "id": "checkpoint-c-cerere-factori",
  "q": "Ce se întâmplă de regulă cu cererea pentru bunul Y dacă se ieftinește bunul X, complementar?",
  "options": [
   "Crește",
   "Dispare",
   "Nu poate fi influențată"
  ],
  "answer": 0,
  "explanation": "Bunurile complementare sunt utilizate împreună."
 },
 "c/cerere/elasticitate": {
  "id": "checkpoint-c-cerere-elasticitate",
  "q": "Când numim cererea elastică la preț, în valoare absolută?",
  "options": [
   "Când |E| = 0",
   "Când |E| > 1",
   "Când |E| < 1"
  ],
  "answer": 1,
  "explanation": "Variația procentuală a cantității depășește variația procentuală a prețului."
 },
 "c/cerere/alte-elasticitati": {
  "id": "checkpoint-c-cerere-alte-elasticitati",
  "q": "Ce semn are, de regulă, elasticitatea încrucișată pentru bunurile substituibile?",
  "options": [
   "Negativ",
   "Nul, obligatoriu",
   "Pozitiv"
  ],
  "answer": 2,
  "explanation": "Creșterea prețului unui substitut poate mări cererea pentru celălalt."
 },
 "c/cerere/atipica": {
  "id": "checkpoint-c-cerere-atipica",
  "q": "Ce caracterizează cazul special al bunurilor Giffen?",
  "options": [
   "Cantitatea cerută poate crește când prețul crește",
   "Nu au niciun preț",
   "Legea cererii se aplică mereu fără excepții"
  ],
  "answer": 0,
  "explanation": "Materialul discută cazuri atipice în care relația obișnuită preț–cantitate nu se respectă."
 },
 "c/costuri/costuri-tipuri": {
  "id": "checkpoint-c-costuri-costuri-tipuri",
  "q": "Care exemplu descrie un cost implicit?",
  "options": [
   "Factura achitată unui furnizor",
   "Costul de oportunitate al utilizării resurselor proprii",
   "Chiria plătită efectiv"
  ],
  "answer": 1,
  "explanation": "Costul implicit nu este plătit efectiv, dar este relevant pentru profitul economic."
 },
 "c/costuri/fixe-variabile": {
  "id": "checkpoint-c-costuri-fixe-variabile",
  "q": "Ce se întâmplă cu costul fix total pe termen scurt dacă Q = 0?",
  "options": [
   "Este suportat în continuare",
   "Se transformă în venit",
   "Devine automat egal cu profitul"
  ],
  "answer": 0,
  "explanation": "Prezentarea precizează că firma suportă costurile fixe chiar și fără producție."
 },
 "c/costuri/medii": {
  "id": "checkpoint-c-costuri-medii",
  "q": "Cum se determină costul mediu total?",
  "options": [
   "Q / CT",
   "CT + Q",
   "CT / Q"
  ],
  "answer": 2,
  "explanation": "Costul mediu total este costul total aferent unei unități produse, pentru Q > 0."
 },
 "c/costuri/marginal": {
  "id": "checkpoint-c-costuri-marginal",
  "q": "Ce măsoară costul marginal?",
  "options": [
   "Costul fix total",
   "Variația costului total la variația producției",
   "Profitul raportat la preț"
  ],
  "answer": 1,
  "explanation": "În diferențe finite, Cmg = ΔCT / ΔQ."
 },
 "c/costuri/rentabilitate": {
  "id": "checkpoint-c-costuri-rentabilitate",
  "q": "Care este condiția pragului de rentabilitate?",
  "options": [
   "VT = CT",
   "VT = 0 și CT > 0",
   "Pr = VT + CT"
  ],
  "answer": 0,
  "explanation": "La pragul de rentabilitate, profitul este zero."
 },
 "s/seminar-economie/economie": {
  "id": "checkpoint-s-seminar-economie-economie",
  "q": "Care două sensuri ale „economiei” apar în seminar?",
  "options": [
   "Doar comerț și bani",
   "Realitate economică și știință economică",
   "Doar microeconomie și matematică"
  ],
  "answer": 1,
  "explanation": "Materialul distinge economia reală de știința care o studiază."
 },
 "s/seminar-economie/micro-macro": {
  "id": "checkpoint-s-seminar-economie-micro-macro",
  "q": "Analiza deciziei unei firme individuale este:",
  "options": [
   "Microeconomică",
   "Macroeconomică în mod obligatoriu",
   "Exclusiv normativă"
  ],
  "answer": 0,
  "explanation": "Microeconomia studiază agenții elementari, precum firmele și gospodăriile."
 },
 "s/seminar-economie/rationalitate": {
  "id": "checkpoint-s-seminar-economie-rationalitate",
  "q": "Ce înseamnă eficacitate?",
  "options": [
   "Efort minim, indiferent de rezultat",
   "Profit maxim prin orice mijloc",
   "Atingerea scopului propus"
  ],
  "answer": 2,
  "explanation": "Eficacitatea privește atingerea rezultatului; eficiența include raportarea la efort."
 },
 "s/seminar-economie/pozitiv-normativ": {
  "id": "checkpoint-s-seminar-economie-pozitiv-normativ",
  "q": "Care afirmație este normativă?",
  "options": [
   "Prețul a crescut cu 5%",
   "Ar trebui redus prețul",
   "Cantitatea cerută a scăzut"
  ],
  "answer": 1,
  "explanation": "Afirmația normativă exprimă ce ar trebui să se întâmple."
 },
 "s/seminar-economie/principii": {
  "id": "checkpoint-s-seminar-economie-principii",
  "q": "Care idee este unul dintre principiile lui Mankiw prezentate la seminar?",
  "options": [
   "Oamenii reacționează la stimulente",
   "Alegerile nu implică niciodată sacrificii",
   "Schimbul nu poate aduce beneficii"
  ],
  "answer": 0,
  "explanation": "Sensibilitatea la stimulente apare în lista de principii din prezentare."
 },
 "s/seminar-consumator/gospodarie": {
  "id": "checkpoint-s-seminar-consumator-gospodarie",
  "q": "Ce este gospodăria în materialul de seminar?",
  "options": [
   "Doar o persoană care produce",
   "Un agent economic alcătuit din persoane care își gestionează împreună venitul",
   "Doar un întreprinzător"
  ],
  "answer": 1,
  "explanation": "Gospodăria este agent economic consumator format din una sau mai multe persoane."
 },
 "s/seminar-consumator/ut-um": {
  "id": "checkpoint-s-seminar-consumator-ut-um",
  "q": "Când utilitatea marginală ajunge la zero, utilitatea totală:",
  "options": [
   "Devine automat negativă",
   "Începe obligatoriu să crească mai rapid",
   "Se află la maximul de saturație în exemplul prezentat"
  ],
  "answer": 2,
  "explanation": "În tabelul seminarului, la Q = 6, UM = 0 și UT = 30, valoare maximă."
 },
 "s/seminar-consumator/buget": {
  "id": "checkpoint-s-seminar-consumator-buget",
  "q": "Cu Pₓ = 10, Pᵧ = 20 și V = 200, câte unități Y poți cumpăra dacă X = 0?",
  "options": [
   "10",
   "20",
   "5"
  ],
  "answer": 0,
  "explanation": "În condițiile exemplului, Ymax = V/Pᵧ = 200/20 = 10."
 },
 "s/seminar-consumator/indiferenta": {
  "id": "checkpoint-s-seminar-consumator-indiferenta",
  "q": "Ce indică punctele de pe aceeași curbă de indiferență?",
  "options": [
   "Prețuri obligatoriu egale",
   "Utilitate totală egală",
   "Venituri diferite în mod obligatoriu"
  ],
  "answer": 1,
  "explanation": "Seminarul notează UA = UB = UC pentru punctele aceleiași curbe."
 },
 "s/seminar-consumator/optim": {
  "id": "checkpoint-s-seminar-consumator-optim",
  "q": "La optimul interior al consumatorului:",
  "options": [
   "Bugetul nu contează",
   "Consumatorul cumpără doar bunul mai ieftin",
   "UMₓ/Pₓ = UMᵧ/Pᵧ"
  ],
  "answer": 2,
  "explanation": "Optimizarea combină condiția utilităților marginale raportate la preț cu ecuația bugetului."
 },
 "s/seminar-utilitate/diferente": {
  "id": "checkpoint-s-seminar-utilitate-diferente",
  "q": "Ce distinge utilitatea economică de cea intrinsecă?",
  "options": [
   "Utilitatea economică depinde de aprecierea consumatorului",
   "Utilitatea economică este identică pentru orice persoană",
   "Utilitatea intrinsecă este întotdeauna negativă"
  ],
  "answer": 0,
  "explanation": "Fișa distinge utilitatea intrinsecă, obiectivă, de cea economică, preponderent subiectivă."
 },
 "s/seminar-utilitate/intrebari": {
  "id": "checkpoint-s-seminar-utilitate-intrebari",
  "q": "Ce se întâmplă cu UT atunci când UM este negativă?",
  "options": [
   "Rămâne mereu constantă",
   "Scade",
   "Crește cu o rată constantă"
  ],
  "answer": 1,
  "explanation": "Un spor negativ al utilității marginale reduce utilitatea totală."
 },
 "s/seminar-utilitate/mandarine": {
  "id": "checkpoint-s-seminar-utilitate-mandarine",
  "q": "Ce utilitate totală obține Ioana după 4 mandarine cu UM de 100, 70, 40 și 0?",
  "options": [
   "100",
   "170",
   "210"
  ],
  "answer": 2,
  "explanation": "Adunăm utilitățile marginale: 100 + 70 + 40 + 0 = 210."
 },
 "s/seminar-utilitate/buget-ovidiu": {
  "id": "checkpoint-s-seminar-utilitate-buget-ovidiu",
  "q": "În problema lui Ovidiu, care este excedentul bugetului săptămânal?",
  "options": [
   "250.000 lei",
   "150.000 lei",
   "400.000 lei"
  ],
  "answer": 0,
  "explanation": "Venit 400.000 lei minus cheltuieli 150.000 lei = excedent 250.000 lei."
 },
 "s/seminar-utilitate/recapitulare": {
  "id": "checkpoint-s-seminar-utilitate-recapitulare",
  "q": "Dacă UM > 0 pentru o unitate suplimentară, ce se întâmplă cu UT?",
  "options": [
   "Scade",
   "Crește",
   "Devine întotdeauna zero"
  ],
  "answer": 1,
  "explanation": "Fișa de autoevaluare confirmă că utilitatea totală crește când utilitatea marginală este pozitivă."
 }
};

const oldReader=renderReader;
renderReader=function(m,s){oldReader(m,s);insertReaderTools('c',m.id,s,m.sections.indexOf(s));};
const oldSeminarReader=renderSeminarReader;
renderSeminarReader=function(u,s){oldSeminarReader(u,s);insertReaderTools('s',u.id,s,u.sections.indexOf(s));};

const oldFormulaCard=formulaCard;
formulaCard=function(f){const content=oldFormulaCard(f);const saved=extras.favoriteFormulas.includes(f.id);
 return content.replace('class="card formula-card"',`class="card formula-card" data-formula-id="${f.id}"`).replace('</article>',`<button class="formula-star ${saved?'is-saved':''}" data-favorite-formula="${f.id}" type="button" aria-label="${saved?'Elimină formula din salvate':'Salvează formula'}" aria-pressed="${saved}">${saved?'★ Salvată':'☆ Salvează'}</button></article>`);
};
const oldFormulaContent=renderFormulaContent;
renderFormulaContent=function(){
 const isSaved=formulaMode==='lista'&&formulaFilter==='salvate';
 if(isSaved)formulaFilter='toate';
 oldFormulaContent();
 if(isSaved)formulaFilter='salvate';
 if(formulaMode==='lista'){
  const pills=$('.filter-pills');pills?.insertAdjacentHTML('beforeend',`<button type="button" class="filter-pill ${isSaved?'active':''}" data-filter="salvate">★ Salvate (${extras.favoriteFormulas.length})</button>`);
  if(isSaved){$$('.filter-pills .filter-pill').forEach(btn=>{if(btn.dataset.filter!=='salvate')btn.classList.remove('active');});applyFormulaSavedFilter();}
 }else{
  const f=FORMULAS[flashIndex%FORMULAS.length],saved=extras.favoriteFormulas.includes(f.id);
  $('.flash-buttons')?.insertAdjacentHTML('afterend',`<div class="flash-foot"><button type="button" class="bookmark-button ${saved?'is-saved':''}" data-favorite-formula="${f.id}" aria-pressed="${saved}">${saved?'★ Formula e salvată':'☆ Salvează formula'}</button><span>Apasă <kbd>Space</kbd> ca să întorci fișa.</span></div>`);
 }
};
function applyFormulaSavedFilter(){
 const list=$('#formulaList');if(!list||formulaFilter!=='salvate')return;
 let n=0;$$('.formula-card',list).forEach(card=>{const show=extras.favoriteFormulas.includes(Number(card.dataset.formulaId));card.hidden=!show;if(show)n++;});
 const line=$('.subtle-line',$('#formulaContent'));if(line)line.textContent=`${n} formule salvate afișate`;
 if(!n)list.insertAdjacentHTML('beforeend','<div class="empty-state" data-empty-save>Nu ai formule salvate care să corespundă căutării. Apasă ☆ pe o formulă pentru a o păstra aici.</div>');
}
const oldFormulaRefresh=refreshFormulaListOnly;
refreshFormulaListOnly=function(){const saved=formulaFilter==='salvate';if(saved)formulaFilter='toate';oldFormulaRefresh();if(saved){formulaFilter='salvate';$$('[data-empty-save]').forEach(x=>x.remove());applyFormulaSavedFilter();}};

const oldSetup=renderQuizSetup;
renderQuizSetup=function(source){oldSetup(source);
 const hint=extras.results.length?`Ultimul test: <strong>${extras.results[extras.results.length-1].score}%</strong>. ${extras.results.length} teste finalizate pe acest dispozitiv.`:'Nu ai susținut încă un test. Începe cu 10 întrebări.';
 $('.settings-panel')?.insertAdjacentHTML('afterend',`<div class="quiz-tools"><div><strong>Învață din greșeli</strong><p>${hint}</p></div><button class="button button-secondary" type="button" data-review-mistakes ${extras.missed.length?'':'disabled'}>Repetă ${extras.missed.length} întrebări greșite ↻</button></div>`);
};
function storeQuizSession(){try{if(quizSession)sessionStorage.setItem('microlearn-active-quiz',JSON.stringify(quizSession));else sessionStorage.removeItem('microlearn-active-quiz');}catch{/* Optional. */}}
const oldQuizStart=startQuiz;
startQuiz=function(){oldQuizStart();if(quizSession){quizSession.sessionId=Date.now()+'-'+Math.round(Math.random()*1e8);storeQuizSession();}};
const oldQuizRender=renderQuiz;
renderQuiz=function(){oldQuizRender();storeQuizSession();if($('.question-card')){$('.question-card').insertAdjacentHTML('beforeend','<p class="quiz-shortcuts">Sfat: poți răspunde folosind tastele 1–5 și poți trece mai departe cu Enter.</p>');}};
const oldQuizAnswer=answerQuiz;
answerQuiz=function(choice){const q=currentQuizQuestion();if(!q||quizSession.answers[q.id]!==undefined)return;
 if(choice===q.answer){extras.missed=extras.missed.filter(id=>id!==q.id);}else if(!extras.missed.includes(q.id)){extras.missed.push(q.id);}
 saveExtras();oldQuizAnswer(choice);storeQuizSession();
};
function reviewMissed(){const qs=QUESTIONS.filter(q=>extras.missed.includes(q.id));if(!qs.length){toast('Nu ai greșeli salvate de repetat.');return;}quizSession={questions:shuffle(qs),index:0,answers:{},wrongIds:[],sessionId:'review-'+Date.now()};storeQuizSession();location.hash='quiz';if(location.hash==='#quiz')renderQuiz();}
const oldQuizResults=renderQuizResults;
renderQuizResults=function(){oldQuizResults();const s=quizSession;if(!s)return;
 if(!s.sessionId)s.sessionId='session-'+Date.now();
 if(!extras.results.some(x=>x.id===s.sessionId)){
  const correct=s.questions.length-s.wrongIds.length;
  extras.results.push({id:s.sessionId,date:new Date().toISOString(),correct,total:s.questions.length,score:percent(correct,s.questions.length)});
  extras.results=extras.results.slice(-30);saveExtras();
 }
 const wrong=s.questions.filter(q=>s.wrongIds.includes(q.id));
 const review=wrong.length?`<details class="review-details"><summary>Vezi explicațiile pentru cele ${wrong.length} întrebări greșite</summary><ol>${wrong.map(q=>{const m=moduleById(q.section),u=SEMINAR_UNITS.find(x=>x.id===q.section),link=m?modLink(m):u?seminarLink(u):'#lectii';return `<li><strong>${esc(q.q)}</strong><p>Răspuns: ${esc(q.options[q.answer])}${q.explanation?' — '+esc(q.explanation):''}</p><a href="${link}">Revezi tema →</a></li>`;}).join('')}</ol></details>`:'<p class="completion-good">✓ Nu ai întrebări greșite de revăzut din acest test.</p>';
 $('.result-card')?.insertAdjacentHTML('beforeend',`<div class="result-review">${review}<p class="result-muted">Istoricul testului este salvat local. Îl poți consulta în „Colecția mea”.</p></div>`);
};

/* Grafice: actualizare fără înlocuirea glisoarelor, pentru drag continuu. */
const oldRenderGraph=renderGraph;
renderGraph=function(kind,values={}){
 if(kind==='fpp'){
  const points=[[0,500],[100,400],[200,250],[250,90],[275,0]],i=Math.max(0,Math.min(4,Number(values.i??0)));
  const to=([x,y])=>[65+x/290*470,233-y/520*208];
  const body=frameAxes('Computere','Mere (kg)')+`<path class="graph-line" d="${points.map((p,j)=>(j?'L':'M')+coords(...to(p))).join(' ')}"/>`+points.map((p,j)=>{const [x,y]=to(p);return `<circle class="${i===j?'graph-dot-current':'graph-dot'}" cx="${x}" cy="${y}" r="${i===j?8:4}"/><text class="graph-strong" x="${x+9}" y="${y-9}">${'ABCDE'[j]}</text>`;}).join('');
  const diff=i?((points[i-1][1]-points[i][1])/(points[i][0]-points[i-1][0])):null;
  const desc=`Punctul ${'ABCDE'[i]}: ${points[i][0]} computere, ${points[i][1]} kg de mere. ${i?`Trecând de la ${'ABCDE'[i-1]} la ${'ABCDE'[i]}, costul de oportunitate este de ${num(diff)} kg de mere/computer.`:'Alege punctul următor pentru a vedea costul de oportunitate.'}`;
  return makeGraphFrame('Frontiera posibilităților de producție',body,desc,`<label>Punctul FPP <input type="range" data-key="i" min="0" max="4" step="1" value="${i}" aria-label="Punct de pe frontiera posibilităților de producție"><output>${'ABCDE'[i]}</output></label>`);
 }
 if(kind==='budget'){
  const V=Number(values.V??60),px=Number(values.px??10),py=Number(values.py??5),xmax=V/px,ymax=V/py;
  const xMax=Math.max(25,Math.ceil(xmax/5)*5),yMax=Math.max(45,Math.ceil(ymax/5)*5);
  let body=frameAxes('Bunul X','Bunul Y');const x=65+xmax/xMax*470,y=233-ymax/yMax*209;
  body+=`<path class="graph-line" d="M65 ${y}L${x} 233"/><circle class="graph-dot-current" cx="65" cy="${y}" r="6"/><circle class="graph-dot-current" cx="${x}" cy="233" r="6"/><text class="graph-strong" x="81" y="${Math.max(27,y-12)}">${num(ymax)} Y</text><text class="graph-strong" x="${Math.min(465,x)}" y="257">${num(xmax)} X</text>`;
  const ctr=`<label>Venit V <input type="range" data-key="V" min="30" max="120" step="10" value="${V}"><output>${V}</output></label><label>Preț X <input type="range" data-key="px" min="5" max="15" step="1" value="${px}"><output>${px}</output></label><label>Preț Y <input type="range" data-key="py" min="3" max="12" step="1" value="${py}"><output>${py}</output></label>`;
  return makeGraphFrame('Linia bugetului',body,`Venit: ${V} u.m. · intersecții X = ${num(xmax)}, Y = ${num(ymax)} · panta = −${num(px/py)}.`,ctr);
 }
 return oldRenderGraph(kind,values);
};
bindGraph=function(el){
 const kind=el.dataset.graph;
 $$('input[type=range]',el).forEach(input=>input.addEventListener('input',()=>{
  const values=Object.fromEntries($$('input[type=range]',el).map(x=>[x.dataset.key,x.value]));
  const temp=document.createElement('div');temp.innerHTML=renderGraph(kind,values);
  const svg=$('svg',el),fresh=$('svg',temp);if(svg&&fresh)svg.replaceWith(fresh);
  const caption=$('.graph-caption',el),newCaption=$('.graph-caption',temp);if(caption&&newCaption)caption.textContent=newCaption.textContent;
  $$('input[type=range]',el).forEach(x=>{const out=x.parentElement.querySelector('output');if(out){out.textContent=kind==='fpp'?'ABCDE'[Number(x.value)]:x.value;}});
 }));
};

function renderLab(){
 root.innerHTML=header('LABORATOR / APLICAȚII','Testează cifrele, nu doar formulele.','Modifică valorile și vezi imediat pașii de calcul. Exemplele de aici sunt modele ilustrative, bazate pe formulele din curs și seminar.')+`<div class="lab-tabs" role="group" aria-label="Alege calculatorul"><button type="button" data-lab-tab="budget" class="active">Buget</button><button type="button" data-lab-tab="elasticity">Elasticitatea cererii</button><button type="button" data-lab-tab="profit">Costuri și profit</button></div><section class="lab-card card" id="labContent"></section><p class="lab-disclaimer">Aceste calculatoare sunt auxiliare de învățare. Ipotezele sunt afișate pentru fiecare model; nu înlocuiesc explicațiile din materiale.</p>`;
 renderLabPanel('budget');
}
let activeLab='budget';
function labField(id,label,val,step='1',min='0'){return `<label class="lab-field"><span>${label}</span><input type="number" data-lab-input="${id}" step="${step}" min="${min}" value="${val}"></label>`;}
function renderLabPanel(tab){activeLab=tab;
 $$('[data-lab-tab]').forEach(b=>{b.classList.toggle('active',b.dataset.labTab===tab);b.setAttribute('aria-pressed',String(b.dataset.labTab===tab));});
 const panel=$('#labContent');if(!panel)return;
 const config={budget:{label:'01 / CONSUMATOR',title:'Dreapta bugetului',desc:'Cum se schimbă combinațiile accesibile când modifici venitul sau prețurile?',fields:[['v','Venit disponibil V',200],['px','Prețul lui X',10],['py','Prețul lui Y',20],['x','Cantitatea aleasă X',10]],tip:'Ipoteză: două bunuri, prețuri pozitive, fără credit.'},elasticity:{label:'02 / CERERE',title:'Elasticitatea cererii la preț',desc:'Compară variațiile procentuale și elasticitatea calculată între două puncte.',fields:[['p0','Preț inițial P₀',10],['p1','Preț final P₁',12],['q0','Cantitate inițială Q₀',100],['q1','Cantitate finală Q₁',80]],tip:'Convenția punctuală de bază folosește valorile inițiale; arcul folosește mediile.'},profit:{label:'03 / PRODUCĂTOR',title:'Costuri, profit și rentabilitate',desc:'Aplică relațiile CT = CF + CV, Pr = VT − CT și pragul de rentabilitate.',fields:[['cf','Cost fix CF',200],['cv','Cost variabil/unitate',15],['p','Preț/unitate',25],['q','Cantitate produsă Q',30]],tip:'Ipoteză ilustrativă: preț și cost variabil unitar constante.'}}[tab];
 panel.innerHTML=`<div class="lab-panel-head"><div><span class="eyebrow">${config.label}</span><h2>${config.title}</h2><p>${config.desc}</p></div><div class="lab-symbol" aria-hidden="true">${tab==='budget'?'x + y':tab==='elasticity'?'Δ%':'π'}</div></div><div class="lab-content"><div class="lab-inputs">${config.fields.map(([id,title,val])=>labField(id,title,val)).join('')}<p class="lab-tip">${config.tip}</p></div><div class="lab-results" id="labResults" aria-live="polite"></div></div>`;
 updateLab();
}
function updateLab(){const inputs=Object.fromEntries($$('[data-lab-input]').map(x=>[x.dataset.labInput,Number(x.value)]));
 const out=$('#labResults');if(!out)return;
 if($$('[data-lab-input]').some(x=>x.value.trim()===''||!Number.isFinite(Number(x.value)))){out.innerHTML='<p>Completează toate valorile cu numere valide.</p>';return;}
 const f=x=>new Intl.NumberFormat('ro-RO',{maximumFractionDigits:3}).format(Math.round(x*10000)/10000);
 const metric=(name,value)=>`<div class="lab-metric"><span>${name}</span><strong>${value}</strong></div>`;
 if(activeLab==='budget'){
  const {v,px,py,x}=inputs;
  if(px<=0||py<=0||v<0||x<0){out.innerHTML='<p class="lab-error">Prețurile trebuie să fie pozitive, iar venitul și cantitatea nenegative.</p>';return;}
  const rem=v-px*x,y=rem/py;
  out.innerHTML=`<h3>Rezultate</h3>${metric('X maxim (V / Pₓ)',f(v/px))}${metric('Y maxim (V / Pᵧ)',f(v/py))}${metric('Panta liniei bugetului','−'+f(px/py))}${metric('Cantitatea Y pentru X ales',y<0?'Buget depășit':f(y))}<div class="lab-equation">${f(px)} × X + ${f(py)} × Y = ${f(v)}</div><p>${rem<0?'Această combinație este imposibilă la venitul dat.':`După ${f(x)} unități din X, rămân ${f(rem)} u.m. pentru Y.`}</p>`;
 }else if(activeLab==='elasticity'){
  const {p0,p1,q0,q1}=inputs;if(p0<=0||p1<=0||q0<=0||q1<0){out.innerHTML='<p class="lab-error">Prețurile și Q₀ trebuie să fie pozitive; Q₁ poate fi zero.</p>';return;}
  const dp=(p1-p0)/p0*100,dq=(q1-q0)/q0*100,zero=p1===p0;
  const e=zero?null:(q1-q0)/q0/((p1-p0)/p0);
  const arc=zero?null:((q1-q0)/((q0+q1)/2))/((p1-p0)/((p0+p1)/2));
  out.innerHTML=`<h3>Rezultate</h3>${metric('Variație preț',f(dp)+'%')}${metric('Variație cantitate',f(dq)+'%')}${metric('Elasticitate (bază inițială)',zero?'Nedefinită':f(e))}${metric('Elasticitate de arc',zero?'Nedefinită':f(arc))}<div class="lab-equation">E = (%ΔQ) / (%ΔP)</div><p>${zero?'Când ΔP = 0, coeficientul nu poate fi calculat astfel.':`În valoare absolută, cererea este ${Math.abs(e)>1?'elastică':Math.abs(e)<1?'inelastică':'unitar elastică'} după formula cu bază inițială.`}</p>`;
 }else{
  const {cf,cv,p,q}=inputs;if([cf,cv,p,q].some(v=>v<0)){out.innerHTML='<p class="lab-error">Introduceți valori nenegative.</p>';return;}
  const ct=cf+cv*q,vt=p*q,profit=vt-ct,qr=p>cv?cf/(p-cv):null,flatBreakEven=p===cv&&cf===0,zeroOnly=p<cv&&cf===0;
  out.innerHTML=`<h3>Rezultate</h3>${metric('Cost total CT',f(ct)+' u.m.')}${metric('Venit total VT',f(vt)+' u.m.')}${metric('Profit contabil',f(profit)+' u.m.')}${metric('Prag de rentabilitate',flatBreakEven?'Orice cantitate':zeroOnly?'Doar Q = 0':qr===null?'Nu există prag finit':f(qr)+' unități')}<div class="lab-equation">Pr = (${f(p)} − ${f(cv)}) × ${f(q)} − ${f(cf)}</div><p>${flatBreakEven?'Cu CF = 0 și preț egal cu costul variabil unitar, profitul este zero la orice Q.':zeroOnly?'Cu CF = 0 și preț sub costul variabil unitar, numai Q = 0 permite profit zero.':qr===null?'La aceste valori nu există un prag pozitiv de rentabilitate; creșterea producției nu acoperă costul fix.':profit>=0?'La volumul introdus firma nu înregistrează pierdere.':'La volumul introdus firma înregistrează pierdere.'}</p>`;
 }
}

function renderCollection(){
 const bookmarked=extras.bookmarks.map(bookmarkName).filter(Boolean),formulas=FORMULAS.filter(f=>extras.favoriteFormulas.includes(f.id)),noted=Object.entries(extras.notes).filter(([,v])=>String(v).trim());
 const histories=extras.results.slice(-6).reverse();
 root.innerHTML=header('SPAȚIUL TĂU','Colecția mea.','Lecții salvate, formule, notițe și rezultate — organizate într-un singur loc. Totul rămâne în browserul tău.')+`<div class="collection-overview">${summaryPill('lecții salvate',bookmarked.length)}${summaryPill('formule salvate',formulas.length)}${summaryPill('notițe',noted.length)}${summaryPill('grile de repetat',extras.missed.length)}</div>
 <div class="collection-grid"><section class="card collection-panel"><div class="collection-head"><h2>☆ Lecțiile mele</h2><span>${bookmarked.length}</span></div>${bookmarked.length?`<div class="saved-list">${bookmarked.map(b=>`<a href="${b.url}"><span class="quiet-tag">${b.kind}</span><strong>${esc(b.title)}</strong><small>${esc(b.sub)}</small><span aria-hidden="true">↗</span></a>`).join('')}</div>`:'<p class="collection-empty">Salvează lecțiile importante apăsând ☆ când le citești.</p>'}</section>
 <section class="card collection-panel"><div class="collection-head"><h2>ƒ Formule importante</h2><span>${formulas.length}</span></div>${formulas.length?`<div class="saved-list">${formulas.map(f=>`<a href="#formule"><strong>${esc(f.title)}</strong><small class="formula-mini">${esc(f.expr)}</small><span aria-hidden="true">↗</span></a>`).join('')}</div>`:'<p class="collection-empty">Salvează formulele din bibliotecă sau de pe fișele de memorie.</p>'}</section>
 <section class="card collection-panel"><div class="collection-head"><h2>✎ Notițe</h2><span>${noted.length}</span></div>${noted.length?`<div class="saved-list">${noted.map(([key,text])=>{const item=bookmarkName(key);return item?`<a href="${item.url}"><strong>${esc(item.title)}</strong><small>${esc(text.slice(0,120))}${text.length>120?'…':''}</small><span aria-hidden="true">↗</span></a>`:'';}).join('')}</div>`:'<p class="collection-empty">Deschide secțiunea „Notițele mele” de la finalul unei lecții.</p>'}</section>
 <section class="card collection-panel"><div class="collection-head"><h2>◉ Testele mele</h2><span>${extras.results.length}</span></div>${histories.length?`<div class="saved-list">${histories.map(r=>`<div class="history-item"><strong>${r.score}%</strong><span>${r.correct}/${r.total} corecte</span><small>${new Date(r.date).toLocaleDateString('ro-RO',{day:'2-digit',month:'short',year:'numeric'})}</small></div>`).join('')}</div>`:'<p class="collection-empty">După primul test, scorul va apărea aici.</p>'}<button type="button" class="button button-secondary collection-quiz" data-review-mistakes ${extras.missed.length?'':'disabled'}>Repetă ${extras.missed.length} întrebări greșite</button></section></div>
 <section class="card data-panel"><div><h2>Progresul îți aparține</h2><p>Poți salva un fișier JSON cu lecțiile parcurse, notițele, formulele și rezultatele, apoi să îl imporți pe alt dispozitiv.</p></div><div class="data-buttons"><button class="button" type="button" id="exportProgress">Exportă progresul ↓</button><label class="button button-secondary upload-button">Importă progresul <input type="file" id="importProgress" accept=".json,application/json" hidden></label><button class="button button-ghost" type="button" id="resetProgress">Resetează datele</button></div></section>`;
}
function exportProgress(){
 const exportObject={app:'microlearn',version:2,exportedAt:new Date().toISOString(),course:state,extras};
 const blob=new Blob([JSON.stringify(exportObject,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob);
 const a=document.createElement('a');a.href=url;a.download='microlearn-progres.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('Fișierul de progres a fost exportat.');
}
async function importProgress(file){
 if(!file)return;
 try{
  if(file.size>2e6)throw new Error('Fișier prea mare.');
  const data=JSON.parse(await file.text());
  if(data.app!=='microlearn'||!data.course||!data.extras||data.version!==2)throw new Error('Fișierul nu este un export Microlearn 2.');
  if(!Array.isArray(data.course.completed)||!Array.isArray(data.course.seminarCompleted)||!Array.isArray(data.extras.bookmarks)||!Array.isArray(data.extras.favoriteFormulas)||typeof data.extras.notes!=='object'||!Array.isArray(data.extras.missed)||!Array.isArray(data.extras.results))throw new Error('Structura fișierului este invalidă.');
  if(!confirm('Importul va înlocui progresul și notițele salvate pe acest dispozitiv. Continui?'))return;
  const allowedCourse=new Set(MODULES.flatMap(m=>m.sections.map(s=>`${m.id}/${s.id}`))),allowedSeminar=new Set(SEMINAR_UNITS.flatMap(u=>u.sections.map(s=>`${u.id}/${s.id}`))),allowedNotes=new Set(allLessonRecords().map(r=>r.key)),allowedFormula=new Set(FORMULAS.map(f=>f.id)),allowedQuestion=new Set(QUESTIONS.map(q=>q.id));
  state.completed=[...new Set(data.course.completed.filter(k=>typeof k==='string'&&allowedCourse.has(k)))];
  state.seminarCompleted=[...new Set(data.course.seminarCompleted.filter(k=>typeof k==='string'&&allowedSeminar.has(k)))];
  state.last=data.course.last||null;state.lastSeminar=data.course.lastSeminar||null;state.dark=!!data.course.dark;setTheme();
  extras.bookmarks=[...new Set(data.extras.bookmarks.filter(k=>allowedNotes.has(k)))];
  extras.favoriteFormulas=[...new Set(data.extras.favoriteFormulas.filter(id=>allowedFormula.has(id)))];
  extras.notes=Object.fromEntries(Object.entries(data.extras.notes).filter(([key,value])=>allowedNotes.has(key)&&typeof value==='string').map(([key,value])=>[key,value.slice(0,8000)]));
  extras.missed=[...new Set(data.extras.missed.filter(id=>allowedQuestion.has(id)))];
  extras.results=data.extras.results.filter(x=>x&&typeof x.id==='string'&&Number.isFinite(x.score)&&Number.isFinite(x.total)).slice(-30);
  saveState();saveExtras();render();toast('Progresul a fost importat.');
 }catch(e){toast('Import eșuat: '+e.message);}
}
function resetProgress(){
 if(!confirm('Ștergi toate lecțiile parcurse, notițele, formulele salvate și istoricul grilelor de pe acest dispozitiv?'))return;
 state.completed=[];state.seminarCompleted=[];state.last=null;state.lastSeminar=null;
 extras={bookmarks:[],favoriteFormulas:[],notes:{},missed:[],results:[]};quizSession=null;
 try{sessionStorage.removeItem('microlearn-active-quiz');}catch{}
 saveState();saveExtras();render();toast('Datele locale au fost resetate.');
}

const searchIndex=[...allLessonRecords().map(r=>({title:r.title,sub:r.sub+' · '+r.kind,url:r.url,text:r.full,type:'Lecție'})),...FORMULAS.map(f=>({title:f.title,sub:moduleById(f.module).title,url:'#formule',text:f.expr+' '+f.detail,type:'Formulă'}))];
function openGlobalSearch(){const d=$('#searchDialog');if(!d.open)d.showModal();$('#globalSearch').value='';showSearchResults('');$('#globalSearch').focus();}
function showSearchResults(query){const list=$('#globalSearchResults'),q=normalizeText(query.trim());
 if(!q){list.innerHTML=`<p class="search-helper">Încearcă: <button type="button" data-search-suggest="utilitate marginală">utilitate marginală</button> <button type="button" data-search-suggest="elasticitate">elasticitate</button> <button type="button" data-search-suggest="profit">profit</button></p><p class="search-helper bottom">${TOTAL_SECTIONS+TOTAL_SEMINAR_SECTIONS} secțiuni și ${FORMULAS.length} formule pot fi căutate.</p>`;return;}
 const results=searchIndex.map(item=>{const title=normalizeText(item.title),sub=normalizeText(item.sub),text=normalizeText(item.text);const score=title.includes(q)?3:sub.includes(q)?2:text.includes(q)?1:0;return {...item,score};}).filter(item=>item.score).sort((a,b)=>b.score-a.score).slice(0,18);
 list.innerHTML=results.length?`<div class="search-result-count">${results.length} rezultate${results.length===18?' dintre cele mai relevante':''}</div>${results.map(item=>`<a href="${item.url}" class="global-result"><span class="quiet-tag">${item.type}</span><strong>${esc(item.title)}</strong><small>${esc(item.sub)}</small><span class="result-arrow" aria-hidden="true">↗</span></a>`).join('')}`:'<div class="search-no-results">Niciun rezultat. Încearcă un termen mai scurt.</div>';
}
function handleQuickAnswer(button){const container=button.closest('.quick-check'),q=Object.values(CHECKPOINTS).find(q=>q.id===button.dataset.quickId),n=Number(button.dataset.quickAnswer);if(!q||!container||container.dataset.answered)return;
 container.dataset.answered='true';$$('[data-quick-answer]',container).forEach(b=>{const index=Number(b.dataset.quickAnswer);b.disabled=true;b.classList.toggle('correct',index===q.answer);b.classList.toggle('incorrect',index===n&&index!==q.answer);});
 const target=$('.quick-check-feedback',container);target.innerHTML=n===q.answer?'✓ Corect. Ai reținut ideea.':`Răspunsul corect: <strong>${esc(q.options[q.answer])}</strong>.`;
 if(q.explanation)target.insertAdjacentHTML('beforeend',`<span>${esc(q.explanation)}</span>`);

}
function initExtras(){
 $('#searchOpen').addEventListener('click',openGlobalSearch);
 $('#searchClose').addEventListener('click',()=>$('#searchDialog').close());
 $('#globalSearch').addEventListener('input',e=>showSearchResults(e.target.value));
 $('#globalSearch').addEventListener('keydown',e=>{if(e.key==='Enter'){const first=$('.global-result');if(first){e.preventDefault();$('#searchDialog').close();location.hash=first.getAttribute('href');}}});
 $('#searchDialog').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close();});
 document.addEventListener('click',e=>{
  if(e.target.closest('.global-result'))$('#searchDialog').close();
  const suggestion=e.target.closest('[data-search-suggest]');if(suggestion){$('#globalSearch').value=suggestion.dataset.searchSuggest;showSearchResults(suggestion.dataset.searchSuggest);$('#globalSearch').focus();return;}
  const book=e.target.closest('[data-bookmark]');if(book){const key=book.dataset.bookmark;extras.bookmarks=extras.bookmarks.includes(key)?extras.bookmarks.filter(x=>x!==key):[...extras.bookmarks,key];saveExtras();book.classList.toggle('is-saved',extras.bookmarks.includes(key));book.setAttribute('aria-pressed',String(extras.bookmarks.includes(key)));book.textContent=extras.bookmarks.includes(key)?'★ Salvată':'☆ Salvează lecția';toast(extras.bookmarks.includes(key)?'Lecția a fost salvată.':'Lecția nu mai este salvată.');return;}
  const formula=e.target.closest('[data-favorite-formula]');if(formula){const id=Number(formula.dataset.favoriteFormula);extras.favoriteFormulas=extras.favoriteFormulas.includes(id)?extras.favoriteFormulas.filter(x=>x!==id):[...extras.favoriteFormulas,id];saveExtras();const isSaved=extras.favoriteFormulas.includes(id);formula.classList.toggle('is-saved',isSaved);formula.textContent=isSaved?'★ Salvată':'☆ Salvează';formula.setAttribute('aria-pressed',String(isSaved));if(formulaMode==='fise')renderFormulaContent();else{const btn=$('[data-filter="salvate"]');if(btn)btn.textContent=`★ Salvate (${extras.favoriteFormulas.length})`;if(formulaFilter==='salvate')renderFormulaContent();}toast(isSaved?'Formula a fost salvată.':'Formula a fost eliminată din salvate.');return;}
  const quick=e.target.closest('[data-quick-answer]');if(quick){handleQuickAnswer(quick);return;}
  const lab=e.target.closest('[data-lab-tab]');if(lab){renderLabPanel(lab.dataset.labTab);return;}
  if(e.target.closest('[data-review-mistakes]')){reviewMissed();return;}
  if(e.target.closest('#exportProgress')){exportProgress();return;}
  if(e.target.closest('#resetProgress')){resetProgress();return;}
 });
 document.addEventListener('input',e=>{if(e.target.matches('[data-note]')){extras.notes[e.target.dataset.note]=e.target.value;saveExtras();}if(e.target.matches('[data-lab-input]'))updateLab();});
 document.addEventListener('change',e=>{if(e.target.id==='importProgress'){importProgress(e.target.files[0]);e.target.value='';}});
 document.addEventListener('keydown',e=>{
  const editing=e.target.matches('input,textarea,select,[contenteditable]');
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openGlobalSearch();return;}
  if(!editing&&location.hash.startsWith('#quiz')&&quizSession&&quizSession.index<quizSession.questions.length){
   const q=currentQuizQuestion();if(/^[1-5]$/.test(e.key)&&q&&Number(e.key)<=q.options.length){e.preventDefault();answerQuiz(Number(e.key)-1);}
   if(e.key==='Enter'&&$('#nextQuestion')){e.preventDefault();$('#nextQuestion').click();}
  }
 });
 if('serviceWorker' in navigator && location.protocol.startsWith('http'))navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
}

init();
initExtras();
