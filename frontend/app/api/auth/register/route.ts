import { type NextRequest, NextResponse } from "next/server"
import { createUser, createSession } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json()

    if (!email || !password || !name) {
      return NextResponse.json({ error: "Email, password, and name are required" }, { status: 400 })
    }

    const user = createUser(email, name, password)

    if (!user) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 })
    }

    const sessionId = createSession(user.id)

    const response = NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name },
      message: "Registration successful",
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
    return NextResponse.json({ error: "Registration failed" }, { status: 500 })
  }
}
