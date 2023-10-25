// This is for my truths and lie game

// Global variable
let fname="";

// My greet function
function greet() {
    let greetParagraph=document.getElementById('greet');

    // Get values from the form
    fname=document.getElementById('fname').value;
    let lname=document.getElementById('lname').value;
    let age=document.getElementById('age').value;

    // Show the result
    greetParagraph.innerHTML="Greetings, " + age + " year old " + fname + " " + lname;
}