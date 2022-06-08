import NextAuth from "next-auth"
import RedditProvider from "next-auth/providers/reddit"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        RedditProvider({
            clientId: process.env.REDDIT_CLIENT_ID,
            clientSecret: process.env.REDDIT_CLIENT_SECRET,
            httpOptions: {
                timeout: 10000,
            }
        }),
        // ...add more providers here
    ],

    secret: process.env.SECRET
})