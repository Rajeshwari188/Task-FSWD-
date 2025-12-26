import React, { useState } from "react";

function CabBooking() {
  const [name, setName] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [cabType, setCabType] = useState("");

  function bookCab(e) {
    e.preventDefault();

    // confirm dialog box
    const confirmBooking = confirm(
      "Confirm Cab Booking Details:\n\n" +
      "Name: " + name + "\n" +
      "Pickup Location: " + pickup + "\n" +
      "Drop Location: " + drop + "\n" +
      "Cab Type: " + cabType
    );

    if (confirmBooking) {
      alert("🚕 Cab Booked Successfully!\nDriver will arrive soon.");
    } else {
      alert("❌ Cab Booking Cancelled.");
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Online Cab Booking</h2>

      <form style={styles.form} onSubmit={bookCab}>
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
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Drop Location"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          required
          style={styles.input}
        />

        <select
          value={cabType}
          onChange={(e) => setCabType(e.target.value)}
          required
          style={styles.input}
        >
          <option value="">Select Cab Type</option>
          <option value="Mini">Mini</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
        </select>

        <button type="submit" style={styles.button}>
          Book Cab
        </button>
      </form>
    </div>
  );
}

// Inline CSS with colorful background
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
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
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px"
  }
};

export default CabBooking;
