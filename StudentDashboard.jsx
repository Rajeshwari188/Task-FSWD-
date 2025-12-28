import React, { useState } from "react";

function StudentDashboard() {
  // State to track selected menu
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // Sample student data
  const students = [
    { id: 1, name: "Rahul", course: "Computer Science", year: "2nd Year" },
    { id: 2, name: "Anita", course: "Information Technology", year: "1st Year" },
    { id: 3, name: "Karan", course: "Electronics", year: "3rd Year" }
  ];

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial;
            background: linear-gradient(to right, #d4fc79, #96e6a1);
          }

          .dashboard {
            display: flex;
            min-height: 100vh;
          }

          .sidebar {
            width: 200px;
            background: #2c3e50;
            color: white;
            padding: 20px;
          }

          .sidebar h2 {
            text-align: center;
          }

          .menu {
            margin-top: 20px;
          }

          .menu div {
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
            margin-bottom: 10px;
          }

          .menu div:hover,
          .active {
            background-color: #1abc9c;
          }

          .content {
            flex: 1;
            padding: 20px;
          }

          .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
          }

          .card {
            background: white;
            padding: 15px;
            border-radius: 10px;
          }

          h3 {
            margin-top: 0;
            color: #333;
          }
        `}
      </style>

      <div className="dashboard">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <h2>Dashboard</h2>

          <div className="menu">
            <div
              className={activeMenu === "dashboard" ? "active" : ""}
              onClick={() => setActiveMenu("dashboard")}
            >
              Home
            </div>

            <div
              className={activeMenu === "students" ? "active" : ""}
              onClick={() => setActiveMenu("students")}
            >
              Students
            </div>

            <div
              className={activeMenu === "reports" ? "active" : ""}
              onClick={() => setActiveMenu("reports")}
            >
              Reports
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">
          {activeMenu === "dashboard" && (
            <>
              <h2>Welcome to Student Management System</h2>
              <p>This dashboard helps manage student information easily.</p>
            </>
          )}

          {activeMenu === "students" && (
            <>
              <h2>Student List</h2>

              <div className="cards">
                {students.map((student) => (
                  <div key={student.id} className="card">
                    <h3>{student.name}</h3>
                    <p>Course: {student.course}</p>
                    <p>Year: {student.year}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeMenu === "reports" && (
            <>
              <h2>Reports</h2>
              <p>Reports section coming soon...</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
