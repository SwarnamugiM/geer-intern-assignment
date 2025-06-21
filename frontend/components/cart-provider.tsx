"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { CartItem, CartContextType } from "@/lib/cart"

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("jewelry-cart")
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("jewelry-cart", JSON.stringify(items))
  }, [items])

  const addToCart = (product: any, selectedColor: string, colorName: string) => {
    const existingItemIndex = items.findIndex(
      (item) => item.productId === product.id && item.selectedColor === selectedColor,
    )

    if (existingItemIndex > -1) {
      // Update quantity if item already exists
      const updatedItems = [...items]
      updatedItems[existingItemIndex].quantity += 1
      setItems(updatedItems)
    } else {
      // Add new item
      const newItem: CartItem = {
        id: `${product.id}-${selectedColor}-${Date.now()}`,
        productId: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.colors.find((c: any) => c.value === selectedColor)?.imageUrl || product.imageUrl,
        selectedColor,
        colorName,
        quantity: 1,
      }
      setItems([...items, newItem])
    }
  }

  const removeFromCart = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }

    setItems(items.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
