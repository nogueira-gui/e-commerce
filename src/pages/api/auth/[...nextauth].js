import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.google_id,
      clientSecret: process.env.google_secret,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async redirect(url, baseUrl) {
      return baseUrl;
    },
  },
});
