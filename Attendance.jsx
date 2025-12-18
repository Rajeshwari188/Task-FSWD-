import React, { useState } from "react";

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Riya", present: false },
    { id: 2, name: "Vishnu", present: false },
    { id: 3, name: "Diya", present: false },
    { id: 4, name: "Leo", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  return (
    <>
      {/* Embedded CSS */}
      <style>{`
        .attendance-container {
          width: 70%;
          margin: 40px auto;
          font-family: Arial, sans-serif;
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 12px;
          border: 1px solid #ddd;
          text-align: center;
        }

        th {
          background-color: #4CAF50;
          color: white;
        }

        .present {
          color: green;
          font-weight: bold;
        }

        .absent {
          color: red;
          font-weight: bold;
        }

        button {
          padding: 6px 12px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
          color: white;
        }

        .btn-present {
          background-color: #f44336;
        }

        .btn-absent {
          background-color: #4CAF50;
        }

        button:hover {
          opacity: 0.85;
        }
      `}</style>

      <div className="attendance-container">
        <h2>Attendance Tracker</h2>
        <table>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Status</th>
              <th>Mark</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td className={student.present ? "present" : "absent"}>
                  {student.present ? "Present" : "Absent"}
                </td>
                <td>
                  <button
                    onClick={() => toggleAttendance(student.id)}
                    className={
                      student.present ? "btn-present" : "btn-absent"
                    }
                  >
                    {student.present ? "Mark Absent" : "Mark Present"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Attendance;
