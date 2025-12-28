import React, { useState } from "react";

function BlogLayout() {
  // State for comments and input
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Add comment function
  const addComment = () => {
    if (comment === "") {
      alert("Please write a comment");
    } else {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial;
            background: linear-gradient(to right, #89f7fe, #66a6ff);
          }

          .container {
            max-width: 900px;
            margin: auto;
            padding: 20px;
          }

          .blog-box {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          .blog-title {
            color: #333;
          }

          .blog-content {
            color: #555;
          }

          .comment-box {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
          }

          textarea {
            width: 100%;
            padding: 10px;
            margin-top: 10px;
          }

          button {
            margin-top: 10px;
            padding: 8px 15px;
            border: none;
            background-color: #4CAF50;
            color: white;
            border-radius: 5px;
            cursor: pointer;
          }

          .comments {
            margin-top: 15px;
          }

          .single-comment {
            background: white;
            padding: 8px;
            border-radius: 5px;
            margin-bottom: 8px;
            border-left: 4px solid #4CAF50;
          }

          /* Responsive Design */
          @media (max-width: 600px) {
            .blog-box {
              padding: 15px;
            }
          }
        `}
      </style>

      <div className="container">
        {/* Blog Section */}
        <div className="blog-box">
          <h2 className="blog-title">My First Blog Post</h2>
          <p className="blog-content">
            This is a simple blog layout created using React.
            It is responsive and includes a real-time comment system.
          </p>
        </div>

        {/* Comment Section */}
        <div className="blog-box">
          <h3>Comments</h3>

          <div className="comment-box">
            <textarea
              rows="3"
              placeholder="Write your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>

            <button onClick={addComment}>Add Comment</button>
          </div>

          {/* Display comments in real-time */}
          <div className="comments">
            {comments.map((c, index) => (
              <div key={index} className="single-comment">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogLayout;
