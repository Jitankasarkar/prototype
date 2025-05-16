import { useState } from 'react';

function LoginPage({ onLogin }) {
  const [userType, setUserType] = useState('buyer');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      setError('');
      onLogin(userType, userName);
    } else {
      setError('Please enter a name');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <div className="login-form">
        <div className="form-group">
          <label className="form-label">User Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="form-select"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="form-input"
            placeholder="Enter your name"
          />
          {error && <p className="form-error">{error}</p>}
        </div>
        <button onClick={handleSubmit} className="form-button">
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;