
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
  },
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer;

