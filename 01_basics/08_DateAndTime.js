let myDate = new Date();  //instance of the date created ,date treated as object
//Date() ->buitIn function

console.log(myDate);//gives  date in miliseconds ,,starts from 1st Jan 1970 ,mostly difficult to read
console.log(myDate.toString()); //date converted to string

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof (myDate)); //interview question: date is an object

//1st month is written as 0 in js
//we can aslo print the date we wantto print ,,not the current date always
let myCreatedDate = new Date(2023 , 0 , 23);//order= year->month(starts from 0)->day->hours->minutes->second
let myCreatedDate1 = new Date(2023 , 0 , 23 , 5 ,4) ;
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate1.toLocaleString());

//to print date in a specfic order like month->day->year
let myCreatedDate2 = new Date("01-14-2023");
console.log(myCreatedDate2.toLocaleString());

//working on Time lapse
//used when you want to create a pole or quiz and see how acted first and submitted first 
//used in a project of air bnb example ,when you want to comapre the checkin time and the checkout time

let myTimeStamp = Date.now(); //gives in miliseconds ,starting from 1st Jan 1970
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());//gives result in miliseconds ,starting from created date or date or your choice
//now you can compare the above two miliseconds of the Dates

/*to shorter the result as the result in miliseconds is so log ,so convert it to seconds ,by dividing
 the result  to 1000 (1 second = 1000 miliseocnds)*/
console.log(Math.floor(Date.now()/1000));

//to print only the month or day from just the date 
//month starts from 0 ,so we add 1 to the result
let newDate3 = new Date();
console.log(newDate3); //answer in miliseconds
console.log(newDate3.getMonth() + 1);//result given in number
console.log(newDate3.getDay());//result given in number

//we can aslo use the above function in string interpolation ,,when we want to print a sentence like 
// today is this (day) of the (month)

console.log(`today is day ${newDate3.getDay()} of the month ${newDate3.getMonth() + 1}`);

//printing the name of the day ,not number

newDate3.toLocaleString('default',{
    weekday : "long"
});

let dayName = newDate3.toLocaleString('default', { weekday: "long" });
console.log(`Today is ${dayName}`);