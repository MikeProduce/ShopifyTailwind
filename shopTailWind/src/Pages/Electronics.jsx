
import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../app/cartSlice.jsx';
import {Button} from '../components/Button.jsx';
 import { Pagination } from '../components/Pagination.jsx';
 import { Stars } from '../components/Stars.jsx';





export const Electronics = () => {
  const dispatch = useDispatch();
  //dispatch is what we are using to call redux
  const [items, setItems] = useState([]);
  const {products,cart,total} = useSelector((state) => state.cart)
  // this is read redux and im using it to update the state of each of these states.
  //which are the total price, what is currently in the cart 
  const [currentPage,setCurrentPage] = useState(1);
  //is the page we start on which one 
  const [postsPerPage,setPostsperPage] = useState(16);
  // this is the amount of items that are allowed per page 
    
 
  
  
    useEffect(() => {
      setItems(products)
      
      
    }, [products])

    const electronics = items.filter((electronics) => {
      const category = electronics.category
      return ['smartphones', 'laptops'].indexOf(category) !== -1;
      

    })

    const lastPostIndex = currentPage * postsPerPage
    // exmaple currentpage = 1 * postsperpage = 9 which gives us 9. that is the lastPostIndex
    const firstPostIndex = lastPostIndex - postsPerPage;
    //example lastPostIndex = 9 - postsPerPage 9 = 0
    const currentPosts = electronics.slice(firstPostIndex, lastPostIndex);
    // example firstPostIndex = 0 , lastPostIndex = 9 
    // so in return we are only showing the items in the array 0-9
   
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
    {currentPosts.map((product,index) => (
      <div key={index} href={product.description} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.thumbnail}
          className="object-contain h-48 w-96 mx-auto object-center hover:opacity-75 hover:scale-110"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.title} {product.brand}</h3>
      <Stars rating={Math.round(product.rating)}/>
      <p className="mt-1 text-xl font-medium text-gray-900">${product.price}</p>
      <Button onClick={() => purchaseHandler(product)}>Add to cart</Button>
      <p className="mt-1 text-md font-medium text-gray-900">Left in stock: {product.stock}</p>
    </div>
    ))}
  </div>
  <Pagination totalPosts={electronics.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}