const fs = require("fs");

export interface Question {
    id: number;
    question: string;
    options: [string, boolean];
}

// Take input and use chatgpt api to generate questions
export function generateQuestions(): string {
    // TODO: Add OpenAI API

    // Dummy questions (for now), yes I did ask ChatGPT to generate them
    const dummyQuestions: string = `
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
export function writeQuestions(input: string) {
    fs.writeFile("../questions.json", input, (error: Error | null) => {
        if (error) console.error(`❌Error tryna write to questions.json:\n${error}`);
        console.log("✅Did it!");
    });
}

export async function parseJSON(): Promise<Question[]> {
    // Fetch data from response.json
    const response: Response = await fetch("../questions.json");
    if (!response.ok) console.error("❌Response error");

    // Convert to array of questions type
    const questions: Question[] = JSON.parse(await response.json()) as Question[];

    return questions;
}