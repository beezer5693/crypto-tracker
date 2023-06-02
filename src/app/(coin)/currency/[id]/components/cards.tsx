import WatchListButton from "@/components/misc/WatchListButton"
import Description from "./description"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LineChart from "@/components/line-chart/LineChart"
import { formatCurrency, formatNumber } from "@/lib/formatNums"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, FileText, Github, Globe, Twitter } from "lucide-react"
import { TbBrandReddit } from "react-icons/tb"

type CardProps = {
	currencyData: any
	currencyMetaData: any
	id: string
}

type MetaData = {
	logo: string
	launchDate: string
	description: string
	website: string
	twitter: string
	reddit: string
	github: string
	whitepaper: string
}

type Coin = {
	id: number
	name: string
	symbol: string
	rank: number
	price: number
	percentChange1h: number
	percentChange24h: number
	percentChange7d: number
	percentChange30d: number
	percentChange60d: number
	percentChange90d: number
	activeMarketPairs: number
	marketCap: number
	volume: number
	circulatingSupply: number
	maxSupply: number
	platform: any
	marketCapDominance?: number
}

export default async function Cards({ currencyData, currencyMetaData, id }: CardProps) {
	const coinData = currencyData
	const coinMetaData = currencyMetaData

	const coin: Coin = {
		name: coinData.data[`${id}`].name,
		id: coinData.data[`${id}`].id,
		symbol: coinData.data[`${id}`].symbol,
		rank: coinData.data[`${id}`].cmc_rank,
		price: coinData.data[`${id}`].quote.USD.price,
		percentChange1h: coinData.data[`${id}`].quote.USD.percent_change_1h,
		percentChange24h: coinData.data[`${id}`].quote.USD.percent_change_24h,
		percentChange7d: coinData.data[`${id}`].quote.USD.percent_change_7d,
		percentChange30d: coinData.data[`${id}`].quote.USD.percent_change_30d,
		percentChange60d: coinData.data[`${id}`].quote.USD.percent_change_60d,
		percentChange90d: coinData.data[`${id}`].quote.USD.percent_change_90d,
		activeMarketPairs: coinData.data[`${id}`].num_market_pairs,
		marketCap: coinData.data[`${id}`].quote.USD.market_cap,
		volume: coinData.data[`${id}`].quote.USD.volume_24h,
		platform: coinData.data[`${id}`].platform ? coinData.data[`${id}`].platform : null,
		circulatingSupply: coinData.data[`${id}`].circulating_supply,
		maxSupply: coinData.data[`${id}`].max_supply,
	}

	const metaData: MetaData = {
		logo: coinMetaData.data[`${id}`].logo,
		description: coinMetaData.data[`${id}`].description,
		launchDate: coinMetaData.data[`${id}`].date_launched
			? coinMetaData.data[`${id}`].date_launched.slice(0, 4)
			: undefined,
		website: coinMetaData.data[`${id}`].urls.website[0],
		twitter: coinMetaData.data[`${id}`].urls.twitter[0],
		reddit: coinMetaData.data[`${id}`].urls.reddit[0],
		github: coinMetaData.data[`${id}`].urls.source_code[0],
		whitepaper: coinMetaData.data[`${id}`].urls.technical_doc[0],
	}

	return (
		<div className="flex w-full max-w-screen-xl flex-col gap-9 px-5 py-7">
			<Link className="group cursor-pointer space-x-1 self-start text-xs" href={"/"}>
				<ChevronLeft className="inline-block h-3 w-3 transform align-middle text-emerald-500 transition-all duration-300 ease-out group-hover:-translate-x-1 group-hover:text-neutral-800 group-hover:dark:text-neutral-100" />
				<span className="inline-block align-middle font-medium text-emerald-500 transition-all duration-300 ease-out group-hover:text-neutral-800 group-hover:dark:text-neutral-100">
					Back to Home
				</span>
			</Link>
			<div className="flex min-w-[336px] max-w-screen-xl flex-col items-center justify-center gap-5 xl:flex-row">
				<div className="flex w-full max-w-[600px] flex-1 flex-col gap-5 xl:max-w-none">
					{/* Card for coin name and price */}
					<Card className="w-full">
						<CardHeader>
							<CardTitle className="space-y-2">
								<div className="flex flex-col items-start gap-2">
									<p className="mb-2 rounded bg-neutral-800 px-1 py-0.5 text-xs text-white dark:bg-neutral-600/50 dark:text-neutral-100">
										Rank #{coin.rank}
									</p>
									<div className="flex w-full items-start justify-between gap-2">
										<div className="-mt-1 space-x-2">
											<Image
												className="inline-block rounded-full align-middle"
												src={metaData.logo}
												height={20}
												width={20}
												alt="coin logo"
											/>
											<p className="inline-block space-x-1 align-middle">
												<span className="text-lg font-medium text-neutral-800 dark:text-neutral-100">{coin.name}</span>
												<span className="text-sm text-neutral-800 dark:text-neutral-400">{coin.symbol}</span>
											</p>
										</div>
										<WatchListButton
											className={cn("h-4 w-4")}
											className2="h-3 w-3"
											className3="mr-1.5 inline-flex items-center justify-center"
											icon={metaData.logo}
											name={coin.name}
											coinId={Number(coin.id)}
											side="bottom"
										/>
									</div>
									<div>
										<div className="flex items-center gap-2">
											<p className="text-2xl text-neutral-800 dark:text-neutral-200">
												{formatCurrency(
													coin.price,
													"currency",
													"USD",
													"standard",
													coin.price >= 1 ? 2 : coin.price >= 0.1 ? 4 : coin.price >= 0.01 ? 6 : 8
												)}
											</p>
											<p className={cn("inline-flex items-center")}>
												<span>
													{Math.sign(coin.percentChange24h) === -1 ? (
														<ChevronDown className="h-4 w-4 stroke-red-500" />
													) : (
														<ChevronUp className="h-4 w-4 stroke-emerald-500" />
													)}
												</span>
												<span
													className={cn("inline-block align-middle text-sm text-emerald-500", {
														"text-red-500": Math.sign(coin.percentChange24h) === -1,
													})}
												>
													{Math.abs(Number(formatNumber(coin.percentChange24h, "decimal", "standard", 2)))}%
												</span>
												<span
													className={cn("ml-1 inline-block align-middle text-sm text-emerald-500", {
														"text-red-500": Math.sign(coin.percentChange24h) === -1,
													})}
												>
													(1d)
												</span>
											</p>
										</div>
									</div>
									{/* Card for chart */}
									<LineChart id={id} />
								</div>
							</CardTitle>
						</CardHeader>
					</Card>
					{/* Card for about section */}
					<Card className="w-full">
						<CardHeader>
							<CardTitle>
								<span className="text-neutral-800 dark:text-neutral-200">About {coin.name}</span>
							</CardTitle>
						</CardHeader>
						<CardContent className="mt-3">
							<div className="space-y-2">
								<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
									<Description coin={coin} metaData={metaData} />
								</p>
							</div>
							<div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4">
								{metaData.website && (
									<Link href={metaData.website} target="_blank">
										<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
											<div className="rounded-md border bg-white p-2.5 dark:border-neutral-700/50 dark:bg-[#232323]">
												<Globe className="h-[14px] w-[14px] text-neutral-800 dark:text-neutral-100" />
											</div>
											<p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">Website</p>
											<ChevronRight className="mt-0.5 h-[14px] w-[14px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
										</div>
									</Link>
								)}
								{metaData.whitepaper && (
									<Link href={metaData.whitepaper} target="_blank">
										<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
											<div className="rounded-md border bg-white p-2.5 dark:border-neutral-700/50 dark:bg-[#232323]">
												<FileText className="h-[14px] w-[14px] text-neutral-800 dark:text-neutral-100" />
											</div>
											<p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">Whitepaper</p>
											<ChevronRight className="mt-0.5 h-[14px] w-[14px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
										</div>
									</Link>
								)}
								{metaData.github && (
									<Link href={metaData.github} target="_blank">
										<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
											<div className="rounded-md border bg-white p-2.5 dark:border-neutral-700/50 dark:bg-[#232323]">
												<Github className="h-[14px] w-[14px] text-neutral-800 dark:text-neutral-100" />
											</div>
											<p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">Github</p>
											<ChevronRight className="mt-0.5 h-[14px] w-[14px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
										</div>
									</Link>
								)}
								{metaData.reddit && (
									<Link href={metaData.reddit} target="_blank">
										<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
											<div className="rounded-md border bg-white p-2.5 dark:border-neutral-700/50 dark:bg-[#232323]">
												<TbBrandReddit className="h-[14px] w-[14px] text-neutral-800 dark:text-neutral-100" />
											</div>
											<p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">Reddit</p>
											<ChevronRight className="mt-0.5 h-[14px] w-[14px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
										</div>
									</Link>
								)}
								{metaData.twitter && (
									<Link href={metaData.twitter} target="_blank">
										<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
											<div className="rounded-md border bg-white p-2.5 dark:border-neutral-700/50 dark:bg-[#232323]">
												<Twitter className="h-[14px] w-[14px] text-neutral-800 dark:text-neutral-100" />
											</div>
											<p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">Twitter</p>
											<ChevronRight className="mt-0.5 h-[14px] w-[14px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
										</div>
									</Link>
								)}
							</div>
						</CardContent>
					</Card>
				</div>
				{/* Card for overview section */}
				<div className="flex w-full min-w-[336px] max-w-[600px] flex-col items-center gap-5 xl:max-w-[400px] xl:flex-none xl:self-start">
					<Card className="w-full">
						<CardHeader>
							<CardTitle>
								<span className="text-neutral-800 dark:text-neutral-200">Overview</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="mt-4 flex flex-col gap-4">
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">Rank</p>
										<p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
											{formatNumber(coin.rank, "decimal", "standard", 0)}
										</p>
									</div>
								</div>
								<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">Market Cap</p>
										<p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
											{formatCurrency(coin.marketCap, "currency", "USD", "compact", 1)}
										</p>
									</div>
								</div>
								<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">24h Volume</p>
										<p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
											{formatCurrency(coin.volume, "currency", "USD", "compact", 1)}
										</p>
									</div>
								</div>
								<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">Circulating Supply</p>
										<p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
											{formatNumber(coin.circulatingSupply, "decimal", "compact", 0)} {coin.symbol}
										</p>
									</div>
								</div>
								{coin.maxSupply && (
									<>
										<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
										<div className="flex flex-col">
											<div className="flex items-center justify-between">
												<p className="text-sm text-neutral-600 dark:text-neutral-400">Max Supply</p>
												<p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
													{formatNumber(coin.maxSupply, "decimal", "compact", 0)} {coin.symbol}
												</p>
											</div>
										</div>
									</>
								)}
								{coin.platform && (
									<>
										<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
										<div className="flex flex-col">
											<div className="flex items-center justify-between">
												<p className="text-sm text-neutral-600 dark:text-neutral-400">Platform</p>
												<p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
													{coin.platform.name}
												</p>
											</div>
										</div>
									</>
								)}
								{coin.marketCapDominance && coin.rank < 15 && (
									<>
										<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
										<div className="flex flex-col">
											<div className="flex items-center justify-between">
												<p className="text-sm text-neutral-600 dark:text-neutral-400">Market Dominance</p>
												<p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
													{formatNumber(
														coin.marketCapDominance,
														"decimal",
														"standard",
														coin.marketCapDominance >= 1
															? 1
															: coin.marketCapDominance >= 0.1
															? 2
															: coin.marketCapDominance >= 0.01
															? 3
															: 4
													)}
													%
												</p>
											</div>
										</div>
									</>
								)}
							</div>
						</CardContent>
					</Card>
					<Card className="w-full">
						<CardHeader>
							<CardTitle>
								<span className="text-neutral-800 dark:text-neutral-200">Performance</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="mt-4 flex flex-col gap-4">
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">1h</p>
										<p className={cn("inline-flex items-center font-bold")}>
											<span>
												{Math.sign(coin.percentChange1h) === -1 ? (
													<ChevronDown className="h-4 w-4 stroke-red-500" />
												) : (
													<ChevronUp className="h-4 w-4 stroke-emerald-500" />
												)}
											</span>
											<span
												className={cn("inline-block align-middle text-sm text-emerald-500", {
													"text-red-500": Math.sign(coin.percentChange1h) === -1,
												})}
											>
												{Math.abs(Number(formatNumber(coin.percentChange1h, "decimal", "standard", 2)))}%
											</span>
										</p>
									</div>
								</div>
								<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">24h</p>
										<p className={cn("inline-flex items-center font-bold")}>
											<span>
												{Math.sign(coin.percentChange24h) === -1 ? (
													<ChevronDown className="h-4 w-4 stroke-red-500" />
												) : (
													<ChevronUp className="h-4 w-4 stroke-emerald-500" />
												)}
											</span>
											<span
												className={cn("inline-block align-middle text-sm text-emerald-500", {
													"text-red-500": Math.sign(coin.percentChange24h) === -1,
												})}
											>
												{Math.abs(Number(formatNumber(coin.percentChange24h, "decimal", "standard", 2)))}%
											</span>
										</p>
									</div>
								</div>
								<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">7d</p>
										<p className={cn("inline-flex items-center font-bold")}>
											<span>
												{Math.sign(coin.percentChange7d) === -1 ? (
													<ChevronDown className="h-4 w-4 stroke-red-500" />
												) : (
													<ChevronUp className="h-4 w-4 stroke-emerald-500" />
												)}
											</span>
											<span
												className={cn("inline-block align-middle text-sm text-emerald-500", {
													"text-red-500": Math.sign(coin.percentChange7d) === -1,
												})}
											>
												{Math.abs(Number(formatNumber(coin.percentChange7d, "decimal", "standard", 2)))}%
											</span>
										</p>
									</div>
								</div>
								<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">30d</p>
										<p className={cn("inline-flex items-center font-bold")}>
											<span>
												{Math.sign(coin.percentChange30d) === -1 ? (
													<ChevronDown className="h-4 w-4 stroke-red-500" />
												) : (
													<ChevronUp className="h-4 w-4 stroke-emerald-500" />
												)}
											</span>
											<span
												className={cn("inline-block align-middle text-sm text-emerald-500", {
													"text-red-500": Math.sign(coin.percentChange30d) === -1,
												})}
											>
												{Math.abs(Number(formatNumber(coin.percentChange30d, "decimal", "standard", 2)))}%
											</span>
										</p>
									</div>
								</div>

								<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">90d</p>
										<p className={cn("inline-flex items-center font-bold")}>
											<span>
												{Math.sign(coin.percentChange90d) === -1 ? (
													<ChevronDown className="h-4 w-4 stroke-red-500" />
												) : (
													<ChevronUp className="h-4 w-4 stroke-emerald-500" />
												)}
											</span>
											<span
												className={cn("inline-block align-middle text-sm text-emerald-500", {
													"text-red-500": Math.sign(coin.percentChange90d) === -1,
												})}
											>
												{Math.abs(Number(formatNumber(coin.percentChange90d, "decimal", "standard", 2)))}%
											</span>
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
