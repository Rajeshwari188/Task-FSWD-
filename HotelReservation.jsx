import React, { useState } from "react";

function HotelReservation() {
  const [name, setName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [days, setDays] = useState("");

  function reserveRoom(e) {
    e.preventDefault();

    // confirmation dialog
    const confirmReservation = confirm(
      "Confirm Reservation Details:\n\n" +
      "Name: " + name + "\n" +
      "Room Type: " + roomType + "\n" +
      "Number of Days: " + days
    );

    if (confirmReservation) {
      alert("🏨 Room Reserved Successfully!\nEnjoy your stay!");
    } else {
      alert("❌ Reservation Cancelled.");
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Hotel Reservation System</h2>

      <form style={styles.form} onSubmit={reserveRoom}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          required
          style={styles.input}
        >
          <option value="">Select Room Type</option>
          <option value="Single Room">Single Room</option>
          <option value="Double Room">Double Room</option>
          <option value="Deluxe Room">Deluxe Room</option>
        </select>

        <input
          type="number"
          placeholder="Number of Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Reserve Room
        </button>
      </form>
    </div>
  );
}

// Inline CSS with colorful background
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4)",
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
    width: "300px",
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
    backgroundColor: "#e67e22",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px"
  }
};

export default HotelReservation;
