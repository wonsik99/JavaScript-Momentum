const clock = document.querySelector("h2#clock")

// clock.innerText = "lalalal";

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// //Wait 5000ms = 5 seconds
// setTimeout(sayHello, 5000);

function getChristmas() {
    const date = new Date();
    const christmas = new Date(date.getFullYear(), 11, 25);
    const diff = christmas.getTime() - date.getTime();
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diff / (1000 * 60));
    const diffSeconds = Math.floor(diff / 1000);
    console.log(diffHours, diffMinutes, diffSeconds);
}

getClock();
setInterval(getClock, 1000);