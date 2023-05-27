"use client"

import { ColumnDef } from "@tanstack/react-table"
import { formatNumber, formatCurrency } from "@/lib/formatNums"
import WatchListButton from "../misc/WatchListButton"
import Image from "next/image"
import Tooltip from "../ui/tooltip"
import { Progress } from "../ui/progress"
import { ChevronDown, ChevronUp } from "lucide-react"
import { BsInfoCircleFill } from "react-icons/bs"
import Link from "next/link"

export type Crypto = {
	id: string
	coinId: string
	icon?: string
	name: string
	symbol: string
	price: number
	marketCap: number
	volume: number
	hour: number
	day: number
	week: number
	circulatingSupply: number
	progress: number | null
	maxSupply: number
	isWatchlisted?: boolean
}

export const columns: ColumnDef<Crypto>[] = [
	{
		accessorKey: "icon",
		header: () => <div className="w-0 p-0"></div>,
		cell: () => <div className="w-0 p-0"></div>,
	},
	{
		accessorKey: "isWatchlisted",
		header: () => <div className="w-0"></div>,
		cell: () => <div className="w-0 p-0"></div>,
	},
	{
		accessorKey: "symbol",
		header: () => <div className="w-0"></div>,
		cell: () => <div className="w-0"></div>,
	},
	{
		accessorKey: "watchlist",
		header: () => <div className="w-0"></div>,
		cell: ({ row }) => {
			const { coinId, name } = row.original
			return <WatchListButton name={name} coinId={Number(coinId)} />
		},
	},
	{
		accessorKey: "id",
		header: ({ column }) => {
			return (
				<p className="mr-4 text-left">
					<span className="inline-block align-middle">
						{column.getIsSorted() === "desc" ? (
							<ChevronDown className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : column.getIsSorted() === "asc" ? (
							<ChevronUp className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : null}
					</span>
					<span
						onClick={() => column.toggleSorting()}
						className="inline-block cursor-pointer align-middle font-semibold text-neutral-800 dark:text-neutral-100"
					>
						#
					</span>
				</p>
			)
		},
		cell: ({ row }) => {
			const { id } = row.original
			return <p className="text-xs text-neutral-600 dark:text-neutral-400">{id}</p>
		},
	},
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<p className="text-left">
					<span className="inline-block align-middle">
						{column.getIsSorted() === "desc" ? (
							<ChevronDown className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : column.getIsSorted() === "asc" ? (
							<ChevronUp className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : null}
					</span>
					<span
						onClick={() => column.toggleSorting()}
						className="inline-block cursor-pointer align-middle font-semibold text-neutral-800 dark:text-neutral-100"
					>
						Name
					</span>
				</p>
			)
		},
		cell: ({ row }) => {
			const { name, symbol, icon, coinId } = row.original
			return (
				<p className="space-x-1.5 text-left">
					<span className="inline-block align-middle">
						{icon ? <Image className="rounded-full" src={icon} height={20} width={20} alt={name} /> : null}
					</span>
					<Link href={`/currency/${coinId}`}>
						<span className="inline-block align-middle font-semibold  text-neutral-800 dark:text-neutral-100">
							{name}
						</span>
					</Link>
					<span className="inline-block align-middle font-medium  text-neutral-500/90 dark:text-neutral-500">
						{symbol}
					</span>
				</p>
			)
		},
	},
	{
		accessorKey: "price",
		header: ({ column }) => {
			return (
				<p className="text-right">
					<span className="inline-block align-middle">
						{column.getIsSorted() === "desc" ? (
							<ChevronDown className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : column.getIsSorted() === "asc" ? (
							<ChevronUp className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : null}
					</span>
					<span
						onClick={() => column.toggleSorting()}
						className="inline-block cursor-pointer align-middle font-semibold text-neutral-800 dark:text-neutral-100"
					>
						Price
					</span>
				</p>
			)
		},
		cell: ({ row }) => {
			const price = parseFloat(row.getValue("price"))
			const formattedPrice = formatCurrency(price, "currency", "USD", "standard", price < 1 ? 4 : 2)
			return <p className="text-right font-medium text-neutral-800 dark:text-neutral-100">{formattedPrice}</p>
		},
	},
	{
		accessorKey: "hour",
		header: ({ column }) => {
			return (
				<p className="text-right">
					<span className="inline-block align-middle">
						{column.getIsSorted() === "desc" ? (
							<ChevronDown className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : column.getIsSorted() === "asc" ? (
							<ChevronUp className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : null}
					</span>
					<span
						onClick={() => column.toggleSorting()}
						className="inline-block cursor-pointer align-middle font-semibold text-neutral-800 dark:text-neutral-100"
					>
						1h %
					</span>
				</p>
			)
		},
		cell: ({ row }) => {
			const hour = parseFloat(row.getValue("hour"))
			const formattedHour = formatNumber(Math.abs(hour), "decimal", "standard", hour < 0 ? 3 : 2)
			return (
				<p className="space-x-1 text-right">
					<span className="inline-block align-middle">
						{Math.sign(hour) === -1 ? (
							<ChevronDown className="h-4 w-4 stroke-red-500" />
						) : (
							<ChevronUp className="h-4 w-4 stroke-emerald-500" />
						)}
					</span>
					<span
						className={`inline-block align-middle font-medium ${
							Math.sign(hour) === -1 ? "text-red-500" : "text-emerald-500"
						}`}
					>
						{formattedHour}%
					</span>
				</p>
			)
		},
	},
	{
		accessorKey: "day",
		header: ({ column }) => {
			return (
				<p className="text-right">
					<span className="inline-block align-middle">
						{column.getIsSorted() === "desc" ? (
							<ChevronDown className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : column.getIsSorted() === "asc" ? (
							<ChevronUp className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : null}
					</span>
					<span
						onClick={() => column.toggleSorting()}
						className="inline-block cursor-pointer align-middle font-semibold text-neutral-800 dark:text-neutral-100"
					>
						24h %
					</span>
				</p>
			)
		},
		cell: ({ row }) => {
			const day = parseFloat(row.getValue("day"))
			const formattedDay = formatNumber(Math.abs(day), "decimal", "standard", day < 0 ? 3 : 2)
			return (
				<p className="space-x-1 text-right">
					<span className="inline-block align-middle">
						{Math.sign(day) === -1 ? (
							<ChevronDown className="h-4 w-4 stroke-red-500" />
						) : (
							<ChevronUp className="h-4 w-4 stroke-emerald-500" />
						)}
					</span>
					<span className={`inline-block font-medium ${Math.sign(day) === -1 ? "text-red-500" : "text-emerald-500"}`}>
						{formattedDay}%
					</span>
				</p>
			)
		},
	},
	{
		accessorKey: "week",
		header: ({ column }) => {
			return (
				<p className="text-right">
					<span className="inline-block align-middle">
						{column.getIsSorted() === "desc" ? (
							<ChevronDown className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : column.getIsSorted() === "asc" ? (
							<ChevronUp className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : null}
					</span>
					<span
						onClick={() => column.toggleSorting()}
						className="inline-block cursor-pointer align-middle font-semibold text-neutral-800 dark:text-neutral-100"
					>
						7d %
					</span>
				</p>
			)
		},
		cell: ({ row }) => {
			const week = parseFloat(row.getValue("week"))
			const formattedWeek = formatNumber(Math.abs(week), "decimal", "standard", week < 0 ? 3 : 2)
			return (
				<p className="space-x-1 text-right">
					<span className="inline-block align-middle">
						{Math.sign(week) === -1 ? (
							<ChevronDown className="h-4 w-4 stroke-red-500" />
						) : (
							<ChevronUp className="h-4 w-4 stroke-emerald-500" />
						)}
					</span>
					<span className={`inline-block font-medium ${Math.sign(week) === -1 ? "text-red-500" : "text-emerald-500"}`}>
						{formattedWeek}%
					</span>
				</p>
			)
		},
	},
	{
		accessorKey: "marketCap",
		header: ({ column }) => {
			const marketCapText = (
				<div className="p-2">
					<p className="max-w-[18rem] text-xs text-neutral-800 dark:text-neutral-200">
						<span>
							{
								"The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market."
							}
						</span>
						<br />
						<br />
						<span>Market Cap = Current Price x Circulating Supply.</span>
					</p>
				</div>
			)
			return (
				<p className="text-right">
					<span className="inline-block align-middle">
						{column.getIsSorted() === "desc" ? (
							<ChevronDown className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : column.getIsSorted() === "asc" ? (
							<ChevronUp className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : null}
					</span>
					<span
						onClick={() => column.toggleSorting()}
						className="inline-block cursor-pointer align-middle font-semibold text-neutral-800 dark:text-neutral-100"
					>
						Market Cap
					</span>
					<Tooltip side="top" content={marketCapText}>
						<BsInfoCircleFill className="ml-1 inline-block h-[12.5px] w-[12.5px] fill-neutral-400/80 align-middle dark:fill-neutral-400" />
					</Tooltip>
				</p>
			)
		},
		cell: ({ row }) => {
			const marketCap = parseFloat(row.getValue("marketCap"))
			const formattedMarketCap = formatCurrency(marketCap, "currency", "USD", "standard", 0)
			return <div className="text-right font-medium text-neutral-800 dark:text-neutral-100">{formattedMarketCap}</div>
		},
	},
	{
		accessorKey: "volume",
		header: ({ column }) => {
			const volumeText = (
				<p className="max-w-[18rem] p-2 text-xs text-neutral-800 dark:text-neutral-200">
					A measure of how much of a cryptocurrency was traded in the last 24 hours.
				</p>
			)
			return (
				<p className="text-right">
					<span className="inline-block align-middle">
						{column.getIsSorted() === "desc" ? (
							<ChevronDown className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : column.getIsSorted() === "asc" ? (
							<ChevronUp className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : null}
					</span>
					<span
						onClick={() => column.toggleSorting()}
						className="inline-block cursor-pointer align-middle font-semibold text-neutral-800 dark:text-neutral-100"
					>
						Volume(24h)
					</span>
					<Tooltip side="top" content={volumeText}>
						<BsInfoCircleFill className="ml-1 inline-block h-[12.5px] w-[12.5px] fill-neutral-400/80 align-middle dark:fill-neutral-400" />
					</Tooltip>
				</p>
			)
		},
		cell: ({ row }) => {
			const volume = parseFloat(row.getValue("volume"))
			const price = parseFloat(row.getValue("price"))
			const { symbol } = row.original
			const formattedVolume = formatCurrency(volume, "currency", "USD", "standard", 0)
			return (
				<p className="text-right font-medium text-neutral-800 dark:text-neutral-200">
					<span className="block">{formattedVolume}</span>
					<span className="text-xs font-medium text-neutral-500 dark:text-neutral-500">
						{formatNumber(volume / price, "decimal", "standard", 0)} {symbol}
					</span>
				</p>
			)
		},
	},
	{
		accessorKey: "circulatingSupply",
		header: ({ column }) => {
			const circulatingSupplyText = (
				<p className="max-w-[18rem] p-2 text-xs text-neutral-800 dark:text-neutral-200">
					The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing
					shares in the stock market.
				</p>
			)
			return (
				<p className="text-right">
					<span className="inline-block align-middle">
						{column.getIsSorted() === "desc" ? (
							<ChevronDown className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : column.getIsSorted() === "asc" ? (
							<ChevronUp className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100" />
						) : null}
					</span>
					<span
						onClick={() => column.toggleSorting()}
						className="inline-block cursor-pointer align-middle font-semibold text-neutral-800 dark:text-neutral-100"
					>
						Circulating Supply
					</span>
					<Tooltip side="top" content={circulatingSupplyText}>
						<BsInfoCircleFill className="ml-1 inline-block h-[12.5px] w-[12.5px] fill-neutral-400/80 align-middle dark:fill-neutral-400" />
					</Tooltip>
				</p>
			)
		},
		cell: ({ row }) => {
			const circulatingSupply = parseFloat(row.getValue("circulatingSupply"))
			const { symbol, maxSupply } = row.original
			const progress = parseFloat(row.getValue("progress"))
			const formattedCirculatingSupply = formatNumber(circulatingSupply, "decimal", "standard", 0)
			const formattedProgress = formatNumber(progress, "decimal", "standard", 0)
			const formattedMaxSupply = formatNumber(maxSupply, "decimal", "standard", 0)

			const progressText = (
				<div className="flex flex-col gap-3 p-2">
					<div className="flex w-80 items-center justify-between">
						<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Percentage</p>
						<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">
							{formatNumber(progress, "decimal", "standard", 2)}%
						</p>
					</div>
					<Progress className="w-[85%]" value={Number(formattedProgress)} />
					<div className="flex flex-col">
						<div className="flex items-center justify-between">
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Circulating supply</p>
							<p className="space-x-1 text-xs font-medium text-neutral-800 dark:text-neutral-100">
								<span className="inline-block">{formattedCirculatingSupply}</span>
								<span className="inline-block">{symbol}</span>
							</p>
						</div>
						<div className="flex items-center justify-between">
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Max supply</p>
							<p className="space-x-1 text-xs font-medium text-neutral-800 dark:text-neutral-100">
								<span className="inline-block">{formattedMaxSupply}</span>
								<span className="inline-block">{symbol}</span>
							</p>
						</div>
					</div>
				</div>
			)

			return (
				<div className="flex flex-col items-end gap-1">
					<p className="space-x-1 text-right font-medium text-neutral-800 dark:text-neutral-100">
						<span className="inline">{formattedCirculatingSupply}</span>
						<span className="inline">{symbol}</span>
					</p>
					{!!progress && (
						<Tooltip asChild={true} side="bottom" content={progressText}>
							<Progress className="cursor-pointer" value={Number(formattedProgress)} />
						</Tooltip>
					)}
				</div>
			)
		},
	},
	{
		accessorKey: "progress",
		header: () => <div className="w-0 p-0"></div>,
		cell: ({ row }) => {
			return <div className="w-0 p-0"></div>
		},
	},
	{
		accessorKey: "empty",
		header: () => <div className="w-0"></div>,
		cell: ({ row }) => {
			return <div className="w-0"></div>
		},
	},
	{
		accessorKey: "maxSupply",
		header: () => <div className="w-0"></div>,
		cell: () => <div className="w-0 p-0"></div>,
	},
]
