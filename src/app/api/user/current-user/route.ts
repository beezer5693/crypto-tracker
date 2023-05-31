import getCurrentUser from "@/lib/getCurrentUser"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const email = searchParams.get("email")
	try {
		const user = await getCurrentUser(email!)

		if (user) {
			return NextResponse.json(user)
		}
	} catch (error) {
		console.log(error, "GET_CURRENT_USER_ERROR")
	}
}
