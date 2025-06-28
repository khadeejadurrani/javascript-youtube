//OBJECTS

//to use symbol in an object ,first declare it outside the object(the use of symbol in object is often asked in interviews)
const mySym = Symbol("key1"); //declaration of  symbol
const user = {
    name : "Khadeeja",
    age : 20,
    [mySym] : "myname",//always write the key of the symbol in [] in bojects ,or it will become a  string
    //even if you declare it outside the object
    location : "Peshawar",
    email : "khadeejadurrani@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday" , "Saturday"]
}

//accessing the elements or porperties of the above object
console.log(user.email);
console.log(user["email"]);//key accessed in " " commas ,always use" " " as key is a string ,or it wont work
console.log(user[mySym]); //sumbol is always accessed in [] ,and "" are not used here as it is not a string

//to change value of a key in an object
user.email = "onebloom@gmail.com";
 
//to prevent the further changing of the values of t he keys ,you can freeze the object 
//after you freeze the object ,even if you write code to change the values ,it wont give error but the value wont be changed
Object.freeze(user);

user.email = "example.com"; //the email wont change now after freeze

//another object with the use of function

const user1 = {
    location : "Peshawar",
    email : "khadeejadurrani@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday" , "Saturday"]
}
user1.greeting = function(){
    console.log("hello js user");
}
console.log(user1.greeting); //gives output-> funtion(anynoumos)
console.log(user1.greeting());//gives the right output