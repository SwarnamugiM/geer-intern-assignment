"use client"

import { useState, useEffect } from "react"
import { Search, Sparkles } from "lucide-react"
import ProductCard from "@/components/product-card"
import AddProductForm from "@/components/add-product-form"
import { useAuth } from "@/components/auth-provider"
import type { Product } from "@/lib/data"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()

  // Only show admin features for admin user
  const isAdmin = user?.email === "admin@jewelry.com"

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products")
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
        setFilteredProducts(data)
      }
    } catch (error) {
      console.error("Failed to fetch products:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        fetchProducts() // Refresh the products list
      } else {
        alert("Failed to delete product")
      }
    } catch (error) {
      alert("Failed to delete product")
    }
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    if (term.trim() === "") {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter((product) => product.name.toLowerCase().includes(term.toLowerCase()))
      setFilteredProducts(filtered)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    handleSearch(searchTerm)
  }, [products, searchTerm])

  if (isLoading) {
    return (
      <div className="min-h-screen pastel-gradient-1 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-soft-pink border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading beautiful jewelry...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pastel-gradient-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-soft-pink via-soft-purple to-soft-blue bg-clip-text text-transparent">
                Luxury Jewelry Collection
              </h1>
              <Sparkles className="h-6 w-6 text-soft-pink animate-pulse" />
            </div>
            <p className="text-gray-600">
              {filteredProducts.length} exquisite {filteredProducts.length === 1 ? "piece" : "pieces"} available
            </p>
          </div>
          {isAdmin && (
            <div className="mt-4 sm:mt-0">
              <AddProductForm onProductAdded={fetchProducts} />
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 animate-fade-in">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-soft-purple" />
          </div>
          <input
            type="text"
            placeholder="Search for your perfect jewelry piece..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="block w-full pl-12 pr-4 py-4 border border-pastel-pink/30 rounded-2xl leading-5 pastel-card placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
          />
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="pastel-card rounded-3xl p-12 max-w-md mx-auto">
              <div className="text-soft-purple mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {searchTerm ? "No jewelry found" : "No jewelry available"}
              </h3>
              <p className="text-gray-600">
                {searchTerm
                  ? `No jewelry matches "${searchTerm}". Try a different search term.`
                  : "Add your first jewelry piece to get started."}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} onDelete={isAdmin ? handleDelete : undefined} showDelete={isAdmin} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
