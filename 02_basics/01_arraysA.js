const myArr = [0 , 1 , 2 , 3 , 4 , 5];

//arrays can have mutiple datatypes together
 const myHobbies = ["reading" , "cycling" , "jewellery making"];

 //another way to declare variable
 const myArr2 = new Array(1 , 2, 3 , 4) //js converts it to sqaure brackets itself

 console.log(myArr[0]); //accessing array element

 //adding an element at the end of the array
 myArr.push(6);
 console.log(myArr);

 //removing an eleemt from the last of the array
 myArr.pop();
 console.log(myArr);

 //adding an element to the start of the array
 myArr.unshift(7);//disturbs the indexig of the each element
 console.log(myArr);

 //removing an element from the start of the array
 myArr.shift();
 console.log(myArr);

 //question from the array ,asking if this particular element is present in the array
 console.log(myArr.includes(9));

 //accessing index of a particular element
 console.log(myArr.indexOf(5));

 //joining the elements of the array and writing it into a string form ,,also converts the array into a string
 //also includes commas  in the string ,when converting from array to the string

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);

console.log(typeof (newArr));

//using slice and splice

const myn = [6,7,8,9,10];
console.log(myn);

//slice : doesnot includes the range in the subarray ,it gets from the array 
//slice doesnot modify the array ,just gives hte result

const myn1 = myn.slice(1,3);
console .log(myn1);

//splice: includes the range in the subarray ,it gets from the array
//slice modify the array ,removes the subarray it gave in the result fromt he original array

const myn2 = myn.splice(1,3);
console .log(myn2);

console.log(myn);