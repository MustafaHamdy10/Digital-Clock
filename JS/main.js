
// Initialization of the variables .

let x=document.querySelector(".clock");
let y=document.querySelector(".today");

// Make a function to get the time .

function getTime(){

    let date=new Date();

    let hrs=date.getHours() >=10 ? date.getHours() : `0${date.getHours()}`;
    let mins=date.getMinutes() >=10 ? date.getMinutes() : `0${date.getMinutes()}`;
    let secs=date.getSeconds() >=10 ? date.getSeconds() : `0${date.getSeconds()}`;

    x.innerHTML=`${hrs}:${mins}:${secs}`;
}

getTime();

setInterval(function(){

    getTime();

},1000);

// Make a function to get the date .

function getDate() {

    let date = new Date();

    let years = date.getFullYear();
    let months = date.getMonth() + 1; 
    let days = date.getDate(); 

    y.innerHTML = `${years}-${months >= 10 ? months : `0${months}`}-${days >= 10 ? days : `0${days}`}`;
}

getDate();

// Update the date every minute (60000 milliseconds)

setInterval(function() {
    
    getDate();

}, 60000);
