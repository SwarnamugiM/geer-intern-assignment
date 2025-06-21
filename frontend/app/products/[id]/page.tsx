"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, ShoppingBag, Heart, Star } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useAuth } from "@/components/auth-provider"
import type { Product } from "@/lib/data"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { addToCart } = useCart()
  const { user } = useAuth()
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedImage, setSelectedImage] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [addingToCart, setAddingToCart] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/api/products")
        if (response.ok) {
          const products = await response.json()
          const foundProduct = products.find((p: Product) => p.id === params.id)
          if (foundProduct) {
            setProduct(foundProduct)
            setSelectedColor(foundProduct.colors[0]?.value || "")
            setSelectedImage(foundProduct.colors[0]?.imageUrl || foundProduct.imageUrl)
          }
        }
      } catch (error) {
        console.error("Failed to fetch product:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  const handleColorChange = (colorValue: string, imageUrl: string) => {
    setSelectedColor(colorValue)
    setSelectedImage(imageUrl)
  }

  const handleAddToCart = async () => {
    if (!user) {
      router.push("/login")
      return
    }

    if (!product || !selectedColor) return

    setAddingToCart(true)
    const selectedColorObj = product.colors.find((c) => c.value === selectedColor)
    addToCart(product, selectedColor, selectedColorObj?.name || "")

    // Show success feedback
    setTimeout(() => {
      setAddingToCart(false)
    }, 1000)
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    target.src = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&crop=center"
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button onClick={() => router.push("/products")} className="text-purple-600 hover:text-purple-700">
            Back to Products
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                onError={handleImageError}
                priority
              />
            </div>

            {/* Color Image Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleColorChange(color.value, color.imageUrl)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all ${
                    selectedColor === color.value
                      ? "border-purple-600 ring-2 ring-purple-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={color.imageUrl || "/placeholder.svg"}
                    alt={color.name}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-purple-600 font-medium mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.8) • 127 reviews</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Material</h3>
              <p className="text-gray-600">{product.material}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Color: {product.colors.find((c) => c.value === selectedColor)?.name}
              </h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorChange(color.value, color.imageUrl)}
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === color.value
                        ? "border-purple-600 ring-2 ring-purple-200"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{
                      backgroundColor: color.value.includes("gold")
                        ? color.value.includes("white")
                          ? "#F8F8FF"
                          : color.value.includes("rose")
                            ? "#E8B4B8"
                            : "#FFD700"
                        : color.value.includes("silver")
                          ? "#C0C0C0"
                          : color.value.includes("platinum")
                            ? "#E5E4E2"
                            : color.value.includes("blue")
                              ? "#4169E1"
                              : color.value.includes("red")
                                ? "#DC143C"
                                : color.value.includes("green")
                                  ? "#228B22"
                                  : color.value.includes("pink")
                                    ? "#FFB6C1"
                                    : "#8B4513",
                    }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">In Stock</span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={addingToCart || !selectedColor}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>{addingToCart ? "Adding to Cart..." : "Add to Cart"}</span>
              </button>

              <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Free shipping</span>
                <span className="text-gray-900">On orders over $500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Returns</span>
                <span className="text-gray-900">30-day return policy</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Warranty</span>
                <span className="text-gray-900">Lifetime warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
