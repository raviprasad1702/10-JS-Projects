const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secEl = document.getElementById('seconds');

const newYear = '1 Jan 2021';

function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor((totalSeconds / 3600 / 24));
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatNum(days);
    hoursEl.innerHTML = formatNum(hours);
    minsEl.innerHTML = formatNum(minutes);
    secEl.innerHTML = formatNum(seconds);
}

function formatNum(time){
    return (time < 10) ? `0${time}`:time;
}

countDown();

setInterval(countDown, 1000);