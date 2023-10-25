// This is for my truths and lie game

// Global variable
let fname = "";

// My greet function
function greet() {
    let greetParagraph = document.getElementById('greet');

    // Get values from the form
    fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let age = document.getElementById('age').value;

    // Show the result
    greetParagraph.innerHTML = "Greetings, " + age + " yo " + fname + " " + lname + ".";
}

// Function for my trivia
function trivia() {
    // Get handle to the result paragraph
    let triviaAnswer = document.getElementById('trivia-answer');

    // Get result of selected trivia
    let chocolateSelected = document.getElementById('chocolate').checked;
    let fishSelected = document.getElementById('fish').checked;
    let honeySelected = document.getElementById('honey').checked;

    // Now process the answers
    if (chocolateSelected) {
        triviaAnswer.innerHTML = "That is correct, " + fname + "! Good job."
    }
    else if (fishSelected) {
        triviaAnswer.innerHTML = "I am dissapointed, " + fname + ". Dissapointed you ever thought I would like such a plague on humanity's sustenance."
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = "You were pretty close " + fname + ", but not quite right."
    }
    else {
        triviaAnswer.innerHTML = fname + ", I don't know what you messed up, but know that without a doubt you ruined something."
    }
}