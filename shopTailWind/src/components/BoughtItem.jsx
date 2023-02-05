import React from 'react';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';

export const BoughtItem = () => {
  const {cart} = useSelector((state) => state.cart);
  const [items, setItems] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const itemAdded = function() {
      if (cart.length >= 1) {
        // if the items in the cart length equals 1 or greater then run this if statement
        setItems(cart.map((item) => item.itemName).slice(-1)[0]);
        // the map function loops through the array and gets the name of every item and then the slice method finds the last itemName
        // in the array.
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 1500);
        // this message is initially set to false so it does not display but as soon as the cart
        // is updated then it sets it to true for 1.5 seconds and after those 
        // 1.5 seconds it sets it to false again.
      }
    };
    itemAdded();
  }, [cart]);
  // this useEffect just updates everytime the cart item is changed 

  return (
    <div>
      <div
        className={`${showMessage ? 'slide-in' : 'slide-out'} fixed top-0 z-40 bg-red-300 w-screen text-center`}
      >
      {items} was added to your cart
      </div>
    </div>
  );
};