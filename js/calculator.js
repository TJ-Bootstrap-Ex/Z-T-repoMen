window.onload = function () {


    var screen,
        output,
        limit,
        zero,
        period,
        midScreen,
        lastScreen;

// these are the output areas of our buttons//
    screen = document.getElementById("left-operand");
    midScreen = document.getElementById("operator");
    lastScreen = document.getElementById("right-operand");
//-------------------------------------------//

    var elem = document.querySelectorAll(".numb");
    var op = document.querySelectorAll(".oper");
    var oplen = op.length;
    var len = elem.length;


    // increments through array of numbers. displays output to first or last screen depending on if operator is used//

    for (var i = 0; i < len; i++) {

        elem[i].addEventListener("click", function () {

            num = this.value;

            console.log(midScreen);

            if (midScreen.innerHTML.trim() === "") {
                output = screen.innerHTML += num;
            } else {
                lastScreen.innerHTML += num;
            }

        }, false);

    }

    //executes similar to the last function but for the operators//

    for (var i = 0; i < oplen; i++) {

        op[i].addEventListener("click", function () {

            num = this.value;

            output = midScreen.innerHTML = num;

        }, false);

    }

    document.querySelector("#eqn-bg").addEventListener("click", function () {

       output = screen.innerHTML + midScreen.innerHTML + lastScreen.innerHTML;

        if (output) {

            lastScreen.innerHTML = eval(output).toFixed(2);
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

};
