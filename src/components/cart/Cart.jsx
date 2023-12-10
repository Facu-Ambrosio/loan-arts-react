import { useContext } from "react";
import { CartProducts } from "./CartProducts";
import { CartTitle } from "./CartTitle";
import { GlobalStateContext } from "../../context/globalStateContext";


export function Cart({}){

  const { mostrar, products } = useContext(GlobalStateContext)
  const className = mostrar ? "fixed w-1/4 p-4 bg-gray-800 inset-y-0 right-0 overflow-y-auto" : "hidden"

  return(
    <aside className={className}>
      <CartTitle/>
      <section>
        <ul>
          {
            products.map((products)=>{
              return (<CartProducts products={products} key={products.id}/>)
            })
          }
        </ul>
      </section>
    </aside>
  )
}
