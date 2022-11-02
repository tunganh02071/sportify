import React from 'react'
import { SlSocialSpotify } from 'react-icons/sl'
import './Navbar.css'

export default function navbar() {
  return (
    <div className='navi' style={{display:'flex'}}>
        <SlSocialSpotify />
        <p style={{marginLeft:'15px'}}>Sportify</p>
    </div>
  )
}
