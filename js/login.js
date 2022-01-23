const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const hello = document.querySelector("#hello");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "username";

function saveUserName(username) {
    localStorage.setItem(USERNAME, username);
}

function writeUsername(username) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    hello.innerText = `Hello, ${username}!`;
    hello.classList.remove(HIDDEN_CLASSNAME);
}

function login(event) {
    event.preventDefault();
    const username = loginInput.value;

    writeUsername(username);
    saveUserName(username);
}

loginForm.addEventListener("submit", login);

const userName = localStorage.getItem(USERNAME);

if (userName !== null) {
    writeUsername(userName);
}