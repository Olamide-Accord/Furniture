import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from '@components/Navbar'
import Home from '@pages/Home'
import Shop from '@pages/Shop'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
