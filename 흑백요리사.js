document.getElementById('generate-quote').addEventListener('click', function() {
    const quotes = [
        "요리는 사랑과 같습니다. 마음을 다해 들어가야 합니다.",
        "레시피에는 영혼이 없습니다. 요리사가 그 영혼을 불어넣어야 합니다.",
        "좋은 음식은 진정한 행복의 기초입니다.",
        "비밀 재료는 언제나 사랑입니다."
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-display').innerText = quotes[randomIndex];
});
