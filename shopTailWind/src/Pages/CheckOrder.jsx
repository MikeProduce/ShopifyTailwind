import axios from "axios";
import React, { useState,useEffect } from "react";


export const CheckOrder = () => {
    const [orderSummery,setOrderSummery] = useState('');

    const getData = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:7000/orders', {ID: orderSummery })
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
      
    }
       


  return (
    <div className="h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
      <form className="mt-8 space-y-6" onSubmit={getData}>
          <div className="-space-y-px rounded-md shadow-sm">
          <label className="mr-2" htmlFor="id">Enter your order number:</label>
          <input onChange={(e) => {setOrderSummery(e.target.value)}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800" type="text" id="id" name="id" />
          </div>
          <button
        className="bg-gray-800 text-white p-2 rounded-md hover:bg-opacity-50 focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
      </form>
      </div>
    </div>
  )
};