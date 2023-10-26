import React, { useState } from 'react';
import '../style/Filter.css';

const Filter = ({ onFilter }) => {
  const [keyword, setKeyword] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [yearRange, setYearRange] = useState([2000, 2023]);

  const handleCityChange = (city) => {
    if (selectedCities.includes(city)) {
      setSelectedCities(selectedCities.filter((c) => c !== city));
    } else {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const cities = ['Lahore', 'Islamabad', 'Karachi', 'Peshawar', 'Rawalpindi'];

  const handleFilter = () => {
    // You can apply your filtering logic here
    const filterOptions = {
      keyword,
      cities: selectedCities,
      priceRange,
      yearRange,
    };
    onFilter(filterOptions);
  };

  return (
    <div className="filter">
      <h2>Filter</h2>
      <input
        type="text"
        placeholder="Search by Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="city-filter">
        <h3>City</h3>
        {cities.map((city) => (
          <label key={city}>
            <input
              type="checkbox"
              value={city}
              checked={selectedCities.includes(city)}
              onChange={() => handleCityChange(city)}
            />
            {city}
          </label>
        ))}
      </div>
      <div className="price-filter">
        <h3>Price Range (PKR)</h3>
        <input
          type="number"
          placeholder="Min"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
        />
        <input
          type="number"
          placeholder="Max"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
        />
      </div>
      <div className="year-filter">
        <h3>Year Range</h3>
        <input
          type="number"
          placeholder="Min"
          value={yearRange[0]}
          onChange={(e) => setYearRange([e.target.value, yearRange[1]])}
        />
        <input
          type="number"
          placeholder="Max"
          value={yearRange[1]}
          onChange={(e) => setYearRange([yearRange[0], e.target.value])}
        />
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filter;
