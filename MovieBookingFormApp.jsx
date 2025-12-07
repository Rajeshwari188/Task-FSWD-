import React from "react";
import MovieBookingForm from "./Fullstack/React/MovieBookingForm";
import bg from "./assets/bg.jpg"; // Put your background in src/assets/bg.jpg

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.overlay}></div>
      <MovieBookingForm />
    </div>
  );
}

const styles = {
  page: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    position: "relative"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)" // Light dim to highlight form
  }
};

export default App;
