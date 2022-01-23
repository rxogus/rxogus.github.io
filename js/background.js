const backgroundImg = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
const body = document.querySelector("body");
const changeBgBtn = document.querySelector("#update");

let prevNumber = 0;

function changeBgImg() {
    const newRandn = Math.floor(Math.random() * backgroundImg.length);
    const imgNumber = (prevNumber !== newRandn) ? newRandn : Math.floor(Math.random() * backgroundImg.length);
    prevNumber = imgNumber;
    body.style.backgroundImage = `url(img/${backgroundImg[imgNumber]})`;
}

changeBgImg();
changeBgBtn.addEventListener("click", changeBgImg);