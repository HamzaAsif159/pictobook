import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Photos from './Views/Photos'
import Cart from './Views/Cart'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
