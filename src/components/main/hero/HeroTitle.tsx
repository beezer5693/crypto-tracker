"use client"

import { useState } from "react"
import { useGlobalMetrics } from "@/hooks/useQuote"
import { Skeleton } from "../../ui/skeleton"
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io"
import { formatNumber, formatCurrency } from "@/lib/formatNums"
import { Button } from "@/components/ui/button"
import { Collapse } from "react-collapse"

export default function HeroTitle() {
	const { data, isLoading } = useGlobalMetrics()
	const [isOpened, setIsOpened] = useState<boolean>(false)

	return (
		<div className="flex flex-col items-center gap-1.5 py-1 sm:items-start">
			<h1 className="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-xl">
				{"Today's Cryptocurrency Prices by Market Cap"}
			</h1>
			<div className="flex flex-wrap items-center justify-center">
				<div className="flex items-center">
					<span className="mr-[3px] text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400">
						The global crypto market cap is
					</span>
					{isLoading ? (
						<Skeleton className="h-3 w-[42px] bg-neutral-200 dark:bg-neutral-700/50" />
					) : data ? (
						<span className="mr-[3px] text-[.8rem] font-bold text-neutral-600 dark:text-neutral-300">
							{formatCurrency(data.data.quote.USD.total_market_cap, "currency", "USD", "compact", 2)},
						</span>
					) : null}
				</div>
				<div className="flex items-center">
					<span className="mr-[3px] text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400">a</span>
					{isLoading ? (
						<Skeleton className="h-3 w-[40px] bg-neutral-200 dark:bg-neutral-700/50" />
					) : data ? (
						<span
							className={`inline-flex items-center text-[.8rem] font-bold ${
								Math.sign(data.data.quote.USD.total_market_cap_yesterday_percentage_change) === -1
									? "text-red-500"
									: "text-emerald-500"
							}`}
						>
							{Math.sign(data.data.quote.USD.total_market_cap_yesterday_percentage_change) === -1 ? (
								<IoMdArrowDropdown className="h-5 w-5 text-red-500" />
							) : (
								<IoMdArrowDropup className="h-5 w-5 text-emerald-500" />
							)}
							{formatNumber(
								Math.abs(data.data.quote.USD.total_market_cap_yesterday_percentage_change),
								"decimal",
								"standard",
								2
							)}
							%
							<span className="mx-[3px] text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400">
								{data.data.quote.USD.total_market_cap_yesterday_percentage_change < 0 ? "decrease" : "increase"}
							</span>
						</span>
					) : null}
					<span className="text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400">over the last day.</span>
					<Button
						onClick={() => setIsOpened(prev => !prev)}
						className="hover group ml-2 h-3 p-0 text-[.8rem] font-medium text-neutral-600 underline decoration-neutral-600 transition duration-200 ease-out hover:text-neutral-800 dark:text-neutral-400 dark:decoration-neutral-400 hover:dark:text-neutral-300"
					>
						<span>{isOpened ? "Read less" : "Read more"}</span>
					</Button>
				</div>
			</div>
			{data && (
				<Collapse isOpened={isOpened}>
					<p className="mt-2 max-w-4xl text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400 sm:justify-start">
						The total crypto market volume over the last 24 hours is
						<span className="mx-1 font-bold text-neutral-600 dark:text-neutral-300">
							{formatCurrency(data.data.quote.USD.total_volume_24h, "currency", "USD", "compact", 2)},
						</span>
						which makes a
						<span
							className={`mx-1 inline text-[.8rem] font-bold ${
								Math.sign(data.data.quote.USD.total_volume_24h_yesterday_percentage_change) === -1
									? "text-red-500"
									: "text-emerald-500"
							}`}
						>
							{Math.sign(data.data.quote.USD.total_volume_24h_yesterday_percentage_change) === -1 ? (
								<IoMdArrowDropdown className="inline h-5 w-5 text-red-500" />
							) : (
								<IoMdArrowDropup className="inline h-5 w-5 text-emerald-500" />
							)}
							{formatNumber(
								Math.abs(data.data.quote.USD.total_volume_24h_yesterday_percentage_change),
								"decimal",
								"standard",
								2
							)}
							%
						</span>
						<span className="mx-0.5">
							{data.data.quote.USD.total_volume_24h_yesterday_percentage_change < 0 ? "decrease" : "increase"}
						</span>
						The total volume in DeFi is currently
						<span className="mx-1 font-bold text-neutral-600 dark:text-neutral-300">
							{formatCurrency(data.data.defi_volume_24h, "currency", "USD", "compact", 2)},
						</span>
						which is
						<span className="mx-1 font-semibold text-neutral-600 dark:text-neutral-300">
							{formatNumber(
								(data.data.defi_volume_24h / data.data.quote.USD.total_volume_24h) * 100,
								"decimal",
								"standard",
								2
							)}
							% of the total crypto market 24-hour volume. The volume of all stable coins is now
						</span>
						<span className="mx-1 font-bold text-neutral-600 dark:text-neutral-300">
							{formatCurrency(data.data.quote.USD.stablecoin_volume_24h, "currency", "USD", "compact", 2)},
						</span>
						which is
						<span className="mx-1 font-semibold text-neutral-600 dark:text-neutral-300">
							{formatNumber(
								(data.data.quote.USD.stablecoin_volume_24h / data.data.quote.USD.total_volume_24h) * 100,
								"decimal",
								"standard",
								2
							)}
							%
						</span>
						of the total crypto market 24-hour volume. {"Bitcoin's dominance is currently"}
						<span className="mx-1 font-semibold text-neutral-600 dark:text-neutral-300">
							{formatNumber(data.data.btc_dominance, "decimal", "standard", 2)}%,
						</span>
						a
						<span className="mx-1">
							{data.data.btc_dominance_24h_percentage_change < 0 ? "decrease" : "increase"} of
						</span>
						<span
							className={`mr-1 inline text-[.8rem] font-bold ${
								Math.sign(data.data.btc_dominance_24h_percentage_change) === -1 ? "text-red-500" : "text-emerald-500"
							}`}
						>
							{Math.sign(data.data.btc_dominance_24h_percentage_change) === -1 ? (
								<IoMdArrowDropdown className="inline h-5 w-5 text-red-500" />
							) : (
								<IoMdArrowDropup className="inline h-5 w-5 text-emerald-500" />
							)}
							{formatNumber(Math.abs(data.data.btc_dominance_24h_percentage_change), "decimal", "standard", 2)}%
						</span>
						over the last 24 hours.
					</p>
				</Collapse>
			)}
		</div>
	)
}
