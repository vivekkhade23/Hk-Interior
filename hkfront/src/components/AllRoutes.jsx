import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Packages from '../pages/Packages'

const AllRoutes = () => {
  return (
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/package' element={<Packages/>}/>
</Routes>
  )
}

export default AllRoutes