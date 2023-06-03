"use client"

import React from "react"
import Header from "../../misc/Header"
import Search from "./Search"
import WatchListButton from "./WatchlistButton"
import Logo from "../../misc/Logo"
import NavMenu from "./NavMenu"
import { cn } from "@/lib/utils"
import { FiPieChart } from "react-icons/fi"
import { ChevronDown } from "lucide-react"

export default function MainHeader() {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<div className="sticky top-0 z-50 w-full">
			<Header className="flex w-full flex-col gap-5 border-b border-neutral-200/60 bg-white px-6 py-3.5  dark:border-neutral-700/50 dark:bg-[#1c1c1c] lg:flex-row">
				<div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-20">
					<Logo height={20} width={20} />
					<nav className="flex items-center">
						<ul className="flex items-center space-x-2 sm:space-x-7">
							<li
								className="flex cursor-pointer items-center gap-0.5 text-[.7rem] font-medium text-neutral-800 transition duration-200 ease-out hover:text-emerald-500 dark:text-neutral-100 dark:hover:text-emerald-400 sm:gap-1.5 sm:text-[.8rem]"
								onClick={() => setIsOpen(prev => !prev)}
							>
								<span>Cryptocurrencies</span>
								<ChevronDown
									className={cn("stroke-neutral-400", { "-rotate-180 transition duration-200 ease-in-out": isOpen })}
									size={12}
								/>
							</li>
							<li className="flex cursor-not-allowed items-center gap-0.5 text-[.7rem] font-medium text-neutral-600 transition duration-200 ease-out dark:text-neutral-400 sm:gap-1.5  sm:text-[.8rem]">
								<span>Exchanges</span>
								<ChevronDown className={cn("stroke-neutral-400")} size={12} />
							</li>
							<li className="flex cursor-not-allowed items-center gap-0.5 text-[.7rem] font-medium text-neutral-600 transition duration-200 ease-out dark:text-neutral-400 sm:gap-1.5  sm:text-[.8rem]">
								<span>Community</span>
								<ChevronDown className={cn("stroke-neutral-400")} size={12} />
							</li>
							<li className="flex cursor-not-allowed items-center gap-0.5 text-[.7rem] font-medium text-neutral-600 transition duration-200 ease-out dark:text-neutral-400 sm:gap-1.5  sm:text-[.8rem]">
								<span>Products</span>
								<ChevronDown className={cn("stroke-neutral-400")} size={12} />
							</li>
						</ul>
					</nav>
				</div>
				<div className="flex flex-col-reverse items-center gap-2.5 sm:flex-row">
					<div className="flex items-center gap-0.5">
						<WatchListButton />
						<div className="group flex cursor-pointer items-center gap-1.5 rounded px-2 py-1 transition duration-300 ease-out hover:bg-neutral-200/40 dark:hover:bg-neutral-700/40">
							<FiPieChart className="h-3 w-3 cursor-pointer stroke-neutral-900 transition duration-300 ease-out dark:stroke-neutral-300 group-hover:dark:stroke-neutral-100" />
							<span className="text-[.7rem] font-medium text-neutral-800 dark:text-neutral-200">Portfolio</span>
						</div>
					</div>
					<Search />
				</div>
			</Header>
			<NavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</div>
	)
}
