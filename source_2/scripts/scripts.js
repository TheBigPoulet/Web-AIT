var shift = 0;
var interval = 10; //ms
var mySquare;
var val;
var ref;
var E = [0, 0]; //[n-2,n-1]
var S = [0, 0]; //[n-2,n-1]
var Kp = 10;
var Ki = 1;
var Kd = 1;
var Erreur = 0;
var Total_Erreur = 0;
var Erreur_Prec = 0;
var P = 0;
var I = 0;
var D = 0;

function init() {
    mySquare = document.getElementById("square");
    val = document.getElementById("val");
    ref = document.getElementById("ref");
}

function move_square() {
    val.style.width = ref.value + "px";
    val.innerHTML = "ref = " + ref.value + " Kp = " + Kp;
    shift = 0.002586 * E[1] + 0.0016858 * E[0] + 1.5113 * S[1] - 0.5487610 * S[0];
    E[0] = E[1];
    Erreur = ref.value - shift;
    Total_Erreur += Erreur;
    P = Erreur * Kp
    I = Total_Erreur * Ki;
    D = (Erreur - Erreur_Prec) * Kd;
    Erreur = Erreur_Prec;
    command = P + I + D;
    E[1] = command
    S[0] = S[1];
    S[1] = shift;
    mySquare.style.left = (shift-20) + "px";

}

setInterval("move_square()", interval);