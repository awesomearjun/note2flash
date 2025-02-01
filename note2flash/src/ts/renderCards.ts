import * as inputHandler from "./inputHandler.js";

const wrapper: HTMLDivElement = document.querySelector("#questionCards") as HTMLDivElement;
const questions: inputHandler.Question[] = inputHandler.parseJSON();

let id = 1;
questions.forEach((question: inputHandler.Question) => {
    let questionId: HTMLParagraphElement = document.createElement("p");
    questionId.textContent = `${question.id}`;
    questionId.id = "questionID";

    let questionName: HTMLHeadElement = document.createElement("h3");
    questionName.textContent = `${question.question}`;
    questionName.id = "questionName";

    wrapper.appendChild(questionId)
    wrapper.appendChild(questionName);

    question.options.forEach((option: any) => {
        let name: string = Object.keys(option)[0];

        let optionRadio: HTMLInputElement = document.createElement("input");
        optionRadio.value = JSON.stringify(option);
        optionRadio.name = `question${id}`;

        optionRadio.type = "radio";
        optionRadio.classList.add("option");

        let optionDescription: HTMLLabelElement = document.createElement("label");
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

let submit: HTMLButtonElement = document.createElement("button");
submit.type = "submit";
submit.textContent = "Submit";

wrapper.appendChild(submit);