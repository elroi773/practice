document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼이 바로 제출되는 것을 막음

    const username = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;
    const confirmPassword = document.querySelectorAll("input[type='password']")[1].value;

    // 비밀번호 일치 여부 확인
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // 유효성 검증 후 서버로 데이터 전송 가능 (현재는 alert으로 확인)
    if (username && email && password && confirmPassword) {
        alert("Registration successful!");
        // 여기서 서버로 데이터를 보낼 수 있음 (Ajax 또는 form 제출)
    } else {
        alert("Please fill out all fields.");
    }
});
