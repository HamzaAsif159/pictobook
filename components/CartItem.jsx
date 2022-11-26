import React from "react"

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img src={item.url} width="150px" />
      <h2>5.99$</h2>
    </div>
  )
}

export default CartItem
