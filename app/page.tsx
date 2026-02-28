export default function Home() {
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

      {/* MENU */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-[#A0522D]">
            Our Menu
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* CINNABONS FIRST */}
          <div className="p-8 rounded-2xl border border-[#F4A7B9]/40 bg-[#E8D8C3]">
            <h3 className="text-2xl font-semibold mb-4">Cinnabons</h3>
            <ul className="space-y-2 text-[#A0522D]/80">
              <li>Classic (Bestseller)</li>
              <li>Caramel</li>
              <li>Berry</li>
              <li>Chocolate</li>
            </ul>
          </div>

          {/* SAVORY PIES SECOND */}
          <div className="p-8 rounded-2xl border border-[#F4A7B9]/40 bg-[#E8D8C3]">
            <h3 className="text-2xl font-semibold mb-4">Savory Pies</h3>
            <ul className="space-y-2 text-[#A0522D]/80">
              <li>Chicken, Mushroom & Cheese</li>
              <li>Classic Cabbage</li>
            </ul>
          </div>

          {/* STRUDELS */}
          <div className="p-8 rounded-2xl border border-[#F4A7B9]/40 bg-[#E8D8C3]">
            <h3 className="text-2xl font-semibold mb-4">Strudels</h3>
            <ul className="space-y-2 text-[#A0522D]/80">
              <li>Apple & Walnut</li>
              <li>Chocolate & Walnut</li>
              <li>Sweet Cheese & Cherry</li>
            </ul>
          </div>

          {/* COFFEE */}
          <div className="p-8 rounded-2xl border border-[#F4A7B9]/40 bg-[#E8D8C3]">
            <h3 className="text-2xl font-semibold mb-4">Coffee</h3>
            <ul className="space-y-2 text-[#A0522D]/80">
              <li>Espresso</li>
              <li>Americano</li>
              <li>Cappuccino</li>
              <li>Latte</li>
              <li>Raf</li>
            </ul>
            <p className="mt-4 text-sm text-[#A0522D]/70">
              Syrups available: caramel, vanilla, hazelnut.
            </p>
          </div>

          {/* LEMONADES */}
          <div className="p-8 rounded-2xl border border-[#F4A7B9]/40 bg-[#E8D8C3] md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Lemonades</h3>
            <ul className="space-y-2 text-[#A0522D]/80">
              <li>Classic</li>
              <li>Mojito</li>
              <li>Berry Mix</li>
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

          <p className="text-lg text-[#A0522D]/80 mb-10">
            Order online, pay securely, and enjoy fresh pastries delivered to your door.
          </p>
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
  );
}