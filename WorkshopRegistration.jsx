import React, { useState } from "react";

function WorkshopRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [experience, setExperience] = useState("");

  function registerWorkshop(e) {
    e.preventDefault();

    // confirm dialog
    const confirmRegister = confirm(
      "Confirm Registration Details:\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Workshop: " + workshop + "\n" +
      "Experience: " + experience
    );

    if (confirmRegister) {
      alert("🎉 Registration Successful!");
      // clear form after submission
      setName("");
      setEmail("");
      setWorkshop("");
      setExperience("");
    } else {
      alert("❌ Registration Cancelled.");
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Online Workshop Registration</h2>

        <form style={styles.form} onSubmit={registerWorkshop}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <select
            value={workshop}
            onChange={(e) => setWorkshop(e.target.value)}
            required
            style={styles.input}
          >
            <option value="">Select Workshop</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="AI & ML">AI & ML</option>
          </select>

          <input
            type="text"
            placeholder="Experience Level (Beginner/Intermediate/Expert)"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        {/* Live Preview */}
        <div style={styles.preview}>
          <h3>Live Preview:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Workshop:</strong> {workshop}</p>
          <p><strong>Experience:</strong> {experience}</p>
        </div>
      </div>
    </div>
  );
}

// Inline CSS
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f6d365, #fda085)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },
  formContainer: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "400px",
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
    gap: "12px",
    marginBottom: "20px"
  },
  input: {
    padding: "10px",
    fontSize: "14px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#16a085",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px"
  },
  preview: {
    textAlign: "left",
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9"
  }
};

export default WorkshopRegistration;
