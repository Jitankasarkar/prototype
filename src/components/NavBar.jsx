import React, { useState } from "react";
import "../index.css"; // adjust if needed

function NavBar({ user, currentPage, onLoginClick, onHomeClick, onLogout, onReset }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo" onClick={onHomeClick}>IEMBaba</h1>
      </div>

      <div className="navbar-right">
        <button
          className="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <div className={`nav-buttons ${isMenuOpen ? "open" : ""}`}>
          {!user && <button className="login-button" onClick={onLoginClick}>Login</button>}
          {user && (
            <>
              <button onClick={onHomeClick}>Home</button>
              <button onClick={onReset}>Reset</button>
              <button onClick={onLogout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
