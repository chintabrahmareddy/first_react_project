import React from 'react';
import { NavLink } from 'react-router-dom';

function LeftNav() {
  return (
    <div className="leftnav-container">
      <h3>Navigation</h3>
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
      </ul>

      <style>{`
        .leftnav-container {
          width: 200px;
          background-color: #007bff;
          padding: 20px;
          border-right: 1px solid #ccc;
          min-height: 100vh;
          box-sizing: border-box;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .leftnav-container h3 {
          color: white;
          margin-bottom: 20px;
        }

        .leftnav-container ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .leftnav-container li {
          margin-bottom: 10px;
        }

        .nav-link {
          text-decoration: none;
          color: white;
          padding: 8px 12px;
          border-radius: 5px;
          display: block;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .nav-link.active {
          color: #007bff;
          background-color: white;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}

export default LeftNav;
