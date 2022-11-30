import { React, useContext } from 'react'
import { Context } from '../../Context/Context'

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context)
  return (
    <div className="cart-item">
      <img src={item.url} width="150px" />
      <div>
        <i className="ri-delete-bin-line deleteBin" onClick={() => removeFromCart(item.id)}></i>
        <h2>$5.99</h2>
      </div>
    </div>
  )
}

export default CartItem
