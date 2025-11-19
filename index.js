let timeId = document.getElementById("timeId");



// timeId.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;

setInterval(() => {
    let now = new Date();
    let hrs = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();
    timeId.textContent = `Current Time: ${hrs}:${mins}:${secs}`;
}, 1000);