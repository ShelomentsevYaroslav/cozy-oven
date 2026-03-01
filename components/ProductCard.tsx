"use client"

import { useCart } from "../context/CartContext"
import { Product } from "../data/products"

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-md p-5 transition-all duration-300 hover:shadow-xl ${
        product.bestseller ? "border-2 border-[#4CAF50]" : ""
      }`}
    >
      {/* Bestseller badge */}
      {product.bestseller && (
        <span className="absolute top-3 left-3 bg-[#F4A7B9] text-white text-xs px-3 py-1 rounded-full z-10">
          Bestseller
        </span>
      )}

      {/* Image wrapper */}
      <div className="w-full bg-[#E8D8C3] rounded-xl mb-4 overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className={`object-contain ${
            product.category === "coffee" ||
            product.category === "lemonades"
              ? "aspect-square"
              : "aspect-[4/3]"
          }`}
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-[#A0522D]">
        {product.title}
      </h3>

      {/* Description */}
      <p className="text-sm mb-3 text-[#A0522D]/70">
        {product.description}
      </p>

      {/* Price */}
      <p className="text-lg font-bold mb-4">
        {product.price} RUB
      </p>

      {/* Button */}
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-[#F4A7B9] py-2 rounded-lg hover:bg-[#A0522D] text-white transition"
      >
        Add to cart
      </button>
    </div>
  )
}