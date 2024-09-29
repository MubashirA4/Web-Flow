import React from 'react'
import '../css/related.css'
import Orange from '../assets/Orange.png'
import Image from '../assets/Fruit.png'
import { Link } from 'react-router-dom'

const RelatedBlog = () => {
    return (
        <div className='Related-blog'>
            <h2>Related <span>Blog</span></h2>
            <div className="cards">
                <div className="card">
                    <img src={Orange} alt="" />
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
                    <img src={Image} alt="" />
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