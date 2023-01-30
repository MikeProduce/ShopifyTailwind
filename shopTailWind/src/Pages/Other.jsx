
import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../app/cartSlice.jsx';
 import { Pagination } from '../components/Pagination.jsx';
 import { ProductCard } from '../components/ProductCard.jsx';





export const Other = () => {
  const dispatch = useDispatch();
  //dispatch is what we are using to call redux
  const [items, setItems] = useState([]);
  const {products,cart,total} = useSelector((state) => state.cart)
  // this is read redux and im using it to update the state of each of these states.
  //which are the total price, what is currently in the cart 
  const [currentPage,setCurrentPage] = useState(1);
  //is the page we start on which one 
  const [postsPerPage,setPostsperPage] = useState(8);
  // this is the amount of items that are allowed per page 
    

  
  
    useEffect(() => {
      setItems(products)
      
    }, [products])
// here we imported the data from the API component and can do anything we want with it. It seaves lines of code and i believe it does not have to keep fetching the data.

const Others = items.filter((Other) => {
  const names = Other.category
   return ['furniture','lighting','motorcycle','automotive'].indexOf(names) !== -1
  

})
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

const lastPostIndex = currentPage * postsPerPage
// exmaple currentpage = 1 * postsperpage = 9 which gives us 9. that is the lastPostIndex
const firstPostIndex = lastPostIndex - postsPerPage;
//example lastPostIndex = 9 - postsPerPage 9 = 0
const currentPosts = Others.slice(firstPostIndex, lastPostIndex);
// example firstPostIndex = 0 , lastPostIndex = 9 
// so in return we are only showing the items in the array 0-9



  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {currentPosts.map((product,index) => (
          <ProductCard key={index} product={product} purchaseHandler={purchaseHandler} />
        ))}
      </div>
        <Pagination totalPosts={Others.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  )
}