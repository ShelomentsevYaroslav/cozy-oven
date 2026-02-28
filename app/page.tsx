export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">

      {/* HERO */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cozy Oven Bakery
          </h1>
          <p className="text-lg md:text-xl mb-8 text-neutral-600">
            Fresh handmade pastries in the heart of Tyumen.
            Warm taste. Fair price. Real comfort.
          </p>

          <a
            href="#order"
            className="inline-block px-10 py-4 bg-neutral-900 text-white rounded-2xl text-lg font-medium shadow-md hover:scale-105 transition"
          >
            Order Delivery
          </a>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Fresh Daily</h3>
            <p className="text-neutral-600">
              We bake every morning to ensure quality and softness in every bite.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Affordable</h3>
            <p className="text-neutral-600">
              Premium taste without premium prices. Average order — 500 RUB.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Loyalty Bonuses</h3>
            <p className="text-neutral-600">
              Cashback system and welcome bonuses for every new customer.
            </p>
          </div>

        </div>
      </section>

      {/* MENU */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold">Our Menu</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="p-8 rounded-2xl border bg-neutral-50">
            <h3 className="text-2xl font-semibold mb-4">Cinnabons</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>Classic (Bestseller)</li>
              <li>Berry</li>
              <li>Chocolate</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border bg-neutral-50">
            <h3 className="text-2xl font-semibold mb-4">Strudels</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>Apple & Walnut</li>
              <li>Chocolate & Walnut</li>
              <li>Sweet Cheese & Cherry</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border bg-neutral-50">
            <h3 className="text-2xl font-semibold mb-4">Savory Pies</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>Chicken, Mushroom & Cheese</li>
              <li>Classic Cabbage</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ORDER SECTION */}
      <section id="order" className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Get Cozy at Home
          </h2>

          <p className="text-lg text-neutral-600 mb-10">
            Order online, pay securely, and enjoy fresh pastries delivered to your door.
          </p>

          <button className="px-12 py-4 bg-neutral-900 text-white rounded-2xl text-lg font-medium shadow-md hover:scale-105 transition">
            Place Order
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t text-neutral-500">
        <p>Central Tyumen</p>
        <p>8:00 AM – 9:00 PM</p>
        <p className="mt-4 text-sm">© 2026 Cozy Oven Bakery</p>
      </footer>

    </main>
  );
}