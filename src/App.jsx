import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import React from 'react'
// Internal imports below
import Header from './components/Header'
import Photos from './Views/Photos'
import Cart from './Views/Cart'
import { Context } from '../Context/Context'

function App() {
  const { isFetching } = React.useContext(Context)
  return (
    <div>
      {isFetching ? (
        <div className="spinner">
          <ThreeDots
            height="80"
            width="100"
            radius="9"
            color="#293264"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<Photos />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </>
      )}
    </div>
  )
}

export default App
