import { createContext, useState } from "react";
import { products } from "../../public/data/data";

export const GlobalStateContext = createContext()

export function GlobalStateProvider({ children }){
  const [mostrar, setMostrar] = useState(false)
  const ubicacionLogo = "./public/images/logo.png"

  return(
    <GlobalStateContext.Provider value={{mostrar, setMostrar, products, ubicacionLogo}}>
      {children}
    </GlobalStateContext.Provider>
  )
}