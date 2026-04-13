const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize(){
 canvas.width = innerWidth;
 canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);
addEventListener("orientationchange", ()=>setTimeout(resize,200));

let player = {
 x:100, y:200,
 dx:0, dy:0,
 width:20, height:50,
 jumping:false, frame:0
};

let gravity = 0.6;
let keys = {};
let gameStarted = false;
let cameraX = 0;
let playerName = "";
let coins = 0;
let skin = "normal";

let platforms = [];
let lastX = 0;

/* MAPA */
function generateMap(){
 for(let i=0;i<6;i++){
   let x = lastX + i*180;
   let y = canvas.height - (150 + Math.random()*120);
   platforms.push({x,y,width:140,height:20});
 }
 lastX += 6*180;
}
generateMap();

/* BOTONES MENU */
document.getElementById("btnPlay").onclick = ()=>{
 playerName = document.getElementById("name").value || "Jugador";
 document.getElementById("menu").style.display="none";
 gameStarted = true;
};

document.getElementById("btnShop").onclick = ()=>{
 document.getElementById("menu").style.display="none";
 document.getElementById("shop").style.display="flex";
};

document.getElementById("backMenu").onclick = ()=>{
 document.getElementById("shop").style.display="none";
 document.getElementById("menu").style.display="flex";
};

/* SKINS */
document.querySelectorAll(".useSkin").forEach(btn=>{
 btn.onclick = ()=> skin = btn.dataset.skin;
});

/* CONTROLES MOVIL */
function addTouch(btn, key){
 btn.addEventListener("touchstart",(e)=>{
   e.preventDefault();
   keys[key]=true;
 });
 btn.addEventListener("touchend",(e)=>{
   e.preventDefault();
   keys[key]=false;
 });
}

addTouch(left,"ArrowLeft");
addTouch(right,"ArrowRight");

jump.addEventListener("touchstart",(e)=>{
 e.preventDefault();
 if(!player.jumping) player.dy = -12;
});

/* TECLADO */
addEventListener("keydown",e=>{
 if(e.code==="ArrowRight") keys.ArrowRight=true;
 if(e.code==="ArrowLeft") keys.ArrowLeft=true;
 if(e.code==="Space" && !player.jumping) player.dy=-12;
});
addEventListener("keyup",e=>{
 if(e.code==="ArrowRight") keys.ArrowRight=false;
 if(e.code==="ArrowLeft") keys.ArrowLeft=false;
});

/* UPDATE */
function update(){
 if(!gameStarted) return;

 player.frame++;

 if(keys.ArrowRight) player.dx += 0.3;
 if(keys.ArrowLeft) player.dx -= 0.3;

 player.dx *= 0.9;
 if(Math.abs(player.dx)<0.05) player.dx=0;

 player.x += player.dx;
 cameraX = player.x - 200;

 player.dy += gravity;
 player.y += player.dy;

 player.jumping = true;

 for(let p of platforms){
  if(player.x<p.x+p.width &&
     player.x+player.width>p.x &&
     player.y+player.height<p.y+10 &&
     player.y+player.height+player.dy>=p.y){
   player.y = p.y - player.height;
   player.dy = 0;
   player.jumping = false;
  }
 }

 if(player.x > lastX - 400){
  generateMap();
 }

 if(Math.random()<0.01){
  coins++;
  document.getElementById("coins").innerText="💰 "+coins;
 }
}

/* DIBUJO */
function drawStickman(px){
 let speed = Math.abs(player.dx);
 let idle = speed===0 ? Math.sin(player.frame*0.2)*6 : 0;
 let swing = Math.sin(player.frame*0.25)*(speed>0?10:4);

 ctx.strokeStyle="white";
 ctx.lineWidth=3;

 ctx.beginPath();
 ctx.arc(px+10,player.y-10+idle,10,0,Math.PI*2);
 ctx.stroke();

 ctx.beginPath();
 ctx.moveTo(px+10,player.y);
 ctx.lineTo(px+10,player.y+25);
 ctx.stroke();

 ctx.beginPath();
 ctx.moveTo(px+10,player.y+10);
 ctx.lineTo(px-10+swing,player.y+20);
 ctx.moveTo(px+10,player.y+10);
 ctx.lineTo(px+30-swing,player.y+20);
 ctx.stroke();

 ctx.beginPath();
 ctx.moveTo(px+10,player.y+25);
 ctx.lineTo(px-10-swing,player.y+50);
 ctx.moveTo(px+10,player.y+25);
 ctx.lineTo(px+30+swing,player.y+50);
 ctx.stroke();

 // skins mejoradas
 if(skin==="pikachu"){
  ctx.fillStyle="yellow";
  ctx.fillRect(px,player.y,20,10);
 }
 if(skin==="assassin"){
  ctx.fillStyle="black";
  ctx.fillRect(px-2,player.y-5,24,5);
 }
 if(skin==="demon"){
  ctx.strokeStyle="red";
  ctx.beginPath();
  ctx.moveTo(px,player.y-20);
  ctx.lineTo(px+20,player.y-20);
  ctx.stroke();
 }

 ctx.fillStyle="white";
 ctx.fillText(playerName,px-20,player.y-20);
}

function draw(){
 ctx.fillStyle="#0f2027";
 ctx.fillRect(0,0,canvas.width,canvas.height);

 ctx.fillStyle="#00ffcc";
 for(let p of platforms){
  ctx.fillRect(p.x-cameraX,p.y,p.width,p.height);
 }

 drawStickman(player.x-cameraX);
}

function loop(){
 update();
 draw();
 requestAnimationFrame(loop);
}
loop();
