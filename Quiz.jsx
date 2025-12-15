import { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language is used for React?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleClick = (option) => {
    setSelected(option);

    if (option === questions[current].answer) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((c) => c + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 700);
  };

  return (
    <>
      {/* CSS */}
      <style>{`
        body {
          margin: 0;
          font-family: "Poppins", sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .quiz-card {
          background: white;
          width: 360px;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          animation: fadeIn 0.4s ease-in-out;
          text-align: center;
        }

        .quiz-card h2 {
          margin-bottom: 15px;
          color: #333;
        }

        .quiz-card h4 {
          color: #764ba2;
          margin-bottom: 10px;
        }

        .options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 15px;
        }

        .option-btn {
          padding: 12px;
          border-radius: 10px;
          border: none;
          font-size: 15px;
          cursor: pointer;
          background: #f0f0f0;
          transition: all 0.3s ease;
        }

        .option-btn:hover {
          background: #e0e0ff;
          transform: scale(1.02);
        }

        .option-btn.correct {
          background: #4caf50;
          color: white;
        }

        .option-btn.wrong {
          background: #f44336;
          color: white;
        }

        .option-btn:disabled {
          cursor: not-allowed;
        }

        .score {
          margin-top: 15px;
          font-weight: bold;
        }

        .score span {
          color: #667eea;
        }

        .result {
          background: linear-gradient(135deg, #43cea2, #185a9d);
          color: white;
        }

        .emoji {
          font-size: 28px;
          margin-top: 10px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* UI */}
      {finished ? (
        <div className="quiz-card result">
          <h2>🎉 Quiz Completed!</h2>
          <p>
            Your Score: <strong>{score}</strong> / {questions.length}
          </p>
          <div className="emoji">🚀✨🎯</div>
        </div>
      ) : (
        <div className="quiz-card">
          <h4>
            Question {current + 1} / {questions.length}
          </h4>

          <h2>{questions[current].question}</h2>

          <div className="options">
            {questions[current].options.map((option) => {
              let className = "option-btn";
              if (selected) {
                if (option === questions[current].answer) {
                  className += " correct";
                } else if (option === selected) {
                  className += " wrong";
                }
              }

              return (
                <button
                  key={option}
                  className={className}
                  onClick={() => handleClick(option)}
                  disabled={selected !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="score">
            Score: <span>{score}</span>
          </div>
        </div>
      )}
    </>
  );
}
