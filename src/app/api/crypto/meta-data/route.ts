import axios from "axios"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const symbols = searchParams.get("symbol")
	const { data } = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=${symbols}`, {
		headers: {
			"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY as string,
		},
	})

	return NextResponse.json(data)
}
