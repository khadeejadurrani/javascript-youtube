//first i will write the traditional dot way of getting values from and object
const person = {
    name : "khadeeja",
    age : 20,
    city : "Lahore"
}

//traditional way
const name1 = person.name;
const age1 = person.age;
const city1 = person.city;

console.log(name1);
console.log(age1);
console.log(city1);

//modern way(object destructing)
//using the above object
const{name , age} = person; //values of key 1 and key 2 are stored int he varaibles called name and age
console.log(name);
console.log(age);

//we can also rename the variables
const user = {
    userName : "ayesha",
    email : "ayesha@gmail.com"
};

//renaimg the variables here
const{userName : firstName , email:officeEmail} = user;//the original key is userName but you stored it 
// in a variable called firstName.
console.log(firstName);
console.log(officeEmail);

//SETTING DEFAULT VALUES FOR A VARIABLE WHICH ARE NOT PRESENT IN THE OBJECT
const student = { 
    department: "Psychology"
}
const{department , marks = 29} = student;

console.log(department);
console.log(marks);

//nested destructing
const employee = {
    name2 : "laiba",
    address : {
        city2 : "Karachi",
        zipCode1 : 75100
    }
}
//destructing inside a nested object
const {
    address: { city2, zipCode1 }
} = employee;

console.log(city2);
console.log(zipCode1);

//DESTRUCTING IN FUNCTION PARAMETERS
const product = {
    id : 1407,
    title : "The Silent Patient",
    price : 400
}

function printProductDetails({id,title,price}){
    console.log(`id of the product is: ${id} ,its title is :${title} ,and its price is:${price} `);
}

printProductDetails(product);

//DESTRUCTING WITH REST OPERATOR
const car = {
  brand: "Toyota",
  model: "Premio",
  year: 2006,
  color: "silver grey"
};

const{brand, ...otherDetails} = car;
console.log(brand);
console.log(otherDetails);//gives result in an object form







