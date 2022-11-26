import { React, useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

export default function Cart() {
  const { cartItems } = useContext(Context)

  const cartItemElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />
  })
  return (
    <div>
      <h1 className="cartTitle">Check out</h1>
      {cartItemElements}
    </div>
  )
}
