import { createCookie } from '@remix-run/node';
import { users } from './database';

export const cookie = createCookie('auth', {
    secrets: ['default-secret'],
    maxAge: 30 * 24 * 60 * 60,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
});

export async function createAccount(email: string, password: string) {
    const id = users.length;
    users.push({ id, email, password });
    return id;
}
