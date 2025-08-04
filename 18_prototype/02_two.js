//PART 1
const student={
    name:"khadeeja",
    score: 34
}

console.log(student.toString());

//PART 2
class Student{
    constructor(name){
        this.name = name;
    }
}
Student.prototype.sayHello = function(){
    console.log(`hello im ${this.name}`);
}

const register  = new Student("khadeeja");
register.sayHello();

//here Student has name as direct property but sayhello as indirect one ,it is a prototype
console.log(Student.hasOwnProperty("name"));
console.log(Student.hasOwnProperty("sayHello"));