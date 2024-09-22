document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('input');
    const listItems = document.querySelectorAll('#list li');

    // 입력 필드에 이벤트 리스너 추가
    input.addEventListener('input', function() {
        const filter = input.value.toLowerCase(); // 입력 값을 소문자로 변환하여 비교
        listItems.forEach(function(item) {
            // 리스트 항목의 텍스트를 소문자로 변환 후 필터 값과 비교
            if (item.textContent.toLowerCase().includes(filter)) {
                item.style.display = ''; // 필터와 일치하면 항목을 보여줌
            } else {
                item.style.display = 'none'; // 필터와 일치하지 않으면 숨김
            }
        });
    });
});
