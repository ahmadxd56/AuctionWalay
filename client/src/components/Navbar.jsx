import React from 'react';
import '../style/Navbar.css'; // Create a separate CSS file for Navbar styles
import loc from '../resources/Vector.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Left side - Logo */}
            <div className="logo">
                <Link to='/'><img src="https://i.ibb.co/0MLp4j6/Untitled-500-250-px-300-141-px-2-3.png" alt="Logo" /></Link>
            </div>

            {/* Middle - Buttons */}
            <div className="buttons">
                <Link to='/'><button>HOW IT WORKS</button></Link>
                <Link to='/sell-now' className='secondaryBtn'>Sell Now</Link>
                <Link to='/buy-now' className='secondaryBtn'>Buy Now</Link>
                <Link to='/sign-up' className='secondaryBtn'>Sign Up</Link>
                <Link to='/sign-in' className='secondaryBtn'>Sign In</Link>
            </div>


            {/* Right side */}
            <div className="country">
                <span className='h3'>Pakistan</span>
                <img src={loc} className='loc' alt="Logo" />
            </div>
        </div>
    );
};

export default Navbar;
