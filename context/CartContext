"use client"

import { createContext, useContext, useState } from "react"

type Product = {
  id: string
  title: string
  price: number
  image: string
}

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

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  const increase = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decrease = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const remove = (id: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id))
  }

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  )

  const delivery = subtotal >= 700 ? 0 : subtotal > 0 ? 99 : 0
  const total = subtotal + delivery

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increase, decrease, remove, subtotal, delivery, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used inside CartProvider")
  return context
}