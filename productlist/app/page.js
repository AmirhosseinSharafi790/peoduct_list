import { getProductsData } from "./lib/getProductsData";
import ProductCard from "./components/productCard/ProductCard";

export default async function Home() {
  const ProductData = await getProductsData()
  return (
    <main className="!m-4">
      <div className="flex flex-wrap justify-center gap-5 p-4">
        {
          ProductData.map( product => (
            <ProductCard key={product.id} {...product} />
          ) )
        }
      </div>
    </main>
  );
}
