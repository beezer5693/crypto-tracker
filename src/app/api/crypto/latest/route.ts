import axios from "axios"
import { NextResponse } from "next/server"

export async function GET() {
	const { data } = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=250", {
		headers: {
			"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY as string,
		},
	})

	return NextResponse.json(data)
}
