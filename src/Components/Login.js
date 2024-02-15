import React, { useState, useRef, useEffect } from 'react';
import { login } from './Api';
import './Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const contentRef = useRef(null);
  const loginFormRef = useRef(null);

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      console.log(response);
      setIsLoggedIn(true);
      setShowLogin(false);
      document.body.style.overflow = 'auto';
    } catch (error) {
      setError('Invalid username or password');
      console.error('Login failed:', error.message);
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false); // Set isLoggedIn to false to log out
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    document.body.style.overflow = showLogin ? 'auto' : 'hidden'; 
  };

  const handleClickOutside = (e) => {
    if (
      contentRef.current &&
      !contentRef.current.contains(e.target) &&
      loginFormRef.current &&
      !loginFormRef.current.contains(e.target)
    ) {
      setShowLogin(false);
      document.body.style.overflow = 'auto'; 
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button className="buttonStyle"> Logged in as {username} </button>
          <button onClick={handleLogout}>Logout</button> 
        </div>
      ) : (
        <button onClick={toggleLogin}>Login</button>
      )}
      {showLogin && (
        <div className="login-overlay">
          <div className="login-form" ref={loginFormRef}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleLogin} className="login-button">
              Login
            </button>
            <img src="/Images/google.jpg" alt="Google Image" style={{ marginTop: '20px', maxWidth: '200px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            <img src="/Images/facebook.jpg" alt="Facebook Image" style={{ marginTop: '20px', maxWidth: '200px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            <img src="/Images/twitter.jpg" alt="Twitter Image" style={{ marginTop: '20px', maxWidth: '200px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
          </div>
        </div>
      )}
      <div ref={contentRef} className={showLogin ? 'blurred-content' : ''}>
      </div>
    </div>
  );
};

export default Login;
