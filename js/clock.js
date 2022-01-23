const clock = document.querySelector("#clock");
const DAY = ["일", "월", "화", "수", "목", "금", "토"];
const YEAROF = ["🐭","🐮","🐯","🐇","🐉","🐍","🐴","🐏","🐵","🐔","🐶","🐷"];

function timeUpdate() {
    const now = new Date();

    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = now.getDay();
    
    const today = `${year}년 ${month}월 ${date}일 ${DAY[day]} ${YEAROF[(year-1996) % 12]}`;
    const time = `${hour}:${minute}:${second}`;

    clock.querySelector("h2").innerText = time;
    clock.querySelector("h3").innerText = today;

}

timeUpdate();
setInterval(timeUpdate, 1000);