import React from 'react';
import '../style/SignUp.css'
import { Link } from 'react-router-dom';
import Left from '../resources/native-bg-plain.png'

const App = () => {
    return (
        <div className="form" style={{ backgroundImage: `url(${Left})`}}>
            <div className="rightSide">
                <div className='container'>
                <h1>Sign Up</h1>
                <p>Please enter the following details to get yourself registered with us.</p>

                <form className='signup-form' id="registration" method="POST">

                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Full Name" type="text" />

                    <label htmlFor="password">Choose Your Password</label>
                    <input name="password" placeholder="Enter Password..." type="Password" />

                    <label htmlFor="email">Choose Your Email</label>
                    <input name="email" placeholder="youremail@xyz.com" type="email" />

                    <label htmlFor="phoneNumber">Enter Your Phone Number</label>
                    <input name="phoneNumber" placeholder="+92 XXX-XXXXXXX" type="text" />
                    
                    <label htmlFor="city">City</label>
                    <select name="city">
                    <option value="" disabled selected hidden>Choose an Option</option>
                        <option value="lhr">Lahore</option>
                        <option value="khi">Karachi</option>
                        <option value="isl">Islamabad</option>
                    </select>
                    
                    <label htmlFor="cnic">CNIC</label>
                    <input name="cnic" placeholder="35202-XXXXXXX-X" type="text" />

                    <button type="submit">Sign Up</button>
                    <div className='divisor'>
                        <img src="https://i.ibb.co/s6xPV2w/divisor.png" alt="Divisor" />
                    </div>
                    <Link to="/sign-in"> 
                    <button className='btn-2'>Login to your Account</button>
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

export default App;