export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export interface QuizState {
  currentQuestion: number;
  selectedAnswer: number | null;
  isAnswered: boolean;
  score: number;
  isComplete: boolean;
}