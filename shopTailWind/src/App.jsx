import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route,Link,Outlet,RouterProvider} from 'react-router-dom'
import {Home} from './home.jsx'
import {Pay} from './pay.jsx'
import {Confirmation} from './confirmation'

const Root = () => {
  return (
    <div>
      <nav className="flex justify-center bg-gray-800" >
        <Link to="/"> Home </Link>
        <Link to="/pay"> Check Out</Link>
        <Link to="/confirmation">Confirmation</Link>
      </nav>
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
