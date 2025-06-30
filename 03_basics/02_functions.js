//covering Functions with objects and array 

/*when we are working with a an e-commerce website we dont know how many things are to be added to the cart */
function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(200,300,400)); /*here w ebought  200 Rs item ,then 300 Rs then 400
we dont know how many we will keep adding ,here only 200 will be added and printed */

//to solve the above problem we have rest operator
function calculateCartPrice1(...num){
    return num;
}
console.log(calculateCartPrice1(200,300,400)); //here result will be an array

//sometimes rest operator is written as:
function calculateCartPrice2(value1 , value2,...num1){
    console.log(`value1 : ${value1}`);//to print the values of value 1 and 2
    console.log(`value2 : ${value2}`);
     console.log("num (rest):", num1);
    return num1;
}
console.log(calculateCartPrice1(200,300,400,500,600)); /*here the first two values will be given to value1
and value2 and other values will be given to num1 and returned in the form of array */

//passing object in a function
//object making:
const user = { 
    username : "khadeeja",
    marks : 11
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.marks}`)
}
handleObject(user);

/*we can aslo pass object directly ,like make an object inside the parameter are ,when calling the 
function */
handleObject({
    username : "sam",
    price : 999
});

//PASSING ARRAYS IN A FUNCTION
const myNewArray = [200 , 300 , 400 , 500]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));

//we can also pass whole array as parameter
console.log(returnSecondValue([100,200,300,400]));