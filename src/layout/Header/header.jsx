import React from 'react'
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container'>
            <header>
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="" /></Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">About Us </Link></li>
                        <li><Link to="/">Features</Link></li>
                        <li><Link to="/">Pricing</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </nav>
                <div className="signin">
                    <Link to="/">LOGIN</Link>
                </div>
            </header>
        </div>
    )
}

export default Header