import { EraseProductButton } from "../buttons/EraseProductButton"

export function CartProducts({ products }){
  return(
    <li className="flex justify-between items-center text-gray-200 mb-4 list-none">
      <div className="flex items-center">
        <img className="w-20 mr-2" src={products.direccion} alt="" />
        <div className="flex flex-col">
          <div className="text-2xl font-bold">{products.nombre} ×{products.cantidad}</div>
          <div className="text-base">${products.precio}</div>
        </div>
      </div>
      <EraseProductButton/>
    </li>
  )
}