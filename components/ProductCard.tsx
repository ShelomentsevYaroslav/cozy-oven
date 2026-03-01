"use client"

import { useCart } from "../context/CartContext"

export default function ProductCard({ product }: any) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      <div className="h-48 bg-gray-200 rounded-lg mb-4" />
      <h3 className="text-xl font-semibold text-[#A0522D]">
        {product.title}
      </h3>
      <p className="text-sm mb-2">{product.description}</p>
      <p className="text-lg font-bold mb-4">{product.price} RUB</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-[#F4A7B9] px-4 py-2 rounded-lg hover:bg-[#A0522D] text-white"
      >
        Add to cart
      </button>
    </div>
  )
}