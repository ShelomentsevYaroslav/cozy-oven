import "./globals.css"
import { CartProvider } from "../context/CartContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#E8D8C3]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}