import React from 'react'
import '../style/Update.css'
//import { Link } from 'react-router-dom';
import Left from '../resources/native-bg-plain.png'

const Update = () => {
    return (
        <div className="form-update" style={{ backgroundImage: `url(${Left})`}}>
            <div className="center-form-wd-tp">
                <div className='container-center-diff-pad'>
                <h1>Update Account</h1>
                <p>Only the options given below can be updated, for permanent account deletion contact Customer Support.</p>

                <form className='update' id="update-acc" method="POST">

                    <label htmlFor="email">Choose New Email</label>
                    <input name="email" placeholder="youremail@xyz.com" type="email" />

                    <label htmlFor="phoneNumber">Enter New Phone Number</label>
                    <input name="phoneNumber" placeholder="+92 XXX-XXXXXXX" type="text" />
                    
                    <label htmlFor="city">City</label>
                    <select name="city">
                    <option value="" disabled selected hidden>Choose an Option</option>
                        <option value="lhr">Lahore</option>
                        <option value="khi">Karachi</option>
                        <option value="isl">Islamabad</option>
                    </select>
                    <a href='/forgot-password'>Looking for Reset Password?</a>
                    <button type="submit">Update Info</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update
