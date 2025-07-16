const buttons = document.querySelectorAll('.button'); //selects all buttons
const body = document.querySelector('body'); //selects the body og html page to chnage its color later

buttons.forEach(function (button){
    console.log(button); //to check if each button is printed one by one

    //below the event listener is clcik and e is jsut the parameter of function
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
    
    if(e.target.id==='grey'){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='red'){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='blue'){
        body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='yellow'){
        body.style.backgroundColor = e.target.id;
    }
});
})