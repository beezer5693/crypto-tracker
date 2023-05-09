import bcrypt from "bcrypt"
import { AuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import client from "@/lib/prismadb"

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(client),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Invalid credentials")
				}

				const user = await client.user.findUnique({
					where: {
						email_address: credentials.email,
					},
				})

				if (!user || !user?.hashed_password) {
					throw new Error("Invalid credentials")
				}

				const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashed_password)

				if (!isCorrectPassword) {
					throw new Error("Invalid credentials")
				}

				return user
			},
		}),
	],
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
