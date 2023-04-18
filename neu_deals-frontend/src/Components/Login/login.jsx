import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import "../Login/login.css"
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/loginAction';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/SignUpUi');
  }

//   const handleSignIn = async(e) => {
//     e.preventDefault();
// userLogin(userName,email,password)
// .then((res) => {
//     console.log(res)
//     if(res.data.validate){
//         props.handle();
//         navigate('/home')
//        }
//     else{
//         alert('Enter valid credentials', res.message);
//        }
// }).catch((error) => {
//     console.log(error)
// });
// }
  const handleSignIn = (e) =>{
    e.preventDefault();
    dispatch(loginUser(email,password));
    navigate('/home')
  }

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  return (
    <div className="center">
      <h1>Sign In</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required  onChange={(e) =>{setEmail(e.target.value)}}/>
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" required onChange={(e) =>{setPassword(e.target.value)}}/>
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" onClick={(e)=>handleSignIn(e)}/>
        <div className="signup_link">
          Not Registered yet? <a href="#" onClick={handleRegisterClick}>Register here</a>
        </div>
      </form>
    </div>
  )
}

export default Login