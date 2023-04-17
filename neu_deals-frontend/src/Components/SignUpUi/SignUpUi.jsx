import React, { useEffect,useState } from 'react'
// import bgImg from '../../Assests/sale.jpeg'
import { useForm } from 'react-hook-form';
import './SignUpUi.css'
import { useDispatch } from 'react-redux';
import { userSignup } from '../../redux/actions/loginAction';
import Fetch from 'react-fetch'

// const fetch = require('node-fetch');

// const fetch = require('node-fetch');

const SignUpUi = () => {

  const dispatch = useDispatch();
  const [fname, setFname] = useState('');
    // console.log(userName);
    const [lname, setLname] = useState('');
    // console.log(password);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [address, setAddr] = useState('');
    const [password, setPass] = useState('');

  const handleSignIn = async(e) => {
    e.preventDefault();
    dispatch(
      userSignup(fname,lname,email,phoneNumber,address,password)
    )
    
.then((res) => {
    console.log(res)
    if(res.data.validate){
        props.handle();
        navigate('/home')
       }
    else{
        alert('Enter valid credentials', res.message);
       }
}).catch((error) => {
    console.log(error)
});
}

    const { register,watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

  return (
    <section>
    <div className="register">
        <div className="col-1">
            <h2>REGISTER HERE</h2>
            <span>FOR A FAIR AND SHARE DEAL</span>

            <form id='form' className='flex flex-col' onSubmit={handleSignIn(onSubmit)}>
    
          <input type="text"
            placeholder="Enter First name"
            {...register("fname", { required: true })}
            onChange={(event)=>{setFname(event.target.value)}}
          />
          <error>
            {errors.fname?.type === "required" && "Name is required"}
          </error>
        

          <input
            placeholder="Enter Last name"
            {...register("lname", { required: true })}
            onChange={(event)=>{setLname(event.target.value)}}
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
            onChange={(event)=>{setEmail(event.target.value)}}
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
            onChange={(event)=>{setPhone(event.target.value)}}
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
            onChange={(event)=>{setAddr(event.target.value)}}
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
            onChange={(event)=>{setPass(event.target.value)}}
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
        {/* <div className="col-2">
            <img src={bgImg} alt="" />
        </div> */}
    </div>
</section>
  )
}

export default SignUpUi