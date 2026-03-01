"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { Product } from "../data/products"

type CartItem = {
  product: Product
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  subtotal: number
  delivery: number
  total: number
  bonusBalance: number
  bonusUsed: number
  addToCart: (product: Product) => void
  increase: (id: string) => void
  decrease: (id: string) => void
  remove: (id: string) => void
  toggleUseBonuses: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [bonusBalance, setBonusBalance] = useState<number>(500)
  const [useBonuses, setUseBonuses] = useState<boolean>(false)

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    const savedBonus = localStorage.getItem("bonusBalance")

    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedBonus) setBonusBalance(Number(savedBonus))
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("bonusBalance", bonusBalance.toString())
  }, [cart, bonusBalance])

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
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const maxBonusAllowed = Math.floor(subtotal * 0.3)
  const bonusUsed = useBonuses
    ? Math.min(maxBonusAllowed, bonusBalance)
    : 0

  const delivery = subtotal >= 700 ? 0 : subtotal > 0 ? 150 : 0

  const total = subtotal - bonusUsed + delivery

  const toggleUseBonuses = () => {
    setUseBonuses((prev) => !prev)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        subtotal,
        delivery,
        total,
        bonusBalance,
        bonusUsed,
        addToCart,
        increase,
        decrease,
        remove,
        toggleUseBonuses,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}