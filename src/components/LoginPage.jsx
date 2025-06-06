import { useState } from 'react';
import { auth, provider } from '../firebase';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

function LoginPage({ onLogin }) {
  const [userType, setUserType] = useState('buyer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return setError('Please fill in all fields');
    }

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      // Get displayName from email if needed
      const name = email.split('@')[0];
      onLogin(userType, name);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      return setError('Enter your email to reset password');
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setError('Password reset link sent! Check your inbox.');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      onLogin(userType, user.displayName || user.email.split('@')[0]);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">{isSignup ? 'Sign Up' : 'Login'}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
          <label className="form-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="Enter your password"
          />
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="form-button">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>

        <button type="button" className="form-button" onClick={handleGoogleSignIn}>
          Sign In with Google
        </button>

        <button type="button" className="form-link" onClick={handleForgotPassword}>
          Forgot Password?
        </button>

        <p className="form-toggle">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button type="button" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Login' : 'Sign Up'}
          </button>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
