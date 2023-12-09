import { Card } from "./Card";

export function Shop({ products }) {

  return (
    <main className="mt-5 mb-5 flex justify-center mr-1/3">
      <section className="gap-5 flex flex-wrap justify-center w-3/4">
        {products.map((prod, index) => (
          <Card prod={prod} key={index} />
        ))}
      </section>
    </main>
    
  );
}
