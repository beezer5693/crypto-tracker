import Cards from "./components/cards"
import { Suspense } from "react"
import Loading from "./loading"

type Params = {
	params: {
		id: string
	}
}

async function getCoinData(id: string) {
	const res = await fetch(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${id}`, {
		headers: {
			"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY as string,
		},
		next: { revalidate: 60 },
	})

	return res.json()
}

async function getCoinMetaData(id: string) {
	const res = await fetch(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${id}`, {
		headers: {
			"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY as string,
		},
	})

	return res.json()
}

export default async function Coin({ params: { id } }: Params) {
	const [currencyData, currencyMetaData] = await Promise.all([getCoinData(id), getCoinMetaData(id)])

	return (
		<section className="flex w-full flex-col items-center">
			<Suspense fallback={<Loading />}>
				{/* @ts-expect-error Async Server Component */}
				<Cards id={id} currencyData={currencyData} currencyMetaData={currencyMetaData} />
			</Suspense>
		</section>
	)
}
