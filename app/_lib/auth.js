import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
      //if there is a user, then return true
      //if not authenticated, NextAuth.js redirect to sign-in automatically based on callback configuration.
    },
  },
};
// when user hit the protected route, the authorized callback will be called

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
