const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoLi = document.querySelector("ul");

let toDoList = [];
const TODOLIST = "toDoList";

function saveToDoList() {
    localStorage.setItem(TODOLIST, JSON.stringify(toDoList));
}

function deleteToDoList(event) {
    const li = event.target.parentElement;
    li.remove();
    toDoList = toDoList.filter( (toDo) => toDo.id !== parseInt(li.id));
    saveToDoList();
}

function checkToDoList(event) {
    const li = event.target.parentElement;
    li.classList.toggle("line-through");
    toDoList.forEach((toDo) => {
        if (toDo.id === parseInt(li.id)) {
            toDo.checked ^= 1;
        }
    })
    saveToDoList();
}

function showToDoList(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;

    const checkBtn = document.createElement("input");
    checkBtn.type = "checkbox";
    checkBtn.classList.add("checkbox");
    if (newToDoObj.checked === 1) {
        checkBtn.checked = true;
    }
    checkBtn.addEventListener("click", checkToDoList);

    const span = document.createElement("span");
    span.innerText = newToDoObj.task;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.classList.add("transparent");
    deleteBtn.addEventListener("click", deleteToDoList);

    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoLi.appendChild(li);
}

function addToDoList(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = { task: newToDo, id: Date.now(), checked: 0 };
    toDoList.push(newToDoObj);
    showToDoList(newToDoObj);
    saveToDoList();
}

toDoForm.addEventListener("submit", addToDoList);

const savedToDos = localStorage.getItem(TODOLIST);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDoList = parsedToDos;
    parsedToDos.forEach(showToDoList);
}