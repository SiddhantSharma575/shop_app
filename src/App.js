import React from 'react'
import './App.css'
import Products from './pages/products/Products'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Product from './pages/product/Product'
import Carts from './pages/carts/Carts'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/carts' element={<Carts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App