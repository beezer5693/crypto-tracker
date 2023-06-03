"use client"

import { DataTable } from "@/components/data-table/data-table"
import { WatchlistContext } from "@/context/WatchListContext"
import { columns } from "@/components/data-table/columns"
import { useQuery } from "@tanstack/react-query"
import React from "react"
import Loading from "./loading"

async function getCoinData(coinIds: number[]) {
	const res = await fetch(`/api/crypto/quote?id=${coinIds.join(",")}`)
	return res.json()
}

async function getMetaData(coinIds: number[]) {
	const res = await fetch(`/api/crypto/meta-data?id=${coinIds.join(",")}`)
	return res.json()
}

export default function DataTableWatchlist() {
	const [data, setData] = React.useState<any[]>([])

	const {
		state: { watchlist },
	} = React.useContext(WatchlistContext)

	const {
		data: coins,
		isLoading: coinsIsLoading,
		isFetching: coinsIsFetching,
		isError: coinsError,
	} = useQuery({
		queryKey: ["coins", watchlist],
		queryFn: () => getCoinData(watchlist),
		enabled: !!watchlist.length,
	})
	const {
		data: metaData,
		isLoading: metaDataIsLoading,
		isFetching: metaDataIsFetching,
		isError: metaDataError,
	} = useQuery({
		queryKey: ["metaData", watchlist],
		queryFn: () => getMetaData(watchlist),
		enabled: !!watchlist.length,
	})

	React.useEffect(() => {
		if (coins?.data && metaData?.data) {
			const cryptoData = Object.values(coins.data)
			const coinData = cryptoData.map((coin: any, i: number) => {
				return {
					id: (i + 1).toString(),
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

			setData(coinData)
		}
	}, [coins, metaData])

	if (coinsIsLoading || metaDataIsLoading || coinsIsFetching || metaDataIsFetching) return <Loading />
	return <>{!!data.length && <DataTable columns={columns} data={data} />}</>
}
