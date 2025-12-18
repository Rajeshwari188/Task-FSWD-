import React, { useState } from "react";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: taskText, completed: false },
    ]);
    setTaskText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      {/* Embedded CSS */}
      <style>{`
        body {
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .dashboard {
          width: 420px;
          margin: 60px auto;
          background: white;
          border-radius: 12px;
          padding: 25px;
          font-family: "Segoe UI", sans-serif;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }

        .dashboard h2 {
          text-align: center;
          margin-bottom: 15px;
          color: #333;
        }

        .input-box {
          display: flex;
          gap: 10px;
        }

        input {
          flex: 1;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        .add-btn {
          background: #667eea;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 6px;
          cursor: pointer;
        }

        .add-btn:hover {
          background: #5a67d8;
        }

        ul {
          list-style: none;
          padding: 0;
          margin-top: 20px;
        }

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f4f6ff;
          padding: 10px;
          border-radius: 6px;
          margin-bottom: 10px;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .task-text {
          flex: 1;
          cursor: pointer;
        }

        .completed {
          text-decoration: line-through;
          color: gray;
        }

        .remove-btn {
          background: #ff4d4d;
          border: none;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          cursor: pointer;
        }

        .remove-btn:hover {
          background: #e60000;
        }

        .footer {
          text-align: center;
          margin-top: 15px;
          font-size: 12px;
          color: #777;
        }
      `}</style>

      <div className="dashboard">
        <h2>✨ Task Dashboard</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button className="add-btn" onClick={addTask}>
            Add
          </button>
        </div>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                className={`task-text ${task.completed ? "completed" : ""}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.text}
              </span>
              <button
                className="remove-btn"
                onClick={() => removeTask(task.id)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        <div className="footer">
          {tasks.length} task{tasks.length !== 1 ? "s" : ""} total
        </div>
      </div>
    </>
  );
};

export default TaskDashboard;
