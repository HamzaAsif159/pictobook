import { func } from "prop-types"
import React from "react"
import { useState, useEffect } from "react"
import { json } from "react-router-dom"

const Context = React.createContext()

function ContextProvider({ children }) {
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => localStorage.setItem("allPhotos", JSON.stringify(data)))
  }, [])

  const [allPhotos, SetAllPhotos] = useState(
    JSON.parse(localStorage.getItem("allPhotos"))
  )

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  )

  function toggleFavorite(id) {
    const updatedPhotos = Object.keys(allPhotos).map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        }
      }
      return photo
    })
    SetAllPhotos(updatedPhotos)
  }

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem])
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  function emptyCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem("allPhotos", JSON.stringify(allPhotos))
  }, [allPhotos])

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
