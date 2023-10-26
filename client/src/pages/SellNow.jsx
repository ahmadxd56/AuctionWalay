import React from 'react';
import '../style/SellNow.css';
import Left from '../resources/native-bg-plain.png';

const SellNow = () => {
    return (
        <div className="form-sell" style={{ backgroundImage: `url(${Left})` }}>
            <div className="center-form-wd-tp50">
                <div className='container-center-short-pad'>
                    <h1 className='standard-center-white'>Sell Your Car</h1>
                    <p className='standard-center-white'>Please enter your auction Details</p>

                    <form className='sell' id="sell-now" method="POST">
                        <label htmlFor="carImage" className="custom-file-input">
                            <img src="https://i.ibb.co/Qp85H3k/Upload-icon.png" alt="Upload Icon" />
                            <p>UPLOAD UP TO 5 PICTURES OF YOUR CAR</p>
                            <p className='secondary-p'>Supported formats: JPEG, PNG</p>
                            <input type="file" name="carImage" accept="image/*" />
                        </label>

                        <label htmlFor="adTitle">Enter Your Ad Title</label>
                        <input name="adTitle" type="text" placeholder="Title of your ad"/>

                        <label htmlFor="carDescription">Enter Car Description</label>
                        <textarea name="carDescription" placeholder="Description of your car"></textarea>

                        <div className="row">
                            <div className="side-by-side">
                                <select name="make">
                                    <option value="" disabled selected hidden>Choose a Make</option>
                                    <option value="make1">Make 1</option>
                                    <option value="make2">Make 2</option>
                                    <option value="make3">Make 3</option>
                                </select>

                                <select name="manufactureYear">
                                    <option value="" disabled selected hidden>Choose a Year</option>
                                    <option value="year1">Year 1</option>
                                    <option value="year2">Year 2</option>
                                    <option value="year3">Year 3</option>
                                </select>
                            </div>
                        </div>



                        <label htmlFor="startingBid">Starting Bid</label>
                        <input name="startingBid" type="number" placeholder="Starting bid amount" min="10000" />

                        <p>DISCLAIMER <br></br>
                            Your Ad will be Live and active till 10 days of receiving your first bid, if anyone wins the auction in our timeline, the token fee would be deducted from their side and our support agent will direct you to them.</p>

                        <button type="submit">START SELLING</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SellNow;
