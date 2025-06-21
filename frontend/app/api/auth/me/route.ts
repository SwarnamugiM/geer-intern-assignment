import { type NextRequest, NextResponse } from "next/server"
import { getSession, getUserById } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    const sessionId = request.cookies.get("session")?.value

    if (!sessionId) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    const session = getSession(sessionId)

    if (!session) {
      return NextResponse.json({ error: "Invalid session" }, { status: 401 })
    }

    const user = getUserById(session.userId)

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name },
    })
  } catch (error) {
    return NextResponse.json({ error: "Authentication check failed" }, { status: 500 })
  }
}
