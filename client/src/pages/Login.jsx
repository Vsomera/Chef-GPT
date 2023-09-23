import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleLogin}>
        <img src="/ChefGPT-4.jpg" alt="ChefGPT-4Logo" className="login-logo"/>
        <input
          className="register-input"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData((prevState) => ({
            ...prevState,
            username: e.target.value,
          }))} />

        <input
          className="register-input"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData((prevState) => ({
            ...prevState,
            password: e.target.value,
          }))} />
        <button
    
          type="button"
          onClick={togglePasswordVisibility}
          className="password-toggle"
        >
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
    

      <button className="register-button" type="submit">
        Login
      </button>
    </form>
     
    {/* Add a Link to the registration page */}
    <div className='register-link'>
      Don't have an account? <a href ="/register">Register here</a>
    </div>
  </div>
  );
};

export default Login;