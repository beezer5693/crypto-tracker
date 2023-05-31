import { DataTable } from "@/components/data-table/data-table"
import { columns } from "@/components/data-table/columns"

type TableProps = {
	categoryData: any
	metaData: any
}

export default async function DataTableCategory({ categoryData, metaData }: TableProps) {
	const category = categoryData.data.coins.map((coin: any, i: number) => {
		return {
			id: i + 1,
			coinId: coin.id,
			icon: metaData.data[`${coin.id}`].logo,
			name: coin.name,
			symbol: coin.symbol,
			price: coin.quote.USD.price,
			marketCap: coin.quote.USD.market_cap,
			hour: coin.quote.USD.percent_change_1h,
			day: coin.quote.USD.percent_change_24h,
			week: coin.quote.USD.percent_change_7d,
			volume: coin.quote.USD.volume_24h,
			circulatingSupply: coin.circulating_supply,
			progress: !coin.max_supply ? null : (coin.circulating_supply / coin.max_supply) * 100,
			maxSupply: coin.max_supply,
		}
	})

	return (
		<>
			<DataTable columns={columns} data={category} />
		</>
	)
}
