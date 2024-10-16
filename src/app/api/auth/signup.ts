// /app/api/auth/signup.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

const users: Record<string, { email: string; password: string }> = {}; // Replace with a real database

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  users[email] = { email, password: hashedPassword };
  return NextResponse.json({ message: 'User created' });
}
