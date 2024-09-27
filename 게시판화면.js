// 로그인된 사용자 이름 설정 (예: 로그인 시 서버에서 전달받은 사용자 이름)
let loggedInUser = '홍길동';
document.getElementById('logged-in-user').innerText = loggedInUser;

// 익명 여부를 저장하는 변수
let isAnonymous = false;

// 익명/노익명 버튼 활성화 상태 전환
function toggleAnonymous(anonymous) {
    isAnonymous = anonymous;
    if (anonymous) {
        document.getElementById('anonymous-btn').classList.add('active');
        document.getElementById('no-anonymous-btn').classList.remove('active');
    } else {
        document.getElementById('anonymous-btn').classList.remove('active');
        document.getElementById('no-anonymous-btn').classList.add('active');
    }
}

// 게시물 추가 함수
function addPost() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    if (title.trim() === '' || content.trim() === '') {
        alert("제목과 내용을 입력해주세요.");
        return;
    }

    // 작성자 이름 설정 (익명 여부에 따라 다르게 표시)
    const authorName = isAnonymous ? '익명' : loggedInUser;

    // 새로운 게시물 요소 생성
    const postsDiv = document.getElementById('posts');
    const newPost = document.createElement('div');
    newPost.classList.add('post');

    // 게시물 내용 구성
    newPost.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <p class="author">작성자: ${authorName}</p>
    `;

    // 게시물을 화면에 추가
    postsDiv.prepend(newPost);  // 최신 게시물이 위로 올라오도록 prepend 사용

    // 입력 폼 초기화
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
}