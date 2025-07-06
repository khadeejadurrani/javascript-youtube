const myObject = {
    cpp : "C++",
    js: "javascript",
    rb : "ruby",
    swift : "swift"
}

//for in loop used here
for(const key in myObject){
    console.log(key);
}

//another method
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

/*array printing by for-in loop ,,when key is put ,it gives index of the array and when array[key]
 is put then values of the array are printing */

const programming = ["js" , "rb" , "py" , "java" , "cpp"];

for(const key in programming){
    console.log(key);//prints the index of programming array
}

for(const key in programming){
    console.log(programming[key]);//prints the value of array one by one
}

//printing map using for-in loop
const map = new Map();
map.set('IN',"India");
map.set('USA',"United states of America");
map.set('FR',"France");

for (const key in map) {
    console.log(key); //here nothing will be printed ,doesnt give any error
}