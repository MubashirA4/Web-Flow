import React from 'react'
import Logo from '../assets/Logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Rectangle from '../assets/Rectangle.svg'

const Footer = () => {
  return (
    <>
      <footer>
        <main>
          <div className="container-fluid">
            <div className="primepay">
              <Link to="/"><img src={Logo} alt="" /></Link>
              <p>Lorem ipsum dolor sitonsecteturadipisicing elit sed do eiusmod temporincididunt Laoreet non sagittis aliquam bibendum.</p>
              <div className="icons">
                <Link to="/"><FaInstagram size={22} /></Link>
                <Link to="/"><FaFacebook size={22} /></Link>
                <Link to="/"><FaTwitter size={22} /></Link>
                <Link to="/"><FaLinkedin size={22} /></Link>
                <Link to="/"><FaYoutube size={22} /></Link>
              </div>
            </div>

            <div className="menu">
              <h4>Menu</h4>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Features</Link></li>
              <li><Link to="/">Pricing <span>offer</span></Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">How it Work</Link></li>
            </div>
            <div className="u-page">
              <h4>Utility pages</h4>
              <li><Link to="/">Style guide</Link></li>
              <li><Link to="/">Password Protected</Link></li>
              <li><Link to="/">404 Not Found</Link></li>
              <li><Link to="/">Licenses</Link></li>
              <li><Link to="/">Changelog</Link></li>
            </div>
            <div className="address">
              <h4>Address</h4>
              <li><Link to="/">1700 W Blancke St, kiyev port south USA, America</Link></li>
              <li><Link to="/">+3255 456 789</Link></li>
              <li><Link to="/">mail@primpay.com</Link></li>
              <div className="quote">
                <Link to="/">GET A QUOTE</Link>
              </div>
            </div>
          </div>

          <div className="rectangle">
            <div className="inner-rectangle">
              <h2>Take control of your <br />
                personal <span>finances today</span></h2>
              <div className="input">
                <input type="email" placeholder='Enter your email' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </main>
        <div className="olr">
          <p>Copyright © <span>Primarily</span> | Designed by VictorFlow Templates</p>
        </div>
      </footer>
    </>

  )
}

export default Footer