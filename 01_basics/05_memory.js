//stack memeory ,,where you atually wokr on the copy of the original variable so even if you make
//a change in the second Name varaible ,,the change is made in copy of the second name ,while original 
// remain equal to first nam ,as written in code ,and  in output the value of copy is printed/given
let firstName = "khadeeja";
let secondName=firstName;
secondName="Durrani";

console.log(firstName);
console.log(secondName);

//Stack memory ,,where if changes are made then original value is changed
let userOne={
    email:"user@google.com",
    idNo:"123rte"
};

let userTwo=userOne;
//here now changes will be made in the origianl and value be changed even in the userOne
userTwo.email="khadeeja@email.com";

console.log(userOne.email);
console.log(userTwo.email);


