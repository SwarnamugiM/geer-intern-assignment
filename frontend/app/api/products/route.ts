import { type NextRequest, NextResponse } from "next/server"
import { getAllProducts, addProduct } from "@/lib/data"

export async function GET() {
  try {
    const products = getAllProducts()
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, price, imageUrl, description } = body

    // Validation
    if (!name || !price || !imageUrl) {
      return NextResponse.json({ error: "Name, price, and imageUrl are required" }, { status: 400 })
    }

    if (typeof price !== "number" || price <= 0) {
      return NextResponse.json({ error: "Price must be a positive number" }, { status: 400 })
    }

    const newProduct = addProduct({
      name,
      price,
      imageUrl,
      description,
    })

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
