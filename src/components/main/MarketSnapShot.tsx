"use client"

import { useGlobalMetrics } from "@/hooks/useQuote"
import { Skeleton } from "@/components/ui/skeleton"
import { formatNumber, formatCurrency } from "@/lib/formatNums"

export default function MarketSnapShot() {
	const { data, isLoading } = useGlobalMetrics()

	if (isLoading) {
		return (
			<div className="flex items-center gap-3.5 overflow-x-hidden transition duration-200 hover:overflow-x-auto">
				<div className="flex shrink-0 gap-1 text-[.7rem]">
					<Skeleton className="h-3 w-[80px] bg-neutral-200 dark:bg-neutral-700/50" />
				</div>
				<div className="flex shrink-0 gap-1 text-[.7rem]">
					<Skeleton className="h-3 w-[83px] bg-neutral-200 dark:bg-neutral-700/50" />
				</div>
				<div className="flex shrink-0 gap-1 text-[.7rem]">
					<Skeleton className="h-3 w-[168px] bg-neutral-200 dark:bg-neutral-700/50" />
				</div>
				<div className="flex shrink-0 gap-1 text-[.7rem]">
					<Skeleton className="h-3 w-[161px] bg-neutral-200 dark:bg-neutral-700/50" />
				</div>
				<div className="flex shrink-0 gap-1 text-[.7rem]">
					<Skeleton className="h-3 w-[175px] bg-neutral-200 dark:bg-neutral-700/50" />
				</div>
			</div>
		)
	}

	return (
		<div className="flex items-center gap-3.5 overflow-x-hidden transition duration-200 hover:overflow-x-auto">
			<div className="flex shrink-0 gap-1 text-[.7rem]">
				<span className="text-neutral-800 dark:text-neutral-200">Cryptos:</span>
				<span className="text-emerald-500">
					{formatNumber(data.data.total_cryptocurrencies, "decimal", "standard", 0)}
				</span>
			</div>
			<div className="flex shrink-0 gap-1 text-[.7rem]">
				<span className="text-neutral-800 dark:text-neutral-200">Exchanges:</span>
				<span className="text-emerald-500">{formatNumber(data.data.active_exchanges, "decimal", "standard", 0)}</span>
			</div>
			<div className="flex shrink-0 gap-1 text-[.7rem]">
				<span className="text-neutral-800 dark:text-neutral-200">Market Cap:</span>
				<span className="text-emerald-500">
					{formatCurrency(data.data.quote.USD.total_market_cap, "currency", "USD", "standard", 0)}
				</span>
			</div>
			<div className="flex shrink-0 gap-1 text-[.7rem]">
				<span className="text-neutral-800 dark:text-neutral-200">24hr Volume:</span>
				<span className="text-emerald-500">
					{formatCurrency(data.data.quote.USD.total_volume_24h, "currency", "USD", "standard", 0)}
				</span>
			</div>
			<div className="flex shrink-0 gap-1 text-[.7rem]">
				<span className="text-neutral-800 dark:text-neutral-200">Dominance:</span>
				<span className="text-emerald-500">
					BTC: {formatNumber(data.data.btc_dominance, "decimal", "standard", 1)}% ETH:{" "}
					{formatNumber(data.data.eth_dominance, "decimal", "standard", 1)}%
				</span>
			</div>
		</div>
	)
}
