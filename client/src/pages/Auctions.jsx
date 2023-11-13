import React, { useEffect, useState } from 'react';
import './Auction.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../product/product.thunk';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';




const Auctions = () => {

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    dispatch(getAllProducts());
  }, [])

  const { isLoading, isError, message, products } = useSelector(
    (state) => state.products
  );

  // Filter products based on name, city, and price range
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCity === '' || product.location.toLowerCase() === selectedCity.toLowerCase()) &&
    (minPrice === '' || parseFloat(product.price) >= parseFloat(minPrice)) &&
    (maxPrice === '' || parseFloat(product.price) <= parseFloat(maxPrice))
  );

  // Extract unique cities from products for the dropdown
  const uniqueCities = Array.from(new Set(products.map((product) => product.location)));




  return (
    <div>

      <div className='flex justify-between py-5 bg-gray-200' style={{ marginTop: '20px', paddingLeft:'100px', paddingRight: '100px' }}>
        <div>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '10px',
              color: 'black'
            }}

          />
          search
        </div>


        {/* City dropdown */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        >
          <option value="">All Cities</option>
          {uniqueCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        {/* Price range inputs */}
        <div>
          <label htmlFor="minPrice">Min Price:</label>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '10px',
            }}
          />
        </div>

        <div>
          <label htmlFor="maxPrice">Max Price:</label>
          <input
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '10px',
            }}
          />
        </div>

      </div>

      <div className=" grid grid-cols-4 ">

        {filteredProducts.map((card) => (
          <div className="border p-5 flex flex-col justify-between" key={card?._id} style={{ margin: '10px' }}>
            <img src={card?.imageURL} className="object-fit" alt="img" style={{ width: '100%' }} />
            <div className="card-title">{card?.name}</div>
            <div className="card-description">{card?.description}</div>
            <div className=" flex justify-between">
              <Link to={`/product/${card?._id}`}>
                <button className="button">View Details</button>
              </Link>
              <button className="">{card?.price} PKR</button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Auctions;
