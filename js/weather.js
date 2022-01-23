const API_KEY = "5a75c711281739da272722f27da3e25e";

function getGeolocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather h2");
        weather.innerText = `${data.main.temp}℃ ${data.weather[0].main} ${data.name}`
    })
}

function getError() {
    alert("Failed to get geolocation!");
}

navigator.geolocation.getCurrentPosition(getGeolocation, getError);