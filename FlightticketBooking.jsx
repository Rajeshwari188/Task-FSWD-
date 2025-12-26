import React, { useState } from "react";

function FlightTicketBooking() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop page refresh

    // confirmation dialog box
    const confirmBooking = confirm(
      "Confirm Booking Details:\n\n" +
      "Name: " + name + "\n" +
      "From: " + from + "\n" +
      "To: " + to + "\n" +
      "Date: " + date
    );

    if (confirmBooking) {
      alert("✈️ Flight Ticket Booked Successfully!");
    } else {
      alert("❌ Booking Cancelled.");
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Flight Ticket Booking</h2>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="text"
          placeholder="From City"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="text"
          placeholder="To City"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Book Ticket
        </button>
      </form>
    </div>
  );
}

// Inline CSS
const styles = {
  container: {
    textAlign: "center",
    marginTop: "60px",
    fontFamily: "Arial"
  },
  heading: {
    color: "#2c3e50"
  },
  form: {
    width: "300px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "8px",
    fontSize: "14px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default FlightTicketBooking;
