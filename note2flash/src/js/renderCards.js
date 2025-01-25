import * as inputHandler from "./inputHandler.js";
let jsonP = document.querySelector("#jsonP");
jsonP.textContent = `${JSON.stringify(inputHandler.parseJSON())}`;
console.table(inputHandler.parseJSON());
