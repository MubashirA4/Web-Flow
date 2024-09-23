import React from 'react'
import '../css/credit.css'
import { IoIosCheckmarkCircle } from "react-icons/io";
import Card1 from '../assets/Credit and payment/Sim1.png'
import Card2 from '../assets/Credit and payment/sim2.png'
import Mask1 from '../assets/Credit and payment/Mask group 1.png'
import Mask2 from '../assets/Credit and payment/Mask group 2.png'
import Mask3 from '../assets/Credit and payment/Mask group 3.png'
import { Link } from 'react-router-dom';



export const Payment = () => {
    return (
        <>
            <div className="credit">
                <div className="inner-credit">
                    <div className="content">
                        <h2>Credit is the Fastest <br /> Mobile <span>Banking <br /> Solution.</span></h2>
                        <p>Feels great in low-light Mood for your eye Protection <br /> Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do eiusmod tempor incididunt</p>
                        <div className="checks">
                            <div className="left">
                                <p><IoIosCheckmarkCircle size={24} className='mark' />All your transaction </p>
                                <p><IoIosCheckmarkCircle size={24} className='mark' />Receipts transaction </p>
                                <p><IoIosCheckmarkCircle size={24} className='mark' />Experience Smart App  </p>
                            </div>
                            <div className="right">
                                <p><IoIosCheckmarkCircle size={24} className='mark' />Control Your Budget </p>
                                <p><IoIosCheckmarkCircle size={24} className='mark' />Find Your Expenses </p>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <div className="parent">
                            <img src={Card1} alt="" />
                            <div className="child">
                                <img src={Card2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="payment">
                <h2>Our payment services <br /> <span>worldwide</span></h2>
                <div className="cards">
                    <div className="card">
                        <img src={Mask1} alt="" />
                        <div className="content">
                            <div className="basic">
                            </div>
                            <div className="price">
                                <h6>$10.00</h6>
                                <p>Month</p>
                            </div>
                            <div className="features">
                                <li>Modern Design </li>
                                <li>Easy to Customize </li>
                                <li>Quickly Set Up A Website </li>
                                <li>Another Feature </li>
                                <li>24/7 Customer Support</li>
                            </div>
                            <div className="button">
                                <Link to="/">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image">
                        <img src={Mask2} alt="" />
                        </div>
                        <div className="content">
                            <div className="basic">
                            </div>
                            <div className="price">
                                <h6>$19.00</h6>
                                <p>Month</p>
                            </div>
                            <div className="features">
                                <li>Modern Design </li>
                                <li>Easy to Customize </li>
                                <li>Quickly Set Up A Website </li>
                                <li>Another Feature </li>
                                <li>24/7 Customer Support</li>
                            </div>
                            <div className="button">
                                <Link to="/">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Mask3} alt="" />
                        <div className="content">
                            <div className="basic">
                            </div>
                            <div className="price">
                                <h6>$35.00</h6>
                                <p>Month</p>
                            </div>
                            <div className="features">
                                <li>Modern Design </li>
                                <li>Easy to Customize </li>
                                <li>Quickly Set Up A Website </li>
                                <li>Another Feature </li>
                                <li>24/7 Customer Support</li>
                            </div>
                            <div className="button">
                                <Link to="/">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
