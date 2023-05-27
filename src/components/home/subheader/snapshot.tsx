import { formatNumber, formatCurrency } from "@/lib/formatNums"

export default function SnapShot({ globalMetrics }: { globalMetrics: GlobalMetricsData }) {
	const globalMetricsData = {
		totalCryptos: formatNumber(globalMetrics.data.total_cryptocurrencies, "decimal", "standard", 0),
		totalExchanges: formatNumber(globalMetrics.data.active_exchanges, "decimal", "standard", 0),
		totalMarketCap: formatCurrency(globalMetrics.data.quote.USD.total_market_cap, "currency", "USD", "standard", 0),
		totalVolume24h: formatCurrency(globalMetrics.data.quote.USD.total_volume_24h, "currency", "USD", "standard", 0),
		btcDominance: `${formatNumber(globalMetrics.data.btc_dominance, "decimal", "standard", 1)}%`,
		ethDominance: `${formatNumber(globalMetrics.data.eth_dominance, "decimal", "standard", 1)}%`,
	}

	return (
		<div className="flex items-center gap-3.5 overflow-x-hidden transition duration-200 hover:overflow-x-auto">
			<div className="flex shrink-0 items-center gap-1 text-[.7rem]">
				<span className="font-medium text-neutral-800 dark:text-neutral-200">Cryptos:</span>
				<span className="font-medium text-emerald-600 dark:text-emerald-500">{globalMetricsData.totalCryptos}</span>
			</div>
			<div className="flex shrink-0 items-center gap-1 text-[.7rem]">
				<span className="font-medium text-neutral-800 dark:text-neutral-200">Exchanges:</span>
				<span className="font-medium text-emerald-600 dark:text-emerald-500">{globalMetricsData.totalExchanges}</span>
			</div>
			<div className="flex shrink-0 items-center gap-1 text-[.7rem]">
				<span className="font-medium text-neutral-800 dark:text-neutral-200">Market Cap:</span>
				<span className="font-medium text-emerald-600 dark:text-emerald-500">{globalMetricsData.totalMarketCap}</span>
			</div>
			<div className="flex shrink-0 items-center gap-1 text-[.7rem]">
				<span className="font-medium text-neutral-800 dark:text-neutral-200">24hr Volume:</span>
				<span className="font-medium text-emerald-600 dark:text-emerald-500">{globalMetricsData.totalVolume24h}</span>
			</div>
			<div className="flex shrink-0 items-center gap-1 text-[.7rem]">
				<span className="font-medium text-neutral-800 dark:text-neutral-200">Dominance:</span>
				<span className="font-medium text-emerald-600 dark:text-emerald-500">
					BTC: {globalMetricsData.btcDominance} ETH: {globalMetricsData.ethDominance}%
				</span>
			</div>
		</div>
	)
}
