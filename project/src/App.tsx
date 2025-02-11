import React, { useState } from 'react';
import { Brain, Play, Trophy } from 'lucide-react';
import { Quiz } from './components/Quiz';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [isStarting, setIsStarting] = useState(false);

  const handleStartGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      setIsStarting(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        {!isStarting ? (
          <>
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Brain className="w-16 h-16 text-purple-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Brain Quest</h1>
              <p className="text-gray-600">Test your knowledge and have fun!</p>
            </div>

            <form onSubmit={handleStartGame} className="space-y-6 max-w-md mx-auto">
              <div>
                <label htmlFor="playerName" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  id="playerName"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="John Doe"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Start Quiz
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-500">
                <div>
                  <div className="font-semibold text-purple-600">5</div>
                  Questions
                </div>
                <div>
                  <div className="font-semibold text-purple-600">2</div>
                  Minutes
                </div>
                <div>
                  <div className="font-semibold text-purple-600">100</div>
                  Points
                </div>
              </div>
            </div>
          </>
        ) : (
          <Quiz playerName={playerName} />
        )}
      </div>
    </div>
  );
}

export default App;