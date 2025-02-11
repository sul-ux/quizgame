import React, { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import { QuizState } from '../types';
import { ChevronRight, Trophy, RotateCcw } from 'lucide-react';

interface QuizProps {
  playerName: string;
}

export function Quiz({ playerName }: QuizProps) {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    selectedAnswer: null,
    isAnswered: false,
    score: 0,
    isComplete: false
  });

  const [progress, setProgress] = useState(0);
  const currentQuestion = questions[quizState.currentQuestion];

  useEffect(() => {
    if (quizState.isComplete) {
      const percentage = (quizState.score / questions.length) * 100;
      const duration = 1500;
      const increment = percentage / (duration / 16);
      let currentProgress = 0;

      const timer = setInterval(() => {
        currentProgress += increment;
        if (currentProgress >= percentage) {
          currentProgress = percentage;
          clearInterval(timer);
        }
        setProgress(currentProgress);
      }, 16);

      return () => clearInterval(timer);
    }
  }, [quizState.isComplete, quizState.score]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (quizState.isAnswered) return;
    
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      isAnswered: true,
      score: isCorrect ? prev.score + 1 : prev.score,
      isComplete: prev.currentQuestion === questions.length - 1
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        selectedAnswer: null,
        isAnswered: false
      }));
    }
  };

  const handlePlayAgain = () => {
    // Reload the page to get new random questions
    window.location.reload();
  };

  const getOptionClassName = (index: number) => {
    if (!quizState.isAnswered) {
      return "border border-gray-300 p-4 rounded-lg hover:bg-purple-50 cursor-pointer transition";
    }

    if (index === currentQuestion.correctAnswer) {
      return "border border-green-500 bg-green-50 p-4 rounded-lg text-green-700";
    }

    if (index === quizState.selectedAnswer) {
      return "border border-red-500 bg-red-50 p-4 rounded-lg text-red-700";
    }

    return "border border-gray-300 p-4 rounded-lg opacity-50";
  };

  if (quizState.isComplete) {
    const percentage = Math.round((quizState.score / questions.length) * 100);
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (progress / 100) * circumference;
    
    return (
      <div className="text-center p-8">
        <div className="mb-8">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
          <p className="text-gray-600">Great job, {playerName}!</p>
        </div>

        <div className="relative w-64 h-64 mx-auto mb-8">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="128"
              cy="128"
              r="90"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="16"
            />
            <circle
              cx="128"
              cy="128"
              r="90"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="16"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={offset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <span className="text-5xl font-bold text-gray-800">{Math.round(progress)}%</span>
              <p className="text-gray-500 mt-2">Score</p>
            </div>
          </div>
        </div>

        <div className="text-lg text-gray-700 mb-8">
          You got <span className="font-bold text-purple-600">{quizState.score}</span> out of{" "}
          <span className="font-bold text-purple-600">{questions.length}</span> questions correct
        </div>

        <button
          onClick={handlePlayAgain}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-200"
        >
          <RotateCcw className="w-5 h-5" />
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <p className="text-sm text-purple-600 font-medium">
          {currentQuestion.category} - Question {quizState.currentQuestion + 1} of {questions.length}
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-2">
          {currentQuestion.question}
        </h2>
      </div>

      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <div
            key={index}
            className={getOptionClassName(index)}
            onClick={() => handleAnswerSelect(index)}
          >
            {option}
          </div>
        ))}
      </div>

      {quizState.isAnswered && quizState.currentQuestion < questions.length - 1 && (
        <button
          onClick={handleNextQuestion}
          className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
        >
          Next Question
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}