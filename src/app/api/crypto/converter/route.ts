import { NextResponse } from "next/server"

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const id = searchParams.get("id")
	const amount = searchParams.get("amount")
	const convert = searchParams.get("convert")
	const res = await fetch(
		`https://pro-api.coinmarketcap.com/v2/tools/price-conversion?amount=${amount}&id=${id}&convert=${convert}`,
		{
			headers: {
				"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY as string,
			},
		}
	)

	const data = await res.json()

	return NextResponse.json(data)
}
