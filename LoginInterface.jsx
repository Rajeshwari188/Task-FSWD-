import React, { useState } from "react";

function LoginInterface() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!username || !password || !role) {
      alert("Please fill all fields!");
      return;
    }

    // Confirmation dialog
    const confirmLogin = confirm(
      "Confirm Login:\n\n" +
      "Username: " + username + "\n" +
      "Role: " + role
    );

    if (confirmLogin) {
      // Redirect based on role (here, just showing alert)
      if (role === "Admin") {
        alert("✅ Welcome Admin! Redirecting to Admin Dashboard...");
      } else if (role === "User") {
        alert("✅ Welcome User! Redirecting to User Home Page...");
      } else if (role === "Guest") {
        alert("✅ Welcome Guest! Redirecting to Guest Page...");
      }
      // Clear form after login
      setUsername("");
      setPassword("");
      setRole("");
    } else {
      alert("❌ Login Cancelled.");
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login Interface</h2>

        <form style={styles.form} onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            style={styles.input}
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Guest">Guest</option>
          </select>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// Inline CSS
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f093fb, #f5576c)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial"
  },
  formContainer: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    textAlign: "center"
  },
  heading: {
    color: "#2c3e50",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  input: {
    padding: "10px",
    fontSize: "14px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#c0392b",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px"
  }
};

export default LoginInterface;
