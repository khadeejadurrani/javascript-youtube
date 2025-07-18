const form = document.querySelector('form');

form.addEventListener('submit' , function(e)){
    e.preventDefault();

    parseInt(document.querySelector('#height').value);
}