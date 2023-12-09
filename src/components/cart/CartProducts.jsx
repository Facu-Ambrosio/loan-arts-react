import { useState } from "react"
import { EraseProductButton } from "../buttons/EraseProductButton"

export function CartProducts({ products }){

  const [sacar, setSacar] = useState(false)

  const className = sacar ? "hidden" : "flex justify-between items-center text-gray-200 mb-4 list-none"

  return(
    <li className={className}>
      <div className="flex items-center">
        <img className="w-20 mr-2" src={products.direccion} alt="" />
        <div className="flex flex-col">
          <div className="text-2xl font-bold">{products.nombre} ×{products.cantidad}</div>
          <div className="text-base">{products.precio}</div>
        </div>
      </div>
      <EraseProductButton sacar={sacar} setSacar={setSacar}/>
    </li>
  )
}