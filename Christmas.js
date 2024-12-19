// 스크롤 이벤트를 감지
window.addEventListener("scroll", () => {
    const h1Element = document.getElementById("h1"); // #h1 요소 선택
    const rect = h1Element.getBoundingClientRect(); // 요소의 위치 가져오기
    const windowHeight = window.innerHeight; // 브라우저 높이

    // 요소가 화면에 나타났는지 확인
    if (rect.top < windowHeight && rect.bottom > 0) {
        h1Element.classList.add("visible"); // visible 클래스 추가
        h1Element.classList.remove("hidden"); // hidden 클래스 제거
    } else {
        h1Element.classList.add("hidden"); // 다시 숨기기
        h1Element.classList.remove("visible"); // 보이는 클래스 제거
    }
});
