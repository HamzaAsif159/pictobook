import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav className="navBar">
      <h1>
        <Link to="/" className="linkStyle">
          Pictobook
        </Link>
      </h1>
      <Link to="/cart" className="linkStyle">
        <i className="ri-shopping-cart-line ri-fw ri-2x "></i>
      </Link>
    </nav>
  )
}
