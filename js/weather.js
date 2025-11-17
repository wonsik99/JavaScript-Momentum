const API_KEY = "8601804011f9a5cd69cebac407c1f39e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.querySelector("#weather");
        const weatherSpan = weatherContainer.querySelector("span:first-child");
        const citySpan = weatherContainer.querySelector("span:last-child");
        const weather = data.weather[0].main;
        const name = data.name;
        weatherSpan.innerText = weather;
        citySpan.innerText = name;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


// https://api.openweathermap.org/data/2.5/weather?lat=42.264052191928364&lon=-83.78327052364922&appid=8601804011f9a5cd69cebac407c1f39e