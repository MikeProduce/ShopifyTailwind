import {useState} from 'react'
import {Link,Outlet} from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';



// this component is meant to  add new links if needed also handles how the UI of the navbar looks like. 
export const Root = () => {
  const {products,cart,total} = useSelector((state) => state.cart)
  const [isOpen,setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }
  const linksClass  = isOpen ? "": "hidden"
  
  const position = cart.length >= 10 ? 'left-8' : 'left-9'


  return (
    <div>
      <div>
        <nav className="w-full bg-gray-800 text-white" >
          <button className='block text-white md:hidden p-4' onClick={toggleOpen}>
            <i className="fa-solid fa-bars fa-2x"></i>
          </button>
            <ul className={`bg-gray-800 md:flex  md:items-center md:w-auto ${linksClass} text-xl text-white-800 justify-between`}>
              <div className='lg:flex md:flex sm:block'>  
                <li className='p-4 hover:bg-gray-400'><Link to="/"> Home </Link></li>
                <li className='p-4 hover:bg-gray-400'><Link to="/confirmation">Confirmation</Link></li>
              </div>
              <div className='flex'>
                <li className='p-4 hover:bg-gray-400 relative mr-4'><i className={`fa-regular fa-user fa-2x block`}></i></li>
                <li className='p-4 hover:bg-gray-400 relative mr-4'><Link to="/pay"><i className={`fa-solid fa-cart-shopping fa-2x block`}><span className={`absolute ${position} top-4 text-red-600 text-base`}>{cart.length > 0 ? cart.length : null}</span></i></Link></li>
              </div>
            </ul>
        </nav>
        <nav className='xs:hidden'>
          <div className="container">
            <div className="items-center justify-between">
              <ul className="items-center md:flex xs:hidden">
                <li className="text-white font-medium pl-4 pr-4"><Link to="/Electronics">Electronics</Link></li>
                <li className="text-white pl-4 pr-4"><Link to="/Clothing">Clothing</Link></li>
                <li className="text-white pl-4 pr-4"><Link to="/Other">Other</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
        <Outlet />  
    </div>)
}
//  the outlet function is responsible for rendering the rest of the pages