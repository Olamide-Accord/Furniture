import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from '@components/Navbar'
import Home from '@pages/Home'
import Shop from '@pages/Shop'
import About from '@pages/About'
import Blog from '@pages/Blog'
import WishList from '@pages/WishList'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/wishlist' element={<WishList />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
