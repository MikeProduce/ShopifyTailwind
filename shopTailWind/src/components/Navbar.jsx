import {useState} from 'react'
import {Link,Outlet} from 'react-router-dom'

// this component is meant to  add new links if needed also handles how the UI of the navbar looks like. 
export const Root = () => {
  const [isOpen,setIsOpen] = useState(false);


  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }
  const linksClass  = isOpen ? "": "hidden"
  // const linksIcon  = !isOpen ? "block": ""

  // trying to get the cart outside of the navbar to keep a count of the items

  return (
    <div>
      <div className='flex'>
      <nav className="relative w-full bg-gray-800 text-white" >
        <button className='block text-white md:hidden p-4' onClick={toggleOpen}>
        <i className="fa-solid fa-bars fa-2x"></i>
        </button>
        <ul className={`bg-gray-800 md:flex md:items-center md:w-auto ${linksClass} text-xl font-medium text-white-800`}>
        <li className='p-4 hover:bg-gray-400'><Link to="/"> Home </Link></li>
        <li className='p-4 hover:bg-gray-400'><Link to="/pay"> Check Out</Link></li>
        <li className='p-4 hover:bg-gray-400'><Link to="/confirmation">Confirmation</Link></li>
        <div className="absolute top-0 right-0 flex justify-center align-center">
        <i className={`fa-solid fa-cart-shopping fa-2x block`}>1</i>
        </div>
        </ul>
      </nav>
      </div>
        <Outlet />
    </div>)
}