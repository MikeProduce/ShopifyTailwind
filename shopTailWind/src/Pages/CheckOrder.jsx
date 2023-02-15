import axios from "axios";
import React, { useState,useEffect } from "react";


export const CheckOrder = () => {
    // const [orderSummery,setOrderSummery] = useEffect();

    const returnOrderSummary = async () => {
      event.preventDefault();
        try {
          const response = await axios.get('https://');
          return setOrderSummery(response);
        } catch (error){
          console.log(error)
          return error;
        }
    } 


  return (
    <div className="h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
      <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="-space-y-px rounded-md shadow-sm">
          <label className="mr-2" htmlFor="id">Enter your order number:</label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800" type="text" id="id" name="id" />
          </div>
      </form>
      </div>
    </div>
  )
};