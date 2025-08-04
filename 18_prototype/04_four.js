const User = {
    name: "chai",
    email : "chai@google.com"
}

const Teacher = {
    Video : true
}

const TeachingAssistant = {
    duration : 3
}

Teacher.__proto__ = User ; //through this we can access the things of User for Teacher

//modern syntax
Object.setPrototypeOf(TeachingAssistant,Teacher); //kinda works like classes

console.log(TeachingAssistant.name);