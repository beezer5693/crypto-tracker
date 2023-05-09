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

		const hashedPassword = await bcrypt.hash(password, 10)

		const user = await client.user.create({
			data: {
				first_name: firstname,
				last_name: lastname,
				email_address: email,
				hashed_password: hashedPassword,
			},
		})

		return NextResponse.json(user)
	} catch (error: any) {
		console.log(error, "REGISTRATION_ERROR")
		return new NextResponse("Something went wrong", { status: 500 })
	}
}
