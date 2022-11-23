import { React, useContext } from "react"
import { Context } from "../Context"

export default function Image({ className, img }) {
  return (
    <div>
      <div className={`${className} imageContainer`}>
        <img src={img.url} className="imageGrid" />
      </div>
    </div>
  )
}
