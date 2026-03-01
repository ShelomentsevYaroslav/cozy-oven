"use client"

import Image from "next/image"
import { useCart } from "../context/CartContext"
import { Product } from "../data/products"

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  const isDrink =
    product.category === "coffee" ||
    product.category === "lemonades"

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-md p-5 transition-all duration-300 hover:shadow-xl ${
        product.bestseller ? "border-2 border-[#4CAF50]" : ""
      }`}
    >
      {/* Bestseller badge */}
      {product.bestseller && (
        <span className="absolute top-3 left-3 bg-[#F4A7B9] text-white text-xs px-3 py-1 rounded-full z-20">
          Bestseller
        </span>
      )}

      {/* Image */}
      <div className="relative w-full rounded-xl mb-4 overflow-hidden bg-[#E8D8C3]">

        <div className={`relative w-full ${isDrink ? "aspect-square" : "aspect-[4/3]"}`}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 400px"
            className="object-cover"
            priority={product.bestseller ?? false}
          />
        </div>

      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-[#A0522D]">
        {product.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#A0522D]/70 mb-3">
        {product.description}
      </p>

      {/* Price */}
      <p className="text-lg font-bold mb-4">
        {product.price} RUB
      </p>

      {/* Button */}
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-[#F4A7B9] py-2 rounded-lg hover:bg-[#A0522D] text-white transition-all duration-200 active:scale-[0.98]"
      >
        Add to cart
      </button>
    </div>
  )
}