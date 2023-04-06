import React, { useEffect } from 'react'
import bgImg from '../../Assests/img5.jpg'
import { useForm } from 'react-hook-form';
import './Signup.css'
import Fetch from 'react-fetch'


// const fetch = require('node-fetch');

// const fetch = require('node-fetch');

const Signup = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

  return (
    <section>
    <div className="register">
        <div className="col-1">
            <h2>Register here!</h2>
            <span>For a fair and share deal!!</span>

            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
    
          <input type="text"
            placeholder="Enter First name"
            {...register("fname", { required: true })}
          />
          <error>
            {errors.fname?.type === "required" && "Name is required"}
          </error>
        

          <input
            placeholder="Enter Last name"
            {...register("lname", { required: true })}
          />
          <error>
            {errors.lname?.type === "required" && "Name is required"}
          </error>

          <input
            placeholder="Enter primary email"
            {...register("email", {
              required: true,
              pattern: /[a-z.]*[@]\bnortheastern.edu/,
            })}
          />
          <error>
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Enter email id with domain @northeastern.edu"}
          </error>
    
        
          
        
          <input
            placeholder='Enter your Phone number'
            {...register("number", {
            required: true,
            pattern: /\d{3}-?\d{3}-\d{4}$/,
            })}
          />
          <error>
            {errors.number?.type === "required" &&
              "Enter a valid phone number"}
            {errors.number?.type === "pattern" &&
              "Enter your phone number in the format 'xxx-xxx-xxxx'"}
          </error>

          <input
            placeholder='Enter your Address'
            {...register("number", {
            required: true,
            })}
          />
          <error>
            {errors.number?.type === "required" &&
              "Enter valid address"}
          </error>
      
    
          <input
            placeholder="Enter password"
            {...register("password", {
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,12}$/,
              
            })}
          />
          <error>
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
          <input className="button" type="submit" />
        </div>
            </form>


        </div>
        <div className="col-2">
            <img src={bgImg} alt="" />
        </div>
    </div>
</section>
  )
}

export default Signup