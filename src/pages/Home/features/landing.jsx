import React from 'react'
import '../css/landing.css'
import Image from '../assets/home.svg'
import Mobile from '../assets/mobile screen.svg'
import Account from '../assets/account.svg' 
import Bank from '../assets/bank.svg'
import Money from '../assets/cash.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='container'>
      <div className="landing">
        <img src={Image} alt="" />
        <div className="content">
          <h2>Ready To Launch Your <br /> Online <span>Payment</span> App</h2>
          <p>A simple yet modern solution to showcase your app</p>
          <div className="link">
          <Link to="">Get Started</Link>
          </div>
        </div>
        <div className="mobile">
          <img src={Mobile} alt="" />
        </div>
      </div>
      <div className="work">
        <div className="c-account">
          <img src={Account} alt="" />
          <h4>Creat an account</h4>
          <p>Aspernatur Sit Adipisci Quaerat Unde Redug Lagre Dolor Sit Amets Consectetus. Agencies Define Their new business</p>
        </div>
        <div className="c-account">
          <img src={Bank} alt="" />
          <h4>Attach bank accounts</h4>
          <p>Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business</p>
        </div>
        <div className="c-account">
          <img src={Money} alt="" />
          <h4>Send money</h4>
          <p>Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets consectetus. Agencies define their new business</p>
        </div>
      </div>
    </div>
  )
}

export default Landing