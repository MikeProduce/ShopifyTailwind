import React from 'react';
import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';

export const BoughtItem = () => {
  const {cart} = useSelector((state) => state.cart);
  const [items, setItems] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [prevCartLength, setPrevCartLength] = useState(cart.length);
  // The reason for using prevCartLength, is to keep track of the 'cart'.
  // from the previous render.

  useEffect(() => {
    setPrevCartLength(cart.length);
    // this helps keep up with the current cart array and its changes.
    // before we had it in the useEffect it would only take the initial redering
    // of the component
    const itemAdded = function() {
      if (cart.length >= 0) {
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
    const itemRemoved = function() {
        setShowMessage(false);
      }

    if (cart.length > prevCartLength){
      setMessage(
        ' has been added to your cart'
      )
      itemAdded();
      // here we are checking if the carts length is higher than the previous carts length
      // if it is we show that the cart has been imported in the cart
    } else if (cart.length < prevCartLength){
      setMessage('the item was removed from the cart')
      itemRemoved();
      // here we check again if the prevCartLegnth is higher if it is we change the message to the item that is removed

    }
 
    
  }, [cart]);
  // this useEffect just updates everytime the cart item is changed 

  return (
    <div>
      <div
        className={`${showMessage ? 'slide-in' : 'slide-out'} fixed top-0 z-40 bg-red-300 w-screen text-center`}
      >
      {items} {message}
      </div>
    </div>
  );
};