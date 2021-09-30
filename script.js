const daysel = document.getElementById ('daysel');
const hoursel = document.getElementById ('hoursel');
const minutesel = document.getElementById ('minutesel');
const secondsel = document.getElementById ('secondsel');


const newYears = "1 Jan 2022";

function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate= new Date ();


    const totalseconds = (newYearsDate - currentDate)/ 1000;
    const days = Math.floor (totalseconds/ 3600 /24);
    const hours  = Math.floor (totalseconds/ 3600)%24;
    const minutes = Math.floor (totalseconds/ 60) %60;
    const seconds = Math.floor (totalseconds %60);
    console.log(days, hours, minutes, seconds);

    daysel.innerHTML = days;
    hoursel.innerHTML = hours;
    minutesel.innerHTML = minutes;
    secondsel.innerHTML = seconds;

};

countdown();
setInterval (countdown, 1000);