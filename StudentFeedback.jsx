import React, { useState } from "react";

function StudentFeedback() {
  // State for rating and comments
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  // Function when submit button is clicked
  const handleSubmit = () => {
    if (rating === "" || comment === "") {
      alert("Please fill all fields");
    } else {
      alert("Feedback Submitted Successfully!");
      setRating("");
      setComment("");
    }
  };

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          body {
            background: linear-gradient(to right, #74ebd5, #ACB6E5);
          }

          .main-box {
            width: 400px;
            margin: 80px auto;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            font-family: Arial;
          }

          .box {
            border: 1px solid #ccc;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
            background-color: #f9f9f9;
          }

          h2 {
            text-align: center;
            color: #333;
          }

          select, textarea {
            width: 100%;
            padding: 8px;
            margin-top: 8px;
          }

          button {
            width: 100%;
            padding: 10px;
            background-color: #ff7a18;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
        `}
      </style>

      <div className="main-box">
        <h2>Student Feedback</h2>

        {/* Rating Box */}
        <div className="box">
          <label>Rate Your Experience:</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">Select Rating</option>
            <option value="1">⭐ 1 - Poor</option>
            <option value="2">⭐⭐ 2 - Fair</option>
            <option value="3">⭐⭐⭐ 3 - Good</option>
            <option value="4">⭐⭐⭐⭐ 4 - Very Good</option>
            <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
          </select>
        </div>

        {/* Comment Box */}
        <div className="box">
          <label>Your Comments:</label>
          <textarea
            rows="4"
            placeholder="Write your feedback..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        <button onClick={handleSubmit}>Submit Feedback</button>
      </div>
    </>
  );
}

export default StudentFeedback;
