import axios from "axios";
import React, { useState,useEffect } from "react";

export const Form = ({cartItems}) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [items, setItems] = useState([]);


  
  useEffect(() => {
    setItems(cartItems); 
    // This useEffect hook runs whenever the `cartItems` prop changes.
  // The hook sets the state `items` to the value of `cartItems`.
  }, [cartItems]);

  const handleSubmit = (event) => {
    event.preventDefault();
    //here we are submitting the form and preventing the page from refreshing
     axios.post('http://localhost:5000/orders', {
      name: name,
      address: address,
      date: date,
      items: items.map(item => item.itemName),
     }).then(response => {
       // This block of code runs when the axios.post request is successful.
      console.log(response);
     }).catch(error => {
      //this block of code runs when the axios.post fails
      console.error(error);
     })
     
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
          Address
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
          Date
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <button
        className="bg-purple-500 hover:bg-purple-400 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

