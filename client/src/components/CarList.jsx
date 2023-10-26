import React from 'react';
import '../style/CarList.css';
import dummyData from '../dummyData';

const CarList = () => {
  return (
    <div className="car-list">
      {dummyData.map((car) => (
        <div className="product-card" key={car.id}>
          <img src={car.carImages[0]} alt={car.carName} />
          <div className="product-info">
            <p>Starting at:</p>
            <p className="starting-bid">PKR {car.startingBid}</p>
          </div>
          <div className="product-actions">
            <p>Open for Bids</p>
            <button>Bid Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
