//for loop
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

for (let i = 0; i < 10; i++) {
    const Element = i;
    if(Element ==5){
        console.log("5 is the best number");
    }
    console.log(Element);
}

//using loop inside loop
for(let i=0;i<=10;i++){
    console.log(`Outer loop value: ${i}`);
    for(let j=0 ;j<=10;j++){
        // console.log(`Inner loop value: ${j} and outer loop ${i}`);

        //doing multiplication here
        console.log(i+'*'+j+'= '+i*j);
    }
}

//using loop for array
let myArray = ["flash" , "batman" ,"superman"]
for(let index =0;index < myArray.length ;index++){
    const element = myArray[index];
    console.log(element);
}

//break 
for (let index = 1; index < 20; index++) {
    //we want to get out of this loop as soon as index=5 ,when 5 is detected
    if(index==5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
}

//continue
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
        //here 5 will be skipped and the loop will contiue on to printing 6
    }
    console.log(`Value of i is ${index}`);
}


