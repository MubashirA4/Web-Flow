import React from 'react'
import Logo from '../assets/Logo.png'
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
                        <li><Link to="/">Blog</Link></li>
                    </ul>
                </nav>
                <div className="signin">
                    <Link>LOGIN</Link>
                </div>
            </header>
        </div>
    )
}

export default Header