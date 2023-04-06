import React from 'react'
import { useNavigate } from "react-router-dom";
// import { userLogin } from "../Actions/userAction";
import "../Login/login.css"

const login = () => {
  return (
    <div className="center">
    <h1>Sign in!</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" required/>
          <span></span>
          <label>Password</label>
        </div>
        <div class="pass">Forgot Password?</div>
        <input type="submit" value="Login"/>
        <div class="signup_link">
          Not Registered yet? <a href="#">Register here!</a>
        </div>
      </form>
</div>
  )
}

export default login