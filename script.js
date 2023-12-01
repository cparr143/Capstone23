var daysEl = document.getElementsById('days');
var hoursEl = document.getElementsById('hours');
var minutesEl = document.getElementsById('minutes');
var secondsEl = document.getElementsById('seconds');

function countdownTimer() {
    const countdownTimer = new Date('12-01-2023').getTime()

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const interval = setInterval(() => {

    const now = new Date().getTime()
    const distance = countdownDate - now

    daysEl.innerText = formatNumber(Math.floor(distace / day))
    hoursEl.innerText = formatNumber(Math.floor(distace % day / hour))
    minutesEl.innerText = formatNumber(Math.floor(distace % day / minute))
    secondsEl.innerText = formatNumber(Math.floor(distace % day / second))
    }, 1000)
}

function formatNumber(number) {
    if(number <10) {
        return '0' + number
    }
    
    return number
}

countdownTimer()