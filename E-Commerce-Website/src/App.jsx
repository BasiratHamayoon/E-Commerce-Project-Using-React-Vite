import { useState } from 'react'
import './App.css'
import Navbar from './Custom-Components/Navbar'
import Products from './Pages/Products'
import Signin from './Pages/Signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Favorites from './Pages/Favorites'
import Cart from './Pages/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element= { <Home /> }/>
        <Route path='/Products' element= { <Products />}/>
        <Route path='/Contact' element= { <Contact /> }/>
        <Route path='/Signin' element= { <Signin />}/>
        <Route path="/Favorites" element={<Favorites />} />
        <Route path='/Cart' element={<Cart />}/>

      </Routes>
    </>
  )
}

export default App
