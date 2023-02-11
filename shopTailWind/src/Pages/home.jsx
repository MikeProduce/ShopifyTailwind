
import {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { addToCart } from '../app/cartSlice.jsx';
import { Pagination } from '../components/Pagination.jsx';
import { ProductCard } from '../components/ProductCard.jsx';
import { Search } from '../components/Search.jsx';
 





export const Home = () => {
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
  const lastPostIndex = currentPage * postsPerPage
    // exmaple currentpage = 1 * postsperpage = 9 which gives us 9. that is the lastPostIndex
  const firstPostIndex = lastPostIndex - postsPerPage;
    //example lastPostIndex = 9 - postsPerPage 9 = 0 
  const [filteredProducts, setFilteredProducts] = useState(products);
    // Add this state to store the filtered products based on the search term
    useEffect(() => {
      setItems(products)
      
    }, [products])

  const purchaseHandler = (product) => {
    let fullDescription = product
    const itemName = fullDescription.title
    const itemPrice = fullDescription.price
    const itemImage = fullDescription.images[0]
    let itemObj = {itemName ,itemPrice, itemImage };
    dispatch(addToCart(itemObj))
  }
  // this is the function that sends the purchases to the cart


  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex justify-end mb-4">
        <Search products={products} setFilteredProducts={setFilteredProducts} />
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {filteredProducts.slice(firstPostIndex, lastPostIndex).map((product,index) => (
          <ProductCard key={index} product={product} purchaseHandler={purchaseHandler} />
          // here we are taking the firstpostIndex and the lastPostindex and only showing what is inbetween
          // them and then we map through the results of the filteredProducts.
        ))}
      </div>
      <Pagination totalPosts={filteredProducts.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} pageSelected={currentPage} />
    </div>
  </div>
  )
}