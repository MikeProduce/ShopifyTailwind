import React, { useState } from 'react';

export const Search = ({ products, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredProducts(
      products.filter((product) => {
        const description = product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const title = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const brand = product.brand.toLowerCase().includes(searchTerm.toLowerCase());
        const category = product.category.toLowerCase().includes(searchTerm.toLowerCase());
        const onlyReturn = description || title || brand || category;
        return onlyReturn;
      })
    );
  };
 //orginally filteredProducts contains all the items. So all the items are displayed but
  // once we have some change in the search bar the products.filter will take the input
 //and only return the products that contain those characters
  return (
    <div className="mb-4">
      <label htmlFor="search" className=''>Search For Your Product</label>
        <input
          id="search"
          type="text"
          placeholder="Search for products"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
          value={searchTerm}
          onChange={handleSearch}
        />
    </div>

  );
};

