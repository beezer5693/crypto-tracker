import { formatCurrency, formatNumber } from "@/lib/formatNums"
import { cn } from "@/lib/utils"
import Link from "next/link"

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

export default function Description({ coin, metaData }: { coin: Coin; metaData: MetaData }) {
	// Bitcoin has its own unique description
	const bitcoinDescription = (
		<>
			{coin.name} ({coin.symbol}) is a cryptocurrency launched in {metaData.launchDate}. Users are able to generate{" "}
			{coin.symbol} through the process of mining. {coin.name} has a current supply of{" "}
			{formatNumber(coin.circulatingSupply, "decimal", "standard", 0)} {coin.symbol} in circulation. The last known
			price of {coin.name} is{" "}
			{formatCurrency(
				coin.price,
				"currency",
				"USD",
				"standard",
				coin.price >= 1 ? 2 : coin.price >= 0.1 ? 4 : coin.price >= 0.01 ? 6 : 8
			)}{" "}
			USD and {Math.sign(coin.percentChange24h) === -1 ? "down" : "up"}{" "}
			<span
				className={cn({
					"text-red-500": Math.sign(coin.percentChange24h) === -1,
					"text-emerald-500": Math.sign(coin.percentChange24h) === 1,
				})}
			>
				{Math.abs(Number(formatNumber(coin.percentChange24h, "decimal", "standard", 2)))}%
			</span>{" "}
			over the last 24 hours. It is currently trading on{" "}
			{formatNumber(coin.activeMarketPairs, "decimal", "standard", 0)} active market(s) with{" "}
			{formatCurrency(
				coin.volume,
				"currency",
				"USD",
				"standard",
				coin.volume >= 1 ? 2 : coin.volume >= 0.1 ? 4 : coin.volume >= 0.01 ? 6 : 8
			)}{" "}
			traded over the last 24 hours. More information can be found at{" "}
			{metaData.website && (
				<Link
					className="underline transition duration-200 ease-out hover:text-neutral-800 hover:dark:text-neutral-200"
					href={metaData.website}
					target="_blank"
				>
					{metaData.website}
				</Link>
			)}
			.
		</>
	)

	// Adjust text for alt coins as there are 3 versions of the
	// description depending on the data available
	const altCoinDescription = (
		<>
			{coin.name} ({coin.symbol}) is a cryptocurrency
			{metaData.launchDate
				? ` launched in ${metaData.launchDate}${
						!coin.platform ? "." : ` and operates on the ${coin.platform.name} platform.`
				  } `
				: coin.platform
				? ` and operates on the ${coin.platform.name} platform.`
				: "."}{" "}
			{coin.name} has a current supply of {formatNumber(coin.circulatingSupply, "decimal", "standard", 0)} {coin.symbol}{" "}
			in circulation. The last known price of {coin.name} is{" "}
			{formatCurrency(
				coin.price,
				"currency",
				"USD",
				"standard",
				coin.price >= 1 ? 2 : coin.price >= 0.1 ? 4 : coin.price >= 0.01 ? 6 : 8
			)}{" "}
			USD and {Math.sign(coin.percentChange24h) === -1 ? "down" : "up"}{" "}
			<span
				className={cn({
					"text-red-500": Math.sign(coin.percentChange24h) === -1,
					"text-emerald-500": Math.sign(coin.percentChange24h) === 1,
				})}
			>
				{Math.abs(Number(formatNumber(coin.percentChange24h, "decimal", "standard", 2)))}%
			</span>{" "}
			over the last 24 hours. It is currently trading on{" "}
			{formatNumber(coin.activeMarketPairs, "decimal", "standard", 0)} active market(s) with{" "}
			{formatCurrency(
				coin.volume,
				"currency",
				"USD",
				"standard",
				coin.volume >= 1 ? 2 : coin.volume >= 0.1 ? 4 : coin.volume >= 0.01 ? 6 : 8
			)}{" "}
			traded over the last 24 hours. More information can be found at{" "}
			<Link
				className="underline transition duration-200 ease-out hover:text-neutral-800 hover:dark:text-neutral-200"
				href={metaData.website}
				target="_blank"
			>
				{metaData.website}
			</Link>
			.
		</>
	)
	return coin.id === 1 ? bitcoinDescription : altCoinDescription
}
