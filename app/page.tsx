export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Cozy Oven Bakery
        </h1>
        <p className="text-lg max-w-xl mb-8">
          Handmade cinnabons, strudels and savory pies baked fresh daily in Tyumen.
        </p>
        <div className="flex gap-4">
          <a href="#menu" className="px-6 py-3 border rounded-xl">
            View Menu
          </a>
          <a href="#delivery" className="px-6 py-3 border rounded-xl">
            Order Delivery
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p>
          We bake everything fresh every morning using quality ingredients.
          Cozy Oven is about homemade taste, premium quality at fair prices,
          and a warm atmosphere that makes you come back again and again.
        </p>
      </section>

      {/* MENU */}
      <section id="menu" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Menu</h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="border p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Cinnabons</h3>
            <ul className="space-y-2">
              <li>Classic (Bestseller)</li>
              <li>Berry</li>
              <li>Chocolate</li>
            </ul>
          </div>

          <div className="border p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Strudels</h3>
            <ul className="space-y-2">
              <li>Apple & Walnut</li>
              <li>Chocolate & Walnut</li>
              <li>Sweet Cheese & Cherry</li>
            </ul>
          </div>

          <div className="border p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Savory Pies</h3>
            <ul className="space-y-2">
              <li>Chicken, Mushroom & Cheese</li>
              <li>Classic Cabbage</li>
            </ul>
          </div>

        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get Cozy at Home</h2>
        <p className="mb-6">
          Order through Yandex.Eda or Delivery Club and enjoy fresh pastries wherever you are.
        </p>
        <button className="px-6 py-3 border rounded-xl">
          Order Now
        </button>
      </section>

      {/* LOYALTY */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Cozy Bonuses</h2>
        <ul className="space-y-3">
          <li>+30 welcome bonuses</li>
          <li>3% cashback on every purchase</li>
          <li>Bonuses never expire</li>
          <li>Pay up to 50% with bonuses</li>
        </ul>
      </section>

      {/* B2B */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Corporate Breakfast</h2>
        <p className="mb-6">
          Pre-order via Telegram before 5:00 PM and pick up in the morning.
          Minimum order 1500 RUB. Organizers get double bonuses.
        </p>
        <button className="px-6 py-3 border rounded-xl">
          Order for Office
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t">
        <p>Central Tyumen • 8:00 AM – 9:00 PM</p>
        <p>Instagram | Telegram</p>
        <p className="mt-4 text-sm">© 2024 Cozy Oven Bakery</p>
      </footer>

    </main>
  );
}