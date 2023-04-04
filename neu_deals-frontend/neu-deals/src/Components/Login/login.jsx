import React from 'react'
import { useNavigate } from "react-router-dom";
// import { userLogin } from "../Actions/userAction";
import "../Login/login.css"

const login = () => {
  return (
    <div className="login-page">
    <h1> Login Page</h1>
    <form className="box">
    <label>
            Email:
            <input type="text" className="login-input"/>
        </label>
        <br/>
        <label>
            Username:
            <input type="text" className="login-input" />
        </label>
        <br/>
        <label>
            Password:
            <input type="password" className="login-input" />
        </label>
        <br/>
        <button type="submit" className="login-button" >Sign In</button>
    </form>
</div>
  )
}

export default login