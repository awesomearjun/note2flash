import * as inputHandler from "./inputHandler.js";
const form = document.querySelector("#inputForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#textInput");
    // If the input is blank (including whitespace)
    if (input.value.trim() == "") {
        alert("Please enter notes or information in the text area");
    }
    window.location.href = "../routes/cards.html";
    let questions = inputHandler.generateQuestions();
    inputHandler.writeQuestions(questions);
});
