"use client"

import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { useQuoteLatest } from "@/hooks/useFetch"
import { getMetaData } from "@/lib/getMetaData"
import { formatCurrency, formatNumber } from "@/lib/formatNums"
import { ChevronDown, ChevronUp, Flame, Clock, Newspaper, ChevronRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"
import Link from "next/link"

function getNews() {
	return axios.get("https://newsapi.org/v2/everything?q=cryptocurrency", {
		headers: {
			"X-Api-Key": process.env.NEXT_PUBLIC_NEWS_API_KEY as string,
		},
	})
}

export default function HeroCards() {
	const { data, isLoading } = useQuoteLatest("BTC", "ETH", "SOL", "ADA", "XRP", "DOGE", "AVAX", "XMR", "DOT")
	const { data: news, isLoading: newsLoading } = useQuery(["news"], getNews)
	const { data: metaData, isLoading: metaDataLoading } = useQuery(
		["metaData", data],
		() =>
			getMetaData(
				Object.values(data?.data)
					.flat()
					.map((item: any) => item.id)
			),
		{
			enabled: !!data,
		}
	)

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
									{metaDataLoading || isLoading ? (
										<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									) : metaData ? (
										<Image
											className="rounded-full"
											src={`${Object.values(metaData?.data.data)
												.flat()
												.map((item: any) => {
													if (item.id === data.data.BTC[0].id) {
														return item.logo
													}
												})
												.join("")}`}
											height={20}
											width={20}
											alt={data.data.BTC[0].name}
										/>
									) : (
										<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									)}
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
										className={`flex items-center gap-0.5 text-[.8rem] font-bold ${
											Math.sign(data.data.BTC[0].quote.USD.percent_change_24h) === -1
												? "text-red-500"
												: "text-emerald-500"
										}`}
									>
										{Math.sign(data.data.BTC[0].quote.USD.percent_change_24h) === -1 ? (
											<ChevronDown className="h-4 w-4 text-red-500" />
										) : (
											<ChevronUp className="h-4 w-4 text-emerald-500" />
										)}
										{formatNumber(Math.abs(data.data.BTC[0].quote.USD.percent_change_24h), "decimal", "standard", 2)}%
									</div>
								) : null}
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2.5">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">2</div>
								<div className="flex items-center gap-2">
									{metaDataLoading || isLoading ? (
										<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									) : metaData ? (
										<Image
											className="rounded-full"
											src={`${Object.values(metaData?.data.data)
												.flat()
												.map((item: any) => {
													if (item.id === data.data.ETH[0].id) {
														return item.logo
													}
												})
												.join("")}`}
											height={20}
											width={20}
											alt={data.data.ETH[0].name}
										/>
									) : (
										<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									)}
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
										className={`flex items-center gap-0.5 text-[.8rem] font-bold ${
											Math.sign(data.data.ETH[0].quote.USD.percent_change_24h) === -1
												? "text-red-500"
												: "text-emerald-500"
										}`}
									>
										{Math.sign(data.data.ETH[0].quote.USD.percent_change_24h) === -1 ? (
											<ChevronDown className="h-4 w-4 text-red-500" />
										) : (
											<ChevronUp className="h-4 w-4 text-emerald-500" />
										)}
										{formatNumber(Math.abs(data.data.ETH[0].quote.USD.percent_change_24h), "decimal", "standard", 2)}%
									</div>
								) : null}
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2.5">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">3</div>
								<div className="flex items-center gap-2">
									{metaDataLoading || isLoading ? (
										<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									) : metaData ? (
										<Image
											className="rounded-full"
											src={`${Object.values(metaData?.data.data)
												.flat()
												.map((item: any) => {
													if (item.id === data.data.SOL[0].id) {
														return item.logo
													}
												})
												.join("")}`}
											height={20}
											width={20}
											alt={data.data.SOL[0].name}
										/>
									) : (
										<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									)}
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
										className={`flex items-center gap-0.5 text-[.8rem] font-bold ${
											Math.sign(data.data.SOL[0].quote.USD.percent_change_24h) === -1
												? "text-red-500"
												: "text-emerald-500"
										}`}
									>
										{Math.sign(data.data.SOL[0].quote.USD.percent_change_24h) === -1 ? (
											<ChevronDown className="h-4 w-4 text-red-500" />
										) : (
											<ChevronUp className="h-4 w-4 text-emerald-500" />
										)}
										{formatNumber(Math.abs(data.data.SOL[0].quote.USD.percent_change_24h), "decimal", "standard", 2)}%
									</div>
								) : null}
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
									{metaDataLoading || isLoading ? (
										<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									) : metaData ? (
										<Image
											className="rounded-full"
											src={`${Object.values(metaData?.data.data)
												.flat()
												.map((item: any) => {
													if (item.id === data.data.ADA[0].id) {
														return item.logo
													}
												})
												.join("")}`}
											height={20}
											width={20}
											alt={data.data.ADA[0].name}
										/>
									) : (
										<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									)}
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
							<div className="flex items-center gap-2.5">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">2</div>
								<div className="flex items-center gap-2">
									{metaDataLoading || isLoading ? (
										<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									) : metaData ? (
										<Image
											className="rounded-full"
											src={`${Object.values(metaData?.data.data)
												.flat()
												.map((item: any) => {
													if (item.id === data.data.DOGE[0].id) {
														return item.logo
													}
												})
												.join("")}`}
											height={20}
											width={20}
											alt={data.data.DOGE[0].name}
										/>
									) : (
										<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									)}
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
							<div className="flex items-center gap-2.5">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">3</div>
								<div className="flex items-center gap-2">
									{metaDataLoading || isLoading ? (
										<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									) : metaData ? (
										<Image
											className="rounded-full"
											src={`${Object.values(metaData?.data.data)
												.flat()
												.map((item: any) => {
													if (item.id === data.data.XRP[0].id) {
														return item.logo
													}
												})
												.join("")}`}
											height={20}
											width={20}
											alt={data.data.XRP[0].name}
										/>
									) : (
										<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									)}
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
					<CardTitle className="w-full space-x-3">
						<div className="inline-block rounded-md bg-emerald-400/30 p-1.5 align-middle dark:bg-emerald-800/50">
							<Newspaper className="h-5 w-5 stroke-emerald-500 dark:stroke-emerald-500" />
						</div>
						<span className="mt-0.5 inline-block align-middle text-neutral-800 dark:text-neutral-200">Latest News</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					{newsLoading ? (
						<div className="flex items-start gap-4">
							<Skeleton className="h-[100px] w-[150px] bg-neutral-200 dark:bg-neutral-700/50" />
							<div className="flex flex-col justify-start space-y-2">
								<div className="flex items-center gap-2 self-start">
									<Skeleton className="h-[15px] w-[60px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-[15px] w-[35px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
								<div className="space-y-1">
									<Skeleton className="h-[15px] w-[200px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-[15px] w-[200px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
								<Skeleton className="h-[15px] w-[70px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
							</div>
						</div>
					) : news ? (
						news.data.articles.slice(0, 1).map((article: any, i: number) => (
							<div key={i} className="flex items-start justify-around gap-4">
								<Image
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
										<div className="group text-[.7rem] font-medium">
											<p className="inline-block align-middle text-emerald-600 transition duration-200 ease-out group-hover:text-neutral-800 dark:text-emerald-500 group-hover:dark:text-neutral-100">
												Read more
											</p>
											<ChevronRight className="inline-block h-3 w-3 stroke-emerald-600 align-middle transition-all ease-out group-hover:ml-0.5 group-hover:stroke-neutral-800 dark:stroke-emerald-500 group-hover:dark:stroke-neutral-100" />
										</div>
									</Link>
								</div>
							</div>
						))
					) : null}
				</CardContent>
			</Card>
		</div>
	)
}
