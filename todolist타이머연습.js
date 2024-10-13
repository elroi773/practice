let timerInterval;
let seconds = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    updateDisplay();
});
