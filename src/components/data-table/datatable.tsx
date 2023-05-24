"use client"

import * as React from "react"
import { useLatest } from "@/hooks/useFetch"
import { getMetaData } from "@/lib/getMetaData"
import { useQuery } from "@tanstack/react-query"
import { Crypto, columns } from "./columns"
import { DataTable } from "./data-table"
import { WatchlistContext } from "@/context/WatchListContext"

export default function DataTableMain() {
	const [cryptoData, setCryptoData] = React.useState<Crypto[]>([])

	const { data: crypto, isLoading } = useLatest()

	const {
		data: metaData,
		isLoading: metaDataLoading,
		error: metaDataError,
	} = useQuery(["metaData", crypto], () => getMetaData(crypto.data.map((item: any) => item.id)), {
		enabled: !!crypto,
		keepPreviousData: true,
	})

	const {
		state: { watchlist },
	} = React.useContext(WatchlistContext)

	React.useEffect(() => {
		if (crypto?.data && metaData?.data && watchlist) {
			setCryptoData(
				crypto.data.map((coin: any, i: number) => {
					return {
						id: i + 1,
						coinId: coin.id,
						icon: metaData
							? Object.values(metaData?.data.data)
									.flat(5)
									.map((item: any) => {
										if (item.id === coin.id) {
											return item.logo
										}
									})
									.join("")
							: null,
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
						isWatchlisted: watchlist.flat().includes(coin.id),
					}
				})
			)
		}
	}, [crypto, metaData, watchlist])

	if (isLoading || metaDataLoading) {
		return <div>Loading...</div>
	}

	return (
		<section className="mt-44 w-full bg-transparent px-5">
			<div className="mx-auto max-w-screen-2xl overflow-x-auto">
				{cryptoData && <DataTable columns={columns} data={cryptoData} />}
			</div>
		</section>
	)
}
