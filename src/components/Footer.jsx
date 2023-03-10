import React from 'react'
import {BsFacebook} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"


const Footer = () => {
  return (
    <div className='footer'>
      <p className='mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi est et totam corporis error quasi nemo animi porro officia vel. Aperiam nulla repellendus doloribus adipisci ut, deleniti sint nisi officia!</p>
      <p className='mb-3'>© 2023 bla bla bla kzt</p>
      <div className='flex justify-around footer-icon'>
        <BsFacebook/>
        <BsYoutube/>
        <BsInstagram/>
      </div>
    </div>
  )
}

export default Footer