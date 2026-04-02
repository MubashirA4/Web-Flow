import orangeImg from '../assets/images/Orange.png';
import fruitImg from '../assets/images/Fruit.png';
import React from 'react'



import { Link } from 'react-router-dom'

const RelatedBlog = () => {
    return (
        <div className='Related-blog'>
            <h2>Related <span>Blog</span></h2>
            <div className="cards">
                <div className="card">
                    <img src={orangeImg} alt="" />
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
                    <img src={fruitImg} alt="" />
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
            </div>
        </div>
    )
}

export default RelatedBlog