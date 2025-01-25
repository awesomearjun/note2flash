"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQuestions = generateQuestions;
exports.writeQuestions = writeQuestions;
exports.parseJSON = parseJSON;
const fs = require("fs");
// Take input and use chatgpt api to generate questions
function generateQuestions() {
    // TODO: Add OpenAI API
    // Dummy questions (for now), yes I did ask ChatGPT to generate them
    const dummyQuestions = `
    [
  {
    "id": 1,
    "question": "What is the largest mammal on Earth?",
    "options": [
      {"Blue Whale", true}, 
      {"Elephant", false}, 
      {"Giraffe", false} 
    ]
  },
  {
    "id": 2, 
    "question": "In which country was the sport of rugby union invented?",
    "options": [
      {"England", true}, 
      {"Scotland", false}, 
      {"Wales", false} 
    ]
  },
  {
    "id": 3,
    "question": "Who painted the Mona Lisa?",
    "options": [
      {"Leonardo da Vinci", true}, 
      {"Michelangelo", false}, 
      {"Raphael", false} 
    ]
  }
]
    `;
    return dummyQuestions;
}
// Write questions to questions.json
function writeQuestions(input) {
    fs.writeFile("../questions.json", input, (error) => {
        if (error)
            console.error(`❌Error tryna write to questions.json:\n${error}`);
        console.log("✅Did it!");
    });
}
async function parseJSON() {
    // Fetch data from response.json
    const response = await fetch("../questions.json");
    if (!response.ok)
        console.error("❌Response error");
    // Convert to array of questions type
    const questions = JSON.parse(await response.json());
    return questions;
}
