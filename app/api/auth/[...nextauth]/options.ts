import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredientialProvider from "next-auth/providers/credentials";
export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredientialProvider({
      name: "Crediential",
      credientials: {
        username: {
          label: "username:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credientials) {
        // This is where you need to provide user data
        // to verify with credientials
        // docs https://next-auth.js.org/configuration/providers#credentials-provider
        const user = {
          id: 1,
          name: "test",
          email: "khrahat92@gmail.com",
          password: "password",
        };
        if (
          credientials?.username === user.name &&
          credientials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
