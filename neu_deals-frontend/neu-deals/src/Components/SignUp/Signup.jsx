import React from 'react'
import bgImg from '../../Assests/img5.jpg'
import { useForm } from 'react-hook-form';
import './Signup.css'

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
                <input type="text" {...register("First Name")} placeholder='First Name' />
                <input type="text" {...register("Last Name")} placeholder='Last Name' />
                <input type="text" {...register("Email Id")} placeholder='Email Id' />
                <input type="text" {...register("Date Of Birth")} placeholder='username' />
                <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                <input type="text" {...register("Address")} placeholder='Address' />
                <input type="text" {...register("password")} placeholder='password' />
                <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                
                {errors.mobile?.type === "required" && "Mobile Number is required"}
                {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                <button className='btn'>Sign In</button>
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