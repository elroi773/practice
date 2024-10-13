// Memo 기능
const memoInput = document.getElementById('memo');

memoInput.addEventListener('input', function () {
    localStorage.setItem('memo', memoInput.value);
});

window.addEventListener('load', function () {
    memoInput.value = localStorage.getItem('memo') || '';
});

// To-Do List 기능
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const remainingTasks = document.getElementById('remaining-tasks');
let draggedItem = null;

function updateRemainingTasks() {
    const totalTasks = document.querySelectorAll('#task-list li').length;
    const completedTasks = document.querySelectorAll('#task-list input:checked').length;
    remainingTasks.textContent = `남은 작업: ${totalTasks - completedTasks}개 화이팅!`;
}

function addTask() {
    const taskText = newTaskInput.value.trim();

    if (taskText === "") {
        alert("할 일을 입력해주세요!");
        return;
    }

    const listItem = document.createElement('li');
    listItem.setAttribute('draggable', 'true');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <input type="radio" class="radio-btn">
    `;

    addDragAndDropEvents(listItem);

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
const addStudyTaskBtn = document.getElementById('add-study-task-btn');
const newStudyTaskInput = document.getElementById('new-study-task');
const studyList = document.getElementById('study-list');
const remainingStudyTasks = document.getElementById('remaining-study-tasks');

function updateRemainingStudyTasks() {
    const totalStudyTasks = document.querySelectorAll('#study-list li').length;
    const completedStudyTasks = document.querySelectorAll('#study-list input:checked').length;
    remainingStudyTasks.textContent = `남은 공부: ${totalStudyTasks - completedStudyTasks}개 화이팅!`;
}

function addStudyTask() {
    const studyTaskText = newStudyTaskInput.value.trim();

    if (studyTaskText === "") {
        alert("공부할 내용을 입력해주세요!");
        return;
    }

    const listItem = document.createElement('li');
    listItem.setAttribute('draggable', 'true');
    listItem.innerHTML = `
        <span>${studyTaskText}</span>
        <input type="radio" class="radio-btn">
    `;

    addDragAndDropEvents(listItem);

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

// Drag & Drop 기능
function addDragAndDropEvents(item) {
    item.addEventListener('dragstart', function () {
        draggedItem = item;
        setTimeout(() => item.classList.add('dragging'), 0);
    });

    item.addEventListener('dragend', function () {
        setTimeout(() => item.classList.remove('dragging'), 0);
        draggedItem = null;
    });

    item.addEventListener('dragover', function (e) {
        e.preventDefault();
        const afterElement = getDragAfterElement(item.parentElement, e.clientY);
        const dragging = document.querySelector('.dragging');
        if (afterElement == null) {
            item.parentElement.appendChild(dragging);
        } else {
            item.parentElement.insertBefore(dragging, afterElement);
        }
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

let timerInterval;
let seconds = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    display.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    updateDisplay();
});
