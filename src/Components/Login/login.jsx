import React from 'react'
import { useNavigate } from "react-router-dom";
import "../Login/login.css"

const Login = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/SignUpUi');
  }

  return (
    <div className="center">
      <h1>SIGN IN</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          Not Registered yet? <a href="#" onClick={handleRegisterClick}>Register here</a>
        </div>
      </form>
    </div>
  )
}

export default Login;
