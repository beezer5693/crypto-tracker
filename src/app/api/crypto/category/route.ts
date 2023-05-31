import { NextResponse } from "next/server"

export async function GET() {
	const res = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/categories?limit=1000", {
		headers: {
			"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY as string,
		},
	})

	const data = await res.json()

	return NextResponse.json(data)
}
