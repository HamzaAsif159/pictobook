import { func } from "prop-types"
import React from "react"
import { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
  const [allPhotos, SetAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => SetAllPhotos(data))
  }, [])

  function toggleFavorite(id) {
    const updatedPhotos = allPhotos.map((photo) => {
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
