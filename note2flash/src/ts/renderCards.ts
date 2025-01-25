import * as inputHandler from "./inputHandler.js"

let jsonP: HTMLParagraphElement = document.querySelector("#jsonP") as HTMLParagraphElement;

jsonP.textContent = `${JSON.stringify(inputHandler.parseJSON())}`;
console.table(inputHandler.parseJSON());
