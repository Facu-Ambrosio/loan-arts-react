export function Card({ prod }){
  return(
    <li className="rounded overflow-hidden shadow-lg w-80 bg-slate-300 list-none">
      <div className="">
        <img className="w-full" src={prod.direccion}/>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold">
          {prod.nombre}
        </p>
        <p className="text-gray-700 text-lg">
          Precio: ${prod.precio}
        </p>
        <button className="px-3 py-1 my-3 rounded-full bg-emerald-500 transform transition hover:bg-emerald-400 hover:ring-2 hover:ring-emerald-500 " >
          Agregar al carrito
        </button>
      </div>
    </li>
  )
}