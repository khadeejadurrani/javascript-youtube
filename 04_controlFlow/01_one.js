//if
/* runs only if it is true ,i mean the condition in the bracket */
if(true){
    console.log("if executed 1");
}
//< , > , <= , >= , == , != , ===

if(2 == "2"){ //here type coersion occurs ,use === for strict check
    console.log("if executed 2");
}

if(2 === "2"){  //now this will not be printed
    console.log("if executed 2");
}
const temp = 41;
if(temp < 50){
    console.log("less than 50");
}
console.log("outside if statement , temp is greater than 50 here");

//else =>conditional code ,if condition is true then it will be executed only then
const score = 200;

if(score > 100){ //these brackets are considered a scope ,and variables defined inside it cannot be used/accessed outside
    const power = "fly";
    console.log(`User power : ${power}`);
}

//short hand notation

const balance = 1000;

/* No brackets used here , if someone wants to write multiple sentences then they 
can continue after putting a comma after the one finished line of code ,but code becomes unreadable */

if(balance > 500) console.log("test 1");
if(balance == 1000) console.log("test 2") , console.log("test 3");

if(balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less then 900");
}else{
    console.log("less than 1200");
}
//using multiple conditions
const userLoggedIn = true;
const debitCard = true;

//AND
if(userLoggedIn && debitCard){ //gives result only if all conditions are used
    console.log("Allow to buy this item");
}

const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;

//OR
if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("user is Logged In");
    };



