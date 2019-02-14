var shift = 0;
var interval = 10; //ms
var mySquare;
var val;
var ref=1000;
var E = [0,0]; //[n-2,n-1]
var S = [0,0]; //[n-2,n-1]
Kp=5;

function init() {
    mySquare = document.getElementById("square");
    val = document.getElementById("val");
}

function move_square() {
    val.style.width=ref+"px";
    val.innerHTML="ref = "+ref+" Kp = "+Kp;
    shift = 0.002586*E[1]+0.0016858*E[0]+1.5113*S[1]-0.5487610*S[0];
    E[0]=E[1];
    command=(ref-shift)*Kp;
    E[1]=command
    S[0]=S[1];
    S[1]=shift;
    mySquare.style.left = shift + "px";
    mySquare.innerHTML=shift;
}

setInterval("move_square()", interval);