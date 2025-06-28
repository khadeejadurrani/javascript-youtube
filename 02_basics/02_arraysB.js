const marvel_heroes = ["thor" , "ironman" , "spiderman"];
const dc_heroes = ["superman" , "flash" , "batman"];

marvel_heroes.push(dc_heroes);

console.log(marvel_heroes);

console.log(marvel_heroes[3][1]);


marvel_heroes.concat(dc_heroes);
console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes);

//spreading operation
const all_new_heros = [...marvel_heroes , ...dc_heroes];

console.log(all_new_heros);

const another_array = [1 , 2 , 3 , [4 , 5 , 6] , 7 ,[6 ,7 , [4 , 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//asking question from the array ,,finding if this particular thing is array or not ,,gives result in boolean
console.log(Array.isArray("Khadeeja"));

//making array from a string ,or any other thing ,,it tries to amke an array possible ,and which feels right to it
//gives  empty array []  when it cant make an array from the given thing
console.log(Array.from("Khadeeja"));//makes each letter of the name an element of the array

console.log(Array.from({name: "hitesh"})); //js get confused here ,cant make this input an array ,,gives empty array[]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));//makes array from this input


