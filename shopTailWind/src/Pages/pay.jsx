import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../app/cartSlice.jsx';






export const Pay = (props) => {
  const {products,cart,total} = useSelector((state) => state.cart)
  console.log(cart);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
       {total}
      {cart.map((item,index,key) => {
        return <li key={index}>{item}</li>
      })}
      </div>
    </div>
  )
}