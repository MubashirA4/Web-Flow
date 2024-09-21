import React from 'react'
import '../css/choose.css'
import Thumb from '../assets/thumb print.png'
import Merchant1 from '../assets/merchant.png'
import Merchant2 from '../assets/merchant2.png'
import Paid from '../assets/get-paid.png'

 
const Choose = () => {
  return (
    <div className='choose'>
        <div className="inner-choose">
            <h4>Why it is <br /> Worth Choosing <span>PrimePay.</span> </h4>
            <div className="cards">
                <div className="card-1">
                    <div className="content">
                    <h2>Integration other</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Laoreet non curabitur gravida sagittis aliquam bibendum.</p>
                    </div>
                    <div className="card1-image">
                        <img src={Merchant2} alt="" />
                    </div>
                </div>
                <div className="card-2">
                    <img src={Thumb} alt="" />
                    <h4>Safe & Security</h4>
                    <p>Easily integrate with all your need favorite tools through and APIsing including automatic </p>
                </div>
                <div className="card-2">
                    <img src={Merchant1} alt="" />
                    <h4>Safe & Security</h4>
                    <p>Easily integrate with all your need favorite tools through and APIsing including automatic </p>
                </div>
                <div className="card-2">
                    <img src={Merchant2} alt="" />
                    <h4>Safe & Security</h4>
                    <p>Easily integrate with all your need favorite tools through and APIsing including automatic </p>
                </div>
                <div className="card-2">
                <img src={Paid} alt="" />
                    <h4>Safe & Security</h4>
                    <p>Easily integrate with all your need favorite tools through and APIsing including automatic </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose