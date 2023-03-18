const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor () {
    bodyColor.style.backgroundColor = getRandomHexColor(); 
}


startBtn.addEventListener('click', () => {
  startBtn.setAttribute("disabled", "disabled");
  const intervalId = setInterval(() => {
  changeColor();
}, 1000)
    
  stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtn.removeAttribute("disabled");
    })

});
