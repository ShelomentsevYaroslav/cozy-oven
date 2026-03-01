"use client"

import { products } from "../data/products"
import ProductCard from "../components/ProductCard"
import Cart from "../components/Cart"
import { useState } from "react"
import { useCart } from "../context/CartContext"
import Image from "next/image"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [mobileCartOpen, setMobileCartOpen] = useState(false)

  const { cart } = useCart()
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  const categories = [
    { id: "cinnabons", label: "Cinnabons" },
    { id: "savory", label: "Savory Pies" },
    { id: "strudels", label: "Strudels" },
    { id: "coffee", label: "Coffee" },
    { id: "lemonades", label: "Lemonades" },
  ]

  const filteredProducts = selectedCategory
    ? products
        .filter((p) => p.category === selectedCategory)
        .sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0))
    : []

  return (
    <main className="min-h-screen bg-[#E8D8C3] text-[#A0522D]">

      {/* MOBILE CART BUTTON */}
      <button
        onClick={() => setMobileCartOpen(true)}
        className="lg:hidden fixed top-6 right-6 bg-[#4CAF50] text-white px-4 py-2 rounded-full shadow-lg z-30 flex items-center gap-2"
      >
        Cart
        {totalItems > 0 && (
          <span className="bg-white text-[#4CAF50] text-xs px-2 py-1 rounded-full">
            {totalItems}
          </span>
        )}
      </button>

      {/* HERO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative">

          <div className="relative w-full h-[450px]">
            <Image
              src="/images/bakery.png"
              alt="Cozy Oven Bakery interior"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
            <h1 className="text-5xl font-bold mb-4">
              Cozy Oven Bakery
            </h1>
            <p className="text-lg max-w-2xl">
              Fresh pastries. Warm atmosphere. Real comfort in Central Tyumen.
            </p>
          </div>

        </div>
      </section>

      {/* MENU + CART */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* LEFT SIDE */}
          <div className="flex-1">

            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold">
                Our Menu
              </h2>
            </div>

            {/* CATEGORY GRID */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`cursor-pointer p-8 rounded-2xl border transition ${
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

            {/* PRODUCTS */}
            {selectedCategory && (
              <div className="mt-10">
                <h3 className="text-3xl font-bold mb-8">
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

          {/* STICKY CART */}
          <div className="hidden lg:block w-72">
            <div className="sticky top-24">
              <Cart />
            </div>
          </div>

        </div>
      </section>

      {/* CHECKOUT FORM */}
      <section id="checkout" className="py-24 px-6 bg-[#E8D8C3]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Complete Your Order
          </h2>

          <form className="space-y-4 bg-white p-6 rounded-2xl shadow-md">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border" />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-lg border" />
            <input type="text" placeholder="Delivery Address" className="w-full p-3 rounded-lg border" />
            <textarea placeholder="Comment" className="w-full p-3 rounded-lg border" />
            <select className="w-full p-3 rounded-lg border">
              <option>Cash</option>
              <option>Card</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#4CAF50] text-white py-3 rounded-lg"
            >
              Place Order
            </button>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Find Us in Central Tyumen
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#F4A7B9]/30">
            <iframe
              src="https://maps.google.com/maps?q=Tyumen&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px]"
              loading="lazy"
            />
          </div>

          <p className="mt-6">
            Phone: +70000000000
          </p>
        </div>
      </section>

      {/* MOBILE CART */}
      {mobileCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-30"
            onClick={() => setMobileCartOpen(false)}
          />
          <Cart isMobile onClose={() => setMobileCartOpen(false)} />
        </>
      )}

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-[#F4A7B9]/40 bg-white">
        <p>Central Tyumen</p>
        <p>8:00 AM – 9:00 PM</p>
        <p className="mt-4 text-sm">© 2026 Cozy Oven Bakery</p>
      </footer>

    </main>
  )
}