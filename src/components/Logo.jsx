import { useContext } from "react"
import { GlobalStateContext } from "../context/globalStateContext"

export function Logo(){

  const { ubicacionLogo } = useContext(GlobalStateContext)

  return(
    <div className="flex items-center">
      <img
        src={ubicacionLogo}
        alt="Logo de la tienda"
        className="h-20 w-auto mr-4"
      />
    </div>
  )
}