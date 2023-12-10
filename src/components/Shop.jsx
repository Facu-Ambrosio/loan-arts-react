import { useContext } from "react";
import { Card } from "./Card";
import { GlobalStateContext } from "../context/globalStateContext";

export function Shop({}) {

  const { products } = useContext(GlobalStateContext)

  return (
    <main className="mt-5 mb-5 flex justify-center mr-1/3">
      <ul className="gap-5 flex flex-wrap justify-center w-3/4">
        {products.map((prod) => (
          <Card prod={prod} key={prod.id} />
        ))}
      </ul>
    </main>
    
  );
}
