import { useState } from "react";

export default function Poll() {
  const question = "Which topic should we revise next?";
  const options = ["React Hooks", "CSS Flexbox", "JavaScript Basics", "APIs"];

  const [votes, setVotes] = useState(
    options.reduce((acc, opt) => ({ ...acc, [opt]: 0 }), {})
  );
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const vote = (option) => {
    if (hasVoted) return;

    setVotes((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
    setHasVoted(true);
  };

  return (
    <>
      {/* CSS */}
      <style>{`
        body {
          margin: 0;
          font-family: "Segoe UI", sans-serif;
          background: linear-gradient(135deg, #1d2671, #c33764);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .poll-card {
          background: white;
          width: 380px;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
          animation: fadeIn 0.4s ease;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .option {
          margin-bottom: 15px;
        }

        .vote-btn {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-size: 15px;
          background: #f3f3f3;
          transition: 0.3s;
        }

        .vote-btn:hover {
          background: #e0e0ff;
        }

        .vote-btn:disabled {
          cursor: not-allowed;
          background: #ddd;
        }

        .bar {
          height: 12px;
          background: #eee;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 6px;
        }

        .bar-fill {
          height: 100%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          transition: width 0.4s ease;
        }

        .count {
          font-size: 13px;
          margin-top: 4px;
          color: #555;
        }

        .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 14px;
          color: #777;
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
      <div className="poll-card">
        <h2>📊 Live Classroom Poll</h2>
        <p><strong>{question}</strong></p>

        {options.map((opt) => {
          const percent =
            totalVotes === 0 ? 0 : Math.round((votes[opt] / totalVotes) * 100);

          return (
            <div key={opt} className="option">
              <button
                className="vote-btn"
                onClick={() => vote(opt)}
                disabled={hasVoted}
              >
                {opt}
              </button>

              <div className="bar">
                <div
                  className="bar-fill"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>

              <div className="count">
                {votes[opt]} vote(s) — {percent}%
              </div>
            </div>
          );
        })}

        <div className="footer">
          Total Votes: <strong>{totalVotes}</strong>
        </div>
      </div>
    </>
  );
}
