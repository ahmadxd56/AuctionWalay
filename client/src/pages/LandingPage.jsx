import React from 'react'
import '../style/LandingPage.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <div>
        <div className='sec1'>
            <img src="https://i.ibb.co/Hq5Q1Yc/1st-Section-Copy.png" alt="sec 1" style={{ width: '100%', height: 'auto' }} />
            <div className="rectangle">
                <div className="background-image" >
                    <p>Pakistan’s First Ever Platform where you Can Buy or Sale your Vehicles in Online Auctions.</p>
                    <div className="containerbtn">
                        <Link to='/sell-now'><button className='btn1'>SELL NOW</button></Link>
                        <Link to='/auctions'><button className='btn2'>BUY NOW</button></Link>
                    </div>
                </div>
            </div>
        </div>
            <div class="section-heading">
                 <h1>How it <span>Works</span></h1>
            </div>
        <div className='sec2'>
            <div className='sec2-row'>
                <div className='icon-hw'>
                    <img src="https://i.ibb.co/HxRj2kC/icon1.png" alt="List Your Car" />
                </div>

                <div>
                    <h2>List your Car for Auction</h2>
                    <p>Create an account on Auctionwalay and easily list your car for auction.
                    Provide detailed information about your car, including make, model, year, condition, and mileage.
                    Set a starting price for the auction and specify the duration of the bidding process.
                    </p>
                </div>
            <img src="https://i.ibb.co/pnYShfT/imgr1.png" alt="" />
            </div>
            <div className='sec2-row'>
                <div className='icon-hw'>
                    <img src="https://i.ibb.co/gR60ZRr/icon2.png" alt="icon2"/>
                </div>
                <div>
                    <h2>Place Bids and Compete</h2>
                    <p>Browse through a wide selection of cars available for auction on Auctionwalay.
                    Place bids on the cars you are interested in, considering the starting price and competing bids.
                    Stay updated in real-time with notifications on outbid situations and the progress of the auction.
                    </p>
                </div>
                <img src="https://i.ibb.co/12gW68s/image-3.png" alt="" />
            </div>
            <div className='sec2-row'>
                <div className='icon-hw'>
                    <img src="https://i.ibb.co/f2QQZKz/icon3.png" alt="icon3" />
                </div>
                
                <div>
                    <h2>Compare and Evaluate</h2>
                    <p>Gain access to comprehensive car information, including photos, descriptions, and vehicle history reports.
                    Compare prices and evaluate different car listings to make informed decisions.
                    Take advantage of the platform to explore various options and find the best deal.
                    </p>
                </div>
                <img src="https://i.ibb.co/WgWd7NY/image-4.png" alt="" />
            </div>
            <div className='sec2-row'>
                <div className='icon-hw'>
                    <img src="https://i.ibb.co/3vt6pTn/icon4.png" alt="icon4" />
                </div>

                <div>
                    <h2>Trustworthy Platform</h2>
                    <p>Auctionwalay ensures a secure and trustworthy platform for all users.
                    Safeguard your transactions with robust encryption and secure payment methods.
                    Benefit from a reliable platform that prioritizes privacy, data protection, and customer satisfaction.
                    </p>
                </div>
                <img src="https://i.ibb.co/ZVwb7dv/image-5.png" alt="" />
            </div>
        </div>
        <div className="containerbtn">
                    <Link to='/auctions'><button className='btn1'>START BIDDING</button></Link>
                    <Link to='/sell-now'><button className='btn2'>START AUCTIONING</button></Link>
        </div>
        {/* search bar component to be added */}
            <div class="section-heading">
                 {/* <h1>Recent <span>Auctions</span></h1> */}
            </div>
        <div className='sec3'>

        </div>
        <div className='sec4'>

        </div>
        <div className='sec5'>

        </div>
        <div className='sec6'>

        </div>
        <div className='sec7'>

        </div>
        <Footer />
        </div>
    )
}

export default LandingPage
