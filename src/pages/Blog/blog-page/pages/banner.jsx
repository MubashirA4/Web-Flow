import React from 'react'



import { Link } from 'react-router-dom'



const Banner = () => {
    return (
        <div className="banner">
            <div className='inner-banner'>
                <img src="/assets/banner.png" alt="" />
                <div className="center-text">
                    <h4>Blog</h4>
                </div>
            </div>
            <div className="container">
                <div className="article">
                    <div className="head">
                        <h4>News <span>Articles</span></h4>
                        <div className="search">
                            <input type="email" placeholder='Enter your email' />
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="left aside">
                            <img src="/assets/Photo.png" alt="" />
                            <div className="left-content">
                                <div className="link">
                                    <Link to="/" >Business</Link>
                                </div>
                                <h4>Great productivity apps you can download
                                    for free this week on iPhone</h4>
                                <footer>
                                    <ul>
                                        <p>May 02, 2022 </p>
                                        <li>Nattasha</li>
                                    </ul>
                                </footer>
                            </div>
                        </div>
                        <div className="right aside">
                            <section>
                                <img src="/assets/pineapple.png" alt="" />
                                <div className="right-content">
                                <div className="link">
                                    <Link to="/" >Business</Link>
                                </div>
                                    <h4>App X is now available on your wrist: Download watchOS...</h4>
                                    <footer>
                                        <ul>
                                            <p>May 02, 2022 </p>
                                            <li>Peter</li>
                                        </ul>
                                    </footer>
                                </div>
                            </section>
                            <section>
                                <img src="/assets/chair.png" alt="" />
                                <div className="right-content">
                                <div className="link">
                                    <Link to="/" >Marketing</Link>
                                </div>
                                    <h4>Apps Integrations to Boost Your Productivity</h4>
                                    <footer>
                                        <ul>
                                            <p>May 02, 2022 </p>
                                            <li>Nattasha</li>
                                        </ul>
                                    </footer>
                                </div>
                            </section>
                            <section>
                                <img src="/assets/ballon.png" alt="" />
                                <div className="right-content">
                                <div className="link">
                                    <Link to="/" >Creative</Link>
                                </div>
                                    <h4>Turn Emails & Attachments Into To-Dos with Apps</h4>
                                    <footer>
                                        <ul>
                                            <p>May 02, 2022 </p>
                                            <li>Robert Oliver</li>
                                        </ul>
                                    </footer>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner