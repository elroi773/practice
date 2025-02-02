document.getElementById('translateButton').addEventListener('click', translateText);

function translateText() {
    const text = document.getElementById('textInput').value;
    if (text.trim() === "") {
        alert("번역할 텍스트를 입력하세요.");
        return;
    }

    const targetLanguage = 'en'; // 예시로 영어로 번역
    const url = 'https://libretranslate.com/translate';

    const data = {
        q: text,
        source: 'ko', // 한국어로부터 번역
        target: targetLanguage,
        format: 'text'
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        const translatedText = data.translatedText;
        document.getElementById('translatedText').textContent = translatedText;
    })
    .catch(error => {
        console.error('번역 중 오류 발생:', error);
        alert("번역을 실패했습니다.");
    });
}
