"use client"

import { useGlobalMetrics } from "@/hooks/useQuote"
import { Skeleton } from "../ui/skeleton"
import { ChevronDown, ChevronUp } from "lucide-react"
import { formatNumber, formatCurrency } from "@/lib/formatNums"

export default function Hero() {
	const { data, isLoading } = useGlobalMetrics()

	if (isLoading) {
		return (
			<section className="w-full bg-neutral-200/30 px-32 py-10 dark:bg-neutral-900">
				<div className="flex flex-col">
					<div className="flex flex-col gap-1.5">
						<h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
							{"Today's Cryptocurrency Prices by Market Cap"}
						</h1>
						<div className="flex items-center">
							<p className="text-xs font-medium text-neutral-600 dark:text-neutral-300/90">
								The global crypto market cap is
							</p>{" "}
							<Skeleton className="ml-1 h-3 w-[25px] bg-neutral-200 dark:bg-neutral-700/50" />
							<p className="text-xs font-medium text-neutral-600 dark:text-neutral-300/90">, a</p>{" "}
							<Skeleton className="ml-1 h-3 w-[250px] bg-neutral-200 dark:bg-neutral-700/50" />
						</div>
					</div>
				</div>
			</section>
		)
	}

	return (
		<section className="w-full bg-neutral-200/30 px-32 py-10 dark:bg-neutral-900">
			<div className="flex flex-col">
				<div className="flex flex-col gap-1.5">
					<h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
						{"Today's Cryptocurrency Prices by Market Cap"}
					</h1>

					<p className="flex items-center">
						<span className="mr-[3px] text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400">
							The global crypto market cap is
						</span>
						<span className="text-[.8rem] font-bold dark:text-neutral-300">
							{formatCurrency(data.data.quote.USD.total_market_cap, "currency", "USD", "compact", 2)}
							<span className="mr-[3px] text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400">, a</span>
						</span>
						<span
							className={`mr-[3px] flex items-center text-[.8rem] font-bold ${
								data.data.quote.USD.total_market_cap_yesterday_percentage_change < 0
									? "text-red-500"
									: "text-emerald-500"
							}`}
						>
							{data.data.quote.USD.total_market_cap_yesterday_percentage_change < 0 ? (
								<ChevronDown className="h-4 w-4 stroke-red-500" />
							) : (
								<ChevronUp className="h-4 w-4 stroke-emerald-500" />
							)}
							{formatNumber(
								Math.abs(data.data.quote.USD.total_market_cap_yesterday_percentage_change),
								"decimal",
								"standard",
								2
							)}
							%
						</span>
						<span className="text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400">
							{data.data.quote.USD.total_market_cap_yesterday_percentage_change > 0
								? "increase over the last day."
								: "decrease over the last day."}
						</span>
					</p>
				</div>
			</div>
		</section>
	)
}
