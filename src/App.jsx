import React from 'react'
import "./app.css"
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Detail from './components/Detail'
import Search from './components/Search'
import Contact from './components/Contact'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search/:name' element={<Search/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App