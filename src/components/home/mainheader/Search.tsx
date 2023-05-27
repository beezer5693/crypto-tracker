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
import { Search as SearchIcon } from "lucide-react"
import { Button } from "../../ui/button"
import { useLatest } from "@/hooks/useLatest"
import Link from "next/link"

export default function Search() {
	const [open, setOpen] = React.useState<boolean>(false)

	const { data: crypto, isLoading } = useLatest()

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
			<div className="relative w-80">
				<SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 stroke-neutral-500 dark:stroke-neutral-400" />
				<Button
					onClick={() => setOpen(true)}
					className="h-8 w-full justify-start border bg-neutral-200/20 px-9 text-xs text-neutral-500 transition duration-300 ease-out hover:bg-neutral-200/40 hover:text-neutral-800  dark:border-neutral-700/60 dark:bg-neutral-800/80 dark:text-neutral-400 dark:hover:bg-neutral-600/30 dark:hover:text-neutral-200"
				>
					Search currencies, coins...
				</Button>
				<div className="absolute right-1.5 top-1/2 hidden h-5 -translate-y-1/2 items-center justify-center gap-[.2rem] rounded border border-neutral-300/90 bg-neutral-200/60 px-2 dark:border-neutral-700 dark:bg-[#303030] sm:flex">
					<span className="text-xs">⌘</span>
					<span className="text-xs">K</span>
				</div>
			</div>
			{crypto && (
				<CommandDialog open={open} onOpenChange={setOpen}>
					<CommandInput placeholder="Search the top 100 cryptocurrencies..." />
					<CommandList>
						<CommandEmpty>
							<p>No results found.</p>
						</CommandEmpty>
						<CommandGroup className="text-neutral-600" heading="Suggestions">
							<Link href={`/currency/${crypto?.data[0].id}`}>
								<CommandItem className="cursor-pointer space-x-1.5">
									<span>{crypto?.data && crypto.data[0].name}</span>
									<span className="text-neutral-600 dark:text-neutral-400">
										{crypto?.data && crypto.data[0].symbol}
									</span>
								</CommandItem>
							</Link>
							<Link href={`/currency/${crypto?.data[1].id}`}>
								<CommandItem className="cursor-pointer space-x-1.5">
									<span>{crypto?.data && crypto.data[1].name}</span>
									<span className="text-neutral-600 dark:text-neutral-400">
										{crypto?.data && crypto.data[1].symbol}
									</span>
								</CommandItem>
							</Link>
						</CommandGroup>
						{
							<CommandGroup className="text-neutral-600" heading="All cryptocurrencies">
								{crypto?.data.map((coin: Coin) => (
									<Link key={coin.id} href={`/currency/${coin.id}`}>
										<CommandItem className="cursor-pointer space-x-1.5">
											<span>{coin.name}</span>
											<span className="text-neutral-600 dark:text-neutral-400">{coin.symbol}</span>
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
