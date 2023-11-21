import React from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React CRUD Operations</h2>

        {/* Navbar */}
        <nav>
          <ul>
            <li>
              <Link to="/Create">Create</Link>
            </li>
            <li>
              <Link to="/Read">Read</Link>
            </li>
            <li>
              <Link to="/Update">Update</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/Create" element={<Create />} />
          <Route path="/Read" element={<Read />} />
          <Route path="/Update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
