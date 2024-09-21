import React from 'react'
import '../css/testimonials.css'
import Natasha from '../assets/testimonials/natasha.png'
import Joe from '../assets/testimonials/joe cook.png'
import Jessica from '../assets/testimonials/jessica.png'
import { FaStar } from "react-icons/fa6";

const Testimonials = () => {
    return (
        <div className='container'>
            <div className="testimonials">
                <div className="content">
                    <h4>“Say goodbye to clutter and <br /> <span> bounce rates.</span></h4>
                </div>
                <div className="cards">
                    <div className="card-1">
                        <div className="profile">
                            <div className="profile-details">
                                <img src={Natasha} alt="natasha" />
                                <div className="profile-text">
                                    <h4>Nattasha</h4>
                                    <p>Designer</p>
                                </div>
                            </div>
                            <div className="stars">
                                <FaStar className='star' size={30} />
                                <FaStar className='star' size={30} />
                                <FaStar className='star' size={30} />
                                <FaStar className='star' size={30} />
                                <FaStar className='star' size={30} />
                            </div>
                        </div>
                        <div className="card-content">
                       <p> “Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust looking.”Primchat was the modern what we were looking.</p>
                        </div>
                    </div>
                    <div className="card-1">
                        <div className="profile">
                            <div className="profile-details">
                                <img src={Joe} alt="natasha" />
                                <div className="profile-text">
                                    <h4>Joe Cook</h4>
                                    <p>Developer</p>
                                </div>
                            </div>
                            <div className="stars">
                                <FaStar className='star' size={30} />
                                <FaStar className='star' size={30} />
                                <FaStar className='star' size={30} />
                                <FaStar className='star' size={30} />
                                <FaStar className='star' size={30} />
                            </div>
                        </div>
                        <div className="card-content">
                       <p> “Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust looking.”Primchat was the modern what we were looking.</p>
                        </div>
                    </div>
                    <div className="card-1">
                        <div className="profile">
                            <div className="profile-details">
                                <img src={Jessica} alt="natasha" />
                                <div className="profile-text">
                                    <h4>Jessica Jobs</h4>
                                    <p>Product Designer at Uber.INC</p>
                                </div>
                            </div>
                            <div className="stars">
                                <FaStar className='star' size={30} />
                                <FaStar className='star' size={30} />
                                <FaStar className='star' size={30} />
                                <FaStar className='star' size={30} />
                                <FaStar className='star' size={30} />
                            </div>
                        </div>
                        <div className="card-content">
                       <p> “Our team was able to teach themselves primchat in a day.it's like using a shared email inboxust way more robust looking.”Primchat was the modern what we were looking.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials