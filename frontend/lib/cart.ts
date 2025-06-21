export interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  imageUrl: string
  selectedColor: string
  colorName: string
  quantity: number
}

export interface CartContextType {
  items: CartItem[]
  addToCart: (product: any, selectedColor: string, colorName: string) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}
