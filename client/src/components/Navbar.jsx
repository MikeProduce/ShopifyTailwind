import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';




// this component is meant to  add new links if needed also handles how the UI of the navbar looks like. 
export const Navbar = () => {
  const { cart, products } = useSelector((state) => state.cart)
  const [openNavigation, setOpenNavigation] = useState(false);




  return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            onClick={() => setOpenNavigation(!openNavigation)}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded={openNavigation ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${openNavigation ? "block" : "hidden"} w-full md:block`} id="navbar-solid-bg">
            <ul className="flex-col md:flex font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 justify-between">
              <div className='md:flex gap-4 items-center justify-end'>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/"> Home </Link>
                </li>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/Electronics"> Electronics</Link>
                </li>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/Clothing"> Clothing </Link>
                </li>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/Other"> Other </Link>
                </li>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/CheckOrder"> Check Order </Link>
                </li>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/pay"> Pay </Link>
                </li>
              </div>
              <div className='md:flex gap-6 md:order-last items-center'>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/Login"> Login </Link>
                </li>
                <li>
                  <Link className='block py-2 pl-3 pr-4 text-gray-900 font-extrabold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' to="/SignUp"> Sign Up </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />

    </>
  )
}
