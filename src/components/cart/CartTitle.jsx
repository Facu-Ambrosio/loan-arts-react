import { Exit } from "../buttons/Exit";

export function CartTitle({ mostrar, setMostrar }) {
  return (
    <header className="flex flex-row h-20 p-4 items-center justify-between">
      <h2 className="text-xl font-bold text-gray-200">Carrito de compras</h2>
      <Exit mostrar={mostrar} setMostrar={setMostrar}/>
    </header>
  );
}
