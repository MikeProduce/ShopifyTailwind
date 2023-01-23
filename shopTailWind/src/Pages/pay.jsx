import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../app/cartSlice.jsx';






export const Pay = (props) => {
  const {products,cart,total} = useSelector((state) => state.cart)

  const itemsInCart = cart.reduce((acc, item) => {
    const existingItem = acc.find(i => i.itemName === item.itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        acc.push({...item, quantity: 1});
    }
    return acc;
}, []);

 
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
       <h1>{total}</h1>
       {itemsInCart.map((item, index) => (
        <ul key={index}>
          <li>
            <div>{item.itemName}</div>
            <div>{item.itemPrice}</div>
            <img src={item.itemImage} alt="" />
            <div>Quantity: {item.quantity}</div>
          </li>
        </ul>
      ))}
      </div>
    </div>
  )
}