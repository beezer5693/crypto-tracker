import { formatCurrency, formatNumber } from "@/lib/formatNums"
import { ChevronDown, ChevronUp, Flame, Clock, Newspaper, ChevronRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card"
import Image from "next/image"

type CardProps = {
	coins: any
	news: any
	promise: Promise<any>
}

export default async function Cards({ coins, news, promise }: CardProps) {
	const metaData = await promise

	return (
		<div className="-mb-[175px] grid grid-cols-1 gap-3.5 lg:grid-cols-3">
			<Card className="col-span-1 flex flex-col justify-between gap-8">
				<CardHeader>
					<CardTitle className="w-full space-x-3">
						<div className="inline-block rounded-md bg-emerald-400/30 p-1.5 align-middle dark:bg-emerald-800/50">
							<Flame className="h-5 w-5 stroke-emerald-500 dark:stroke-emerald-500" />
						</div>
						<span className="mt-0.5 inline-block align-middle text-neutral-800 dark:text-neutral-200">Trending</span>
					</CardTitle>
				</CardHeader>
				<CardContent className="ml-[10px]">
					<div className="flex flex-col justify-start gap-7">
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">1</div>
								<div className="flex items-center gap-2">
									<Image
										className="rounded-full"
										src={`${metaData.data[`${coins.data.BTC[0].id}`].logo}`}
										height={20}
										width={20}
										alt={coins.data.BTC[0].name}
									/>

									<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
										{coins.data.BTC[0].name}
									</div>

									<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{coins.data.BTC[0].symbol}</div>
								</div>
							</div>
							<div className="flex items-center">
								<div
									className={`flex items-center gap-0.5 text-[.8rem] font-bold ${
										Math.sign(coins.data.BTC[0].quote.USD.percent_change_24h) === -1
											? "text-red-500"
											: "text-emerald-500"
									}`}
								>
									{Math.sign(coins.data.BTC[0].quote.USD.percent_change_24h) === -1 ? (
										<ChevronDown className="h-4 w-4 text-red-500" />
									) : (
										<ChevronUp className="h-4 w-4 text-emerald-500" />
									)}
									{formatNumber(Math.abs(coins.data.BTC[0].quote.USD.percent_change_24h), "decimal", "standard", 2)}%
								</div>
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2.5">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">2</div>
								<div className="flex items-center gap-2">
									<Image
										className="rounded-full"
										src={`${metaData.data[`${coins.data.ETH[0].id}`].logo}`}
										height={20}
										width={20}
										alt={coins.data.ETH[0].name}
									/>

									<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
										{coins.data.ETH[0].name}
									</div>

									<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{coins.data.ETH[0].symbol}</div>
								</div>
							</div>
							<div className="flex items-center">
								<div
									className={`flex items-center gap-0.5 text-[.8rem] font-bold ${
										Math.sign(coins.data.ETH[0].quote.USD.percent_change_24h) === -1
											? "text-red-500"
											: "text-emerald-500"
									}`}
								>
									{Math.sign(coins.data.ETH[0].quote.USD.percent_change_24h) === -1 ? (
										<ChevronDown className="h-4 w-4 text-red-500" />
									) : (
										<ChevronUp className="h-4 w-4 text-emerald-500" />
									)}
									{formatNumber(Math.abs(coins.data.ETH[0].quote.USD.percent_change_24h), "decimal", "standard", 2)}%
								</div>
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2.5">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">3</div>
								<div className="flex items-center gap-2">
									<Image
										className="rounded-full"
										src={`${metaData.data[`${coins.data.SOL[0].id}`].logo}`}
										height={20}
										width={20}
										alt={coins.data.SOL[0].name}
									/>
									<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
										{coins.data.SOL[0].name}
									</div>
									<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{coins.data.SOL[0].symbol}</div>
								</div>
							</div>
							<div className="flex items-center">
								<div
									className={`flex items-center gap-0.5 text-[.8rem] font-bold ${
										Math.sign(coins.data.SOL[0].quote.USD.percent_change_24h) === -1
											? "text-red-500"
											: "text-emerald-500"
									}`}
								>
									{Math.sign(coins.data.SOL[0].quote.USD.percent_change_24h) === -1 ? (
										<ChevronDown className="h-4 w-4 text-red-500" />
									) : (
										<ChevronUp className="h-4 w-4 text-emerald-500" />
									)}
									{formatNumber(Math.abs(coins.data.SOL[0].quote.USD.percent_change_24h), "decimal", "standard", 2)}%
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card className="col-span-1 flex flex-col justify-between gap-8">
				<CardHeader>
					<CardTitle className="w-full space-x-3">
						<div className="inline-block rounded-md bg-emerald-400/30 p-1.5 align-middle dark:bg-emerald-800/50">
							<Clock className="h-5 w-5 stroke-emerald-500 dark:stroke-emerald-500" />
						</div>
						<span className="mt-0.5 inline-block align-middle text-neutral-800 dark:text-neutral-200">
							Recently Added
						</span>
					</CardTitle>
				</CardHeader>
				<CardContent className="ml-[10px]">
					<div className="flex flex-col gap-7">
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">1</div>
								<div className="flex items-center gap-2">
									<Image
										className="rounded-full"
										src={`${metaData.data[`${coins.data.ADA[0].id}`].logo}`}
										height={20}
										width={20}
										alt={coins.data.ADA[0].name}
									/>
									<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
										{coins.data.ADA[0].name}
									</div>
									<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{coins.data.ADA[0].symbol}</div>
								</div>
							</div>
							<div className="text-[.8rem] font-semibold text-neutral-800 dark:text-neutral-300">
								{formatCurrency(
									coins.data.ADA[0].quote.USD.price,
									"currency",
									"USD",
									"compact",
									coins.data.ADA[0].quote.USD.price < 1 ? 4 : 2
								)}
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2.5">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">2</div>
								<div className="flex items-center gap-2">
									<Image
										className="rounded-full"
										src={`${metaData.data[`${coins.data.DOGE[0].id}`].logo}`}
										height={20}
										width={20}
										alt={coins.data.DOGE[0].name}
									/>

									<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
										{coins.data.DOGE[0].name}
									</div>
									<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{coins.data.DOGE[0].symbol}</div>
								</div>
							</div>
							<div className="text-[.8rem] font-semibold text-neutral-800 dark:text-neutral-300">
								{formatCurrency(
									coins.data.DOGE[0].quote.USD.price,
									"currency",
									"USD",
									"compact",
									coins.data.DOGE[0].quote.USD.price < 1 ? 4 : 2
								)}
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2.5">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">3</div>
								<div className="flex items-center gap-2">
									<Image
										className="rounded-full"
										src={`${metaData.data[`${coins.data.XRP[0].id}`].logo}`}
										height={20}
										width={20}
										alt={coins.data.XRP[0].name}
									/>
									<div className="text-[.8rem] font-bold text-neutral-800 dark:text-neutral-300">
										{coins.data.XRP[0].name}
									</div>
									<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">{coins.data.XRP[0].symbol}</div>
								</div>
							</div>
							<div className="text-[.8rem] font-semibold text-neutral-800 dark:text-neutral-300">
								{formatCurrency(
									coins.data.XRP[0].quote.USD.price,
									"currency",
									"USD",
									"compact",
									coins.data.XRP[0].quote.USD.price < 1 ? 4 : 2
								)}
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card className="col-span-1 space-y-5">
				<CardHeader>
					<CardTitle className="w-full space-x-3">
						<div className="inline-block rounded-md bg-emerald-400/30 p-1.5 align-middle dark:bg-emerald-800/50">
							<Newspaper className="h-5 w-5 stroke-emerald-500 dark:stroke-emerald-500" />
						</div>
						<span className="mt-0.5 inline-block align-middle text-neutral-800 dark:text-neutral-200">Latest News</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					{/* {news.articles.slice(0, 1).map((article: any, i: number) => (
						<div key={i} className="flex items-start justify-around gap-4">
							<Image
								priority
								className="rounded dark:border dark:border-neutral-700/50"
								src={`/images/image${i + 1}.png`}
								height={150}
								width={150}
								alt="article image"
							/>
							<div className="flex flex-col justify-start space-y-2">
								<div className="flex items-center gap-2 self-start">
									<p className="rounded-full bg-neutral-200/50 px-2 py-0.5 text-[.6rem] font-medium text-neutral-800 dark:bg-neutral-700/50 dark:text-neutral-100">
										{article.source.name}
									</p>
									<p className="text-[.6rem]">
										{new Date(article.publishedAt.slice(0, 10).replaceAll("-", "/")).toLocaleDateString("en-US", {
											month: "long",
											day: "numeric",
										})}
									</p>
								</div>
								<p className="text-[.7rem] font-semibold text-neutral-800 antialiased dark:text-neutral-100">
									{article.title}
								</p>
								<Link className="cursor-pointer" target="_blank" href={article.url}>
									<div className="group flex items-center text-[.7rem] font-medium">
										<p className="text-emerald-600 transition duration-200 ease-out group-hover:text-neutral-800 dark:text-emerald-500 group-hover:dark:text-neutral-100">
											Read more
										</p>
										<ChevronRight className="h-3 w-3 stroke-emerald-600 transition-all ease-out group-hover:transition-x-1 group-hover:stroke-neutral-800 dark:stroke-emerald-500 group-hover:dark:stroke-neutral-100" />
									</div>
								</Link>
							</div>
						</div>
					))} */}
				</CardContent>
			</Card>
		</div>
	)
}
