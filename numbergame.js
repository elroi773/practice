let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', function() {
    const guess = Number(document.getElementById('guess').value);
    attempts++;
    let resultText;

    if (guess === randomNumber) {
        resultText = `정답입니다! ${attempts}번 만에 맞췄습니다!`;
        // 게임 초기화
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
    } else if (guess < randomNumber) {
        resultText = '더 높은 숫자를 시도해 보세요!';
    } else {
        resultText = '더 낮은 숫자를 시도해 보세요!';
    }

    document.getElementById('result').textContent = resultText;
});
