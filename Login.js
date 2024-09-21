// 로그인 버튼 클릭 시 실행되는 함수
function submitLogin() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var errorMessage = document.getElementById('errorMessage');

    // 유효성 검사: 아이디와 비밀번호가 입력되었는지 확인
    if (username === "" || password === "") {
        errorMessage.style.display = 'block'; // 오류 메시지 표시
        document.querySelector('.login-container').classList.add('shake'); // 흔들리는 애니메이션 추가
        setTimeout(() => {
            document.querySelector('.login-container').classList.remove('shake'); // 애니메이션 제거
        }, 500);
    } else {
        errorMessage.style.display = 'none'; // 오류 메시지 숨김
        // 로그인 성공 시 추가 기능 구현 (서버 요청 등)
        alert('로그인 성공!');
    }
}
