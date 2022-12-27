const bodyTag = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop');

disebledStop();

let intervalId = null;

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
    intervalId = setInterval(()=>{
        bodyTag.style.backgroundColor = getRandomHexColor();
    }, 1000);    

    btnStart.disabled = true;
    btnStop.disabled = false;
    
};

function onBtnStop() {
    clearInterval(intervalId);

    btnStart.disabled = false;
    btnStop.disabled = true;
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function disebledStop() {
    btnStop.disabled = true;
};