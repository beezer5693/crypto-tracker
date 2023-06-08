"use client"

import React from "react"
import Logo from "../../misc/Logo"
import Search from "./Search"
import MobileNavMenu from "./MobileNavMenu"
import NavMenu from "./NavMenu"
import WatchListButton from "./WatchlistButton"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu } from "lucide-react"

export default function Navbar() {
	const [dropDownMenuOpen, setDropDownMenuOpen] = React.useState(false)
	const [menuOpen, setMenuOpen] = React.useState(false)

	return (
		<div className="sticky top-0 z-50 w-full">
			<nav className="relative z-40 flex w-full min-w-[330px] items-center justify-between gap-5 border-b border-neutral-200/60 bg-white px-6 py-3.5 dark:border-neutral-700/50 dark:bg-[#1c1c1c]">
				<div className="flex items-center gap-16">
					<Logo height={20} width={20} />
					<nav className="hidden sm:flex sm:items-center">
						<ul className="flex items-center space-x-4">
							<li
								className="flex cursor-pointer items-center gap-0.5 text-[.7rem] font-medium text-neutral-800 transition duration-200 ease-out hover:text-emerald-500 dark:text-neutral-100 dark:hover:text-emerald-400 sm:text-[.8rem]"
								onClick={() => setDropDownMenuOpen(prev => !prev)}
							>
								<span>Cryptocurrencies</span>
								<ChevronDown
									className={cn("stroke-neutral-400", {
										"-rotate-180 transition duration-200 ease-in-out": dropDownMenuOpen,
									})}
									size={12}
								/>
							</li>
							<li className="flex cursor-text items-center gap-0.5 text-[.7rem] font-medium text-neutral-600 transition duration-200 ease-out dark:text-neutral-400 sm:text-[.8rem]">
								<span>Exchanges</span>
								<ChevronDown className={cn("stroke-neutral-400")} size={12} />
							</li>
							<WatchListButton />
						</ul>
					</nav>
				</div>
				<div className="flex flex-1 items-center justify-end gap-2.5">
					<Search />
					{/* hidden on small screens and above */}
					<Menu
						onClick={() => setMenuOpen(prev => !prev)}
						className="cursor-pointer stroke-neutral-800 dark:stroke-neutral-100 sm:hidden"
						size={25}
					/>
				</div>
				<NavMenu dropDownMenuOpen={dropDownMenuOpen} onClose={() => setDropDownMenuOpen(false)} />
			</nav>
			<MobileNavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</div>
	)
}
