import React, { useState } from "react";

function UserProfileEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  function updateProfile(e) {
    e.preventDefault();

    // Simple validation
    if (age < 1 || age > 100) {
      alert("Please enter a valid age.");
      return;
    }

    if (phone.length !== 10) {
      alert("Phone number must be 10 digits.");
      return;
    }

    // Confirmation dialog
    const confirmUpdate = confirm(
      "Confirm Profile Update:\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Age: " + age + "\n" +
      "Gender: " + gender + "\n" +
      "Phone: " + phone
    );

    if (confirmUpdate) {
      alert("✅ Profile Updated Successfully!");
    } else {
      alert("❌ Profile Update Cancelled.");
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Edit User Profile</h2>

      <form style={styles.form} onSubmit={updateProfile}>
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

        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          style={styles.input}
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          style={styles.input}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Update Profile
        </button>
      </form>
    </div>
  );
}

// Inline CSS (colorful background)
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
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
    backgroundColor: "#2980b9",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px"
  }
};

export default UserProfileEdit;
