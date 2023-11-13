import React from 'react';
import '../style/Footer.css';
import Logo from '../resources/logo-forms.png';
import Star from '../resources/Light.png';
import Copyright from './Copyrights';

const Footer = () => {
    return (
        <div>
        <footer className="footer">
            <div className="column">
                <img src={Logo} alt="Logo" className="logo-footer" style={{ display: 'inline-block', margin: '0 auto' }}/>
                <p className="description">Auctionwalay is a user-friendly online platform that revolutionizes the car auctioning experience. With its intuitive interface, real-time updates, and accessible features, Auctionwalay makes it effortless for users to participate and engage in exciting bidding opportunities.</p>
            </div>
            <div className="column">
                <ul className="links">
                <h3 className="heading-ql">Quick Links</h3>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/buy-now">All Auctions</a></li>
                    <li><a href="/sell-now">Auction Your Car</a></li>
                    <li><a href="/sign-up">Create Your Account</a></li>
                    <li><a href="/sign-in">Login to Your Account</a></li>
                </ul>
            </div>
            <div className="column">
            <img src={Star} alt="Star" className="star" style={{ display: 'inline-block', margin: '0 auto' }} />
            <p className="rating">5 out of 5 by Excise Punjab</p>
            </div>

        </footer>
            <Copyright />
        </div>
    );
}

export default Footer;
