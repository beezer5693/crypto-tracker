import Header from "../Header"
import Search from "./Search"
import Logo from "../Logo"
import { PieChart, Star } from "lucide-react"

export default function MainHeader() {
	return (
		<Header className="sticky top-0 border-b border-neutral-200/60 bg-neutral-200/10 px-8 py-3.5 shadow-md shadow-neutral-200/30 backdrop-blur-md dark:border-neutral-700/50 dark:bg-transparent dark:shadow-black/10">
			<Logo height={20} width={20} />
			<div className="flex items-center gap-2.5">
				<div className="flex items-center gap-0.5">
					<div className="group flex cursor-pointer items-center gap-1.5 rounded px-2 py-1 transition duration-300 ease-out hover:bg-neutral-200/60 dark:hover:bg-neutral-700/50">
						<Star className="h-3 w-3 cursor-pointer stroke-neutral-700 transition duration-300 ease-out dark:stroke-neutral-400 group-hover:dark:stroke-neutral-200" />
						<span className="text-[.7rem] font-medium text-neutral-800 dark:text-neutral-200">Watchlist</span>
					</div>
					<div className="group flex cursor-pointer items-center gap-1.5 rounded px-2 py-1 transition duration-300 ease-out hover:bg-neutral-200/60 dark:hover:bg-neutral-700/50">
						<PieChart className="h-3 w-3 cursor-pointer text-neutral-900  transition duration-300 ease-out dark:stroke-neutral-300 group-hover:dark:stroke-neutral-100" />
						<span className="text-[.7rem] font-medium text-neutral-800 dark:text-neutral-200">Portfolio</span>
					</div>
				</div>
				<Search />
			</div>
		</Header>
	)
}
