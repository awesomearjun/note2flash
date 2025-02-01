import * as inputHandler from "./inputHandler.js";
let form = document.querySelector("#questionCards");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const info = inputHandler.parseJSON();
    let questions = document.getElementsByClassName("optionName");
    let options = document.getElementsByClassName("option");
    console.log(JSON.stringify(info[0].options[0]["Blue Whale"]));
});
