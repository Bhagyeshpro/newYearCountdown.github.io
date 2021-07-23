const newYears = "1 Jan 2022";
const daysE1 = document.getElementById('days');          
const HoursE1 = document.getElementById('Hours');             
const MinutesE1 = document.getElementById('Minutes');           
const SecondsE1 = document.getElementById('Seconds');           

function countdown() {
    // Passing normal date into Date() function
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // Making it accurate or realiable on time than on date

    // const days = 0;
    // const hours = 0;
    // const mins = 0;
    // const seconds = 5;

    daysE1.innerHTML= formatTime(days);
    HoursE1.innerHTML= formatTime(hours);
    MinutesE1.innerHTML= formatTime(mins);
    SecondsE1.innerHTML= formatTime(seconds);

    const endTime = Math.floor(totalSeconds);

    if (endTime == 0) {
        setTimeout(function(){
            window.open("newYear.html", "_self");
        }, 0000);
    }
    // console.log(endTime);

    // console.log(days, hours, mins, seconds);

    // Time


}

function formatTime(time) {
    return time < 10 ? `0${time}`: time;  
}


countdown();

setInterval(countdown, 1000)