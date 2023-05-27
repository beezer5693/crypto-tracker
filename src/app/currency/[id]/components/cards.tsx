import WatchListButton from "@/components/misc/WatchListButton"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency, formatNumber } from "@/lib/formatNums"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, FileText, Github, Globe, Twitter } from "lucide-react"
import { TbBrandReddit } from "react-icons/tb"

type MetaData = {
	logo: string
	description: string
	website: string
	twitter: string
	reddit: string
	github: string
	whitepaper: string
}

type Coin = {
	name: string
	id: number
	symbol: string
	rank: number
	price: number
	dayPercentageChange: number
	marketCap: number
	volume: number
	circulatingSupply: number
	totalSupply: number
}

type Props = {
	currencyData: Promise<any>
	currencyMetaData: Promise<any>
	id: string
}

export default async function Cards({ currencyData, currencyMetaData, id }: Props) {
	const [coinData, coinMetaData] = await Promise.all([currencyData, currencyMetaData])

	const coin: Coin = {
		name: coinData.data[`${id}`].name,
		id: coinData.data[`${id}`].id,
		symbol: coinData.data[`${id}`].symbol,
		rank: coinData.data[`${id}`].cmc_rank,
		price: coinData.data[`${id}`].quote.USD.price,
		dayPercentageChange: coinData.data[`${id}`].quote.USD.percent_change_24h,
		marketCap: coinData.data[`${id}`].quote.USD.market_cap,
		volume: coinData.data[`${id}`].quote.USD.volume_24h,
		circulatingSupply: coinData.data[`${id}`].circulating_supply,
		totalSupply: coinData.data[`${id}`].total_supply,
	}

	const metaData: MetaData = {
		logo: coinMetaData.data[`${id}`].logo,
		description: coinMetaData.data[`${id}`].description,
		website: coinMetaData.data[`${id}`].urls.website[0],
		twitter: coinMetaData.data[`${id}`].urls.twitter[0],
		reddit: coinMetaData.data[`${id}`].urls.reddit[0],
		github: coinMetaData.data[`${id}`].urls.source_code[0],
		whitepaper: coinMetaData.data[`${id}`].urls.technical_doc[0],
	}

	return (
		<div className="flex w-full max-w-screen-lg flex-col gap-9 px-5 py-7">
			<Link className="group cursor-pointer space-x-1 self-start text-xs" href={"/"}>
				<ChevronLeft className="inline-block h-3 w-3 transform align-middle text-emerald-500 transition-all duration-300 ease-out group-hover:-translate-x-1 group-hover:text-neutral-800 group-hover:dark:text-neutral-100" />
				<span className="inline-block align-middle font-medium text-emerald-500 transition-all duration-300 ease-out group-hover:text-neutral-800 group-hover:dark:text-neutral-100">
					Back to Home
				</span>
			</Link>
			<div className="flex max-w-screen-lg flex-col justify-center gap-5 md:flex-row">
				<div className="flex flex-1 flex-col gap-5 self-start">
					<Card className="min-w-[380px]">
						<CardHeader>
							<CardTitle className="space-y-2">
								<div className="flex items-center justify-between">
									<div className="flex items-start">
										<div className="flex items-start gap-3">
											<Image className="rounded-full" src={metaData!.logo} height={35} width={35} alt="coin logo" />
											<div>
												<p className="space-x-2">
													<span className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
														{coin!.name}
													</span>
													<span className="text-neutral-800 dark:text-neutral-400">{coin!.symbol}</span>
												</p>
												<div className="flex items-center gap-2">
													<p className="text-neutral-800 dark:text-neutral-200">
														{formatCurrency(coin!.price, "currency", "USD", "standard", 2)}
													</p>

													<p className={cn("inline-flex items-center")}>
														<span>
															{Math.sign(coin!.dayPercentageChange) === -1 ? (
																<ChevronDown className="h-4 w-4 stroke-red-500" />
															) : (
																<ChevronUp className="h-4 w-4 stroke-emerald-500" />
															)}
														</span>
														<span
															className={cn("inline-block align-middle text-sm text-emerald-500", {
																"text-red-500": Math.sign(coin!.dayPercentageChange) === -1,
															})}
														>
															{Math.abs(Number(formatNumber(coin!.dayPercentageChange, "decimal", "standard", 2)))}%
														</span>
														<span
															className={cn("ml-1 inline-block align-middle text-sm text-emerald-500", {
																"text-red-500": Math.sign(coin!.dayPercentageChange) === -1,
															})}
														>
															(1d)
														</span>
													</p>
												</div>
											</div>
										</div>
									</div>
									<WatchListButton
										className={cn("h-4 w-4 self-start")}
										className2="h-4 w-4 self-start"
										coinId={Number(coin!.id)}
									/>
								</div>
							</CardTitle>
						</CardHeader>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>
								<span className="text-neutral-800 dark:text-neutral-200">About {coin!.name}</span>
							</CardTitle>
						</CardHeader>
						<CardContent className="mt-3">
							<div className="space-y-2">
								<p className="text-sm text-neutral-600 dark:text-neutral-400">{metaData!.description}</p>
							</div>
							<div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-3">
								{metaData?.website && (
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
								{metaData?.whitepaper && (
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
								{metaData?.github && (
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
								{metaData?.reddit && (
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
								{metaData?.twitter && (
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
				<Card className="min-w-[380px] flex-1 md:flex-none md:self-start">
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
										{formatNumber(coin!.rank, "decimal", "standard", 0)}
									</p>
								</div>
							</div>
							<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
							<div className="flex flex-col">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-600 dark:text-neutral-400">Market Cap</p>

									<p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
										{formatCurrency(coin!.marketCap, "currency", "USD", "compact", 1)}
									</p>
								</div>
							</div>
							<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
							<div className="flex flex-col">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-600 dark:text-neutral-400">24h volume</p>

									<p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
										{formatCurrency(coin!.volume, "currency", "USD", "compact", 1)}
									</p>
								</div>
							</div>
							<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
							<div className="flex flex-col">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-600 dark:text-neutral-400">Circulating supply</p>

									<p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
										{formatNumber(coin!.circulatingSupply, "decimal", "compact", 0)} {coin!.symbol}
									</p>
								</div>
							</div>

							<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
							<div className="flex flex-col">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-600 dark:text-neutral-400">Max supply</p>

									<p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
										{formatNumber(coin!.totalSupply, "decimal", "compact", 0)} {coin!.symbol}
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
