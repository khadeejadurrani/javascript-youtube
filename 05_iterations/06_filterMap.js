//EXAMPLE OF HOW FOR EACH LOOP DOESN'T RETURN ANYTHING:
const coding = ["js","riby","java","python","cpp"];

const values = coding.forEach((item) =>{
    console.log(item);
})
console.log(values);

const myNums = [1 ,2 , 3 , 4, 5 ,6 ,7 ,8 ,9,10];
const newNum1 = myNums.filter( (num) => num>4 );
console.log(newNum1);


const newNum = [];

myNums.forEach( (num) => {
    if(num > 4) {
        newNum.push(num);
    }
})

console.log(newNum);