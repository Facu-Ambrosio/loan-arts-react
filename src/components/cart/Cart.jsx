import { CartProducts } from "./CartProducts";
import { CartTitle } from "./CartTitle";


export function Cart({ mostrar, setMostrar, products }){


  const className = mostrar ? "fixed w-1/4 p-4 bg-gray-800 inset-y-0 right-0 overflow-y-auto" : "hidden"

  return(
    <aside className={className}>
      <CartTitle mostrar={mostrar} setMostrar={setMostrar} />
      {
        products.map((products, index)=>{
          return (<CartProducts products={products} key={index}/>)
        })
      }
    </aside>
  )
}
