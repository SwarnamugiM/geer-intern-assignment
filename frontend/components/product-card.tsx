"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Trash2, Heart } from "lucide-react"
import type { Product } from "@/lib/data"

interface ProductCardProps {
  product: Product
  onDelete?: (id: string) => void
  showDelete?: boolean
}

export default function ProductCard({ product, onDelete, showDelete = false }: ProductCardProps) {
  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (confirm("Are you sure you want to delete this product?") && onDelete) {
      onDelete(product.id)
    }
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    target.src = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center"
  }

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="pastel-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-3 right-3 flex space-x-2">
              <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-soft-pink hover:text-soft-coral transition-colors">
                <Heart className="h-4 w-4" />
              </button>
              {showDelete && onDelete && (
                <button
                  onClick={handleDelete}
                  className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-red-400 hover:text-red-600 transition-colors"
                  title="Delete product"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-soft-purple bg-pastel-lavender/50 px-2 py-1 rounded-full">
              {product.category}
            </span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-3 h-3 rounded-full border border-white shadow-sm"
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
              {product.colors.length > 3 && (
                <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 3}</span>
              )}
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-soft-pink transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold bg-gradient-to-r from-soft-coral to-soft-pink bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
            <div className="text-xs text-gray-500">✨ Premium Quality</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
