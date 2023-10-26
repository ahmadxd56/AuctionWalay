import React from 'react'
import '../style/SignIn.css'
import { Link } from 'react-router-dom';
import Left from '../resources/native-bg-plain.png'

const SignIn = () => {
    return (
        <div className="form" style={{ backgroundImage: `url(${Left})`}}>
            <div className="rightSide">
                <div className='container'>
                <h1>Login</h1>
                <p>Please enter your name and password.</p>

                <form className='login-form' id="login" method="POST">

                    <label htmlFor="email">Choose Your Email</label>
                    <input name="email" placeholder="youremail@xyz.com" type="email" />

                    <label htmlFor="password">Enter your password</label>
                    <input name="password" placeholder="********" type="Password" />

                    <button type="submit">Login</button>
                    
                    <div className='divisor'>
                    <a href='/forgot-password'>Forgot password?</a>
                        <img src="https://i.ibb.co/s6xPV2w/divisor.png" alt="Divisor" />
                    </div>
                    <Link to="/sign-up"> 
                    <button className='btn-2'>Sign Up</button>
                    </Link>
                </form>
                </div>
            </div>
            <div
                className="leftSide">
                    <img src="https://i.ibb.co/xhHvdrk/logo-Forms.png" alt="AuctionWalay" />
                </div>
        </div>
    );
};

export default SignIn
