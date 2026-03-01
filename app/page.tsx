"use client"

import { products } from "../data/products"
import ProductCard from "../components/ProductCard"
import Cart from "../components/Cart"
import { useState } from "react"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    { id: "cinnabons", label: "Cinnabons" },
    { id: "savory", label: "Savory Pies" },
    { id: "strudels", label: "Strudels" },
    { id: "coffee", label: "Coffee" },
    { id: "lemonades", label: "Lemonades" },
  ]

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : []

  return (
    <main className="min-h-screen bg-[#E8D8C3] text-[#A0522D] relative">

      {/* HERO */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cozy Oven Bakery
          </h1>

          <p className="text-lg md:text-xl mb-8 text-[#A0522D]/80">
            Fresh handmade pastries in the heart of Tyumen.
            Warm taste. Fair price. Real comfort.
          </p>
        </div>
      </section>

      {/* MENU + CART LAYOUT */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex gap-12">

          {/* LEFT SIDE */}
          <div className="flex-1">

            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-[#A0522D]">
                Our Menu
              </h2>
            </div>

            {/* CATEGORY GRID */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`cursor-pointer p-8 rounded-2xl border transition
                    ${
                      selectedCategory === cat.id
                        ? "bg-[#F4A7B9]/30 border-[#F4A7B9]"
                        : "bg-[#E8D8C3] border-[#F4A7B9]/40 hover:bg-[#F4A7B9]/20"
                    }`}
                >
                  <h3 className="text-2xl font-semibold">
                    {cat.label}
                  </h3>
                </div>
              ))}
            </div>

            {/* PRODUCTS LIST */}
            {selectedCategory && (
              <div className="mt-10">
                <h3 className="text-3xl font-bold mb-8 text-[#A0522D]">
                  {categories.find((c) => c.id === selectedCategory)?.label}
                </h3>

                <div className="space-y-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT SIDE - STICKY CART */}
          <div className="hidden lg:block w-96">
            <Cart />
          </div>

        </div>
      </section>

      {/* ORDER SECTION */}
      <section id="order" className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Get Cozy at Home
          </h2>

          <p className="text-lg text-[#A0522D]/80 mb-10">
            Order online, pay securely, and enjoy fresh pastries delivered to your door.
          </p>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <p className="mb-4">
              Delivery time: 60–90 minutes
            </p>
            <p>
              Loyalty program: earn 5% points from every order
            </p>
          </div>
        </div>
      </section>

      {/* FLOATING ORDER BUTTON */}
      <a
        href="#order"
        className="fixed bottom-6 right-6 bg-[#4CAF50] text-white px-6 py-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        Order Now
      </a>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-[#F4A7B9]/40 text-[#A0522D]">
        <p>Central Tyumen</p>
        <p>8:00 AM – 9:00 PM</p>
        <p className="mt-4 text-sm">© 2026 Cozy Oven Bakery</p>
      </footer>

    </main>
  )
}