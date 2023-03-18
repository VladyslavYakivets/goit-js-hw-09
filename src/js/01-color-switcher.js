const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyColor = document.querySelector('body');

let timerId = null;

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function changeColor() {
    bodyColor.style.backgroundColor = getRandomHexColor()
};

function onStart() {
timerId = setInterval(changeColor, 1000);

startBtn = setAttribute('disabled')
};

function onStop() {
clearInterval(timerId);
  
startBtn.removeAttribute('disabled');
};


