import React from 'react'
import '../css/singleblog.css'
import { Link } from 'react-router-dom';
import Image from '../assets/banner.png'
import Nattasha from '../assets/natasha.png'
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";

const Header = () => {
  return (
    <div className="single-blog">
                <header>
                    <div className="content">
                        <div className="link">
                            <Link to="/">Business</Link>
                        </div>
                        <h4>Great productivity apps you can download <br />
                            for free this week on iPhone</h4>
                        <footer>
                            <ul>
                                <p>May 02, 2022 </p>
                                <li>3 min read</li>
                            </ul>
                        </footer>
                    </div>
                </header>
                <div className="banner">
                    <img src={Image} alt="" />
                    <div className="banner-inner">
                        <div className="profile">
                            <img src={Nattasha} alt="" />
                            <div className="content">
                                <h4>Nattasha</h4>
                                <p>Designer</p>
                            </div>
                        </div>
                        <div className="icons">
                        <FaInstagram size={30}/>
                        <IoLogoFacebook size={30}/>
                        <IoLogoTwitter size={30}/>
                        </div>
                    </div>
                </div>
                <div className="text">   
                </div>
            </div>
  )
}

export default Header