import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
import {db} from "./lib/db"
import authConfig from "./auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),

  callbacks: {
    async signIn() {
      return true; // bas allow kar do
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },

  secret: process.env.AUTH_SECRET,
  ...authConfig
});