let push = document.querySelector('.button'); // class кнопки
let pushId = document.getElementById('push'); // ID кнопки
let multi = document.querySelector('.counter__multi'); // class множителя
let multiid = document.getElementById('multi'); // ID множителя 
let counter =  document.querySelector('.counter'); // class счетчика
let timer = document.getElementById('timer'); // ID таймера
let game = document.getElementById('game'); // ID строчки окончания
let timer_sec = document.getElementById('timer_sec'); // ID таймера секунд

let i = 0; // Очки
let t = 0; // Секунды

document.oncontextmenu = cmenu; 
function cmenu() { return false; } // Блокировка нажатия правого клика

const timerInterval = setInterval( // Секундомер 
    () => timer.innerHTML = ++t,
    999
);

push.onclick = function () {      
   counter.innerHTML = ++i;
   timer.style.display = 'block';      
   
    if (i >= 10 && i <= 99) {
        multi.innerHTML = 'x2';  
        i += 1;          
        multiid.style.display = 'block';                                      
    } 
    if (i >= 100 && i <= 299) {
        multi.innerHTML = 'x3';  
        i += 2;
    }
    if (i >= 300 && i <= 499) {
        multi.innerHTML = 'x4';  
        i += 3;
    }
    if (i >= 500 && i <= 999) {
        multi.innerHTML = 'x5';  
        i += 4;
    }
    if (i >= 1000 && i <= 1999) {
        multi.innerHTML = 'x15';  
        i += 11;
    }
    if (i >= 2000) {
        game.style.display = 'inline-block';
        pushId.style.display = 'none';
        timer_sec.innerHTML = t;
        clearInterval(timerInterval);
    }
};













console.log(count);
console.log(push);