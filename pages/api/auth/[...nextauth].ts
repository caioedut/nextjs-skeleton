import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID as any,
    //   clientSecret: process.env.GITHUB_SECRET as any,
    // }),

    CredentialsProvider({
      name: 'Credentials',

      // @ts-ignore
      async authorize(credentials) {
        const user = {
          name: 'Richard William',
          email: credentials?.username,
        };

        if (!user) {
          return null;
        }

        return user;
      },
    }),
  ],
};

export default NextAuth(authOptions);
