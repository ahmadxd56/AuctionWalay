import React from 'react'
import '../style/ForgotPassword.css'
import { Link } from 'react-router-dom';
import Left from '../resources/native-bg-plain.png'

const Forgot = () => {
    return (
        <div className="form-forget" style={{ backgroundImage: `url(${Left})`}}>
            <div
                className="top">
                    <img src="https://i.ibb.co/TR32z9D/3-1-1.png" alt="AuctionWalay" />
            </div>
            <div className="center-form">
                <div className='container-center'>
                <Link to="/sign-in">
                    <button className='arrow-button'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Big Arrows">
                            <path id="Vector 24" d="M11.8125 3.375L6.89461 8.29289C6.50408 8.68342 6.50408 9.31658 6.89461 9.70711L11.8125 14.625" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            </g>
                        </svg>
                    </button>
                </Link>
                <h1>Forget password</h1>

                <form className='forget' id="forgot" method="POST">

                    <label htmlFor="email">Enter Your Email</label>
                    <input name="email" placeholder="example@gmail.com" type="email" />
                    <a href='/update'>Update Account</a>

                    <button type="submit">Send link 🔗</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Forgot
