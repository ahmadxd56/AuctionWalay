import React, { useState } from 'react';
import Filter from '../components/Filter';
import CarList from '../components/CarList';
import '../style/Auctions.css'; // Import your CSS file

const Auctions = () => {
  const [filterOptions, setFilterOptions] = useState({
    keyword: '',
    cities: [],
    priceRange: [0, 1000000],
    yearRange: [2000, 2023],
  });

  const handleFilter = (options) => {
    setFilterOptions(options);
  };

  return (
    <div className="auctions-page">
      <Filter onFilter={handleFilter} />
      <CarList filterOptions={filterOptions} />
    </div>
  );
};

export default Auctions;
