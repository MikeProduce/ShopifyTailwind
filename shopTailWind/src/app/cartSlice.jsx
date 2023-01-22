
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
      state.cart = [...state.cart,action.payload];
      state.total = state.total + action.payload.itemprice
    },
  },
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer;

