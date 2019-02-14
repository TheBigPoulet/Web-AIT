var shift = 0;
var state_side = 0;
var state_return = 0;
var limite_right = 100;
var limite_left = -100;
var NB_return = 0;
var interval = 10; //ms
var step = 1; //px
var mySquare;

function init(){
    mySquare = document.getElementById("square");
}

function move_square() {
    if (NB_return != 3) {
        if (state_side == 0) {
            if (state_return == 0) {
                shift = shift + step;
                if (shift == limite_right) {
                    state_return = 1;
                }
            }
            else {
                shift = shift - step;
                if (shift == 0) {
                    state_return = 0;
                    state_side = 1;
                }
            }
        }
        else if (state_side == 1) {
            if (state_return == 0) {
                shift = shift - step;
                if (shift == limite_left) {
                    state_return = 1;
                }
            }
            else {
                shift = shift + step;
                if (shift == 0) {
                    state_return = 0;
                    state_side = 0;
                    NB_return++;
                    mySquare.innerHTML = NB_return;
                }
            }
        }
        mySquare.style.left = shift + "px";
    }

}


setInterval("move_square()", interval);