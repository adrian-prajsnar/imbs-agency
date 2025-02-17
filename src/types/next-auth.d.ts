import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      name: string;
      email: string;
      image: string;
      isAdmin?: boolean;
    } & DefaultSession['user'];
  }
}
