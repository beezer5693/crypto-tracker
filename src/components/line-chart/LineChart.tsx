"use client"

import React from "react"
import ChartLoading from "./loading"
import { useQuery } from "@tanstack/react-query"
import { Line } from "react-chartjs-2"
import { useTheme } from "next-themes"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	TimeScale,
} from "chart.js"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import type { ChartData, ChartOptions } from "chart.js"
import { formatCurrency } from "@/lib/formatNums"
import { cn } from "@/lib/utils"
ChartJS.register(CategoryScale, TimeScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

type LineProps = {
	options: ChartOptions<"line">
	data: ChartData<"line">
}

type LineChartProps = {
	id: string
}

async function getHistoricalData(id: string, interval: string, count: number) {
	const res = await fetch(`/api/crypto/historical?id=${id}&interval=${interval}&count=${count}&skip_invalid=true`)
	return res.json()
}

export default function LineChart({ id }: LineChartProps) {
	const [chart, setChart] = React.useState<ChartData<"line">>({
		labels: [],
		datasets: [
			{
				data: [],
				yAxisID: "left-y-axis",
			},
		],
	})
	const [mounted, setMounted] = React.useState(false)
	const [buttonActive, setButtonActive] = React.useState<number>(1)
	const [chartLoading, setChartLoading] = React.useState<boolean>(false)
	const [chartDates, setChartDates] = React.useState<string>("")

	const { theme } = useTheme()

	const {
		data: historicalQuotes,
		isLoading,
		isFetching,
		isError,
	} = useQuery({
		queryKey: ["historicalData", id],
		queryFn: () => getHistoricalData(id, "5m", 288),
	})

	React.useEffect(() => {
		if (historicalQuotes?.data) {
			setChart({
				labels: [...historicalQuotes?.data?.quotes.map((item: any) => item.timestamp)],
				datasets: [
					{
						data: [...historicalQuotes?.data?.quotes.map((item: any) => item.quote.USD.price)],
						borderColor:
							historicalQuotes.data.quotes[0].quote.USD.price >
							historicalQuotes.data.quotes[historicalQuotes.data.quotes.length - 1].quote.USD.price
								? "#ef4444"
								: "#10b981",
						yAxisID: "right-y-axis",
					},
				],
			})
		}
		setChartDates(
			`${new Date(historicalQuotes?.data?.quotes[0]?.timestamp).toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric",
			})} - ${new Date(
				historicalQuotes?.data?.quotes[historicalQuotes?.data.quotes.length - 1]?.timestamp
			).toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric",
			})}`
		)
	}, [historicalQuotes, id])

	function handleChartPriceChange(coinId: string, interval: string, count: number, days: number) {
		setChartLoading(true)
		fetch(`/api/crypto/historical?id=${coinId}&interval=${interval}&count=${count}`)
			.then(res => res.json())
			.then(historicalQuotes => {
				setButtonActive(days)
				setChart({
					labels: [...historicalQuotes.data.quotes.map((item: any) => item.timestamp)],
					datasets: [
						{
							data: [...historicalQuotes.data.quotes.map((item: any) => item.quote.USD.price)],
							borderColor:
								historicalQuotes.data.quotes[0].quote.USD.price >
								historicalQuotes.data.quotes[historicalQuotes.data.quotes.length - 1].quote.USD.price
									? "#ef4444"
									: "#10b981",
							yAxisID: "right-y-axis",
						},
					],
				})
				setChartDates(
					`${new Date(historicalQuotes?.data.quotes[0].timestamp).toLocaleDateString("en-US", {
						month: "long",
						day: "numeric",
						year: "numeric",
					})} - ${new Date(
						historicalQuotes?.data.quotes[historicalQuotes?.data.quotes.length - 1].timestamp
					).toLocaleDateString("en-US", {
						month: "long",
						day: "numeric",
						year: "numeric",
					})}`
				)
				setChartLoading(false)
			})
			.catch(err => {
				console.log(err)
				setChartLoading(false)
			})
	}

	const options: ChartOptions<"line"> = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
				intersect: false,
				displayColors: false,
				titleMarginBottom: 0,
				padding: 8,
				titleColor: theme === "dark" ? "#f5f5f5" : "#262626",
				bodyColor: theme === "dark" ? "#a3a3a3" : "#f5f5f5",
				backgroundColor: theme === "dark" ? "#404040" : "#f5f5f5",
				borderWidth: 1,
				cornerRadius: 4,
				yAlign: "bottom" as any,
				callbacks: {
					title: function (context: any) {
						return formatCurrency(
							context[0].raw,
							"currency",
							"USD",
							"standard",
							context[0].raw >= 1 ? 2 : context[0].raw >= 0.1 ? 4 : context[0].raw >= 0.01 ? 6 : 8
						)
					},
					label: function (context: any) {
						return ""
					},
				},
			},
		},
		elements: {
			line: {
				tension: 0,
				borderWidth: 2,
				fill: "start",
				backgroundColor: (context: any) => {
					const gradientsEmerald = ["#10b98140", "#10b98130", "#10b98115", "#10b98110", "#10b98100"]
					const gradientsRed = ["#ef444440", "#ef444430", "#ef444415", "#ef444410", "#ef444400"]

					if (!context.chart.chartArea) return

					const {
						ctx,
						chartArea: { top, bottom },
					} = context.chart
					const gradientGreen = ctx.createLinearGradient(0, top, 0, bottom)
					gradientGreen.addColorStop(0, gradientsEmerald[0])
					gradientGreen.addColorStop(0.25, gradientsEmerald[1])
					gradientGreen.addColorStop(0.5, gradientsEmerald[2])
					gradientGreen.addColorStop(0.75, gradientsEmerald[3])
					gradientGreen.addColorStop(1, gradientsEmerald[4])

					const gradientRed = ctx.createLinearGradient(0, top, 0, bottom)
					gradientRed.addColorStop(0, gradientsRed[0])
					gradientRed.addColorStop(0.25, gradientsRed[1])
					gradientRed.addColorStop(0.5, gradientsRed[2])
					gradientRed.addColorStop(0.75, gradientsRed[3])
					gradientRed.addColorStop(1, gradientsRed[4])

					if (chart?.datasets[0]?.data[0]! > chart?.datasets[0]?.data[chart.datasets[0].data.length - 1]!) {
						return gradientRed
					} else {
						return gradientGreen
					}
				},
			},
			point: {
				radius: 0,
				hitRadius: 0,
			},
		},
		scales: {
			x: {
				display: false,
			},
			"right-y-axis": {
				display: true,
				position: "right" as any,
				border: {
					color: theme === "dark" ? "#40404015" : "#e5e5e560",
				},
				grid: {
					drawTicks: false,
					color: theme === "dark" ? "#40404015" : "#e5e5e560",
				},
				ticks: {
					padding: 8,
					color: theme === "dark" ? "#a3a3a3" : "#737373",
					font: {
						size: 10.5,
					},
					callback: function (value: any) {
						return value.toLocaleString("en-US", {
							style: "decimal",
							notation: "compact",
							minimumFractionDigits: value >= 1 ? 2 : value >= 0.1 ? 4 : value >= 0.01 ? 6 : 8,
						})
					},
				},
			},
		},
	}

	React.useEffect(() => setMounted(true), [])

	if (!mounted || isLoading || isFetching || chartLoading) return <ChartLoading buttonActive={buttonActive} />

	return (
		<div className="w-full">
			<CardHeader>
				<CardTitle className="flex items-center justify-between">
					<div className="space-x-2">
						<span className="inline-flex max-w-[100px] text-xs text-neutral-500 dark:text-neutral-400 sm:max-w-none">
							{chartDates}
						</span>
					</div>
					<div className="flex items-center gap-2 rounded-md border border-neutral-200/60 p-1 dark:border-neutral-700/50">
						<div
							onClick={() => handleChartPriceChange(id, "5m", 288, 1)}
							className={cn(
								"flex h-7 w-9 cursor-pointer items-center justify-center rounded border-transparent text-xs font-semibold text-neutral-800 transition duration-200  ease-out hover:bg-neutral-200/60 dark:text-neutral-100  dark:hover:bg-neutral-700/50",
								{
									"border border-neutral-300/50 bg-neutral-200/50 hover:bg-neutral-200/50 dark:border-neutral-600/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/50":
										buttonActive === 1,
								}
							)}
						>
							1D
						</div>
						<div
							onClick={() => handleChartPriceChange(id, "30m", 336, 7)}
							className={cn(
								"flex h-7 w-9 cursor-pointer items-center justify-center rounded border-transparent text-xs font-semibold text-neutral-800 transition duration-200  ease-out hover:bg-neutral-200/60 dark:text-neutral-100  dark:hover:bg-neutral-700/50",
								{
									"border border-neutral-300/50 bg-neutral-200/50 hover:bg-neutral-200/50 dark:border-neutral-600/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/50":
										buttonActive === 7,
								}
							)}
						>
							7D
						</div>
						<div
							onClick={() => handleChartPriceChange(id, "1h", 720, 30)}
							className={cn(
								"flex h-7 w-9 cursor-pointer items-center justify-center rounded border-transparent text-xs font-semibold text-neutral-800 transition duration-200  ease-out hover:bg-neutral-200/60 dark:text-neutral-100  dark:hover:bg-neutral-700/50",
								{
									"border border-neutral-300/50 bg-neutral-200/50 hover:bg-neutral-200/50 dark:border-neutral-600/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/50":
										buttonActive === 30,
								}
							)}
						>
							1M
						</div>
						<div
							onClick={() => handleChartPriceChange(id, "24h", 60, 60)}
							className={cn(
								"flex h-7 w-9 cursor-pointer items-center justify-center rounded border-transparent text-xs font-semibold text-neutral-800 transition duration-200  ease-out hover:bg-neutral-200/60 dark:text-neutral-100  dark:hover:bg-neutral-700/50",
								{
									"border border-neutral-300/50 bg-neutral-200/50 hover:bg-neutral-200/50 dark:border-neutral-600/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/50":
										buttonActive === 60,
								}
							)}
						>
							60D
						</div>
						<div
							onClick={() => handleChartPriceChange(id, "24h", 90, 90)}
							className={cn(
								"flex h-7 w-9 cursor-pointer items-center justify-center rounded border-transparent text-xs font-semibold text-neutral-800 transition duration-200  ease-out hover:bg-neutral-200/60 dark:text-neutral-100  dark:hover:bg-neutral-700/50",
								{
									"border border-neutral-300/50 bg-neutral-200/50 hover:bg-neutral-200/50 dark:border-neutral-600/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/50":
										buttonActive === 90,
								}
							)}
						>
							90D
						</div>
						<div
							onClick={() => handleChartPriceChange(id, "24h", 365, 365)}
							className={cn(
								"flex h-7 w-9 cursor-pointer items-center justify-center rounded border-transparent text-xs font-semibold text-neutral-800 transition duration-200  ease-out hover:bg-neutral-200/60 dark:text-neutral-100  dark:hover:bg-neutral-700/50",
								{
									"border border-neutral-300/50 bg-neutral-200/50 hover:bg-neutral-200/50 dark:border-neutral-600/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/50":
										buttonActive === 365,
								}
							)}
						>
							1Y
						</div>
					</div>
				</CardTitle>
			</CardHeader>
			<CardContent className="mt-3">
				<div className="relative flex h-[225px] w-full flex-1 items-center justify-start sm:h-[300px] xl:h-[400px]">
					<Line data={chart} width={100} height={60} options={{ ...options, maintainAspectRatio: false }} />
				</div>
			</CardContent>
		</div>
	)
}
