import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route,Link,Outlet,RouterProvider} from 'react-router-dom'
import {Home} from './home.jsx'
import {Pay} from './pay.jsx'

 function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route element={<Pay />} />
      </Route>
    )
  )
  return (
    <div className="w-screen h-screen bg-red-300">
      <RouterProvider router={router}/>
    </div>
  )
}
const Root = () => {
  return (
  <nav>
    <Link to="/"> Home </Link>
    <Link to="/pay"> Check Out  </Link>
  <div>
    <Outlet />
  </div>
  </nav>)
}
export default App
