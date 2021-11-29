let days = document.querySelector(".days > h1")
let hours = document.querySelector(".hours > h1")
let minutes = document.querySelector(".minutes > h1")
let seconds = document.querySelector(".seconds > h1")


function timer () {
    let newYaear = new Date("2022-01-01")
    let now = new Date()
    let diff = (newYaear - now) / 1000

    days.innerHTML = formatTimer(Math.floor(diff / 3600 / 24))
    hours.innerHTML = formatTimer(Math.floor(diff / 3600) % 24)
    minutes.innerHTML = formatTimer(Math.floor(diff / 60) % 60)
    seconds.innerHTML = formatTimer(Math.floor(diff) % 60)
}


function formatTimer(time) {
    return time < 10 ? (`0${time}`) : time
}


setInterval(() => {
    timer()
}, 1000)
