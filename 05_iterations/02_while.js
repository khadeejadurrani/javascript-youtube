let index =0;
while(index <=10){
    console.log(`Value of index is ${index}`);
    index = index+2;
}

//ARRAY in while loop
let myArray = ["flash","batman","superman"];

let arr =0;
while(arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr=arr+1;
}

//DO WHILE LOOP:
let score =1;
do{
    console.log(`Score is ${score}`);
    score++;
}while(score <=10);

//the result will be printed once even if the condition does not satisfy
let score1 =11;
do{
    console.log(`Score is ${score1}`);
    score1++;
}while(score1 <=10);
