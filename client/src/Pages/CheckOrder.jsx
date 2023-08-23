import axios from "axios";
import React, { useState,useEffect } from "react";


export const CheckOrder = () => {
    const [orderSummery,setOrderSummery] = useState([]);
    const [userID,setUserID] = useState('');


    
      const getData = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:7000/orders', {ID: userID })
          console.log(response.data)
          setOrderSummery([response.data]); 
          console.log(orderSummery);
        } catch (error) {
          console.error(error)
        }
        
      }
    //try catch to handle the form and get backend to send information about the user
       


  return (
    <div className="h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
      <form className="mt-8 space-y-6" onSubmit={getData}>
          <div className="-space-y-px rounded-md shadow-sm">
          <label className="mr-2" htmlFor="id">Enter your order number:</label>
          <input onChange={(e) => {setUserID(e.target.value)}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800" type="text" id="id" name="id" />
          </div>
          <button
        className="bg-gray-800 text-white p-2 rounded-md hover:bg-opacity-50 focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
      </form>
    <div> {orderSummery.length === 0 ?  ('Input your ID order number') : (orderSummery.map((user, index) => {
       return <div key={index}>
        <div>Name - {user.name}</div>
        <div>Address - {user.address}</div>
        <div className="sm:flex">Items - {user.items.map((item) => <div>{item},</div>)}</div>
        <div>Date Order - {user.date}</div>
       </div>
      }))}
      </div>
      </div>
    </div>
  )
};