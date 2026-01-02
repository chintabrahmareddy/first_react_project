import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import AppBar from "./AppBar";
import LeftNav from "./LeftNav";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [sharedTableData, setSharedTableData] = useState([]);

  const handleLogin = (userData) => setUser(userData);
  const handleLogout = () => setUser(null);

  const addData = (data) => setSharedTableData((prev) => [...prev, data]);

  if (!user) return <Login onLogin={handleLogin} />;

  return (
    <Router>
      <div className="App">
        <AppBar user={user} onLogout={handleLogout} />
        <div style={{ display: "flex" }}>
          <LeftNav />
          <div style={{ flex: 1, padding: "20px" }}>
            <Routes>
              <Route
                path="/"
                element={<Home sharedTableData={sharedTableData} />}
              />
              <Route path="/about" element={<About addData={addData} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
