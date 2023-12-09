import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Shop } from "./components/Shop"
import { Cart } from "./components/cart/Cart"
import { products } from "../public/data/data"
import { useState } from "react" 

export function App() {

  const [mostrar, setMostrar] = useState(false)

  return (
    <>
      <Navbar mostrar={mostrar} setMostrar={setMostrar}  direction={"./public/images/logo.png"}/>
      <Shop products={products}/>
      <Cart products={products} mostrar={mostrar} setMostrar={setMostrar}/>
      <Footer/>
    </>
  )
}

