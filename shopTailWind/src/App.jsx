import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route,Link,Outlet,RouterProvider} from 'react-router-dom'
import {Home} from './Pages/home.jsx'
import {Pay} from './Pages/pay.jsx'
import {Confirmation} from './Pages/confirmation'
import {Root} from './components/Navbar.jsx'
import {useState} from 'react'



// this is the homepage where we handle the path's to different pages. if you would like to add a page you would have to add a Route and go to the Navbar component and add a link as well
 function App() {

  const [response, setResponse] = useState({})
  
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
