let h1=document.querySelector("h1");
let body=document.querySelector("body");
let btns=document.querySelectorAll(".style");
let start=document.querySelector(".start");
let level=0;

let game=[];
let user=[];

start.addEventListener("click",()=>{
     levelUP();
     start.style.display="none";
})

for(let btn of btns){
    btn.addEventListener("click",function(){
           flash(btn);
     let val=this.getAttribute("id");
     user.push(val);
     check();
    });
}

function flash(div){
    div.classList.add("white");
    setTimeout(()=>{
      div.classList.remove("white");
    },200)   
 }

 function generator(){
    let num=Math.floor(Math.random()*4)+1;
    num=""+num;
    let div=document.getElementById(num);
       flash(div);
    game.push(num);    
    console.log(game);
 }

 function check(){
    if(user[user.length-1]==game[user.length-1]){
             if(user.length==game.length){
                levelUP();
             }
    }
    else{
       body.style.backgroundColor="red";
         setTimeout(()=>{
            body.style.backgroundColor="white";
         },200)
         h1.innerHTML=`GAME OVER <br> Your high score is ${level}`;
          level=0;
          game=[];
         start.style.display="inline";
    }
 }

 function levelUP(){
    level++;
    h1.innerText=`Level ${level}`;
    generator();
     user=[];
 }