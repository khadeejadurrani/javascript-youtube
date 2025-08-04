function setUsername(username){
    this.username = username;
    console.log("setUsername called");
}

function Student(username, email , password){
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const chai = new Student("chai","khadeeja@gmail.com","123");
console.log(chai);