import bcrypt from "bcrypt"
import client from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
	try {
		const body = await request.json()
		const { firstname, lastname, email, password } = body

		if (!firstname || !lastname || !email || !password) {
			return new NextResponse("Missing required fields", { status: 400 })
		}

		const userExists = await client.user.findUnique({
			where: {
				email,
			},
		})

		if (userExists) {
			return new NextResponse("User already exists", { status: 400 })
		}

		const hashedPassword = await bcrypt.hash(password, 10)

		const user = await client.user.create({
			data: {
				firstName: firstname,
				lastName: lastname,
				email,
				hashedPassword,
				watchlists: {
					create: {
						name: `${firstname}'s Watchlist`,
						coins: {},
					},
				},
			},
		})

		return NextResponse.json(user)
	} catch (error: any) {
		console.log(error, "REGISTRATION_ERROR")
		return new NextResponse("Something went wrong", { status: 500 })
	}
}
