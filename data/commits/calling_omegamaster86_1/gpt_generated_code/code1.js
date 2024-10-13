import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import axios from "axios";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const response = await axios.post('http://localhost:3000/users', {
          user: {
            name: user.name,
            email: user.email,
            // passwordはGoogle認証では取得できないため、適当な値を設定または省略
          }
        });

        return response.status === 201; // HTTPステータスコード201が成功の指標
      } catch (error) {
        console.error('Sign in error', error);
        return false;
      }
    }
  }
})