
import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../app/cartSlice.jsx';
import {Button} from '../components/Button.jsx';
 





export const Electronics = () => {
  const dispatch = useDispatch();
  //dispatch is what we are using to call redux
  const [items, setItems] = useState([]);
  const {products,cart,total} = useSelector((state) => state.cart)
  // this is read redux and im using it to update the state of each of these states.
  //which are the total price, what is currently in the cart 
    
 
  
  
    useEffect(() => {
      setItems(products)
      
      
    }, [products])

    const electronics = items.filter((electronics) => {
      const names = electronics.category.name
       return names === 'Electronics'
      

    })
   
// here we imported the data from the API component and can do anything we want with it. It seaves lines of code and i believe it does not have to keep fetching the data.

  // if (loading) {  
  //   return <p>Loading...</p>}
  // if (error) {
  //   return <p>{error.message}</p>}
  const purchaseHandler = (product) => {
    let fullDescription = product
    const itemName = fullDescription.title
    const itemPrice = fullDescription.price
    const itemImage = fullDescription.images[0]
    let itemObj = {itemName ,itemPrice, itemImage };
    dispatch(addToCart(itemObj))
  }
// this purchase handler is handling all the updates whenever a user decides to buy something 




  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {electronics.map((product,key) => (
      <div key={key} href={product.description} className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.images[0]}
            className="object-cover object-center hover:opacity-75 hover:scale-110"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
        <Button onClick={() => purchaseHandler(product)}>Add to cart</Button>
      </div>
    ))}
  </div>
 
      </div>
    </div>
  )
}