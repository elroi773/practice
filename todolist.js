// Memo 기능
const memoInput = document.querySelector('.memo textarea');

memoInput.addEventListener('input', function () {
    localStorage.setItem('memo', memoInput.value);
});

window.addEventListener('load', function () {
    memoInput.value = localStorage.getItem('memo') || '';
});

// To-Do List 기능
const addTaskBtn = document.querySelector('.todolist .add');
const newTaskInput = document.querySelector('.todolist input[type="text"]');
const taskList = document.createElement('ul');
const remainingTasks = document.createElement('p');
remainingTasks.textContent = '남은 작업: 0개 화이팅!';
document.querySelector('.todolist').appendChild(taskList);
document.querySelector('.todolist').appendChild(remainingTasks);

function updateRemainingTasks() {
    const totalTasks = taskList.querySelectorAll('li').length;
    const completedTasks = taskList.querySelectorAll('input:checked').length;
    remainingTasks.textContent = `남은 작업: ${totalTasks - completedTasks}개 화이팅!`;
}

function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText === "") {
        alert("할 일을 입력해주세요!");
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <input type="radio" class="radio-btn">
    `;

    listItem.querySelector('.radio-btn').addEventListener('click', function () {
        listItem.classList.toggle('completed');
        updateRemainingTasks();
    });

    taskList.appendChild(listItem);
    updateRemainingTasks();
    newTaskInput.value = "";
}

addTaskBtn.addEventListener('click', addTask);

newTaskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});

// To-Study List 기능
const addStudyTaskBtn = document.querySelector('.studylist .add');
const newStudyTaskInput = document.querySelector('.studylist input[type="text"]');
const studyList = document.createElement('ul');
const remainingStudyTasks = document.createElement('p');
remainingStudyTasks.textContent = '남은 공부: 0개 화이팅!';
document.querySelector('.studylist').appendChild(studyList);
document.querySelector('.studylist').appendChild(remainingStudyTasks);

function updateRemainingStudyTasks() {
    const totalStudyTasks = studyList.querySelectorAll('li').length;
    const completedStudyTasks = studyList.querySelectorAll('input:checked').length;
    remainingStudyTasks.textContent = `남은 공부: ${totalStudyTasks - completedStudyTasks}개 화이팅!`;
}

function addStudyTask() {
    const studyTaskText = newStudyTaskInput.value.trim();

    if (studyTaskText === "") {
        alert("공부할 내용을 입력해주세요!");
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${studyTaskText}</span>
        <input type="radio" class="radio-btn">
    `;

    listItem.querySelector('.radio-btn').addEventListener('click', function () {
        listItem.classList.toggle('completed');
        updateRemainingStudyTasks();
    });

    studyList.appendChild(listItem);
    updateRemainingStudyTasks();
    newStudyTaskInput.value = "";
}

addStudyTaskBtn.addEventListener('click', addStudyTask);

newStudyTaskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addStudyTask();
    }
});

// 랜덤 명언 기능
const quotes = [
    { text: "삶이 있는 한 희망은 있다", author: "키케로" },
    { text: "산다는것 그것은 치열한 전투이다.", author: "로망로랑" },
    { text: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다", author: "사무엘존슨" },
    { text: "언제나 현재에 집중할 수 있다면 행복할것이다", author: "파울로 코엘료" },
    { text: "직업에서 행복을 찾아라.아니면 행복이 무엇인지 절대 모를것이다", author: "엘버트 하버드" },
    { text: "피할수 없으면 즐겨라", author: "로버트 엘리엇" },
    { text: "먼저 핀 꽃은 먼저 진다 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다", author: "채근담" },
    { text: "행복은 습관이다 그것을 몸에 지니라", author: "하버드" },
    { text: "절대 포기하지 말라 당신이 되고 싶은 무언가가 있다면 그에 대해 자부심을 가져라 당신 자신에게 기회를 주어라 목표를 높이 세워라 인생은 그렇게 살아야 한다", author: "마이크 맥라렌" },
    { text: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다", author: "괴테" },
    { text: "화가 날 때는 100까지 세라 최악일 때는 욕설을 퍼부어라 ", author: "마크 트웨인" },
    { text: " 돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다.", author: "쇼펜하우어" },
    { text: " 만족할 줄 아는 사람은진정한 부자이고, 탐욕스러운 사람은진실로 가난한 사람이다.", author: "솔론" },
    { text: "곧 위에 비교하면 족하지 못하나,아래에 비교하면 남음이 있다.", author: "명심보감" },
    { text: "당신이 인생의 주인공이기 때문이다 . 그사실을 잊지마라 . 지금까지 당신이 만들어온 의식적 그리고 무의식적 선택으로 인해 지금의 당신이 있는것이다", author: " 바바라 홀" },
    { text: "겨울이 오면 봄이 멀지 않으리", author: "셸리" },
    { text: "당신의 행복은 무엇이 당신의 영혼을 노래하게 하는가에 따라 결정된다. ", author: "낸시 설리번" },
    { text: "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.", author: "베토벤" },
    { text: "문제점을 찾지 말고 해결책을 찾으라 ", author: "헨리포드" },
    { text: "가난은 가난하다고 느끼는 곳에 존재한다 ", author: "에머슨" },
    { text: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라 ", author: "나딘 스테어" },
    { text: "생각은 마법의 열쇠예요", author: "피터팬" },
    { text: "가장 어두운 밤도 끝나고 해가 떠요", author: "빅터 휴고" },
    { text: "모든 모험은 어딘가로 향하는 출발점이 필요해", author: "이상한 나라의 앨리스" },
    { text: "마음이 얼마나 슬퍼도 계속 믿는다면 원하는 꿈은 이뤄질 거예요", author: "신데렐라" },
    { text: "스스로 웃으며 바라보는 것은 자신을 사랑하는 것이에요", author: "미키마우스" },
    { text: "역경에서 피어나는 꽃은 가장 희귀하고 아름다워요", author: "뮬란" },
    { text: "가끔 옳은 길은 가장 쉬운 길이 아니다", author: "그랜드 모프" },
    { text: "당신은 믿는 것보다 용감하고 보이는 것보다 강하며, 생각하는 것 보다 똑똑해", author: "곰돌이 푸" },
    { text: "하쿠나 마타타 이건 당신의 나머지 날들을 걱정 없이 살아갈 수 있음을 의미해", author: "라이온 킹" },
    { text: "걱정할 이유가 왜 있을까요? 최선을 다 했다면 걱정은 상황을 나아지게 만들지 못해요", author: "월트 디즈니" },
    { text: "믿음과 신뢰가 필요한 거야", author: "팅커벨" },
    { text: "기적도 조금의 시간이 필요해요", author: "신데렐라 요정 할매" },
    { text: "과거는 당신의 머리 속에 있고 미래는 당신의 손에 있어요 ", author: "피글렛" },
    { text: "좋은 친구는 네잎 클로버와 같다", author: "아일랜드 속담" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.querySelector('.quote-section p').textContent = quotes[randomIndex].text;
    document.querySelector('.quote-section p:nth-of-type(2)').textContent = `- ${quotes[randomIndex].author}`;
}
