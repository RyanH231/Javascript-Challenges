let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".min-hand");
let secondHand = document.querySelector(".second-hand");

let secondDuration = 1000;
let minuteDuration = 60000;
let hourDuration = 3600000;

let secondDegree = 0;
let minuteDegree = 0;
let hour = 0;

let rotateDegree = (360 / 60);
let hourDegree = (360 / 12);

function UpdateSeconds()
{  
    secondDegree += rotateDegree;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
}

function UpdateMinutes()
{
    minuteDegree += rotateDegree;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
}

function UpdateHours()
{
    hour += hourDegree;
    hourHand.style.transform = `rotate(${hour}deg)`;
}

setInterval(UpdateSeconds,secondDuration);
setInterval(UpdateMinutes, minuteDuration);
setInterval(UpdateHours, hourDuration);
