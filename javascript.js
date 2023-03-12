
function myFunction(){
var n=1+Math.floor(6*Math.random());
var m=1+Math.floor(6*Math.random());
var i1="images/dice"+n+".png";
var i2="images/dice"+m+".png";
document.querySelectorAll("img")[0].setAttribute("src",i1);
document.querySelectorAll("img")[1].setAttribute("src",i2);
document.querySelector("h1").style.fontSize="5rem";
 if(n>m)document.querySelector("h1").innerHTML="🚩🚩Player 1 Wins";
 else if(m>n)document.querySelector("h1").innerHTML="Player 2 Wins 🚩🚩";
 else document.querySelector("h1").innerHTML="🚩Draw🚩";
}
document.querySelectorAll("button").addEventListener("click",myFunction);