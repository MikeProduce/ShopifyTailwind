import {useState} from 'react'
import {Link,Outlet} from 'react-router-dom'

// this component is meant to  add new links if needed also handles how the UI of the navbar looks like. 
export const Root = () => {
  const [isOpen,setIsOpen] = useState(false);



  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }
  const linksClass  = isOpen ? "": "hidden"
  const bigNumber = null


  return (
    <div>
      <div>
        <nav className="w-full bg-gray-800 text-white" >
          <button className='block text-white md:hidden p-4' onClick={toggleOpen}>
            <i className="fa-solid fa-bars fa-2x"></i>
          </button>
        <ul className={`bg-gray-800 md:flex  md:items-center md:w-auto ${linksClass} text-xl text-white-800`}>
         <li className='p-4 hover:bg-gray-400 relative'><Link to="/pay"><i className={`fa-solid fa-cart-shopping fa-2x block`}><span className='absolute left-8 top-4 text-red-600 text-xl'>3</span></i></Link></li>
          <li className='p-4 hover:bg-gray-400'><Link to="/"> Home </Link></li>
          <li className='p-4 hover:bg-gray-400'><Link to="/confirmation">Confirmation</Link></li>
        </ul>
        </nav>
      </div>
        <Outlet />  
    </div>)
}
//  the outlet function is responsible for rendering the rest of the pages