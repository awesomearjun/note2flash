import * as inputHandler from "./inputHandler.js";

let form: HTMLFormElement = document.querySelector("#questionCards") as HTMLFormElement;

form.addEventListener("submit", (event: any) => {
    event.preventDefault();

    const info: inputHandler.Question[] = inputHandler.parseJSON();

    let questions: HTMLCollectionOf<HTMLHeadElement> = document.getElementsByClassName("optionName") as HTMLCollectionOf<HTMLHeadElement>;
    let options: HTMLCollectionOf<HTMLHeadElement> = document.getElementsByClassName("option") as HTMLCollectionOf<HTMLHeadElement>;

    console.log(JSON.stringify(info[0].options[0]["Blue Whale"]));
});