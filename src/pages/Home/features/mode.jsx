import React from 'react'
import '../css/mode.css'
import Mobile1 from '../assets/mode/Mobile1.png'
import Mobile2 from '../assets/mode/Mobile 2.png'
import Mobile3 from '../assets/mode/Mobile 3.png'
import { Link } from 'react-router-dom'


const Mode = () => {
  return (
    <div className='container'>
      <div className="mode">
        <div className="text">
            <h2>Feels great in low-light Mood <br /> for your <span>eye Protection</span></h2>
        </div>
            <div className="mobiles">
              <img src={Mobile1} alt="" />
              <img src={Mobile2} alt="" />
              <img src={Mobile3} alt="" />
            </div>
        <div className="olr">
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt dolore magna aliqua.</h4>
          <div className="light-dark">
            <div className="dark">
                <Link to="/">Dark</Link>
              <div className="light">
                <Link to="/">Light</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mode