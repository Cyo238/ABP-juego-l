// animaciones
const els=document.querySelectorAll('.fade-in');

window.addEventListener('scroll',()=>{
els.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-50){
el.classList.add('visible');
}
});
});

// quiz
const quiz=[
{q:"¿Año llegada Colón?",a:["1492","1500"],c:0},
{q:"Reformas Borbónicas rey?",a:["Carlos III","Felipe II"],c:0}
];

let i=0,score=0;

function load(){
document.getElementById("q").innerText=quiz[i].q;
let html="";
quiz[i].a.forEach((op,index)=>{
html+=`<button class="btn btn-pro" onclick="ans(${index})">${op}</button>`;
});
document.getElementById("ops").innerHTML=html;
}

function ans(x){
if(x===quiz[i].c){score++;alert("Correcto");}
else{alert("Incorrecto");}

i++;
if(i>=quiz.length){
document.getElementById("q").innerText="Final";
document.getElementById("ops").innerHTML="";
document.getElementById("score").innerText=`Puntaje ${score}`;
return;
}
load();
}

load();
