import React from 'react'
import './home.css'
import bgImg from '../../Assests/img5.jpg'

const home = () => {
  return (
    <div>
<p>Home</p>
   <div className="col-2">
            <img src={bgImg} alt="" />
        </div>
    </div>
  )
}

export default home