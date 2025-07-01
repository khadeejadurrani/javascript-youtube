//this in a SIMPLE OBJECT
// We create an object with a name and a function
const person = {
  name: "Laiba",

  // This function is called by the object 'person'
  sayHi: function () {
    // 'this' refers to the object that called the function
    // So here, 'this.name' is the same as 'person.name'
    console.log("Hi, I am " + this.name);
  }
};

person.sayHi();  // Output: Hi, I am Laiba


//this in global scope;
// We are outside any object or function here
console.log(this);  // In browser, this will print 'window' object


//this in a Regular Function (Not in an object)

function show() {
  // Not called by any object, so 'this' = window
  console.log(this);  // In browser: 'window'
}

show();

//Arrow Function inside Object – Careful!
const student = {
  name: "Ali",

  // Arrow function does NOT have its own 'this'
  sayName: () => {
    // 'this' will NOT be 'student', it will be window (wrong)
    console.log(this.name);  // undefined
  }
};

student.sayName();


//Fix Above Using Normal Function
const student1 = {
  name: "Ali",

  // Normal function has its own 'this'
  sayName: function () {
    // Now 'this' = student1
    console.log(this.name);  // Ali
  }
};

student1.sayName();


//this in Constructor Function
function Animal(type) {
  // 'this' = the new object being created
  this.type = type;
}

const cat = new Animal("Cat");
console.log(cat.type);  // Cat

