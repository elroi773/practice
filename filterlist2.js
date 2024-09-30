const onSearch = () => {
    const input = document.querySelector("#search");  // "search"로 수정
    const filter = input.value.toUpperCase();  // input.value 사용

    const list = document.querySelectorAll("#list li");

    list.forEach(el => {
        const text = el.textContent.toUpperCase();
        el.style.display = text.includes(filter) ? "" : "none";  // 삼항 연산자를 사용해 필터링
    });
};
