"use client"

import { useEffect, useState } from "react";
import { getCategories } from "../../utils/filters";
import { getProductsByCategory } from "../../lib/getProductsData";
import ProductCard from "../productCard/ProductCard";

export default function ProductSection({ defaultProducts }) {
  const [products, setProducts] = useState(defaultProducts);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchFilteredProducts() {
      if (selectedCategory === "all") {
        setProducts(defaultProducts);
        return;
      }
      const data = await getProductsByCategory(selectedCategory);
      setProducts(data);
    }
    fetchFilteredProducts();
  }, [selectedCategory]);

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-3 flex-wrap">
        <button
          className={`border !px-[30px] !py-3 !my-5 rounded-full cursor-pointer ${selectedCategory === "all" ? "bg-black text-white" : "bg-white text-black border-gray-400"}`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`border !px-[30px] !py-3 !my-5 rounded-full cursor-pointer ${selectedCategory === cat ? "bg-black text-white" : "bg-white text-black border-gray-400"}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-5 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
