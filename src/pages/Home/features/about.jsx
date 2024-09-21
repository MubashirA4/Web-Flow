import React from 'react'
import '../css/about.css'
import { IoMdPlayCircle } from "react-icons/io";
import { PiArrowRightThin } from "react-icons/pi";
import Image from '../assets/Photo.png'
import Mobile2 from '../assets/Mobile.png'

export const About = () => {
  return (
    <div className='about'>
      <section className='inner-content'>
        <div className="content">
          <div className="a-content">
            <h4>Send and receive <span>payments</span> easily</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="line">
            </div>
          </div>
          <div className="video">
            <IoMdPlayCircle color='rgba(255, 193, 115, 1)' size={70} />
            <div className="v-text">
              <h4>Lorem ipsum dolor sit <br />
                <span>amet, consectetur <PiArrowRightThin /> </span></h4>
            </div>
          </div>
        </div>
        <section className='content-image'>
          <img src={Image} alt="" />
          <div className="about-image">
            <img src={Mobile2} alt="" />
          </div>
        </section>
      </section>
      <div className="dtf">
        <div className="download">
          <h2>12.000 +</h2>
          <p>Downloaded</p>
        </div>
        <div className="transaction">
          <h2>$10 M</h2>
          <p>Transactions</p>
        </div>
        <div className="feedback">
          <h2>1.000 +</h2>
          <p>Feedback</p>
        </div>
      </div>
      <div className="border-bottom">
        
      </div>
    </div>
  )
}
