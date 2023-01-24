import { useDispatch, useSelector} from 'react-redux';
import { removeToCart } from '../app/cartSlice.jsx';
import {Button} from '../components/Button.jsx';







export const Pay = () => {
  const dispatch = useDispatch();
  const {products,cart,total} = useSelector((state) => state.cart)

  const itemsInCart = cart.reduce((acc, item) => {
    //the parameters are an empty array and the item which represets what were getting from redux. which is the image,name,price
    const existingItem = acc.find(i => i.itemName === item.itemName);
    //here we are using find key word to loop through the array to see if something matches.(ex: miguel === miguel)
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        acc.push({...item, quantity: 1});
    }
    //this if else statement checks if the array contains the item name, if it does contain the item name then itll add +1 to the quantity else it will push that new item into the array as an object
    console.log(acc)
    return acc;
    //here we are just returning the array so that we can map through it and display the information.
}, []);

  const purchaseHandler = (product) => {
  let fullDescription = product
  console.log(fullDescription)
  const itemName = fullDescription.itemName
  const itemPrice = fullDescription.itemPrice
  const itemImage = fullDescription.itemImage
  let itemObj = {itemName ,itemPrice, itemImage };
  dispatch(removeToCart(itemObj))
}


 
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
       <h1 className='text-lg font-medium'>Shopping Cart</h1>
       <div className="border-black border-2"></div>
       {itemsInCart.map((item, index) => (
        <ul key={index}>
          <li className='flex flex-wrap p-4 sm:justify-center lg:justify-center'>
            <div className="p-2 justify-center">
              <img className='w-full h-auto sm:w-1/2 lg:w-1/2 md:w-1/2 md:mx-auto sm:mx-auto' src={item.itemImage} alt="" />
            </div> 
            <div className="p-2 w-full h-auto sm:w-1/2 lg:w-1/3 md:w-1/2">
              <div>Product - {item.itemName}</div>
              <div>Price - {item.itemPrice}</div>
              <div>Quantity:{item.quantity}</div>
              <div>
                <Button onClick={() => purchaseHandler(item)}>Remove from cart</Button>
              </div> 
            </div>
          </li>
        </ul>
      ))}
      <div className="border-black border-2"></div>
      <div className='text-lg font-medium'>Subtotal (0 Items) ${total}</div>
      </div>
    </div>
  )
}