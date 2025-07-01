function one(){
    const username = "hitesh";

    //here aming a function inside another fucntion
    function two(){
        const website = "youtube";
        console.log(username);
    }

    two(); //accessing two() function inside one()
}

//accessing one() here
one();


//checking scope in if statement
if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);//gives error
}
console.log(username); //gives error ,out of scope

///****** INTERESTING  CONCEPT ******/
function addOne(num){
    return num+1;
}
addOne(5);

const addTwo = function(num){
    return num+2;
}
addTwo(7);