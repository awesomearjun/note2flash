import * as inputHandler from "./inputHandler.js"

const form: HTMLFormElement = document.querySelector("#inputForm") as HTMLFormElement;

form.addEventListener("submit", (event: any) => {
    event.preventDefault();

    const input: HTMLTextAreaElement = document.querySelector("#textInput") as HTMLTextAreaElement;

    // If the input is blank (including whitespace)
    if (input.value.trim() == "") {
        alert("Please enter notes or information in the text area");
    } else {
        window.location.href = "../routes/cards.html";

        let questions: string = inputHandler.generateQuestions();
        inputHandler.writeQuestions(questions);
    }

});