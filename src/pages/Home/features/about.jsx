import React from 'react'
import '../css/about.css'
import { IoMdPlayCircle } from "react-icons/io";
import { PiArrowRightThin } from "react-icons/pi";

export const About = () => {
  return (
    <div className='about'>
        <div className="a-content">
            <h4>Send and receive <span>payments</span> easily</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="video">
        <IoMdPlayCircle  color='rgba(255, 193, 115, 1)' size={70}/>
            <div className="v-text">
                <h4>Lorem ipsum dolor sit <br />
                <span>amet, consectetur <PiArrowRightThin  /> </span></h4>
            </div>
        </div>
    </div>
  )
}
