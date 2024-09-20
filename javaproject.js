// 메시지를 전송하는 함수
function submitMessage() {
    var messageInput = document.getElementById('messageInput'); // 입력 필드 가져오기
    var message = messageInput.value.trim(); // 입력값에서 공백 제거
    var errorMessage = document.getElementById('errorMessage'); // 에러 메시지 요소 가져오기

    if (message) { // 메시지가 있으면
        errorMessage.style.display = 'none'; // 에러 메시지 숨김
        var messagesContainer = document.getElementById('messages'); // 메시지를 표시할 컨테이너 가져오기

        // 메시지를 localStorage에 저장
        let messages = JSON.parse(localStorage.getItem('messages')) || []; // 기존 메시지 불러오기
        messages.push(message); // 새로운 메시지 추가
        localStorage.setItem('messages', JSON.stringify(messages)); // localStorage에 저장

        // 새로운 메시지 박스 생성
        var messageBox = document.createElement('div');
        messageBox.classList.add('message-box'); // 메시지 박스에 클래스 추가
        messageBox.innerText = message; // 메시지 내용 설정

        // 메시지 박스를 컨테이너에 추가
        messagesContainer.appendChild(messageBox);

        // 새 메시지가 부드럽게 스크롤되도록 설정
        messageBox.scrollIntoView({ behavior: 'smooth' });

        // 입력 필드 초기화
        messageInput.value = '';
    } else { // 메시지가 없으면
        errorMessage.style.display = 'block'; // 에러 메시지 표시
    }
}

// 페이지 로드 시 localStorage에서 메시지를 불러오는 함수
window.onload = function() {
    let messages = JSON.parse(localStorage.getItem('messages')) || []; // localStorage에서 저장된 메시지 가져오기
    let messagesContainer = document.getElementById('messages'); // 메시지 컨테이너

    messages.forEach(function(message) { // 각 메시지에 대해
        var messageBox = document.createElement('div'); // 메시지 박스 생성
        messageBox.classList.add('message-box'); // 클래스 추가
        messageBox.innerText = message; // 메시지 설정
        messagesContainer.appendChild(messageBox); // 컨테이너에 추가
    });
}
