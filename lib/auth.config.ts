export const authConfig = {
  pages: { signIn: "/login" },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    authorized: ({ auth }: any) => !!auth?.user,
  },
  providers: [],
};