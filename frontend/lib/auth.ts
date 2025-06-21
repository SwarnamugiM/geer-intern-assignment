export interface User {
  id: string
  email: string
  name: string
  createdAt: Date
}

// In-memory storage for users and sessions
const users: User[] = [
  {
    id: "1",
    email: "admin@jewelry.com",
    name: "Admin User",
    createdAt: new Date(),
  },
]

const sessions: Map<string, { userId: string; expiresAt: Date }> = new Map()

export function createUser(email: string, name: string, password: string): User | null {
  // Check if user already exists
  if (users.find((user) => user.email === email)) {
    return null
  }

  const newUser: User = {
    id: Date.now().toString(),
    email,
    name,
    createdAt: new Date(),
  }

  users.push(newUser)
  return newUser
}

export function authenticateUser(email: string, password: string): User | null {
  // Simple authentication - in production, use proper password hashing
  const user = users.find((user) => user.email === email)

  // For demo purposes, accept any password for existing users
  // In production, verify against hashed password
  return user || null
}

export function createSession(userId: string): string {
  const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

  sessions.set(sessionId, { userId, expiresAt })
  return sessionId
}

export function getSession(sessionId: string): { userId: string; expiresAt: Date } | null {
  const session = sessions.get(sessionId)

  if (!session) return null

  if (session.expiresAt < new Date()) {
    sessions.delete(sessionId)
    return null
  }

  return session
}

export function deleteSession(sessionId: string): void {
  sessions.delete(sessionId)
}

export function getUserById(id: string): User | null {
  return users.find((user) => user.id === id) || null
}
