import { type NextRequest, NextResponse } from "next/server"
import { deleteSession } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const sessionId = request.cookies.get("session")?.value

    if (sessionId) {
      deleteSession(sessionId)
    }

    const response = NextResponse.json({ message: "Logout successful" })

    // Clear session cookie
    response.cookies.set("session", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
    })

    return response
  } catch (error) {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 })
  }
}
