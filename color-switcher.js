const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;
const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]')
}

refs.startBtn.addEventListener('click', onColorsChangeStart);
refs.stopBtn.addEventListener('click', onColorsChangeStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onColorsChangeStart() {
    refs.startBtn.disabled = true;
    timerId = setInterval(() => {
        const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
        const color = colors.find((color, index) => {    
            if (index === randomIndex) {
               return color;
            }
        });
        document.body.style.backgroundColor = color;        
    }, 1000);
}

function onColorsChangeStop() {
    clearInterval(timerId);
   refs.startBtn.disabled = false;
}

