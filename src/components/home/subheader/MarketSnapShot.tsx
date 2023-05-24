"use client"

import { useGlobalMetrics } from "@/hooks/useFetch"
import { Skeleton } from "@/components/ui/skeleton"
import { formatNumber, formatCurrency } from "@/lib/formatNums"

export default function MarketSnapShot() {
	const { data, isLoading } = useGlobalMetrics()

	return (
		<div className="flex items-center gap-3.5 overflow-x-hidden transition duration-200 hover:overflow-x-auto">
			<div className="flex shrink-0 items-center gap-1 text-[.7rem]">
				<span className="font-medium text-neutral-800 dark:text-neutral-200">Cryptos:</span>
				{isLoading ? (
					<Skeleton className="h-3 w-[37px] bg-neutral-200 dark:bg-neutral-700/50" />
				) : data ? (
					<span className="font-medium text-emerald-600 dark:text-emerald-500">
						{formatNumber(data.data.total_cryptocurrencies, "decimal", "standard", 0)}
					</span>
				) : null}
			</div>
			<div className="flex shrink-0 items-center gap-1 text-[.7rem]">
				<span className="font-medium text-neutral-800 dark:text-neutral-200">Exchanges:</span>
				{isLoading ? (
					<Skeleton className="h-3 w-[20px] bg-neutral-200 dark:bg-neutral-700/50" />
				) : data ? (
					<span className="font-medium text-emerald-600 dark:text-emerald-500">
						{formatNumber(data.data.active_exchanges, "decimal", "standard", 0)}
					</span>
				) : null}
			</div>
			<div className="flex shrink-0 items-center gap-1 text-[.7rem]">
				<span className="font-medium text-neutral-800 dark:text-neutral-200">Market Cap:</span>
				{isLoading ? (
					<Skeleton className="h-3 w-[98px] bg-neutral-200 dark:bg-neutral-700/50" />
				) : data ? (
					<span className="font-medium text-emerald-600 dark:text-emerald-500">
						{formatCurrency(data.data.quote.USD.total_market_cap, "currency", "USD", "standard", 0)}
					</span>
				) : null}
			</div>
			<div className="flex shrink-0 items-center gap-1 text-[.7rem]">
				<span className="font-medium text-neutral-800 dark:text-neutral-200">24hr Volume:</span>
				{isLoading ? (
					<Skeleton className="h-3 w-[87px] bg-neutral-200 dark:bg-neutral-700/50" />
				) : data ? (
					<span className="font-medium text-emerald-600 dark:text-emerald-500">
						{data && formatCurrency(data.data.quote.USD.total_volume_24h, "currency", "USD", "standard", 0)}
					</span>
				) : null}
			</div>
			<div className="flex shrink-0 items-center gap-1 text-[.7rem]">
				<span className="font-medium text-neutral-800 dark:text-neutral-200">Dominance:</span>
				{isLoading ? (
					<Skeleton className="h-3 w-[80px] bg-neutral-200 dark:bg-neutral-700/50" />
				) : data ? (
					<span className="font-medium text-emerald-600 dark:text-emerald-500">
						BTC: {data && formatNumber(data.data.btc_dominance, "decimal", "standard", 1)}% ETH:{" "}
						{data && formatNumber(data.data.eth_dominance, "decimal", "standard", 1)}%
					</span>
				) : null}
			</div>
		</div>
	)
}
