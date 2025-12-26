import React, { useState } from "react";

function EventRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventName, setEventName] = useState("");

  function registerEvent(e) {
    e.preventDefault();

    // confirmation alert
    const confirmRegister = confirm(
      "Confirm Event Registration:\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Event: " + eventName
    );

    if (confirmRegister) {
      alert("🎉 Registration Successful!\nThank you for registering.");
    } else {
      alert("❌ Registration Cancelled.");
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Event Registration</h2>

      <form style={styles.form} onSubmit={registerEvent}>
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
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
          style={styles.input}
        >
          <option value="">Select Event</option>
          <option value="Tech Conference">Tech Conference</option>
          <option value="Workshop">Workshop</option>
          <option value="Cultural Fest">Cultural Fest</option>
        </select>

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}

// Inline CSS with colorful background
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial"
  },
  heading: {
    color: "#2c3e50",
    marginBottom: "20px"
  },
  form: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },
  input: {
    padding: "8px",
    fontSize: "14px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#9b59b6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px"
  }
};

export default EventRegistration;
