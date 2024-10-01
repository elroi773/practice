// HTML 요소 선택
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const remainingTasks = document.getElementById('remaining-tasks');

// 남은 할 일 계산 함수
function updateRemainingTasks() {
  const totalTasks = document.querySelectorAll('#task-list li').length;
  const completedTasks = document.querySelectorAll('#task-list input:checked').length;
  remainingTasks.textContent = `남은 작업: ${totalTasks - completedTasks}개`;
}

// 할 일 추가 함수
function addTask() {
  const taskText = newTaskInput.value.trim();

  // 입력이 비어 있는지 확인
  if (taskText === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  // 새로운 li 요소 생성
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${taskText}</span>
    <input type="radio" class="radio-btn">
  `;

  // 라디오 버튼 클릭 시 할 일 완료 처리
  listItem.querySelector('.radio-btn').addEventListener('click', function() {
    listItem.classList.toggle('completed'); // 완료 표시
    updateRemainingTasks(); // 남은 할 일 업데이트
  });

  // 할 일 목록에 li 추가
  taskList.appendChild(listItem);

  // 남은 할 일 메시지 업데이트
  updateRemainingTasks();

  // 입력 필드 초기화
  newTaskInput.value = "";
}

// '추가' 버튼 클릭 시 할 일 추가
addTaskBtn.addEventListener('click', addTask);

// Enter 키로 할 일 추가
newTaskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
