/*
* init
* called when body loaded
*/

i=0;
signe = -1;

function init()
{
    document.getElementById("test").innerHTML="Hello";
}


var clignotementFading = function(){
var obj = document.getElementById("test");
if (obj.style.opacity >= 0.96){
signe = -1;
}
if (obj.style.opacity <= 0.04){
signe = 1;
}
obj.style.opacity = (obj.style.opacity * 1) + (signe * 0.04);
};

periode = setInterval(clignotementFading, 50); 

function test_button()
{
    if(i==0)
    {
        document.getElementById("button").style.background="red";
        i=1;
    }
    else
    {
        i=0;
        document.getElementById("button").style.background="green";
    }
    
}