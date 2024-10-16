// /app/api/auth/login.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const users: Record<string, { email: string; password: string }> = {}; // Replace with a real database

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = users[email];

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ email }, 'your_jwt_secret', { expiresIn: '1h' });
    return NextResponse.json({ token });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
