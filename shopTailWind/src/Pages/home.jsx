
import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../app/cartSlice.jsx';
 





export const Home = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const {products,cart,total} = useSelector((state) => state.cart)
    

  
  
    useEffect(() => {
      setItems(products)
      
    }, [products])
// here we imported the data from the API component and can do anything we want with it. It seaves lines of code and i believe it does not have to keep fetching the data.

  // if (loading) {  
  //   return <p>Loading...</p>}
  // if (error) {
  //   return <p>{error.message}</p>}
  const purchaseHandler = (product) => {
    let fullDescription = product
    const itemname = fullDescription.category.name
    const itemprice = fullDescription.price
    const itemImage = fullDescription.images
    let itemObj = {itemname,itemprice};
    dispatch(addToCart(itemObj))

    console.log(itemImage)
  }

  /// here we added the price and name to the global state using reduxtool kit, when youre back miguel you need to display them on different pages like for exmaple the pay pages instead of the home page




  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <p>{total}</p>
        <p></p>
    {items.map((product,key) => (
      <div key={product.id} href={product.description} className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.images[0]}
            className="object-cover object-center hover:opacity-75 hover:scale-110"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.category.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
        <button  onClick={() => purchaseHandler(product)} className='bg-gray-800 text-white p-2 rounded-md hover:bg-opacity-50'>Add to Cart</button>
      </div>
    ))}
  </div>
 
      </div>
    </div>
  )
}