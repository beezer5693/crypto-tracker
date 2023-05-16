import { NextResponse } from "next/server"
import axios from "axios"

export async function GET() {
	const { data } = await axios.get("https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest", {
		headers: {
			"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY,
		},
	})

	return NextResponse.json(data)
}
