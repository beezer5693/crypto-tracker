import client from "@/lib/prismadb"
import getCurrentUser from "@/lib/getCurrentUser"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const email = searchParams.get("email")
	try {
		const user = await getCurrentUser(email!)

		if (user) {
			const watchlist = await client.watchlist.findMany({
				where: {
					userId: user.id,
				},
				include: {
					coins: true,
				},
			})

			if (watchlist) {
				const coins = await client.coin.findMany({
					where: {
						watchlistId: watchlist[0].id,
					},
				})

				return NextResponse.json(coins)
			} else {
				return NextResponse.json([])
			}
		}
	} catch (error) {
		console.log(error, "GET_CURRENT_USER_WATCHLIST_ERROR")
	}
}

export async function POST(request: Request) {
	const { email, coinId, name } = await request.json()

	try {
		const user = await getCurrentUser(email)

		if (user) {
			const watchlist = await client.watchlist.findMany({
				where: {
					userId: user.id,
				},
			})

			const coin = await client.coin.create({
				data: {
					coinId,
					name,
					watchlist: {
						connect: {
							id: watchlist[0].id,
						},
					},
				},
			})

			return NextResponse.json(coin)
		}
	} catch (error: any) {
		console.log(error, "ADD_COIN_ERROR")
		return new NextResponse("Something went wrong", { status: 500 })
	}
}

export async function DELETE(request: Request) {
	const { searchParams } = new URL(request.url)
	const email = searchParams.get("email")
	const coinId = searchParams.get("coinId")

	try {
		const user = await getCurrentUser(email!)

		if (user) {
			const watchlist = await client.watchlist.findMany({
				where: {
					userId: user.id,
				},
			})

			const coin = await client.coin.deleteMany({
				where: {
					watchlistId: watchlist[0].id,
					coinId: Number(coinId),
				},
			})

			return NextResponse.json(coin)
		}
	} catch (error: any) {
		console.log(error, "ADD_COIN_ERROR")
		return new NextResponse("Something went wrong", { status: 500 })
	}
}
