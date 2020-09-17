const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')

// Set Time
function setTime() {
    let today = new Date(),
    hour = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();

    time.innerHTML = `<h1>${hour}<span>:</span>${minutes}<span>:</span>${seconds}</h1>`

    setTimeout(setTime, 1000)
}

// Set Background and Greeting
function Bgg() {
    // Morning
    let today = new Date(),
    hour = today.getHours();
    if(hour < 12) {
        document.body.style.background = 'url(./img/morning.jpg)'
        greeting.innerHTML = `<h2>Good Morning Oge</h2>`
    } else if(hour < 18) {
        document.body.style.background = 'url(./img/afternoon.jpg)'
        greeting.innerHTML = `<h2>Good Afternoon Oge</h2>`
    } else {
        document.body.style.background = 'url(./img/night.jpg)'
        document.body.style.color = '#ffffff'
        document.body.style.backgroundPosition = 'center'
        document.body.style.backgroundSize = 'center'
        greeting.innerHTML = `<h2>Good Evening Oge</h2>`
    }
}

// Run
setTime()
Bgg()