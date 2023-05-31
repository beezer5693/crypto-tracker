import Title from "./Title"
import Cards from "./Cards"
import LoadingUI from "./LoadingUI"
import { Suspense } from "react"

async function getGlobalMetrics() {
	const res = await fetch(
		`https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=${process.env.COIN_MARKET_CAP_API_KEY}`
	)

	return res.json()
}

async function getCoinData(symbols: string[] = ["BTC", "ETH", "ADA", "XRP", "SOL", "DOGE"]) {
	const res = await fetch(
		`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${symbols.join(",")}&CMC_PRO_API_KEY=${
			process.env.COIN_MARKET_CAP_API_KEY
		}`,
		{ next: { revalidate: 60 } }
	)

	return res.json()
}

async function getMetaData(ids: string[]) {
	const res = await fetch(
		`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids.join(",")}&CMC_PRO_API_KEY=${
			process.env.COIN_MARKET_CAP_API_KEY
		}`
	)

	return res.json()
}

async function getNews() {
	const res = await fetch("https://newsapi.org/v2/everything?q=cryptocurrency", {
		headers: {
			"X-Api-Key": process.env.NEXT_PUBLIC_NEWS_API_KEY as string,
		},
	})

	return res.json()
}

export default async function Hero() {
	const metrics: GlobalMetricsData = await getGlobalMetrics()
	const news = await getNews()
	const coinData = await getCoinData()
	const metaData: Promise<any> = getMetaData(
		Object.values(coinData.data)
			.flat()
			.map((item: any) => item.id)
	)

	const globalMetrics = {
		totalCryptoMarketCap: metrics.data.quote.USD.total_market_cap,
		totalCryptoVolume24h: metrics.data.quote.USD.total_volume_24h,
		totalMarketCapChange24h: metrics.data.quote.USD.total_market_cap_yesterday_percentage_change,
		totalVolumeChange24h: metrics.data.quote.USD.total_volume_24h_yesterday_percentage_change,
		totalDefiVolume24h: metrics.data.quote.USD.defi_volume_24h,
		defiVolumePercentage: (metrics.data.quote.USD.defi_volume_24h / metrics.data.quote.USD.total_volume_24h) * 100,
		totalStableCoinVolume24h: metrics.data.quote.USD.stablecoin_volume_24h,
		stableCoinVolumePercentage:
			(metrics.data.quote.USD.stablecoin_volume_24h / metrics.data.quote.USD.total_volume_24h) * 100,
		btcDominance: metrics.data.btc_dominance,
		btcDominanceChange24h: metrics.data.btc_dominance_24h_percentage_change,
	}

	return (
		<section className="w-full px-5">
			<div className="relative mx-auto max-w-screen-xl flex-col justify-start pb-9 pt-7">
				<Title globalMetrics={globalMetrics} />
				<Suspense fallback={<LoadingUI />}>
					{/* @ts-expect-error Async Server Component */}
					<Cards coins={coinData} news={news} promise={metaData} />
				</Suspense>
			</div>
		</section>
	)
}
