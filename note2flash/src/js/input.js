"use strict";
const form = document.querySelector("#inputForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#textInput");
    if (input.value.trim() == "") {
        alert("Please enter notes or information in the text area");
    }
});
