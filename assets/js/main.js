//Get random facts:
getFact();

//Get weather of the actual city:
getWeather();

//Get date and hour in real time:
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();


if( dd < 10 ) {
    dd='0'+dd
}

if( mm < 10 ) {
    mm='0'+mm
}

var myvar=setInterval( function() {
    myTimer();
}, 1000);

const datetoday = dd+'/'+mm+'/'+yyyy;
document.getElementById("time-date").innerHTML = "<h2>"+datetoday+"</h2>";

function myTimer() {
    var d = new Date();
    document.getElementById("time-hour").innerHTML = "<h2>"+d.toLocaleTimeString()+"</h2>";
};

