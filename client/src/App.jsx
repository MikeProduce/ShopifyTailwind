import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom'
import { Home } from './Pages/home.jsx'
import Pay from "./Pages/Pay.jsx";
import { Clothing } from './Pages/Clothing'
import { Other } from './Pages/Other'
import { Electronics } from './Pages/Electronics'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { BoughtItem } from './components/BoughtItem.jsx'
import { CheckOrder } from './Pages/CheckOrder.jsx'
import { Login } from './Pages/Login/Login.jsx'
import { SignUp } from './Pages/SignUp/SignUp.jsx'



// this is the homepage where we handle the path's to different pages. if you would like to add a page you would have to add a Route and go to the Navbar component and add a link as well
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="/Clothing" element={<Clothing />} />
        <Route path="/CheckOrder" element={<CheckOrder />} />
        <Route path="/Other" element={<Other />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Route>
    )
  )
  return (
    <div className="w-screen bg-gray-900 w-full overflow-x-hidden ">
      <BoughtItem />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
