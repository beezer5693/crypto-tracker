import bcrypt from "bcrypt"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import DiscordProvider from "next-auth/providers/discord"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import client from "@/lib/prismadb"

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(client),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			profile(profile) {
				return {
					id: profile.sub as string,
					firstName: profile.given_name as string,
					lastName: profile.family_name as string,
					email: profile.email as string,
					watchlists: {
						create: {
							name: `${profile.given_name}'s Watchlist`,
							coins: {},
						},
					},
				}
			},
		}),
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID as string,
			clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
			profile(profile) {
				return {
					id: profile.id as string,
					email: profile.email as string,
					watchlists: {
						create: {
							name: `Watchlist`,
							coins: {},
						},
					},
				}
			},
		}),
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Invalid credentials")
				}

				const user = await client.user.findUnique({
					where: {
						email: credentials.email,
					},
				})

				if (!user || !user?.hashedPassword) {
					throw new Error("Invalid credentials")
				}

				const isCorrectPassword = await bcrypt.compare(credentials.password, user.hashedPassword)

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
