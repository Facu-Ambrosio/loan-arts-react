export function Logo({ direction }){

  return(
    <div className="flex items-center">
      <img
        src={direction}
        alt="Logo de la tienda"
        className="h-20 w-auto mr-4"
      />
    </div>
  )
}