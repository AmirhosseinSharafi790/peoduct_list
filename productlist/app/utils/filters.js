export async function getCategories() {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    if (!res.ok) throw new Error("Failed to fetch categories");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
}
