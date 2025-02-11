import { Question } from '../types';

const allQuestions: Question[] = [
  // Science Category
  {
    id: 1,
    category: "Science",
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Fe", "Cu"],
    correctAnswer: 1
  },
  {
    id: 2,
    category: "Science",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1
  },
  {
    id: 3,
    category: "Science",
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: 2
  },
  // ... Add more science questions

  // History Category
  {
    id: 21,
    category: "History",
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
    correctAnswer: 2
  },
  {
    id: 22,
    category: "History",
    question: "In which year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correctAnswer: 2
  },
  {
    id: 23,
    category: "History",
    question: "Which ancient wonder was located in Alexandria?",
    options: ["The Great Pyramid", "The Lighthouse", "The Hanging Gardens", "The Colossus"],
    correctAnswer: 1
  },
  // ... Add more history questions

  // Geography Category
  {
    id: 41,
    category: "Geography",
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: 2
  },
  {
    id: 42,
    category: "Geography",
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: 2
  },
  {
    id: 43,
    category: "Geography",
    question: "Which desert is the largest in the world?",
    options: ["Gobi", "Sahara", "Arabian", "Antarctic"],
    correctAnswer: 3
  },
  // ... Add more geography questions

  // Literature Category
  {
    id: 61,
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: 1
  },
  {
    id: 62,
    category: "Literature",
    question: "What is the first book in J.K. Rowling's Harry Potter series?",
    options: ["Chamber of Secrets", "Prisoner of Azkaban", "Philosopher's Stone", "Goblet of Fire"],
    correctAnswer: 2
  },
  // ... Add more literature questions

  // Technology Category
  {
    id: 81,
    category: "Technology",
    question: "Who is the co-founder of Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"],
    correctAnswer: 1
  },
  {
    id: 82,
    category: "Technology",
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing Unit"],
    correctAnswer: 0
  }
  // ... Continue adding more questions for each category
];

// Function to shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Export 10 random questions
export const questions = shuffleArray(allQuestions).slice(0, 10);