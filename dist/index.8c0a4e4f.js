"use strict";let secretNumber=Math.trunc(20*Math.random())+1,score=20,highScore=0,number=document.querySelector(".number"),currScore=document.querySelector(".score");const displayMessage=function(e){document.querySelector(".message").textContent=e};document.querySelector(".check").addEventListener("click",(function(){const e=Number(document.querySelector(".guess").value);e||displayMessage("No number!"),e===secretNumber?(displayMessage("Correct number! You guess it :)"),number.textContent=secretNumber,document.querySelector("body").style.backgroundColor="rgb(0, 127, 0)",number.style.width="25rem",highScore<score&&(highScore=score,document.querySelector(".highscore").textContent=highScore)):e!==secretNumber&&(score>1?(displayMessage(e>secretNumber?"Too high+++":"Too low---"),score--,currScore.textContent=score):(displayMessage("Game over. Try again!"),currScore.textContent=0))})),document.querySelector(".again").addEventListener("click",(function(){secretNumber=Math.trunc(20*Math.random())+1,score=20,displayMessage("Start guessing..."),currScore.textContent=score,number.textContent="?",number.style.width="15rem",document.querySelector(".guess").value="",document.querySelector("body").style.backgroundColor="rgb(0, 0, 255)"}));
//# sourceMappingURL=index.8c0a4e4f.js.map
