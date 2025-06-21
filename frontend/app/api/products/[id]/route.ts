import { type NextRequest, NextResponse } from "next/server"
import { deleteProduct, getProductById } from "@/lib/data"

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    // Check if product exists
    const product = getProductById(id)
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const deleted = deleteProduct(id)

    if (deleted) {
      return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 })
    } else {
      return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
