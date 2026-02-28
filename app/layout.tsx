import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cozy Oven Bakery",
  description: "Fresh handmade pastries in the heart of Tyumen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} antialiased`}>
        <div className="max-w-[1400px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}