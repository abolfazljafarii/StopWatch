let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let displaySeconds;
let displayMinutes;
let displayHours;

function stopWatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }
    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    document.getElementById('stopwatch').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop() {
    if (document.getElementById('startStop').innerHTML === "Start") {
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStop').innerHTML = "Stop";
    } else {
        interval = window.clearInterval(interval);
        document.getElementById('startStop').innerHTML = "Start";
    }
}

function reset() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    window.clearInterval(interval);
    document.getElementById('stopwatch').innerHTML = "00:00:00";
    document.getElementById('startStop').innerHTML = "Start";
}