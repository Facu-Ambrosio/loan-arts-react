import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Shop } from "./components/Shop"
import { Cart } from "./components/cart/Cart"

export function App() {
  return (
    <>
      <Navbar/>
      <Shop/>
      <Cart/>
      <Footer/>
    </>
  )
}

