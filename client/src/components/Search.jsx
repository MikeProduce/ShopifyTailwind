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
    <form className='w-full sm:w-1/2'>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input value={searchTerm} onChange={handleSearch} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." />
      </div>
    </form>
  );
};





