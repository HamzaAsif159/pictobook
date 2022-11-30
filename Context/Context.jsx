import React from 'react'
import { useState, useEffect } from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {
  const [isFetching, setIsFetching] = useState(false)

  const [allPhotos, SetAllPhotos] = useState(() => {
    const localItems = localStorage.getItem('allPhotos')
    const parsedItems = JSON.parse(localItems)
    return parsedItems || []
  })

  const [cartItems, setCartItems] = useState(() => {
    const localItems = localStorage.getItem('cartItems')
    const parsedItems = JSON.parse(localItems)
    return parsedItems || []
  })

  const url =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

  useEffect(() => {
    setIsFetching(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => localStorage.setItem('allPhotos', JSON.stringify(data)))
    setIsFetching(false)
  }, [])

  function toggleFavorite(id) {
    const updatedPhotos = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite
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
    localStorage.setItem('allPhotos', JSON.stringify(allPhotos))
  }, [allPhotos])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
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
        isFetching
      }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
