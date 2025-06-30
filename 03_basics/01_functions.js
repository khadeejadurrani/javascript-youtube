//FUNCTIONS

//BASIC FUNCTION( NO INPUT(parameters) , NO OUTPUT)
function greet(){
    console.log("Hello khadeeja");
}
greet();/*calls the function ,,this doesnt need console.log as ,console.log is already written and used 
inside the function */

//FUNCTION WITH PARAMETERS
function greetUser(name){
    console.log(`Hello ${name}`);
}
greetUser("Khadeeja");

//FUNCTION WITH RETURNS A VALUE
function add(a,b){
    return a+b;
}
let sum = add(5,3); //you cans tore the result in a new variable ,or you can call the function directly
//  inside the console.log
console.log(sum);

//if one number is given and other parameters is of other datatype ,then js will do datatype coersion
let sum1 = add(5 ,"3")
console.log(sum1); //here type coersion will happen and answer will be 53

let sum2 = add(5 ,null)
console.log(sum2); //here type coersion will happen and answer will be 5 ,as null is coersed to 0

/*FUNCTION EXPRESSION (FUNCTION STORED IN A VARIABLE)
here no name is written with the function brackets 
this function is called anonymous function(has no name) */
const multiply = function(x,y){
    return x*y;
}

console.log(multiply(6,7)) //fucntion expression is called just like a normal function

//if no parameters are given in the above function,it will give NaN
console.log(multiply());


/* ARROW FUNCTION (shorter syntax) */
const divide = (a ,b) =>{
    return a/b;
}
console.log(divide(5,2));

/* if the function has only one line ,you can make it even shorter */
const square = x => x*x;
console.log(square(6));

//FUNCTION WITH DEFAULT PARAMETERS
function welcomeUser(user ="default user"){
    console.log`hello ${user}`;
}
console.log(); //no parameter so ,will print => hello default user
console.log("khadeeja");






