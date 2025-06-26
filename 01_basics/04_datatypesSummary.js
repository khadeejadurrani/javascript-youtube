//Number
const score = 100;
const scoreValue = 100.3;

//boolen and null
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

//symbol use
const id = Symbol('123');
const anotherId = Symbol('123');
//symbol makes a value unique so even if the value inside two symbols is same ,both the values are 
// different in memory ,so thaey come equal in output even tho they are
console.log(id === anotherId);

//bigInt 
// (put n at the end of a big number)
const bigInt = 908457623496832098n;

//array example
//gives Object when put in typeof()
let arrayex = ["apple", "khadeeja","learning"];
console.log(typeof (arrayex));

//object exmaple
let myObj = {
    name:"khadeeja",
    age:20,
    group:"o+"
}

//function example
const myFunction = function(){
    console.log("learning function");
}
console.log(typeof (myFunction));

/* 
 RETURN TYPE OF DATATYPES AND TABLE:
 Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/