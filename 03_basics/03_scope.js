var c = 300;
let a = 300;
if(true){
    //block scope
    let a = 1;
    const b = 2;
    var c = 3;
    console.log(`OUTER ${a}`);
}
console.log(`OUTER ${a}`);//here it is out of scope ,//gets error
console.log(b);//here it is out of scope,//gets error
console.log(c);//var is not out of scope ,and gets printed
//here both c is var and have values,so c= 3 will be printed 