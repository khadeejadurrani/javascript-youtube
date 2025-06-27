const name = "khadeeja";
const Id=345;

//concatenation or old way (do not encouraged much)
console.log(name + Id + "Value");

//string interpolation(encouraged method as you can use string methods here or do some other things ,like calculation etc
//or even call functions here)
console.log(`Hello my name is ${name} and my id is ${Id}`);

//when put in console of the browser ,it give the indexes of the string ,,starting from zero ,,
// the string is treated as object , like indees become the key and and each letter act as value of its index and 
//written in front the value

const newString = new String('khadeeja');

console.log(newString);

// to access a letter of the string
console.log(newString[0]); //gives first letter

//to access the protoypeof the string ,,as the string is treated as object so it will give object ({})
//the brackets of the object are given ,,representing the string is treated as the object

console.log(newString.__proto__);
console.log(newString.length);

//some of the simple methods of strings
console.log(newString.length);
console.log(newString.toUpperCase());
console.log(newString.charAt(2));
console.log(newString.indexOf('d'));

//printing a substring or part of the string
//substring() ,,does accept -ve value ..and if we give (0,4),then it will start from 0 index and will give 
//substring till 4-1 ,,it minuses 1 at the last index
const newString1 = newString.substring(0,4);
console.log(newString1);


const newString2 = newString.slice(0,4);
console.log(newString1);

//using trim,,,removes the extra spaces
const newStringOne="     khadeeja     ";
console.log(newStringOne);
console.log(newStringOne.trim());

//replacing a string part with another string
const url = "https://khadeeja.com/khadeeja%20durrani";
console.log(url.replace('%20','-'));

//asking questions from string
console.log(url.includes('durrani'));
console.log(url.includes('laiba'));

//converting string into array ,we want the string to be divided into different parts based on a - (dash)
//or any point and then each part is an array element
const newStringTwo = "khadeeja-durrani-20";
console.log(newStringTwo.split('-'));