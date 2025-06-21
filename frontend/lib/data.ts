export interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
  description?: string
  colors: ProductColor[]
  category: string
  material: string
  inStock: boolean
}

export interface ProductColor {
  name: string
  value: string
  imageUrl: string
}

// In-memory storage for products with real jewelry images
let products: Product[] = [
  {
    id: "1",
    name: "Diamond Engagement Ring",
    price: 2499.99,
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center",
    description:
      "Stunning 1.5 carat diamond solitaire engagement ring in premium metal setting. This timeless piece features a brilliant cut diamond that captures light beautifully from every angle.",
    colors: [
      {
        name: "White Gold",
        value: "white-gold",
        imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Yellow Gold",
        value: "yellow-gold",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Rose Gold",
        value: "rose-gold",
        imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&crop=center",
      },
    ],
    category: "Rings",
    material: "18k Gold with Diamond",
    inStock: true,
  },
  {
    id: "2",
    name: "Pearl Necklace",
    price: 899.99,
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center",
    description:
      "Elegant freshwater pearl necklace with sterling silver clasp. Each pearl is carefully selected for its luster and perfectly round shape.",
    colors: [
      {
        name: "Classic White",
        value: "white",
        imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Cream",
        value: "cream",
        imageUrl: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Pink",
        value: "pink",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      },
    ],
    category: "Necklaces",
    material: "Freshwater Pearls with Sterling Silver",
    inStock: true,
  },
  {
    id: "3",
    name: "Gold Tennis Bracelet",
    price: 1299.99,
    imageUrl: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=center",
    description:
      "Classic tennis bracelet featuring brilliant cut diamonds in a secure setting. Perfect for everyday elegance or special occasions.",
    colors: [
      {
        name: "Yellow Gold",
        value: "yellow-gold",
        imageUrl: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "White Gold",
        value: "white-gold",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      },
    ],
    category: "Bracelets",
    material: "14k Gold with Diamonds",
    inStock: true,
  },
  {
    id: "4",
    name: "Sapphire Earrings",
    price: 649.99,
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center",
    description:
      "Beautiful blue sapphire stud earrings in white gold setting. These precious gemstones are known for their deep blue color and exceptional clarity.",
    colors: [
      {
        name: "Blue Sapphire",
        value: "blue",
        imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Pink Sapphire",
        value: "pink",
        imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Yellow Sapphire",
        value: "yellow",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      },
    ],
    category: "Earrings",
    material: "White Gold with Sapphire",
    inStock: true,
  },
  {
    id: "5",
    name: "Ruby Pendant",
    price: 799.99,
    imageUrl: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop&crop=center",
    description:
      "Exquisite ruby pendant with diamond accents on gold chain. The rich red color of the ruby symbolizes passion and love.",
    colors: [
      {
        name: "Classic Red",
        value: "red",
        imageUrl: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Deep Burgundy",
        value: "burgundy",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      },
    ],
    category: "Necklaces",
    material: "Gold with Ruby and Diamonds",
    inStock: true,
  },
  {
    id: "6",
    name: "Emerald Ring",
    price: 1899.99,
    imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&crop=center",
    description:
      "Vintage-inspired emerald ring with intricate gold band design. The emerald's vibrant green color is enhanced by the detailed metalwork.",
    colors: [
      {
        name: "Classic Green",
        value: "green",
        imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Forest Green",
        value: "forest-green",
        imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center",
      },
    ],
    category: "Rings",
    material: "Gold with Emerald",
    inStock: true,
  },
  {
    id: "7",
    name: "Silver Charm Bracelet",
    price: 299.99,
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
    description:
      "Sterling silver charm bracelet with customizable charms. Start your collection with this beautiful base bracelet.",
    colors: [
      {
        name: "Sterling Silver",
        value: "silver",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Oxidized Silver",
        value: "oxidized-silver",
        imageUrl: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop&crop=center",
      },
    ],
    category: "Bracelets",
    material: "Sterling Silver",
    inStock: true,
  },
  {
    id: "8",
    name: "Diamond Stud Earrings",
    price: 1599.99,
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center",
    description:
      "Classic diamond stud earrings, 1 carat total weight. These timeless earrings are perfect for any occasion and complement any outfit.",
    colors: [
      {
        name: "White Gold",
        value: "white-gold",
        imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Yellow Gold",
        value: "yellow-gold",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Platinum",
        value: "platinum",
        imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&crop=center",
      },
    ],
    category: "Earrings",
    material: "Gold with Diamonds",
    inStock: true,
  },
]

export function getAllProducts(): Product[] {
  return products
}

export function addProduct(product: Omit<Product, "id">): Product {
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
  }
  products.push(newProduct)
  return newProduct
}

export function deleteProduct(id: string): boolean {
  const initialLength = products.length
  products = products.filter((product) => product.id !== id)
  return products.length < initialLength
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}
