let gameseq = [];
let userseq= [];

let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
    console.log("Game is started");
    started = true;
    

    levelup();
    }
})

function GameFlash(btn) {
btn.classList.add("flash");
setTimeout(function() {
    btn.classList.remove("flash")
}, 250);
}

function userFlash(btn) {
btn.classList.add("userflash");
setTimeout(function() {
    btn.classList.remove("userflash")
}, 250);
}

function levelup(){
    userseq = [];
 level++;
 h2.innerText = `Level ${level}`;

 let remIdx = Math.floor(Math.random() * 3);
 let remColor = btns[remIdx];
 let remBtn = document.querySelector(`.${remColor}`);
  gameseq.push(remColor);
  console.log(gameseq);
 GameFlash(remBtn);
}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
      if(userseq.length == gameseq.length){
        setTimeout(levelup, 1000);
      }
    }else{
        h2.innerHTML = `Game Over!. Your Score was <b>${level}<b/>  <br/>Press Any Key To Start Again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150)
        reset();
    }
}

function btnpress(){

let btn = this;
userFlash(btn);

usercolor = btn.getAttribute("id");
userseq.push(usercolor);

checkAns(userseq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq= [];
    level = 0;
    userseq = [];
}