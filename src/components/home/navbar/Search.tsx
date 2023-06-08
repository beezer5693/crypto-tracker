"use client"

import React from "react"
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command"
import { formatCurrency } from "@/lib/formatNums"
import { Search as SearchIcon } from "lucide-react"
import { BsArrowRightShort } from "react-icons/bs"
import { Button } from "../../ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

async function getCoinData() {
	const res = await fetch("/api/crypto/latest")

	return res.json()
}

export default function Search() {
	const [open, setOpen] = React.useState<boolean>(false)
	const [coinList, setCoinList] = React.useState<any>({})

	React.useEffect(() => {
		async function handleCoinList() {
			const coinList = await getCoinData()
			setCoinList(coinList)
		}

		handleCoinList()
	}, [])

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && e.metaKey) {
				setOpen(open => !open)
			}
		}
		document.addEventListener("keydown", down)
		return () => document.removeEventListener("keydown", down)
	}, [])

	return (
		<>
			<div className="cursor-pointer" onClick={() => setOpen(true)}>
				<SearchIcon size={20} className="stroke-neutral-800 dark:stroke-neutral-100 sm:hidden" />
			</div>
			<Button
				onClick={() => setOpen(true)}
				className="relative hidden h-8 w-full max-w-sm justify-start border bg-neutral-200/20 px-9 text-xs text-neutral-500 transition duration-300 ease-out hover:bg-neutral-200/40 hover:text-neutral-800 dark:border-neutral-700/60 dark:bg-neutral-800/10  dark:text-neutral-400 dark:hover:bg-neutral-700/30 dark:hover:text-neutral-200 sm:inline-flex"
			>
				<span>Search</span>
				<SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 stroke-neutral-500 dark:stroke-neutral-400" />
				<div className="absolute right-1.5 top-1/2 hidden h-5 -translate-y-1/2 items-center justify-center gap-[.2rem] rounded border border-neutral-300/90 bg-neutral-200/60 px-2 dark:border-neutral-700 dark:bg-[#303030] sm:flex">
					<span className="text-xs">⌘</span>
					<span className="text-xs">K</span>
				</div>
			</Button>
			{!!coinList?.data?.length && (
				<CommandDialog open={open} onOpenChange={setOpen}>
					<CommandInput placeholder="Search cryptocurrencies..." />
					<CommandList>
						<CommandEmpty>
							<p>No results found.</p>
						</CommandEmpty>
						<CommandGroup className="text-neutral-600" heading="Suggestions">
							<Link href={`/currency/${coinList.data[0].id}`}>
								<CommandItem className="cursor-pointer space-x-1.5">
									<BsArrowRightShort className="stroke-neutral-600 dark:stroke-neutral-400" />
									<span>{coinList.data[0].name}</span>
									<span className="text-neutral-600 dark:text-neutral-400">{coinList.data[0].symbol}</span>
									<span
										className={cn({
											"text-red-500": Math.sign(coinList.data[0].quote.USD.percent_change_24h) === -1,
											"text-emerald-500": Math.sign(coinList.data[0].quote.USD.percent_change_24h) === 1,
										})}
									>
										{formatCurrency(
											coinList.data[0].quote.USD.price,
											"currency",
											"USD",
											"standard",
											coinList.data[0].quote.USD.price >= 1
												? 2
												: coinList.data[0].quote.USD.price >= 0.1
												? 4
												: coinList.data[0].quote.USD.price >= 0.01
												? 6
												: 8
										)}
									</span>
								</CommandItem>
							</Link>
							<Link href={`/currency/${coinList.data[1].id}`}>
								<CommandItem className="cursor-pointer space-x-1.5">
									<BsArrowRightShort className="stroke-neutral-600 dark:stroke-neutral-400" />
									<span>{coinList.data[1].name}</span>
									<span className="text-neutral-600 dark:text-neutral-400">{coinList.data[1].symbol}</span>
									<span
										className={cn({
											"text-red-500": Math.sign(coinList.data[1].quote.USD.percent_change_24h) === -1,
											"text-emerald-500": Math.sign(coinList.data[1].quote.USD.percent_change_24h) === 1,
										})}
									>
										{formatCurrency(
											coinList.data[1].quote.USD.price,
											"currency",
											"USD",
											"standard",
											coinList.data[1].quote.USD.price >= 1
												? 2
												: coinList.data[1].quote.USD.price >= 0.1
												? 4
												: coinList.data[1].quote.USD.price >= 0.01
												? 6
												: 8
										)}
									</span>
								</CommandItem>
							</Link>
						</CommandGroup>
						{
							<CommandGroup className="text-neutral-600" heading="All cryptocurrencies">
								{coinList.data.map((coin: Coin) => (
									<Link key={coin.id} href={`/currency/${coin.id}`}>
										<CommandItem className="cursor-pointer space-x-1.5">
											<span>{coin.name}</span>
											<span className="text-neutral-600 dark:text-neutral-400">{coin.symbol}</span>
											<span
												className={cn({
													"text-red-500": Math.sign(coin.quote.USD.percent_change_24h) === -1,
													"text-emerald-500": Math.sign(coin.quote.USD.percent_change_24h) === 1,
												})}
											>
												{formatCurrency(
													coin.quote.USD.price,
													"currency",
													"USD",
													"standard",
													coin.quote.USD.price >= 1
														? 2
														: coin.quote.USD.price >= 0.1
														? 4
														: coin.quote.USD.price >= 0.01
														? 6
														: 8
												)}
											</span>
										</CommandItem>
									</Link>
								))}
							</CommandGroup>
						}
					</CommandList>
				</CommandDialog>
			)}
		</>
	)
}
