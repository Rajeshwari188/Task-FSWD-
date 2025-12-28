import React, { useState } from "react";

function NotificationSystem() {
  // State to store notifications
  const [notifications, setNotifications] = useState([]);

  // Function to add a notification
  const addNotification = (type) => {
    let message = "";

    if (type === "success") message = "Data saved successfully!";
    if (type === "error") message = "Something went wrong!";
    if (type === "info") message = "New update available!";

    setNotifications([
      ...notifications,
      { id: Date.now(), type: type, message: message }
    ]);
  };

  // Function to remove notification
  const removeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          body {
            background: linear-gradient(to right, #ffecd2, #fcb69f);
            font-family: Arial;
          }

          .dashboard {
            width: 450px;
            margin: 50px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
          }

          h2 {
            text-align: center;
          }

          .buttons {
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
          }

          button {
            padding: 8px 12px;
            border: none;
            color: white;
            cursor: pointer;
            border-radius: 5px;
          }

          .successBtn { background-color: #4CAF50; }
          .errorBtn { background-color: #f44336; }
          .infoBtn { background-color: #2196F3; }

          .notification {
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
          }

          .success { background-color: #4CAF50; }
          .error { background-color: #f44336; }
          .info { background-color: #2196F3; }

          .close {
            cursor: pointer;
            font-weight: bold;
          }
        `}
      </style>

      <div className="dashboard">
        <h2>Dashboard Notifications</h2>

        {/* Buttons to add notifications */}
        <div className="buttons">
          <button className="successBtn" onClick={() => addNotification("success")}>
            Success
          </button>
          <button className="errorBtn" onClick={() => addNotification("error")}>
            Error
          </button>
          <button className="infoBtn" onClick={() => addNotification("info")}>
            Info
          </button>
        </div>

        {/* Notification list */}
        {notifications.map((note) => (
          <div key={note.id} className={`notification ${note.type}`}>
            <span>{note.message}</span>
            <span className="close" onClick={() => removeNotification(note.id)}>
              ✖
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default NotificationSystem;
