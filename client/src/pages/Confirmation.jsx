import React from 'react';
import '../style/Confirmation.css'
import Left from '../resources/native-bg-plain.png';
import { Link } from 'react-router-dom';

const Confirm = () => {
    return (
        <div className="form-sell" style={{ backgroundImage: `url(${Left})` }}>
            <div className="center-form-wd-tp50">
                <div className='container-center container-center-2'>
                    <h1 className='standard-center-white'>Congratulations!</h1>
                    <p className='standard-center-white'>Your Add is now Live</p>
                    <img className="img-center" src="https://i.ibb.co/8zj3pJR/checked-1.png" alt="Upload Icon" />
                    <Link to="/">
                    <button className='default-btn' type="link">VIEW ALL AUCTIONS</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Confirm;
