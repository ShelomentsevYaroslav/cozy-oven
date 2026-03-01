"use client"

import { useCart } from "../context/CartContext"

export default function Cart({
  isMobile = false,
  onClose,
}: {
  isMobile?: boolean
  onClose?: () => void
}) {
  const {
    cart,
    subtotal,
    delivery,
    total,
    bonusBalance,
    bonusUsed,
    toggleUseBonuses,
    increase,
    decrease,
    remove,
  } = useCart()

  const loyaltyPoints = Math.floor(subtotal * 0.05)
  const minOrderReached = subtotal >= 500
  const freeDeliveryReached = subtotal >= 700
  const remainingForFree = 700 - subtotal

  return (
    <div
      className={`${
        isMobile
          ? "fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 p-6 overflow-y-auto"
          : "w-96 bg-white p-6 shadow-xl sticky top-6 h-fit rounded-2xl"
      }`}
    >
      {isMobile && (
        <button
          onClick={onClose}
          className="mb-4 text-sm text-[#A0522D]"
        >
          Close ✕
        </button>
      )}

      <h2 className="text-2xl text-[#A0522D] mb-4">Your Cart</h2>

      {cart.length === 0 && (
        <p className="text-[#A0522D]/70">Your cart is empty 🍪</p>
      )}

      {cart.map((item) => (
        <div key={item.product.id} className="mb-4 border-b pb-3">
          <p className="font-semibold">{item.product.title}</p>

          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => decrease(item.product.id)}
                className="px-2 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increase(item.product.id)}
                className="px-2 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <p className="font-medium">
              {item.product.price * item.quantity} RUB
            </p>
          </div>

          <button
            onClick={() => remove(item.product.id)}
            className="text-red-500 text-xs mt-1"
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

          {subtotal > 0 && (
            <div className="mt-3">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="h-2 bg-[#4CAF50] rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min((subtotal / 700) * 100, 100)}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* BONUS BLOCK */}
          <div className="mt-4 p-3 bg-[#E8D8C3] rounded-lg">
            <p className="text-sm">
              Your bonuses: <strong>{bonusBalance}</strong>
            </p>

            <p className="text-sm">
              Max usable (30%): {Math.floor(subtotal * 0.3)}
            </p>

            <button
              onClick={toggleUseBonuses}
              className="mt-2 w-full py-2 bg-[#4CAF50] text-white rounded-lg hover:opacity-90 transition"
            >
              Use bonus points
            </button>

            {bonusUsed > 0 && (
              <p className="text-sm text-[#4CAF50] mt-2">
                −{bonusUsed} RUB applied
              </p>
            )}
          </div>

          <p className="text-lg font-bold text-[#4CAF50] mt-3">
            Total: {total} RUB
          </p>

          {!freeDeliveryReached && subtotal > 0 && (
            <p className="text-sm text-[#A0522D]/70 mt-2">
              Add {remainingForFree} RUB more for free delivery 🚚
            </p>
          )}

          {freeDeliveryReached && (
            <p className="text-sm text-[#4CAF50] mt-2">
              You unlocked free delivery 🎉
            </p>
          )}

          <p className="text-sm mt-2">
            You will earn {loyaltyPoints} points
          </p>

          {!minOrderReached && subtotal > 0 && (
            <p className="text-red-500 text-sm mt-2">
              Minimum order is 500 RUB
            </p>
          )}

          <button
            disabled={!minOrderReached}
            onClick={() => {
              if (!minOrderReached) return
              document
                .getElementById("checkout")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
            className={`mt-4 w-full py-3 rounded-lg text-white ${
              minOrderReached
                ? "bg-[#F4A7B9] hover:bg-[#A0522D]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  )
}