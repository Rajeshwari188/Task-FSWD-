import React, { useState } from "react";

function AuthenticationSystem() {
  // States to store username, password and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Function that runs when login button is clicked
  const handleLogin = () => {
    // Simple hardcoded login details
    const correctUsername = "admin";
    const correctPassword = "1234";

    // Checking if input matches
    if (username === correctUsername && password === correctPassword) {
      alert("Login Successful!");
      setError(""); // clear error
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          .container {
            width: 300px;
            margin: 100px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            text-align: center;
            font-family: Arial;
          }

          input {
            width: 90%;
            padding: 8px;
            margin: 10px 0;
          }

          button {
            padding: 8px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
          }

          .error {
            color: red;
            margin-top: 10px;
          }
        `}
      </style>

      <div className="container">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        {/* Error alert */}
        {error && <div className="error">{error}</div>}
      </div>
    </>
  );
}

export default AuthenticationSystem;
