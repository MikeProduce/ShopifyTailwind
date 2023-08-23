
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../app/cartSlice.jsx';
import { Pagination } from '../components/Pagination.jsx';
import { ProductCard } from '../components/ProductCard.jsx';
import { Search } from '../components/Search.jsx';
import { Carousel } from '../components/Carousel.jsx';
import { Link } from 'react-router-dom'






export const Home = () => {
  const dispatch = useDispatch();
  //dispatch is what we are using to call redux
  const [items, setItems] = useState([]);
  const { products, cart, total } = useSelector((state) => state.cart)
  // this is read redux and im using it to update the state of each of these states.
  //which are the total price, what is currently in the cart 
  const [currentPage, setCurrentPage] = useState(1);
  //is the page we start on which one 
  const [postsPerPage, setPostsperPage] = useState(8);
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
    let itemObj = { itemName, itemPrice, itemImage };
    dispatch(addToCart(itemObj))
  }
  // this is the function that sends the purchases to the cart

  return (
    <div className="bg-white dark:bg-gray-900">
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Explore our wonderful market place!</h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Amawarget we make your purchases into reality</p>
          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/Login" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Login
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <a href="#search" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Start Shopping
            </a>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex mb-4">
          <Search id="search" products={products} setFilteredProducts={setFilteredProducts} />
        </div>
        {/* <Carousel products={products} /> */}
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.slice(firstPostIndex, lastPostIndex).map((product, index) => (
            <ProductCard key={index} product={product} purchaseHandler={purchaseHandler} />
            // here we are taking the firstpostIndex and the lastPostindex and only showing what is inbetween
            // them and then we map through the results of the filteredProducts.
          ))}
        </div>
        <Pagination
          totalPosts={filteredProducts.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          pageSelected={currentPage} />
      </div>
    </div>
  )
} 