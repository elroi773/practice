// DOMContentLoaded 이벤트로 DOM이 완전히 로드된 후 실행
document.addEventListener("DOMContentLoaded", function() {
    // 버튼 요소 선택
    const button = document.getElementById("myButton");
    
    // 버튼 클릭 시 알림 창 표시
    button.addEventListener("click", function() {
        alert("버튼이 클릭되었습니다!");
    });
});
