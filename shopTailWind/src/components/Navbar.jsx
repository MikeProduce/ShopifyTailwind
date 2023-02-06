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
                <li className='p-4 hover:bg-gray-400 relative mr-4'><Link to="/CheckOrder"><i className={`fa-regular fa-user fa-2x block`}></i></Link></li>
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
