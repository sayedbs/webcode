import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import ErrorPage from './components/ErrorPage'
import Pricing from './pages/home/Pricing'
import Services from './pages/home/Services'
import Blogs from './pages/blogs/Blogs'
import Register from './components/Register'
import Login from './components/Login'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route element={<App />} >
      <Route path='/' element={<Home/>} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/blogs' element={<Blogs/>} />

      {/* error pagw */}
      <Route path='*' element={<ErrorPage/>} />
    </Route>

    {/* authontication */}
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />

  </Routes>
    
  </BrowserRouter>,
)
