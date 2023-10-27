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

function lie() {
    // Get handle to the result paragraph
    let lieAnswer = document.getElementById('lie-answer');

    // Get result of selected lie
    let dogSelected = document.getElementById('dog').checked;
    let techSelected = document.getElementById('tech').checked;
    let injurySelected = document.getElementById('injury').checked;

    // Now process the answers
    if (dogSelected) {
        lieAnswer.innerHTML = "That is incorrect " + fname + ", I do have a dog named Lola."
    }
    else if (techSelected) {
        lieAnswer.innerHTML = "That is incorrect " + fname + ", I do enjoy coding and technology. That is why I made this page."
    }
    else if (injurySelected) {
        lieAnswer.innerHTML = "That is correct " + fname + ", Good job. I have gotten a major concussion before."
    }
    else {
        lieAnswer.innerHTML = fname + ", I don't know what you messed up, but know that without a doubt you ruined something."
    }
}

function truth() {
    // Get handle to the result paragraph
    let truthAnswer = document.getElementById('truth-answer');

    // Get result of selected truth
    let oneSelected = document.getElementById('').checked;
    let twoSelected = document.getElementById('').checked;
    let threeSelected = document.getElementById('').checked;

    // Now process the answers
    if (oneSelected) {
        truthAnswer.innerHTML = "There are two truths, " + fname + ". That means choose two."
    }
    else if (twoSelected || threeSelected) {
        truthAnswer.innerHTML = "There are two truths, " + fname + ". That means choose two."
    }
    else if (oneSelected && twoSelected) {
        truthAnswer.innerHTML = "Almost had it, " + fname + ". ."
    }
    else if (twoSelected && threeSelected) {
        truthAnswer.innerHTML = "Almost had it, " + fname + ". ."
    }
    else if (oneSelected && threeSelected) {
        truthAnswer.innerHTML = "You got it, " + fname + "! ."
    }
    else {
        triuthAnswer.innerHTML = fname + ", I don't know what you messed up, but know that without a doubt you ruined something."
    }
}