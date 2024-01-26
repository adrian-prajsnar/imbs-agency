import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDb } from './databaseConnection';
import { User } from './databaseModels';
import bcrypt from 'bcrypt';
import { authConfig } from './auth.config';

async function login(credentials: any) {
  try {
    await connectToDb();

    const userDoc = await User.findOne({ username: credentials.username });
    if (!userDoc) {
      throw new Error('Wrong credentials!');
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      userDoc.password
    );
    if (!isPasswordCorrect) {
      throw new Error('Wrong credentials!');
    }

    const user = userDoc.toObject();
    delete user.password;
    delete user.__v;

    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to login!');
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'github') {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile?.email });
          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              image: profile?.avatar_url,
            });
            await newUser.save();
          }
        } catch (error) {
          console.error(error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
