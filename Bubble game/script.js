var timer=0;
var score=0;
var intervalID;
var bg;

document.querySelector("#startbtn").addEventListener("click",start)
document.querySelector("#endbtn").addEventListener("click",endGame)

document.querySelector("#pbtm").addEventListener("click",function(dets){
    if (dets.target.classList.contains("bubble")) {

    var clickednum= (Number(dets.target.textContent));
    if(clickednum===bg){
        scoreIncrease();
        getNewHit();
        makeBubble();
    }
    else{
        decreaseScore();
    }
}
})

function scoreIncrease(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

function decreaseScore() {
    score -= 5;
    if (score < 0) score = 0; // Ensure the score doesn't go below 0
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    bg = Math.floor(Math.random()*10);
    document.querySelector("#newHit").textContent = bg;
}

function makeBubble(){
    var clutter="";

for(i=1;i<=175;i++){
    var rn=Math.floor(Math.random()*10);
   clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter; 
}

function runTime(){
intervalID= setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerVal").textContent= timer;
    }
    else{
        endGame();
    } },1000)
}

function start(){
   timer=11;
   score=0;
 
 
    
   setTimeout(runTime,100);
    makeBubble();
    getNewHit();
}

function endGame(){
    clearInterval(intervalID);
    document.querySelector("#pbtm").innerHTML=`<h1>Game Over. Your score is ${score}<h1>`;
    timer=0;
    document.querySelector("#timerVal").innerHTML=0;
    document.querySelector("#scoreval").innerHTML=0;
}

