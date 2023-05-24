"use client"

import { useState, useEffect } from "react"
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command"
import { Search as SearchIcon } from "lucide-react"
import { Button } from "../../ui/button"

export default function Search() {
	const [open, setOpen] = useState<boolean>(false)

	useEffect(() => {
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
					Search cryptos...
				</Button>
				<div className="absolute right-1.5 top-1/2 hidden h-5 -translate-y-1/2 items-center justify-center gap-[.2rem] rounded border border-neutral-300/90 bg-neutral-200/60 px-2 dark:border-neutral-700 dark:bg-[#303030] sm:flex">
					<span className="text-xs">⌘</span>
					<span className="text-xs">K</span>
				</div>
			</div>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup className="text-neutral-600" heading="Suggestions">
						<CommandItem>
							<span>Calendar</span>
						</CommandItem>
						<CommandItem>
							<span>Search Emoji</span>
						</CommandItem>
						<CommandItem>
							<span>Calculator</span>
						</CommandItem>
					</CommandGroup>
					<CommandGroup className="text-neutral-600" heading="Settings">
						<CommandItem>
							<span>Profile</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<span>Billing</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<span>Settings</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	)
}
