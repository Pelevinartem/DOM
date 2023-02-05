const push = document.querySelector('.button');
const timerId = document.querySelector('.timer');
const counter = document.querySelector('.counter');

let check = true;
let i = 0;

const TIMEOUT = 5000;

push.onclick = start;

function start() {

    counter.innerHTML = i++;

    if (check == true) {
        timer();
        check = false;
    }

};

function timer() {
    let timeNow = Date.now();

    timerId.innerHTML = formatTime(TIMEOUT);

    let interval = setInterval(() => {
        let delta = Date.now() - timeNow;
        timerId.innerHTML = formatTime(TIMEOUT - delta);
    }, 100);

    let timeout = setTimeout(() => {
        push.onclick = null;
        timerId.innerHTML = 'Game Over';


        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT);
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);

};