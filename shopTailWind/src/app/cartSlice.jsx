
import { createSlice} from '@reduxjs/toolkit'
import {API} from '../components/API.jsx'



async function fetchData() {
  const response = await API();
  return response;
}

const initialState = {
  products: await fetchData(),
  cart: [],
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const { itemName, itemPrice, itemImage } = action.payload;
      state.cart = [...state.cart, { itemName, itemPrice, itemImage }]
      state.total = state.total + itemPrice
    },
    removeToCart: (state,action) => {
      if (state.cart.length === 0){
        throw new Error('Cannot remove item from empty cart')
      }
      // if the array length of cart is 0 then throw an error
      const { itemName } = action.payload;
      // deconstructing the itemname from the action.payload
      //the payload is whatever item was just clicked in the pay.jsx UI
      const index = state.cart.findIndex(item => item.itemName === itemName);
      console.log(index);
      // here we are finding the index of the item that is passed from the pay.jsx page 
      if (index !== -1) {
        const removed = state.cart.splice(index, 1);
        state.total = state.total - removed[0].itemPrice;
        // here if index !== -1 is true then we remove that current index by 1 from the array, we also remove that current item price 
    }}
  },
})
export const {addToCart} = cartSlice.actions
export const {removeToCart} = cartSlice.actions

export default cartSlice.reducer;

