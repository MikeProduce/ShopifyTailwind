
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../app/cartSlice.jsx';
import { Pagination } from '../components/Pagination.jsx';
import { ProductCard } from '../components/ProductCard.jsx';
import { Search } from '../components/Search.jsx';






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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <div id="animation-carousel" class="relative w-full" data-carousel="static">
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div class="hidden duration-200 ease-linear" data-carousel-item="active">
              <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div class="hidden duration-200 ease-linear" data-carousel-item>
              <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
          </div>
          <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>

        <div className="flex mb-4">
          <Search products={products} setFilteredProducts={setFilteredProducts} />
        </div>
        <div class=" mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
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