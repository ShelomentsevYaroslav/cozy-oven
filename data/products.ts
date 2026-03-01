export type Product = {
  id: string
  category: "cinnabons" | "savory" | "strudels" | "coffee" | "lemonades"
  title: string
  description: string
  price: number
  image: string
  bestseller?: boolean
}

export const products: Product[] = [
  // CINNABONS
  {
    id: "c1",
    category: "cinnabons",
    title: "Classic Cinnabon",
    description: "Soft cinnamon roll with glaze",
    price: 180,
    image: "/images/classiccinnabon.png",
    bestseller: true,
  },
  {
    id: "c2",
    category: "cinnabons",
    title: "Chocolate Cinnabon",
    description: "Chocolate filling with rich aroma",
    price: 220,
    image: "/images/chocolatecinnabon.png",
  },
  {
    id: "c3",
    category: "cinnabons",
    title: "Caramel Cinnabon",
    description: "Caramel glaze and soft dough",
    price: 210,
    image: "/images/caramelcinnabon.png",
  },
  {
    id: "c4",
    category: "cinnabons",
    title: "Berry Cinnabon",
    description: "Sweet berry topping",
    price: 200,
    image: "/images/berrycinnabon.png",
  },

  // SAVORY PIES
  {
    id: "s1",
    category: "savory",
    title: "Cabbage Pie",
    description: "Traditional cabbage pie",
    price: 190,
    image: "/images/cabbagepie.png",
  },
  {
    id: "s2",
    category: "savory",
    title: "Chicken, Mushroom & Cheese Pie",
    description: "Rich savory filling",
    price: 240,
    image: "/images/chickenmushroomcheesepie.png",
    bestseller: true,
  },

  // STRUDELS
  {
    id: "st1",
    category: "strudels",
    title: "Apple Strudel",
    description: "Classic apple cinnamon",
    price: 190,
    image: "/images/applestrudel.png",
  },
  {
    id: "st2",
    category: "strudels",
    title: "Cottage Cheese & Cherry Strudel",
    description: "Sweet cottage cheese & cherry filling",
    price: 210,
    image: "/images/cottagecheesecherry.png",
    bestseller: true,
  },
  {
    id: "st3",
    category: "strudels",
    title: "Chocolate & Walnut Strudel",
    description: "Chocolate with crunchy walnuts",
    price: 220,
    image: "/images/chocolatewalnut.png",
  },

  // COFFEE
  {
    id: "co1",
    category: "coffee",
    title: "Espresso",
    description: "Strong classic espresso",
    price: 120,
    image: "/images/espresso.png",
  },
  {
    id: "co2",
    category: "coffee",
    title: "Americano",
    description: "Smooth espresso with hot water",
    price: 150,
    image: "/images/americano.png",
  },
  {
    id: "co3",
    category: "coffee",
    title: "Cappuccino",
    description: "Espresso with milk foam",
    price: 170,
    image: "/images/cappuccino.png",
    bestseller: true,
  },
  {
    id: "co4",
    category: "coffee",
    title: "Latte",
    description: "Creamy milk coffee",
    price: 180,
    image: "/images/latte.png",
  },
  {
    id: "co5",
    category: "coffee",
    title: "Raf",
    description: "Creamy Russian-style coffee",
    price: 200,
    image: "/images/raf.png",
    bestseller: true,
  },

  // LEMONADES
  {
    id: "l1",
    category: "lemonades",
    title: "Classic Lemon",
    description: "Fresh lemon taste",
    price: 150,
    image: "/images/classiclemon.png",
  },
  {
    id: "l2",
    category: "lemonades",
    title: "Mojito Lemonade",
    description: "Mint & lime refreshing drink",
    price: 170,
    image: "/images/mojito.png",
    bestseller: true,
  },
  {
    id: "l3",
    category: "lemonades",
    title: "Berry Lemonade",
    description: "Sweet berry mix",
    price: 180,
    image: "/images/berrylemonade.png",
  },
]