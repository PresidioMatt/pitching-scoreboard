globalThis. BOARDS = [
  { id: "0-4",    label: "Ages 4 & Under", metric: "pockets", match: a => a <= 4 },
  { id: "5",      label: "Age 5",          metric: "pockets", match: a => a === 5 },
  { id: "6",      label: "Age 6",          metric: "pockets", match: a => a === 6 },
  { id: "7p",     label: "Age 7",          metric: "pockets", match: a => a === 7 },
  { id: "7s",     label: "Age 7",          metric: "speed",   match: a => a === 7 },
  { id: "8p",     label: "Age 8",          metric: "pockets", match: a => a === 8 },
  { id: "8s",     label: "Age 8",          metric: "speed",   match: a => a === 8 },
  { id: "9",      label: "Age 9",          metric: "speed",   match: a => a === 9 },
  { id: "10",     label: "Age 10",         metric: "speed",   match: a => a === 10 },
  { id: "11",     label: "Age 11",         metric: "speed",   match: a => a === 11 },
  { id: "12",     label: "Age 12",         metric: "speed",   match: a => a === 12 },
  { id: "13",     label: "Age 13",         metric: "speed",   match: a => a === 13 },
  { id: "14",     label: "Age 14",         metric: "speed",   match: a => a === 14 },
  { id: "15",     label: "Age 15",         metric: "speed",   match: a => a === 15 },
  { id: "16",     label: "Age 16",         metric: "speed",   match: a => a === 16 },
  { id: "17-19",  label: "Ages 17–19",     metric: "speed",   match: a => a >= 17 && a <= 19 },
  { id: "20-29",  label: "Ages 20–29",     metric: "speed",   match: a => a >= 20 && a <= 29 },
  { id: "30-39",  label: "Ages 30–39",     metric: "speed",   match: a => a >= 30 && a <= 39 },
  { id: "40-49",  label: "Ages 40–49",     metric: "speed",   match: a => a >= 40 && a <= 49 },
  { id: "50-59",  label: "Ages 50–59",     metric: "speed",   match: a => a >= 50 && a <= 59 },
  { id: "60+",    label: "Ages 60 & Up",   metric: "speed",   match: a => a >= 60 }
];
globalThis. SAMPLE_ROWS = [
  { name:"Ava Ramirez",  age:4,  pockets:3 },
  { name:"Liam Chen",    age:4,  pockets:2 },
  { name:"Noah Abbott",  age:6,  pockets:4 },
  { name:"Mia Delgado",  age:6,  pockets:4 },
  { name:"Ethan Park",   age:6,  pockets:1 },
  { name:"Zoe Ito",      age:7,  pockets:3 },   // 7 pockets board
  { name:"Jack Nolan",   age:7,  speed:34 },    // 7 speed board
  { name:"Ruby Vance",   age:8,  pockets:2 },   // 8 pockets board
  { name:"Owen Brooks",  age:8,  speed:41 },    // 8 speed board
  { name:"Kai Alvarez",  age:8,  speed:45 },
  { name:"Sofia Wright", age:10, speed:55 },
  { name:"Lucas Diaz",   age:10, speed:55 },
  { name:"Maya Costa",   age:12, speed:62 },
  { name:"Ben Foster",   age:14, speed:71 },
  { name:"Grace Adler",  age:16, speed:65 },
  { name:"Dan Murphy",   age:34, speed:82 },
  { name:"Chris Blake",  age:41, speed:76 },
  { name:"Pat Osei",     age:63, speed:60 }
];
function toNum(v){if(v==null||v==='')return null;const n=Number(v);return isNaN(n)?null:n;}
function normalize(r){return{name:(r.name||'').trim(),age:toNum(r.age),pockets:toNum(r.pockets),speed:toNum(r.speed)};}
function buildBoards(raw){const players=raw.map(normalize).filter(p=>p.age!=null);
 return BOARDS.map(def=>{const list=players.filter(p=>{if(!def.match(p.age))return false;return def.metric==='pockets'?p.pockets!=null:p.speed!=null;})
 .map(p=>({name:p.name,score:def.metric==='pockets'?p.pockets:p.speed}));
 list.sort((a,b)=>(b.score-a.score)||a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
 return{def,players:list};}).filter(b=>b.players.length>0);}
const bs=buildBoards(SAMPLE_ROWS);
console.log('populated '+bs.length+' of '+BOARDS.length);
bs.forEach(b=>{console.log(b.def.label+' ['+b.def.metric+']'); b.players.forEach((p,i)=>console.log('  '+(i+1)+'. '+p.name+' = '+p.score));});
