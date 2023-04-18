import React, { useEffect,useState} from 'react'
// import bgImg from '../../Assests/sale.jpeg'
import { useForm } from 'react-hook-form';
import './SignUpUi.css'
import Fetch from 'react-fetch'
import { userSignup } from '../../redux/actions/loginAction';
import { useDispatch } from 'react-redux';

// const fetch = require('node-fetch');

// const fetch = require('node-fetch');

const SignUpUi = () => {
  const dispatch = useDispatch();
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [address,setAddress] = useState('');
  const [password,setPassword] = useState('');


    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = e => {
      e.preventDefault();
      alert("yes");
      dispatch(userSignup(fname,lname,email,phoneNumber,address,password));
    }

  return (
    <section>
    <div className="register">
        <div className="column-1">
            <h2>Register Here</h2>
            <span>For a fair and share deal!!</span>

            <form id='form' className='flex flex-col' onSubmit={(e)=>handleSubmit(onSubmit(e))}>
    
          <input type="text"
            placeholder="Enter First name"
            {...register("fname", { required: true })}
            onChange={(e) =>{setFname(e.target.value)}}
          />

          <error className="error">
            {errors.fname?.type === "required" && "First Name is required"}

          </error>
        

          <input
            placeholder="Enter Last name"
            {...register("lname", { required: true })}
            onChange={(e) =>{setLname(e.target.value)}}

          />

          <error className="error">
            {errors.lname?.type === "required" && "Last Name is required"}

          </error>

          <input
            placeholder="Enter primary email"
            {...register("email", {
              required: true,
              pattern: /[a-z.]*[@]\bnortheastern.edu/,
            })}
            onChange={(e) =>{setEmail(e.target.value)}}

          />

          <error className="error">

            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Enter email id with domain @northeastern.edu"}
          </error>
    
        
          <input placeholder="Enter phone number"
            {...register("number", {
              required: true,
            pattern: /\d{3}-?\d{3}-\d{4}$/,
            })}

            onChange={(e) =>{setPhoneNumber(e.target.value)}}
          />
          {/* <error>
            {errors.number?.type === "minLength" &&
              "Entered number is less than 6 digits"}
            {errors.number?.type === "maxLength" &&
              "Entered number is more than 12 digits"}
          </error> */}

          <error className="error">

            {errors.number?.type === "required" &&
              "Enter a valid phone number"}
            {errors.number?.type === "pattern" &&
              "Enter your phone number in the format 'xxx-xxx-xxxx'"}
          </error>

          <input
            placeholder='Enter your Address'
            {...register("address", {
            required: true,
            })}
            onChange={(e) =>{setAddress(e.target.value)}}

          />

          <error className="error">

            {errors.number?.type === "required" &&
              "Enter valid address"}
          </error>
      
    
          <input
            placeholder="Enter password"
            type='password'
            {...register("password", {
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,12}$/,
              
            })}
            onChange={(e) =>{setPassword(e.target.value)}}

          />

          <error className="error">

            {errors.password?.type === "required" &&
              "Entered a valid password"}
            {errors.password?.type === "pattern" && <ul className='pass_ul'>
                Password should contain
                <li>At least one capital letter,</li>
                <li>At least one small letter,</li>
                <li>At least one number,</li>
                <li>At least one special character,</li>
                <li> And minimum length of 8,12</li>
            </ul>
              }
          </error>
        <div>  

          <input className="button" type="submit"/>
        </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default SignUpUi