// HTML 요소 선택
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const remainingTasks = document.getElementById('remaining-tasks');

// 남은 작업 업데이트 함수
function updateRemainingTasks() {
  const totalTasks = document.querySelectorAll('#task-list li').length;
  const completedTasks = document.querySelectorAll('#task-list input:checked').length;
  remainingTasks.textContent = `남은 작업: ${totalTasks - completedTasks}개 화이팅!`;
}

// 할 일 추가 함수
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

  // 체크박스 클릭 시 완료 처리 및 항목 재정렬
  listItem.querySelector('.radio-btn').addEventListener('click', function() {
    listItem.classList.toggle('completed');
    updateRemainingTasks();
    sortTasks(); // 항목을 재정렬하는 함수 호출
  });

  taskList.appendChild(listItem);

  updateRemainingTasks();

  newTaskInput.value = "";
}

// 할 일 정렬 함수
function sortTasks() {
  const tasks = Array.from(taskList.children);
  
  // 완료된 항목은 배열의 끝으로 이동
  tasks.sort((a, b) => {
    const aChecked = a.querySelector('.radio-btn').checked;
    const bChecked = b.querySelector('.radio-btn').checked;
    return aChecked - bChecked; // 체크된 항목을 뒤로 보냄
  });

  // 정렬된 항목을 다시 리스트에 추가
  tasks.forEach(task => taskList.appendChild(task));
}

addTaskBtn.addEventListener('click', addTask);

// enter 누르면 추가되는 기능
newTaskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

const memoInput = document.getElementById('memo');

memoInput.addEventListener('input', function() {
    localStorage.setItem('memo', memoInput.value);
});

window.addEventListener('load', function() {
    memoInput.value = localStorage.getItem('memo') || '';
});
