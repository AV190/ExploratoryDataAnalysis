import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaFileAlt, FaCog } from "react-icons/fa";
import "./Home.css"; // Import CSS

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <FaHome className="icon" /> Home
          </li>
          <li>
            <FaFileAlt className="icon" /> Reports
          </li>
          <li>
            <FaCog className="icon" /> Settings
          </li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="content">
        <h1>Welcome to Your Dashboard</h1>
        <p>Manage your account and view reports from here.</p>
      </div>
    </div>
  );
};

export default Home;
