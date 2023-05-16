import axios from "axios"
import { NextResponse } from "next/server"

export async function GET() {
	const { data } = await axios.get("https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol", {
		headers: {
			"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY as string,
		},
	})

	return NextResponse.json(data)
}
