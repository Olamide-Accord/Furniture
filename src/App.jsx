import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import About from '@pages/About'
import Blog from '@pages/Blog'
import Cart from '@pages/Cart'
import Home from '@pages/Home'
import Shop from '@pages/Shop'
import WishList from '@pages/WishList'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/wishlist' element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
