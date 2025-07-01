// 1. Basic Arrow Function (1-liner)

// Traditional function
function sayHi(name) {
  return "Hi, " + name;
}

// Arrow function version
const sayHiArrow = (name) => "Hi, " + name;

console.log(sayHiArrow("Laiba"));  // Output: Hi, Laiba

//2.Arrow Function with Multiple Parameters
const add = (a, b) => a + b;

console.log(add(2, 3));  // Output: 5


//3.Arrow Function with Single Parameter (No parentheses needed)
const double = x => x * 2;

console.log(double(4));  // Output: 8


//4.Arrow Function with Function Body (Need {} and return)
const multiply = (x, y) => {
  const result = x * y;
  return result;
};

console.log(multiply(3, 4));  // Output: 12

//5. Common Mistake (Using {} but forgetting return)
const subtract = (a, b) => {
  a - b;  // ❌ This does nothing
};

console.log(subtract(5, 3));  // Output: undefined

//to fix the above code use return
const subtract1 = (a, b) => {
  return a - b;
};

//6. Returning an Object → Wrap in ()
const getUser = () => ({ name: "Ali", age: 20 });

console.log(getUser());  // Output: { name: "Ali", age: 20 }


//writing object Without ():
const getUser1 = () => { name: "Ali" };  // undefined


//7. Arrow Function Returning an Array
const getFruits = () => ["Apple", "Banana", "Mango"];

console.log(getFruits());  // Output: ["Apple", "Banana", "Mango"]


//8. Arrow Function and this (Inherited)
const person = {
  name: "Laiba",
  speak: () => {
    //points to the window function
    console.log(this.name);  // undefined
  }
};

person.speak();
