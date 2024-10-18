document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // 실제 전송을 막습니다.
    
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!username || !password) {
        alert('Username and Password cannot be empty.');
        return;
    }

    // 버튼에 로딩 애니메이션 추가
    const button = document.querySelector('button');
    button.innerHTML = 'Logging in...';
    button.disabled = true;

    setTimeout(() => {
        // 로그인 처리 후
        button.innerHTML = 'Submit';
        button.disabled = false;
        alert('Login successful');
    }, 2000); // 2초 후 원래 상태로
});