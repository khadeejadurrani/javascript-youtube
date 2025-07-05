const userEmail = "khadeeja.ai";
/* here if the string is not empty then its is taken as true and hence console.log of if is pritned
but if the string is empty ,just have "" ,then it is taken as empty or 0 ,then it is taken as false
and else is printed */

if(userEmail){
    console.log("Got user email ");
}else{
    console.log("dont have user Email");
}

/* FALSY VALUES:
    false ,0 , -0,in BigInt a vlaue 0n is written ,that 0n is falsy value
null , undefined ,NaN

//truthy values
"0" ,'false' , " " ,
[],{},function(){} =>empty object, empty array , an empty function or just a function simple declared 
or syntax written ,then these are truthy values
*/

//checking if the object is empty or not
const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log("Object is Empty");
}

//NULLISH COALESCING OPERATOR (??)
let val1;
val1 = 5 ?? 10;
val2 = null??10;

console.log(val1);
console.log(val2);

//ternary operator
//condition ? true statement (if the condition is true) : false statement(if the condition is false)
const iceTeaPrice = 100;
iceTeaPrice >=80 ? console.log("true") : console.log("false");