import React from 'react'
import '../style/Reset.css'
//import { Link } from 'react-router-dom';
import Left from '../resources/native-bg-plain.png'

const Reset = () => {
    return (
        <div className="form-reset" style={{ backgroundImage: `url(${Left})`}}>
            <div className="center-form-wd-tp">
                <div className='container-center-diff-pad'>
                <h1>Reset Password</h1>

                <form className='reset' id="forgot" method="POST">

                    <label htmlFor="password">Enter Your Current Password</label>
                    <input name="password" placeholder="************" type="password" />

                    <label htmlFor="password">Enter Your New Password</label>
                    <input name="password" placeholder="************" type="password" />

                    <button type="submit">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reset
