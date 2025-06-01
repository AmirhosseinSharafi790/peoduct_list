import { getProductsData } from "./lib/getProductsData";
import ProductSection from "./components/productSection/ProductSection";

export default async function Home() {
  const ProductData = await getProductsData();
  return (
    <main className="!m-4">
      <ProductSection defaultProducts={ProductData} />
    </main>
  );
}
