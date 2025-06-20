import { type NextRequest, NextResponse } from "next/server"
import { authenticateUser, createSession } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const user = authenticateUser(email, password)

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const sessionId = createSession(user.id)

    const response = NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name },
      message: "Login successful",
    })

    // Set session cookie
    response.cookies.set("session", sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60, // 24 hours
    })

    return response
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
