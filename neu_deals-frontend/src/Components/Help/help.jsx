import React, { useState } from 'react';
import './help.css';

const Help = () => {
  const [data, setData] = useState({name: "", email:"", phone:"", message:""});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <h1 className='form-heading'>CONTACT<span>HERE</span></h1>
      <input type="text" name="name" onChange={handleChange} value={data.name} placeholder='Enter Name' className='form-input' required/>
      <input type="email" name="email" onChange={handleChange} value={data.email} placeholder='example@northeastern.com' className='form-input' required/>
      <input type="tel" name="phone" onChange={handleChange} value={data.phone} placeholder='+91' className='form-input' pattern="^[0-9+\(\)#\.\s\/ext-]+$" required/>
      <textarea name="message" onChange={handleChange} value={data.message} placeholder='Type here.....' className='form-input-message' required/>
      <button type='submit' className='form-button'>SEND</button>
      <p className='form-message'>{data.name}{data.email}{data.phone}{data.message}</p>
    </form>
  )
}

export default Help;
