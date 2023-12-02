const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/* countdown clock*/
const countDate = new Date("Apr 24, 2024 00:00:00").getTime();
const now = new Date().getTime();
const remainingTime = countDate - now;
/* caculate time in days, hours, mins, seconds*/
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 60;

const textDays = Math.floor(remainingTime / days);
const textHours = Math.floor((remainingTime % days) / hours);
const textMinutes = Math.floor((remainingTime % hours) / minutes);
const textSeconds = Math.floor((remainingTime % minutes) / seconds);

/* update html */
document.querySelector(".days").innerText = textDays > 0 ? textDays: 0;
document.querySelector(".hours").innerText = textHours > 0 ? textHours: 0;
document.querySelector(".minutes").innerText = textMinutes > 0 ? textMinutes: 0;
document.querySelector(".seconds").innerText = textSeconds > 0 ? textSeconds: 0;

/*run the countdown */
setInterval(countdown, 500);
