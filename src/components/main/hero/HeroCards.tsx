"use client"

import { Flame, ChevronUp, ChevronDown, Clock, TrendingUp } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card"
import { useQuoteLatest } from "@/hooks/useQuote"
import { Skeleton } from "@/components/ui/skeleton"
import { formatCurrency, formatNumber } from "@/lib/formatNums"

export default function HeroCards() {
	const { data, isLoading } = useQuoteLatest("BTC", "ETH", "SOL", "ADA", "XRP", "DOGE", "AVAX", "XMR", "DOT")

	return (
		<div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
			<Card className="col-span-1 flex flex-col justify-between space-y-5">
				<CardHeader>
					<CardTitle className="flex items-center gap-3">
						<div className="rounded-md bg-emerald-400/30 p-1.5 dark:bg-emerald-800/50">
							<Flame className="h-5 w-5 stroke-emerald-500 dark:stroke-emerald-500" />
						</div>
						<span className="mt-0.5 text-neutral-800 dark:text-neutral-200">Trending</span>
					</CardTitle>
				</CardHeader>
				<CardContent className="ml-[10px]">
					<div className="flex flex-col gap-5">
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">1</div>
								<div className="flex items-center gap-2">
									{isLoading ? (
										<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
											{data.data.BTC[0].name}
										</div>
									) : null}
									{isLoading ? (
										<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{data.data.BTC[0].symbol}</div>
									) : null}
								</div>
							</div>
							<div className="flex items-center">
								{isLoading ? (
									<Skeleton className="h-3 w-[52px] bg-neutral-200 dark:bg-neutral-700/50" />
								) : data ? (
									<div
										className={`flex items-center gap-1 text-[.8rem] font-bold ${
											data.data.BTC[0].quote.USD.percent_change_24h < 0 ? "text-red-500" : "text-emerald-500"
										}`}
									>
										{data.data.BTC[0].quote.USD.percent_change_24h < 0 ? (
											<ChevronDown className="h-3 w-3 text-red-500" />
										) : (
											<ChevronUp className="h-3 w-3 text-emerald-500" />
										)}
										{formatNumber(Math.abs(data.data.BTC[0].quote.USD.percent_change_24h), "decimal", "standard", 2)}%
									</div>
								) : null}
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">2</div>
								<div className="flex items-center gap-2">
									{isLoading ? (
										<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
											{data.data.ETH[0].name}
										</div>
									) : null}
									{isLoading ? (
										<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{data.data.ETH[0].symbol}</div>
									) : null}
								</div>
							</div>
							<div className="flex items-center">
								{isLoading ? (
									<Skeleton className="h-3 w-[52px] bg-neutral-200 dark:bg-neutral-700/50" />
								) : data ? (
									<div
										className={`flex items-center gap-1 text-[.8rem] font-bold ${
											data.data.ETH[0].quote.USD.percent_change_24h < 0 ? "text-red-500" : "text-emerald-500"
										}`}
									>
										{data.data.ETH[0].quote.USD.percent_change_24h < 0 ? (
											<ChevronDown className="h-3 w-3 text-red-500" />
										) : (
											<ChevronUp className="h-3 w-3 text-emerald-500" />
										)}
										{formatNumber(Math.abs(data.data.ETH[0].quote.USD.percent_change_24h), "decimal", "standard", 2)}%
									</div>
								) : null}
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">3</div>
								<div className="flex items-center gap-2">
									{isLoading ? (
										<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
											{data.data.SOL[0].name}
										</div>
									) : null}
									{isLoading ? (
										<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{data.data.SOL[0].symbol}</div>
									) : null}
								</div>
							</div>
							<div className="flex items-center">
								{isLoading ? (
									<Skeleton className="h-3 w-[52px] bg-neutral-200 dark:bg-neutral-700/50" />
								) : data ? (
									<div
										className={`flex items-center gap-1 text-[.8rem] font-bold ${
											data.data.SOL[0].quote.USD.percent_change_24h < 0 ? "text-red-500" : "text-emerald-500"
										}`}
									>
										{data.data.SOL[0].quote.USD.percent_change_24h < 0 ? (
											<ChevronDown className="h-3 w-3 text-red-500" />
										) : (
											<ChevronUp className="h-3 w-3 text-emerald-500" />
										)}
										{formatNumber(Math.abs(data.data.SOL[0].quote.USD.percent_change_24h), "decimal", "standard", 2)}%
									</div>
								) : null}
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card className="col-span-1 flex flex-col justify-between space-y-5">
				<CardHeader>
					<CardTitle className="flex items-center gap-3">
						<div className="rounded-md bg-emerald-400/30 p-1.5 dark:bg-emerald-800/50">
							<Clock className="h-5 w-5 stroke-emerald-500 dark:stroke-emerald-500" />
						</div>
						<span className="mt-0.5 text-neutral-800 dark:text-neutral-200">Recently Added</span>
					</CardTitle>
				</CardHeader>
				<CardContent className="ml-[10px]">
					<div className="flex flex-col gap-5">
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">1</div>
								<div className="flex items-center gap-2">
									{isLoading ? (
										<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
											{data.data.ADA[0].name}
										</div>
									) : null}
									{isLoading ? (
										<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{data.data.ADA[0].symbol}</div>
									) : null}
								</div>
							</div>
							<div className="text-[.8rem] font-semibold text-neutral-800 dark:text-neutral-300">
								{isLoading ? (
									<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
								) : data ? (
									formatCurrency(
										data.data.ADA[0].quote.USD.price,
										"currency",
										"USD",
										"compact",
										data.data.ADA[0].quote.USD.price < 1 ? 4 : 2
									)
								) : null}
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">2</div>
								<div className="flex items-center gap-2">
									{isLoading ? (
										<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
											{data.data.DOGE[0].name}
										</div>
									) : null}
									{isLoading ? (
										<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">
											{data.data.DOGE[0].symbol}
										</div>
									) : null}
								</div>
							</div>
							<div className="text-[.8rem] font-semibold text-neutral-800 dark:text-neutral-300">
								{isLoading ? (
									<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
								) : data ? (
									formatCurrency(
										data.data.DOGE[0].quote.USD.price,
										"currency",
										"USD",
										"compact",
										data.data.DOGE[0].quote.USD.price < 1 ? 4 : 2
									)
								) : null}
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">3</div>
								<div className="flex items-center gap-2">
									{isLoading ? (
										<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
											{data.data.XRP[0].name}
										</div>
									) : null}
									{isLoading ? (
										<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{data.data.XRP[0].symbol}</div>
									) : null}
								</div>
							</div>
							<div className="text-[.8rem] font-semibold text-neutral-800 dark:text-neutral-300">
								{isLoading ? (
									<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
								) : data ? (
									formatCurrency(
										data.data.XRP[0].quote.USD.price,
										"currency",
										"USD",
										"compact",
										data.data.XRP[0].quote.USD.price < 1 ? 4 : 2
									)
								) : null}
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card className="col-span-1 space-y-5">
				<CardHeader>
					<CardTitle className="flex items-center gap-3">
						<div className="rounded-md bg-emerald-400/30 p-1.5 dark:bg-emerald-800/50">
							<TrendingUp className="h-5 w-5 stroke-emerald-500 dark:stroke-emerald-500" />
						</div>
						<span className="mt-0.5 text-neutral-800 dark:text-neutral-200">Gainers & Losers</span>
					</CardTitle>
				</CardHeader>
				<CardContent className="ml-[10px]">
					<div className="flex flex-col gap-5">
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">1</div>
								<div className="flex items-center gap-2">
									{isLoading ? (
										<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
											{data.data.DOT[0].name}
										</div>
									) : null}
									{isLoading ? (
										<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{data.data.DOT[0].symbol}</div>
									) : null}
								</div>
							</div>
							<div className="flex items-center">
								{isLoading ? (
									<Skeleton className="h-3 w-[52px] bg-neutral-200 dark:bg-neutral-700/50" />
								) : data ? (
									<div
										className={`flex items-center gap-1 text-[.8rem] font-bold ${
											data.data.DOT[0].quote.USD.percent_change_24h < 0 ? "text-red-500" : "text-emerald-500"
										}`}
									>
										{data.data.DOT[0].quote.USD.percent_change_24h < 0 ? (
											<ChevronDown className="h-3 w-3 text-red-500" />
										) : (
											<ChevronUp className="h-3 w-3 text-emerald-500" />
										)}
										{formatNumber(Math.abs(data.data.DOT[0].quote.USD.percent_change_24h), "decimal", "standard", 2)}%
									</div>
								) : null}
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">2</div>
								<div className="flex items-center gap-2">
									{isLoading ? (
										<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
											{data.data.XMR[0].name}
										</div>
									) : null}
									{isLoading ? (
										<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{data.data.XMR[0].symbol}</div>
									) : null}
								</div>
							</div>
							<div className="flex items-center">
								{isLoading ? (
									<Skeleton className="h-3 w-[52px] bg-neutral-200 dark:bg-neutral-700/50" />
								) : data ? (
									<div
										className={`flex items-center gap-1 text-[.8rem] font-bold ${
											data.data.XMR[0].quote.USD.percent_change_24h < 0 ? "text-red-500" : "text-emerald-500"
										}`}
									>
										{data.data.XMR[0].quote.USD.percent_change_24h < 0 ? (
											<ChevronDown className="h-3 w-3 text-red-500" />
										) : (
											<ChevronUp className="h-3 w-3 text-emerald-500" />
										)}
										{formatNumber(Math.abs(data.data.XMR[0].quote.USD.percent_change_24h), "decimal", "standard", 2)}%
									</div>
								) : null}
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">3</div>
								<div className="flex items-center gap-2">
									{isLoading ? (
										<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
											{data.data.AVAX[0].name}
										</div>
									) : null}
									{isLoading ? (
										<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
									) : data ? (
										<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">
											{data.data.AVAX[0].symbol}
										</div>
									) : null}
								</div>
							</div>
							<div className="flex items-center">
								{isLoading ? (
									<Skeleton className="h-3 w-[52px] bg-neutral-200 dark:bg-neutral-700/50" />
								) : data ? (
									<div
										className={`flex items-center gap-1 text-[.8rem] font-bold ${
											data.data.AVAX[0].quote.USD.percent_change_24h < 0 ? "text-red-500" : "text-emerald-500"
										}`}
									>
										{data.data.AVAX[0].quote.USD.percent_change_24h < 0 ? (
											<ChevronDown className="h-3 w-3 text-red-500" />
										) : (
											<ChevronUp className="h-3 w-3 text-emerald-500" />
										)}
										{formatNumber(Math.abs(data.data.AVAX[0].quote.USD.percent_change_24h), "decimal", "standard", 2)}%
									</div>
								) : null}
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
