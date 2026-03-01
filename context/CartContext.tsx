"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { Product } from "../data/products"

type CartItem = {
  product: Product
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (product: Product) => void
  increase: (id: string) => void
  decrease: (id: string) => void
  remove: (id: string) => void
  subtotal: number
  delivery: number
  total: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) setCart(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const increase = (id: string) =>
    setCart((prev) =>
      prev.map((i) =>
        i.product.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    )

  const decrease = (id: string) =>
    setCart((prev) =>
      prev
        .map((i) =>
          i.product.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    )

  const remove = (id: string) =>
    setCart((prev) => prev.filter((i) => i.product.id !== id))

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  )

  const delivery = subtotal >= 700 ? 0 : subtotal > 0 ? 99 : 0
  const total = subtotal + delivery

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increase,
        decrease,
        remove,
        subtotal,
        delivery,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used inside CartProvider")
  return context
}