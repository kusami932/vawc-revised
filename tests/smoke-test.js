const fs=require('fs'),vm=require('vm');
function mk(dir){
  const L={},store={};let html='',hash='';
  const el=()=>({set innerHTML(v){html=v},get innerHTML(){return html},textContent:'',focus(){},scrollIntoView(){},setAttribute(){},scrollTop:0,classList:{toggle(){},contains(){return false}},open:false,showModal(){}});
  const doc={querySelector:()=>el(),addEventListener:(t,f)=>{L[t]=f},body:{classList:{toggle(){},contains:()=>false}}};
  const loc={get hash(){return hash},set hash(v){hash=v.startsWith('#')?v:'#'+v;L.hashchange&&L.hashchange()}};
  const win={VAWC_DATA:null,addEventListener:(t,f)=>{L[t]=f},scrollTo(){}};
  const ctx={window:win,document:doc,location:loc,localStorage:{getItem:k=>store[k]||null,setItem:(k,v)=>{store[k]=v}},setTimeout:f=>f(),console};
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(dir+'/data.js','utf8'),ctx);
  vm.runInContext(fs.readFileSync(dir+'/app.js','utf8'),ctx);
  win.VAWC_DATA=ctx.window.VAWC_DATA;
  return {L,store,get html(){return html},loc,win:ctx.window,
    click(ds){L.click({target:{closest:()=>({dataset:ds,tagName:'BUTTON',id:'',closest:()=>null})}})}};
}
const r=[];const ok=(n,c)=>r.push((c?'PASS ':'FAIL ')+n);
const a=mk(__dirname+'/..'); const T=a.win.VAWC_TEST;
// route rendering smoke test
for(const [rt,h] of [['home','Find jobs'],['occupations','Explore occupations'],['occupation/O01','Administrative Assistant'],['training','Training &amp; Education'],['providers','Find training providers'],['provider/T01','Richmond Learning Center'],['programs','Find training programs'],['program/P01','Office Software Fundamentals'],['jobs','Search criteria'],['results','Job search results'],['job/J01','Job details'],['apply/J01','Prototype boundary'],['apply/J02','Employer’s own application site'],['nosuch','Page not found']]){a.loc.hash=rt;ok('renders #'+rt+' with expected content',a.html.includes(h))}
ok('storage key is separate from baseline',Object.keys(a.store).every(k=>k==='vawc-p4-revised-v1'));
// HE-01: occupation -> training
a.click({action:'occ-training',id:'O04'});
ok('occ-training routes to programs',a.loc.hash==='#programs');
ok('inherited occupation chip shown',a.html.includes('Occupation:</strong> Bookkeeping Clerk')&&a.html.includes('Remove occupation condition'));
ok('inherited search does not substitute a location (applied summary shows All Virginia)',a.html.includes('Training location: All Virginia'));
const n1=(a.html.match(/View program details/g)||[]).length; ok('O04 yields exactly its 2 linked programs (P02, P04)',n1===2&&a.html.includes('Bookkeeping Basics')&&a.html.includes('Spreadsheets for Office Work')&&!a.html.includes('Computer Support Foundations'));
a.click({action:'remove-occupation'}); ok('remove changes draft only (applied results unchanged)',(a.html.match(/View program details/g)||[]).length===2&&a.html.includes('Changes not applied')&&!a.html.includes('Occupation:</strong>'));
// fresh session has no prefill
const b=mk(__dirname+'/..'); b.loc.hash='programs'; ok('fresh programs search has no occupation chip',!b.html.includes('Occupation:</strong>'));
ok('no task hints in placeholders',![ 'administrative assistant','e.g.,'].some(s=>b.html.includes('placeholder="'+s)));
// data relationships
const D=a.win.VAWC_DATA; ok('every program occupationId and provider valid',D.programs.every(p=>p.occupationIds.every(i=>D.occupations.some(o=>o.id===i))&&D.providers.some(t=>t.id===p.providerId)));
// HE-04 selection retention
b.loc.hash='jobs';b.click({}); 
console.log(r.join('\n'));
console.log('counts:',D.occupations.length,'occupations,',D.providers.length,'providers,',D.programs.length,'programs,',D.jobs.length,'jobs');
