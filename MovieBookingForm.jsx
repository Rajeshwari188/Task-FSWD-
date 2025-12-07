import React, { useState } from "react";

export default function MovieBookingForm() {

  const [fileName, setFileName] = useState("No file chosen");

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2 style={styles.heading}>🎬 Movie Ticket Booking</h2>

        <label style={styles.label}>Your Name:</label>
        <input type="text" placeholder="Enter name" style={styles.input} />

        <label style={styles.label}>Password:</label>
        <input type="password" placeholder="Enter password" style={styles.input} />

        <label style={styles.label}>Select Movie:</label>
        <select style={styles.input}>
          <option>Avengers Secret Wars</option>
          <option>Leo 2</option>
          <option>Jailer Return</option>
          <option>KGF 3</option>
        </select>

        <label style={styles.label}>Show Timing:</label>
        <div style={styles.row}>
          <label><input type="radio" name="time"/> 10:00 AM</label>
          <label><input type="radio" name="time"/> 2:00 PM</label>
          <label><input type="radio" name="time"/> 6:00 PM</label>
          <label><input type="radio" name="time"/> 10:00 PM</label>
        </div>

        <label style={styles.label}>Seat Type:</label>
        <div style={styles.row}>
          <label><input type="checkbox" /> Normal</label>
          <label><input type="checkbox" /> Premium</label>
          <label><input type="checkbox" /> VIP</label>
        </div>

        <label style={styles.label}>No. of Tickets:</label>
        <input type="number" min="1" max="10" style={styles.input} />

        <label style={styles.label}>Upload ID Proof:</label>
        <input 
          type="file"
          onChange={(e)=>setFileName(e.target.files[0]?.name || "No file chosen")} 
          style={styles.file}
        />
        <p style={{color:"white"}}>{fileName}</p>

        <label style={styles.label}>Comments:</label>
        <textarea rows="3" placeholder="I am excited to watch this!" style={styles.textarea}></textarea>

        <button style={styles.button}>Book Ticket</button>
      </form>
    </div>
  );
}

const styles = {
  container:{
    position:"relative",
    zIndex:10
  },
  form:{
    width:"420px",
    background:"rgba(0,0,0,0.75)",
    color:"white",
    padding:"25px",
    borderRadius:"12px",
    boxShadow:"0px 0px 15px black"
  },
  heading:{textAlign:"center", background:"orange", padding:"10px", borderRadius:"6px", marginBottom:"18px", color:"black"},
  label:{fontWeight:"bold", marginTop:"10px"},
  input:{width:"100%", padding:"8px", marginBottom:"12px", borderRadius:"5px", border:"none"},
  textarea:{width:"100%", padding:"8px", borderRadius:"5px", border:"none", marginBottom:"15px"},
  row:{display:"flex", justifyContent:"space-between", marginBottom:"12px"},
  file:{color:"white", marginBottom:"8px"},
  button:{width:"100%", padding:"10px", fontSize:"17px", background:"yellow", color:"black", fontWeight:"bold", borderRadius:"6px", cursor:"pointer"}
};
