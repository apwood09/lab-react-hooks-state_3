import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

function ProductList({ category, addToCart }) {
  const filtered =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter(p => p.category === category);

  if (filtered.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      {filtered.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
