//for-of loop
/* array can hold strings as well as objects
["","",""]
[{},{},{}]
*/

const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
};

//strings are also taken as array and each letter can be printed one by one
const greetings = 'Hello World';
for(const greet of greetings){
    console.log(`Each char is :${greet} `);
}

//MAPS
const map = new Map();
map.set('IN',"India");
map.set('USA',"United states of America");
map.set('FR',"France");

//printing the map
console.log(map);

for(const key of map){
    console.log(key); //prints the whole map ,instead of just key //prints in the form of array
};

//to print both key and value together of the map ,use []
for(const [key,value] of map){
    console.log(key +":-"+value);
};

//for of loop is not used for printing object ,it gives error 
