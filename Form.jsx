import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!username) {
      formErrors.username = "Username is required";
    }

    if (!email) {
      formErrors.email = "Email cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Enter valid email address";
    }

    if (!age) {
      formErrors.age = "Age is required";
    } else if (age < 18 || age > 60) {
      formErrors.age = "Age must be between 18 and 60";
    }

    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Minimum 6 characters required";
    }

    if (!gender) {
      formErrors.gender = "Please select gender";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("User Details Submitted Successfully!");
      console.log({ username, email, age, gender });
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Details Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <p style={styles.error}>{errors.username}</p>

        <input
          style={styles.input}
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={styles.error}>{errors.email}</p>

        <input
          style={styles.input}
          type="number"
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <p style={styles.error}>{errors.age}</p>

        <input
          style={styles.input}
          type="password"
          placeholder="Create Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p style={styles.error}>{errors.password}</p>

        <select
          style={styles.input}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
        <p style={styles.error}>{errors.gender}</p>

        <button style={styles.button} type="submit">
          Submit Details
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "360px",
    margin: "90px auto",
    padding: "25px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
    fontFamily: "Segoe UI"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#2563eb"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "18px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  error: {
    color: "red",
    fontSize: "12px",
    margin: "4px 0"
  }
};

export default Form;
