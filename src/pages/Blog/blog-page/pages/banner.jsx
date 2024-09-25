import React from 'react'
import '../css/banner.css'
import Image from '../assets/banner.png'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className='inner-banner'>
                    <img src={Image} alt="" />
                    <div className="center-text">
                        <h4>Blog</h4>
                    </div>
                </div>
                <div className="article">
                    <div className="head">
                        <h4>News <span>Articles</span></h4>
                        <div className="search">
                            <input type="email" placeholder='Enter your email' />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner