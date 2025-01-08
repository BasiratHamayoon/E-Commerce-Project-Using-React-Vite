import { useState } from 'react'
import './App.css'
import Navbar from './Custom-Components/Navbar'
import Products from './Pages/Products'
import Signin from './Pages/Signin'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact'
import Home from './Pages/Home'

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
      </Routes>
    </>
  )
}

export default App
