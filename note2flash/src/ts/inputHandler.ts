export interface Question {
  id: number;
  question: string;
  options: Map<string, number>[];
}

export interface Answer {
  questionID: number;
  answer: string;
}

// Take input and use chatgpt api to generate questions
// TODO: Add question param.
export function generateQuestions(): string {
  // TODO: Add OpenAI API

  // Dummy questions (for now), yes I did ask ChatGPT to generate them
  const dummyQuestions: string = `
    [
  {
    "id": 1,
    "question": "What is the largest mammal on Earth?",
    "options": [
      {"Blue Whale": true}, 
      {"Elephant": false}, 
      {"Giraffe": false} 
    ]
  },
  {
    "id": 2, 
    "question": "In which country was the sport of rugby union invented?",
    "options": [
      {"England": true}, 
      {"Scotland": false}, 
      {"Wales": false} 
    ]
  },
  {
    "id": 3,
    "question": "Who painted the Mona Lisa?",
    "options": [
      {"Leonardo da Vinci": true}, 
      {"Michelangelo": false}, 
      {"Raphael": false} 
    ]
  }
]
    `;

  return dummyQuestions;
}

// Write questions to questions.json
export function writeQuestions(input: string) {
  localStorage.setItem("json", input);
}

export function parseJSON(): Question[] {
  const questions: Question[] = JSON.parse(localStorage.getItem("json") || '{}') as Question[];

  return questions;
}

export function getAnswer(questionObject: Question): any {
  return questionObject.options[0];
}