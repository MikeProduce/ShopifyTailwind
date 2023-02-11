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
    <div className="flex justify-end mb-4">
      <input
        type="text"
        placeholder="Search for products"
        className="text-black rounded-lg w-full py-1 px-1.5 mx-4 border-2 border-black border-solid "
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

