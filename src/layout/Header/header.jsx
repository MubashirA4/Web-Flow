import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container'>
            <header>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">About Us </Link></li>
                        <li><Link to="/">Features</Link></li>
                        <li><Link to="/">Pricing</Link></li>
                        <li><Link to="/">Blog</Link></li>
                    </ul>
                <div className="signin">
                    <Link>LOGIN</Link>
                </div>
                </nav>
            </header>
        </div>
    )
}

export default Header