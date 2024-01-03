window.onload = function () {
    var ms = document.querySelector("#millisecnods");
    var sec = document.querySelector("#seconds");
    var min = document.querySelector("#miniutes");
    var hr = document.querySelector("#hours");

    var btnStart = document.querySelector("#start");
    var btnStop = document.querySelector("#stop");
    var btnReset = document.querySelector("#reset");

    var interval;
    var seconds = 0;
    var milliseconds = 0;
    var miniutes = 0;
    var hours = 0;
    ms.innerHTML = "00";
    sec.innerHTML = ":00";
    min.innerHTML = ":00";
    hr.innerHTML = "00";

    btnStart.onClick = function () {
        clearInterval(interval);
        interval = setInterval(start, 10);
    }
    btnStop.onClick = function () {
        clearInterval(interval);
    }
    btnReset.onClick = function () {
        clearInterval(interval);
        milliseconds = 0;
        seconds = 0;
        miniutes = 0;
        hours = 0;
        ms.innerHTML = milliseconds + "0";
        sec.innerHTML = ":" + seconds + "0";
        min.innerHTML = ":" + miniutes + "0";
        hr.innerHTML = hours + "0";
    }

    function start() {
        milliseconds++;
        if (milliseconds < 9) {
            ms.innerHTML = "0" + milliseconds;
        }
        if (milliseconds > 9) {
            ms.innerHTML = milliseconds;
        }
        if (milliseconds > 99) {
            seconds++;
            sec.innerHTML = ":0" + seconds;
            milliseconds = 0;
            ms.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            sec.innerHTML = ":" + seconds;
        }
        if (seconds > 58) {
            miniutes++;
            min.innerHTML = ":0" + miniutes;
            seconds = 0;
            sec.innerHTML = ":0" + seconds;
        }
        if (miniutes > 9) {
            min.innerHTML = ":" + miniutes;
        }
        if (miniutes > 58) {
            hours++;
            hr.innerHTML = "0" + hours;
            miniutes = 0;
            min.innerHTML = ":0" + miniutes;
        }
        if (hours > 9) {
            hr.innerHTML = hours;
        }
    }

}