"use client"

import { useCart } from "../context/CartContext"

export default function Cart() {
  const { cart, subtotal, delivery, total, increase, decrease, remove } =
    useCart()

  return (
    <div className="w-80 bg-white p-6 shadow-lg sticky top-4 h-fit rounded-xl">
      <h2 className="text-2xl text-[#A0522D] mb-4">Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty 🍪</p>}

      {cart.map((item) => (
        <div key={item.product.id} className="mb-4">
          <p className="font-semibold">{item.product.title}</p>
          <div className="flex justify-between items-center">
            <div>
              <button onClick={() => decrease(item.product.id)}>-</button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => increase(item.product.id)}>+</button>
            </div>
            <p>{item.product.price * item.quantity} RUB</p>
          </div>
          <button
            onClick={() => remove(item.product.id)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <hr className="my-4" />
          <p>Subtotal: {subtotal} RUB</p>
          <p>Delivery: {delivery} RUB</p>
          <p className="text-lg font-bold text-[#4CAF50]">
            Total: {total} RUB
          </p>
        </>
      )}
    </div>
  )
}