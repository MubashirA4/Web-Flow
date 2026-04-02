import blueOrangeImg from '../assets/images/blue-orange.png';
import socialAppsImg from '../assets/images/social-apps.png';
import cameraImg from '../assets/images/camera.png';
import cupImg from '../assets/images/cup.png';
import React from 'react'





import { Link } from 'react-router-dom'


const News = () => {
    return (
        <div className='container'>
            <div className="latest-news">
                <h2>Latest <span>News</span></h2>
                <div className="cards">
                    <div className="card">
                        <img src={blueOrangeImg} alt="" />
                        <div className="content">
                            <div className="link">
                                <Link to="/">Designing</Link>
                            </div>
                            <h4>The Best Productivity Apps for 2021 -
                                Updated List</h4>
                            <footer>
                                <ul>
                                    <p>May 02, 2022 </p>
                                    <li>Nattasha</li>
                                </ul>
                            </footer>
                        </div>
                    </div>
                    <div className="card">
                        <img src={socialAppsImg} alt="" />
                        <div className="content">
                            <div className="link">
                                <Link to="/">Development</Link>
                            </div>
                            <h4>Turn Emails & Attachments Into To-Dos
                            with Apps</h4>
                            <footer>
                                <ul>
                                    <p>May 02, 2022 </p>
                                    <li>Nattasha</li>
                                </ul>
                            </footer>
                        </div>
                    </div>
                    <div className="card">
                        <img src={cameraImg} alt="" />
                        <div className="content">
                            <div className="link">
                                <Link to="/">Designing</Link>
                            </div>
                            <h4>Why virtual experiences are going to
                            be the next big thing in 2023</h4>
                            <footer>
                                <ul>
                                    <p>May 02, 2022 </p>
                                    <li>Nattasha</li>
                                </ul>
                            </footer>
                        </div>
                    </div>
                    <div className="card">
                        <img src={cupImg} alt="" />
                        <div className="content">
                            <div className="link">
                                <Link to="/">Development</Link>
                            </div>
                            <h4>Is it smart to invest in crypto in 2022? 
                            What you need to know</h4>
                            <footer>
                                <ul>
                                    <p>May 02, 2022 </p>
                                    <li>Nattasha</li>
                                </ul>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News