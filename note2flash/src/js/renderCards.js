import * as inputHandler from "./inputHandler.js";
const wrapper = document.querySelector("#questionCards");
const questions = inputHandler.parseJSON();
let id = 1;
questions.forEach((question) => {
    let questionId = document.createElement("p");
    questionId.textContent = `${question.id}`;
    questionId.id = "questionID";
    let questionName = document.createElement("h3");
    questionName.textContent = `${question.question}`;
    questionName.id = "questionName";
    wrapper.appendChild(questionId);
    wrapper.appendChild(questionName);
    question.options.forEach((option) => {
        let name = Object.keys(option)[0];
        let optionRadio = document.createElement("input");
        optionRadio.value = JSON.stringify(option);
        optionRadio.name = `question${id}`;
        optionRadio.type = "radio";
        optionRadio.classList.add("option");
        let optionDescription = document.createElement("label");
        optionDescription.textContent = name;
        optionDescription.htmlFor = optionRadio.value;
        optionDescription.classList.add("optionName");
        wrapper.appendChild(optionRadio);
        wrapper.appendChild(optionDescription);
        wrapper.appendChild(document.createElement("br"));
    });
    id++;
});
wrapper.appendChild(document.createElement("br"));
wrapper.appendChild(document.createElement("br"));
let submit = document.createElement("button");
submit.type = "submit";
submit.textContent = "Submit";
wrapper.appendChild(submit);
