//OOPs in javascript
//writing just a simple code now
const student = {
    name : "Khadeeja",
    grade : "A",
    dataNo : 2,

    greet :function(){
        console.log("hello  I am ",this.name);
    }
};
student.greet();