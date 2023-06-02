"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Collapse } from "react-collapse"
import { formatCurrency, formatNumber } from "@/lib/formatNums"

type TitleProps = {
	globalMetrics: {
		totalCryptoMarketCap: number
		totalCryptoVolume24h: number
		totalMarketCapChange24h: number
		totalVolumeChange24h: number
		totalDefiVolume24h: number
		defiVolumePercentage: number
		totalStableCoinVolume24h: number
		stableCoinVolumePercentage: number
		btcDominance: number
		btcDominanceChange24h: number
	}
}

export default function Title({ globalMetrics }: TitleProps) {
	const [isOpened, setIsOpened] = React.useState<boolean>(false)

	return (
		<div className="flex flex-col items-center gap-1 pb-5 sm:items-start">
			<h1 className="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-xl">
				{"Today's Cryptocurrency Prices by Market Cap"}
			</h1>
			<div className="flex flex-wrap items-center justify-center">
				<div className="flex items-center">
					<span className="mr-[3px] text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400">
						The global crypto market cap is
					</span>
					<span className="mr-[3px] text-[.8rem] font-bold text-neutral-600 dark:text-neutral-300">
						{formatCurrency(globalMetrics.totalCryptoMarketCap, "currency", "USD", "compact", 2)},
					</span>
				</div>
				<div className="flex items-center">
					<span className="mr-[3px] text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400">a</span>
					<span
						className={`inline-flex items-center text-[.8rem] font-bold ${
							Math.sign(globalMetrics.totalMarketCapChange24h) === -1 ? "text-red-500" : "text-emerald-500"
						}`}
					>
						{Math.sign(globalMetrics.totalMarketCapChange24h) === -1 ? (
							<ChevronDown className="h-4 w-4 text-red-500" />
						) : (
							<ChevronUp className="h-4 w-4 text-emerald-500" />
						)}
						{formatNumber(Math.abs(globalMetrics.totalMarketCapChange24h), "decimal", "standard", 2)}%
						<span className="mx-[3px] text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400">
							{Math.sign(globalMetrics.totalMarketCapChange24h) === -1 ? "decrease." : "increase."}
						</span>
					</span>
					<span className="text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400">over the last day.</span>
					<Button
						onClick={() => setIsOpened(prev => !prev)}
						className="hover group ml-2 h-3 p-0 text-[.8rem] font-medium text-neutral-600 underline decoration-neutral-600 transition duration-200 ease-out hover:text-neutral-800 dark:text-neutral-400 dark:decoration-neutral-400 hover:dark:text-neutral-300"
					>
						<span>{isOpened ? "Read less" : "Read more"}</span>
					</Button>
				</div>
			</div>
			<Collapse isOpened={isOpened}>
				<p className="mt-2 max-w-4xl text-[.8rem] font-medium text-neutral-600 dark:text-neutral-400 sm:justify-start">
					The total crypto market volume over the last 24 hours is
					<span className="mx-1 font-bold text-neutral-600 dark:text-neutral-300">
						{formatCurrency(globalMetrics.totalCryptoVolume24h, "currency", "USD", "compact", 2)},
					</span>
					which makes a
					<span
						className={`mx-1 inline text-[.8rem] font-bold ${
							Math.sign(globalMetrics.totalVolumeChange24h) === -1 ? "text-red-500" : "text-emerald-500"
						}`}
					>
						{Math.sign(globalMetrics.totalVolumeChange24h) === -1 ? (
							<ChevronDown className="inline h-4 w-4 align-middle text-red-500" />
						) : (
							<ChevronUp className="inline h-4 w-4 align-middle text-emerald-500" />
						)}
						{formatNumber(Math.abs(globalMetrics.totalVolumeChange24h), "decimal", "standard", 2)}%
					</span>
					<span className="mx-0.5">
						{Math.sign(globalMetrics.totalVolumeChange24h) === -1 ? "decrease." : "increase."}
					</span>
					The total volume in DeFi is currently
					<span className="mx-1 font-bold text-neutral-600 dark:text-neutral-300">
						{formatCurrency(globalMetrics.totalDefiVolume24h, "currency", "USD", "compact", 2)},
					</span>
					which is
					<span className="mx-1 font-semibold text-neutral-600 dark:text-neutral-300">
						{formatNumber(globalMetrics.defiVolumePercentage, "decimal", "standard", 2)}%
					</span>
					of the total crypto market 24-hour volume. The volume of all stable coins is now
					<span className="mx-1 font-bold text-neutral-600 dark:text-neutral-300">
						{formatCurrency(globalMetrics.totalStableCoinVolume24h, "currency", "USD", "compact", 2)},
					</span>
					which is
					<span className="mx-1 font-semibold text-neutral-600 dark:text-neutral-300">
						{formatNumber(globalMetrics.stableCoinVolumePercentage, "decimal", "standard", 2)}%
					</span>
					of the total crypto market 24-hour volume. {"Bitcoin's dominance is currently"}
					<span className="mx-1 font-semibold text-neutral-600 dark:text-neutral-300">
						{formatNumber(globalMetrics.btcDominance, "decimal", "standard", 2)}%,
					</span>
					a
					<span className="mx-1">
						{Math.sign(globalMetrics.btcDominanceChange24h) === -1 ? "decrease" : "increase"} of
					</span>
					<span
						className={`mr-1 inline text-[.8rem] font-bold ${
							Math.sign(globalMetrics.btcDominanceChange24h) === -1 ? "text-red-500" : "text-emerald-500"
						}`}
					>
						{Math.sign(globalMetrics.btcDominanceChange24h) === -1 ? (
							<ChevronDown className="inline h-4 w-4 text-red-500" />
						) : (
							<ChevronUp className="inline h-4 w-4 text-emerald-500" />
						)}
						{formatNumber(Math.abs(globalMetrics.btcDominanceChange24h), "decimal", "standard", 2)}%
					</span>
					over the last 24 hours.
				</p>
			</Collapse>
		</div>
	)
}
