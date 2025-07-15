/* 
<div id="parent">
        <h2>🍌🍍FRUIT🍇🍉</h2>
        <ul>
            <li id="apple">APPLE</li>
            <li id="orange">ORANGE</li>
            <li id="pineapple">PINEAPPLE</li>
        </ul>
    </div>
    */

    alert("JS file is working!");
    //getting the banana list
const orange = document.getElementById("orange");

//getting the parentnode(including all spaces and text) through banana 
console.log("parent node:",orange.parentNode);

//getting parent element only here ,like the spaces and new line enter are not included
console.log("parent Element:",orange.parentElement);

//getting the grandparent element
console.log(orange.parentElement.parentElement);

//printing the siblings here
console.log("next sibling(element): ",orange.nextElementSibling);//getting element here
console.log("previous sibling(element:",orange.previousSibling);//getting node here

//printing children of parent div and workign with parent div
const ul = orange.parentElement ; //making a variable and storing the parent div
//printing children Elements
console.log("printing children elements of the parents(only elements) :",ul.children);

//printing the child nodes
console.log("printing children nodes of the parents(child nodes) :",ul.childNodes);

//first element child printing
console.log("first element of the parent div:",ul.firstElementChild);

//last element child printing
console.log("last element of the parent div: ",ul.lastElementChild);

//counting the total children elements in parent div
console.log("total element children: ",ul.childElementCount);

//printing the node type and node names
ul.childNodes.forEach(node => {
    console.log(`Node is:${node.nodeName}, Node type is : ${node.nodeType}`);
});
