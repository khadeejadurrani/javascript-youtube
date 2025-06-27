const score = 350; //js itsself claims its datatype to number

//purposely setting it to number
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));//looks at he decimal digits

const anotherNumber = 123.8966;
console.log(anotherNumber.toPrecision(4));//looks at the significant figures

const hundreds = 100000;
console.log(hundreds.toLocaleString());//puts commas in a large number and make it easy to read ,,commas are 
//according to the US standards

//to put commas accordig to Indian standards
console.log(hundreds.toLocaleString('en-IN'));

//MATH library  comes by default in javascript
console.log(Math);   //it gives the output of object {} ,meaning it  has alot of properties/functions to its own as Math is
//very important in js

//printing absolute value
console.log(Math.abs(-4));//in abs only the negative values go to positive

//rounding a number
console.log(Math.round(4.3));

//roundind off to the above value of the range ,,4 and 5 are the range in the below example and
//5 is the above value or the ceiling value
console.log(Math.ceil(4.3));

//rounging off to the bottom value of the range ,also called the floor value ,,as in the below example
//4 and 5 are the range and 5 is the ceiling value and 4 is the floor value
console.log(Math.floor(4.9));

//to find the minimum value out of a many numbers
console.log(Math.min(4,3,6,8));

//to find maximum value
console.log(Math.max(4,3,6,8));

/*random function in Math js
gives a random number everytime ,and the number is between 0 and 1 ,can aslo be 1 and 0
this function is used in making logic of different games ,like dice game and cards etc
when you want a number greater than 0 to 1 ,then multiply 10 with the result given by the function ,
then it will give a number from 1 to 9
To make the number ,limit to only one digit and no decimal ,use floor function with result 
To limit a result between a range ,like from 10-20 (you want a random number from 10 to 20),then set a min and maximum
range and minus minimum thing from the maximum thhing of the range and then multiply 10 with it
Also when the random number is multiplied with 10 ,,1 is also added to the number so that when the random number 
generated is zero ,it becomes 1 and final result is not zero
*/

console.log(Math.random()); //random number genrated
console.log(Math.random()*10);//to make the number between 0-9
console.log((Math.random()*10)+1);//to make the number between 1-9 and make the number 1 when result is zero
console.log(Math.floor((Math.random()*10)+1));//to make the number limited to only one digit

const min = 10;
const max = 20;

// to amke the random number between the range (max-min)
console.log(Math.floor(Math.random()*(max - min +1) + min));



