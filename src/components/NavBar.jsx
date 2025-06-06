import React, { useState } from "react";

function NavBar({ user, currentPage, onLoginClick, onHomeClick, onLogout, onReset }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo" onClick={onHomeClick}>Karigari</h1>
      </div>

      <div className="navbar-right">
        <button
          className="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <div className={`nav-buttons ${isMenuOpen ? "open" : ""}`}>
          {!user && (
            <button className="login-button" onClick={onLoginClick}>
              Login
            </button>
          )}

          {user && (
            <>
              <button onClick={onHomeClick}>Home</button>
              <button onClick={onReset}>Reset</button>
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="profile-picture"
                />
              )}
              <button onClick={onLogout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
