// window.onload (){
//
//
//     var btn = document.getElementsByClassName("btn");
//
// btn.addEventListener("click");
// //
// //
// //
// // var something = document.querySelectorAll(".numb");
// // btn.addEventListener("onclick");
//
// var inputLeft = document.querySelector(".left-operand");
// var inputMid = document.querySelector(".operator");
// var inputRight = document.querySelector(".result");
// var numbers = document.querySelectorAll(".numb");
//
//
// for  (var i = 0; i < numbers.length; i++) {
//     numbers[i].onClick = function (){
//         var input = document.
//     }
// }
//
// // loop buttons
// // add an event listener to each one
//
// //var onClick = document.
// }
window.onload = function () {


    var current,
        screen,
        output,
        limit,
        zero,
        period,
        operator,
        midScreen,
        lastScreen;


    screen = document.getElementById("left-operand");
    midScreen = document.getElementById("operator");
    lastScreen = document.getElementById("right-operand");


    var elem = document.querySelectorAll(".numb");
    var op = document.querySelectorAll(".oper");
    var elemTwo = document.querySelectorAll(".num");

    var oplen = op.length;
    var len = elem.length;


    for (var i = 0; i < len; i++) {

        elem[i].addEventListener("click", function () {

            num = this.value;

            console.log(midScreen);

            if (midScreen.innerHTML.trim() === "") {
                output = screen.innerHTML += num;
            } else {
                lastScreen.innerHTML += num;
            }


            // limit = output.length;

            if (limit > 16) {

            }

        }, false);

    }

// var lastField = function () {for(var i = 0; i < len; i++ ) {
//
//     elemtwo[i].addEventListener("click",function() {
//
//         num = this.value;
//
//         output = lastScreen.innerHTML += num;
//
//         // limit = output.length;
//
//
//     },false);
//
// }};

    for (var i = 0; i < oplen; i++) {

        op[i].addEventListener("click", function () {

            num = this.value;

            output = midScreen.innerHTML += num;

            // limit = output.length;


        }, false);

    }


    document.querySelector(".zero").addEventListener("click", function () {

        zero = this.value;

        if (screen.innerHTML === "") {

            output = screen.innerHTML = zero;
        }

        else if (screen.innerHTML === output) {

            output = screen.innerHTML += zero;

        }

    }, false);

    document.querySelector(".period").addEventListener("click", function () {

        period = this.value;

        if (screen.innerHTML === "") {

            output = screen.innerHTML = screen.innerHTML.concat("0.");

        }

        else if (screen.innerHTML === output) {

            screen.innerHTML = screen.innerHTML.concat(".");

        }

    }, false);


    document.querySelector("#eqn-bg").addEventListener("click", function () {

       output = screen.innerHTML + midScreen.innerHTML + lastScreen.innerHTML;

        if (output) {

            lastScreen.innerHTML = eval(output);
            screen.innerHTML = "";
            midScreen.innerHTML = "";
        }

        else {
            lastScreen.innerHTML = "";
        }

    }, false);

    document.querySelector("#clear").addEventListener("click", function () {

        screen.innerHTML = "";
        midScreen.innerHTML = "";
        lastScreen.innerHTML = "";

    }, false);


    var elem1 = document.querySelectorAll(".operator");

    var len1 = elem1.length;

    for (var i = 0; i < len1; i++) {

        elem1[i].addEventListener("click", function () {

            operator = this.value;

            if (screen.innerHTML === "") {

                screen.innerHTML = screen.innerHTML.concat("");

            }

            else if (output) {

                screen.innerHTML = output.concat(operator);

            }

        }, false);

    }
};
