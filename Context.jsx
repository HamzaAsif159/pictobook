import React from "react"
import { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
  const [allPhotos, SetAllPhotos] = useState([])

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => SetAllPhotos(data))
  }, [])

  console.log(allPhotos)

  return <Context.Provider value={{ allPhotos }}>{children}</Context.Provider>
}

export { Context, ContextProvider }
