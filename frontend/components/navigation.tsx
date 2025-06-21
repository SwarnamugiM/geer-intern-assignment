"use client"

import Link from "next/link"
import { useAuth } from "./auth-provider"
import { useCart } from "./cart-provider"
import { LogOut, User, Gem, ShoppingBag } from "lucide-react"

export default function Navigation() {
  const { user, logout } = useAuth()
  const { getTotalItems } = useCart()

  const handleLogout = async () => {
    await logout()
    window.location.href = "/"
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-pastel-pink/20 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-soft-pink to-soft-purple p-2 rounded-full group-hover:animate-bounce-soft">
                <Gem className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-soft-pink to-soft-purple bg-clip-text text-transparent">
                LuxuryGems
              </h1>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/products"
              className="text-gray-700 hover:text-soft-pink px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-pastel-pink/30"
            >
              Jewelry Collection
            </Link>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-soft-coral p-2 rounded-full transition-all duration-300 hover:bg-pastel-rose/30"
            >
              <ShoppingBag className="h-6 w-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-soft-coral to-soft-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600 bg-pastel-lavender/30 px-3 py-2 rounded-full">
                  <User className="h-4 w-4" />
                  <span>Welcome, {user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-500 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-soft-purple px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-pastel-lavender/30"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="pastel-button text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
