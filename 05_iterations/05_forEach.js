const coding = ["js" , "ruby" , "java" , "python" , "cpp"];

//FOR EACH LOOP:
coding.forEach(function (item){
    console.log(item);
})

//arrow function use in for-each loop
coding.forEach((value) => {
    console.log(value);
})

//here we define a function where the fucntion takes an itema nd then simply prints that item
function printMe(item){
    console.log(item);
}
//can we pass on the above function??yess we can

coding.forEach(printMe); //just pass reference of the function here

//for-each loop also takes other paramteres other than just item
const coding1 = ["webdev" , "AI" , "flutter" , "DataScience"];
coding1 .forEach((item,index,arr)=>{
    console.log(item,index,arr);
});

const myCoding = [
    {
        languageName : "javascript",
        languageFile : "js"
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
        languageName : "python",
        languageFile : "py"
    }
]
myCoding.forEach((item) =>{
    console.log(item.languageName);
})