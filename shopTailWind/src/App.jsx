import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route,Link,Outlet,RouterProvider} from 'react-router-dom'
import {Home} from './Pages/home.jsx'
import {Pay} from './Pages/pay.jsx'
import {Confirmation} from './Pages/confirmation'
import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'

const Root = () => {
  const [isOpen,setIsOpen] = useState(false);


  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }
  const linksClass  = isOpen ? "": "hidden "
  return (
    <div>
      <div className='flex'>
      <nav className="relative w-full bg-gray-800 text-white" >
        <button className='block text-white md:hidden p-4' onClick={toggleOpen}>
        icon will go here
        </button>
        <ul className={`bg-gray-800 md:flex md:items-center md:w-auto ${linksClass}`}>
        <li className='p-4'><Link to="/"> Home </Link></li>
        <li className='p-4'><Link to="/pay"> Check Out</Link></li>
        <li className='p-4'><Link to="/confirmation">Confirmation</Link></li>
        </ul>
      </nav>
      </div>
        <Outlet />
    </div>)
}

 function App() {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Route>
    )
  )
  return (
    <div className="w-screen h-screen bg-red-300">
      <RouterProvider  router={router}/> 
    </div>
  )
}

export default App
