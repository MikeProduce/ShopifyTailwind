import {useState} from 'react'
import {Link,Outlet} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';



// this component is meant to  add new links if needed also handles how the UI of the navbar looks like. 
export const Root = () => {
  const {cart} = useSelector((state) => state.cart)
  const [isOpen,setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }
  const linksClass  = isOpen ? "": "hidden"
  // isOpen is initially at false which means linksClass = nothing, but once it reaches 
  const position = cart.length >= 10 ? 'left-8' : 'left-9'
  // I was having trouble with the way the numbers fit into the icon so i have to change the position its in for specific numbers


  return (
    <div>
      <div>
        <nav className="w-full bg-gray-800 text-white flex flex-col md:flex-row-reverse justify-between" >
        <div className='flex justify-between'>
          <button className='block text-white md:hidden p-4' onClick={toggleOpen}>
            <i className="fa-solid fa-bars fa-2x"></i>
          </button>
          <ul className='flex bg-gray-800 md:flex  md:items-center md:w-auto text-xl text-white-800 justify-between'>
                <li className='p-4 hover:bg-gray-400 relative mr-4'><i className={`fa-regular fa-user fa-2x block`}></i></li>
                <li className='p-4 hover:bg-gray-400 relative mr-4'><Link to="/pay"><i className={`fa-solid fa-cart-shopping fa-2x block`}><span className={`absolute ${position} top-4 text-red-600 text-base`}>{cart.length > 0 ? cart.length : null}</span></i></Link></li>
                </ul>
              </div>
            <ul className={`bg-gray-800 md:flex  md:items-center md:w-auto ${linksClass} text-xl text-white-800 justify-between`}>
              <div className='lg:flex md:flex sm:block'>  
                <li className='p-4 hover:bg-gray-400'><Link to="/"> Home </Link></li>
                <li className='p-4 hover:bg-gray-400'><Link to="/Electronics">Electronics</Link></li>
                <li className='p-4 hover:bg-gray-400'><Link to="/Clothing">Clothing</Link></li>
                <li className='p-4 hover:bg-gray-400'><Link to="/Other">Other</Link></li>
              </div>
            </ul>
        </nav>
      </div>
        <Outlet />  
    </div>)
}
//  the outlet function is responsible for rendering the rest of the pages


// <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
//   <div class="container flex flex-wrap items-center justify-between mx-auto">
//     <a href="https://flowbite.com/" class="flex items-center">
//         <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
//         <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//     </a>
//     <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//       <span class="sr-only">Open main menu</span>
//       <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//     </button>
//     <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li>
//           <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
//         </li>
//         <li>
//           <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
//         </li>
//         <li>
//           <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
//         </li>
//         <li>
//           <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
//         </li>
//         <li>
//           <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>