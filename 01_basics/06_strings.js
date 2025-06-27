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
