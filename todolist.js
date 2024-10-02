// HTML 요소 선택
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const remainingTasks = document.getElementById('remaining-tasks');

function updateRemainingTasks() {
  const totalTasks = document.querySelectorAll('#task-list li').length;
  const completedTasks = document.querySelectorAll('#task-list input:checked').length;
  remainingTasks.textContent = `남은 작업: ${totalTasks - completedTasks}개`;
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

  listItem.querySelector('.radio-btn').addEventListener('click', function() {
    listItem.classList.toggle('completed'); 
    updateRemainingTasks(); 
  });

  taskList.appendChild(listItem);

  updateRemainingTasks();

  newTaskInput.value = "";
}

addTaskBtn.addEventListener('click', addTask);

//enter 누르면 추가 되는 그 뭐시깽ㅇ.ㅣ
newTaskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
