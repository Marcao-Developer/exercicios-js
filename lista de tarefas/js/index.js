const inputNewTaks = document.querySelector("#input-new-task");
const inputButtonSubmitTask = document.querySelector("#submit-task");
const listTasks = document.querySelector("#tasks");

window.onload = () => {
    loadTasks();
}

inputButtonSubmitTask.addEventListener("click", () => {
    const newTask = inputNewTaks.value;

    if(!newTask) return;
    
    listTasks.appendChild(createTask(newTask));
    clearInputNewTask();
    saveTasks();
});

inputNewTaks.addEventListener("keypress", (e) => {
    const newTask = inputNewTaks.value;

    if(!(e.key === "Enter" && newTask)){return}

    listTasks.appendChild(createTask(newTask));
    clearInputNewTask();
    saveTasks();
});


document.addEventListener('click', (e) => {
    const element = e.target;
    if(element.id === "delete"){
        deleteTask(element);
        saveTasks();
    }
});

function clearInputNewTask() {
    inputNewTaks.value = '';
    inputNewTaks.focus();
}

function createTask(task) {
    const li = document.createElement("li");
    const delButton = document.createElement("button");

    li.innerText = task+' ';

    delButton.type = "button";
    delButton.id = "delete";
    delButton.innerText = "DEL";

    li.appendChild(delButton);

    return li;
}

function deleteTask(element) {
    listTasks.removeChild(element.parentElement);
}

function saveTasks() {
    const allTasks = document.querySelectorAll('li');
    const listTasks = [];

    for(let task of allTasks){
        task = task.innerText.replace("DEL", "").trim();

        listTasks.push(task);
    }

    const tasksToJson = JSON.stringify(listTasks);
    localStorage.setItem('tasks', tasksToJson);
}

function loadTasks() {
    let tasksLocalStorage = localStorage.getItem('tasks');
    tasksLocalStorage = JSON.parse(tasksLocalStorage);

    for(let task of tasksLocalStorage){
        listTasks.appendChild(createTask(task));
    }
}