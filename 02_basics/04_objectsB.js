const instaUser = {}

instaUser.id = "123abc";
instaUser.name = "Khadeeja";
instaUser.isLoggedIn = false;

console.log(instaUser);

//here we writing object inside an object
const regularUser = {
    email : "khadeejadurrani@gmail.com",
    fullname : {
        userFullName :{
            firstname : "muneeba",
            lastname : "umar"
        }
    }
}

//accessing value of the inner object
console.log(regularUser.fullname.userFullName.firstname);

//we use ?(used to ahndle issue ) with in the console log ,to make the output smoother ,even when there are no value ,written in the console log ,the js will handle it on it own ,,and  will look at the other values ,,required from it ,and try to give an answer
console.log(regularUser.fullname?.userFullName.firstname);

//combining two objects (same logic as arrays ,and even faces the same issue of arrays where the second array ,joined with the first one becomes just one element)
const obj1 = {1: "a" , 2: "b" }; //obj 1
const obj2 = {3: "a" , 4: "b" }; //obj 2

//combining obj1 and obj2
const obj3 = {obj1 , obj2}
console.log(obj3);

//using built-in function for combining two objects properly
const obj4 = Object.assign(obj1,obj2);
console.log(obj4);

//we also use an empty bracket with assign function ,as default ,,gives the same answer
const obj5 = Object.assign({},obj1,obj2);
console.log(obj5);

//using spread operator with objects(works same like with arrays)
const obj6 = {...obj1, ...obj2}
console.log(obj3);

//objects inside arrays

const arrayUser = [
    {
        id:1,
        email:"1google@gmail.com"
    },
    {
        id:2,
        email:"2google@gmail.com"
    },
    {
        id:3,
        email:"3google@gmail.com"
    }

]

//accessing the object value present inside the array
console.log(arrayUser[1].id);

//accessing only the keys of the object
console.log(Object.keys(instaUser)); //gives result in array
console.log(Object.values(instaUser));//gives result in array
console.log(Object.entries(instaUser)); 
console.log(instaUser.hasOwnProperty('id'));