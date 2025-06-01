export async function getProductsData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

export async function getProductsByCategory(category) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
    if (!res.ok) throw new Error("Failed to fetch filtered products");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`Error fetching products for category "${category}":`, err);
    return [];
  }
}