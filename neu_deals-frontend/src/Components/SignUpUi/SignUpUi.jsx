import React, { useEffect } from 'react'
// import bgImg from '../../Assests/sale.jpeg'
import { useForm } from 'react-hook-form';
import './SignUpUi.css'
import Fetch from 'react-fetch'


// const fetch = require('node-fetch');

// const fetch = require('node-fetch');

const SignUpUi = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

  return (
    <section>
    <div className="register">
        <div className="col-1">
            <h2>REGISTER HERE</h2>
            <span>FOR A FAIR AND SHARE DEAL</span>

            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
    
          <input type="text"
            placeholder="Enter First name"
            {...register("fname", { required: true })}
          />
          <error className="error">
            {errors.fname?.type === "required" && "First Name is required"}
          </error>
        

          <input
            placeholder="Enter Last name"
            {...register("lname", { required: true })}
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
          />
          <error className="error">
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
          <error className="error">
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
          <error className="error">
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
          <input className="button" type="submit" />
        </div>
            </form>


        </div>
    </div>
</section>
  )
}

export default SignUpUi