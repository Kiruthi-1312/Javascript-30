const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const now= new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    const secDegrees = (seconds/60)*360 + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    
    const minDegrees = (mins/60)*360 + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hourDegrees = (hour/12)*360 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    let date = hour+" : "+mins+" : "+seconds;
    document.getElementById("p1").innerHTML = date;
}
setInterval(setDate,1000);
