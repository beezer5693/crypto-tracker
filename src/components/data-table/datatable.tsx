import { columns } from "./columns"
import { DataTable } from "./data-table"

async function getCoinData() {
	const res = await fetch(
		`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=1000&CMC_PRO_API_KEY=${process.env.COIN_MARKET_CAP_API_KEY}`,
		{ next: { revalidate: 60 } }
	)

	return res.json()
}

async function getMetaData() {
	const coins = await getCoinData()
	const ids = await coins.data.map((item: any) => item.id)
	const res = await fetch(
		`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids.join(",")}&CMC_PRO_API_KEY=${
			process.env.COIN_MARKET_CAP_API_KEY
		}`
	)

	return res.json()
}

export default async function DataTableMain() {
	const coinData = await getCoinData()
	const metaData = await getMetaData()

	const cryptoData = coinData.data.map((coin: any, i: number) => {
		return {
			id: i + 1,
			coinId: coin.id,
			icon: metaData.data[`${coin.id}`].logo,
			name: coin.name,
			symbol: coin.symbol,
			price: coin.quote.USD.price,
			marketCap: coin.quote.USD.market_cap,
			volume: coin.quote.USD.volume_24h,
			hour: coin.quote.USD.percent_change_1h,
			day: coin.quote.USD.percent_change_24h,
			week: coin.quote.USD.percent_change_7d,
			circulatingSupply: coin.circulating_supply,
			progress: !coin.max_supply ? null : (coin.circulating_supply / coin.max_supply) * 100,
			maxSupply: coin.max_supply,
		}
	})

	return (
		<section className="mt-44 w-full bg-transparent px-5">
			<div className="mx-auto max-w-screen-xl overflow-x-auto">
				{cryptoData && <DataTable columns={columns} data={cryptoData} />}
			</div>
		</section>
	)
}
