import { React, useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

export default function Cart() {
  const { cartItems } = useContext(Context)
  const totalCost = 5.99 * cartItems.length

  const totalDisplayCost = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })
  const cartItemElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />
  })
  return (
    <div>
      <h1 className="cartTitle">Check out</h1>
      {cartItemElements}
      <p className="totalCost">Total Cost: {totalDisplayCost}</p>
      <div>
        <button className="orderBtn">Place order</button>
      </div>
    </div>
  )
}
