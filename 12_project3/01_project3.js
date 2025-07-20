/*accessing the clock id ,as that is the only place where time is changing and the only place where
we will be using js */
const clock = document.getElementById("clock");

//below function is the main engine of digital clock
/* setInterval is builIn function in js that repeats code again and again after certain time
,we specify the code for it to run ,after certain time interval 
function() --> what we repeat after specified time interval
1000 --> repesent miliseconds and 1000 miliseconds = 1 second

so every one second the fucntion inide setinterval() runs
new Date() is another built-in thing in Js.creates a new object hat has all info about todays time and date

and we store that todays time and date in a new variable

date.toLocaleTimeString() is a method that converts the full date into just the current time in a readable format
and we make it into innerHTML of clock
*/

setInterval(function(){
    let date = new Date(); //as th function is changing every second so const is not used
    clock.innerHTML = date.toLocaleTimeString(); 
},1000)
