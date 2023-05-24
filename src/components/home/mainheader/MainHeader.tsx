import Header from "../../Header"
import Search from "./Search"
import Logo from "../../Logo"
import { FiPieChart, FiStar } from "react-icons/fi"

export default function MainHeader() {
	return (
		<Header className="sticky top-0 z-50 flex w-full flex-col gap-5 border-b border-neutral-200/60 bg-transparent px-6 py-3.5 shadow-neutral-200/30 backdrop-blur dark:border-neutral-700/50 md:flex-row">
			<Logo height={20} width={20} />
			<div className="flex flex-col-reverse items-center gap-2.5 sm:flex-row">
				<div className="flex items-center gap-0.5">
					<div className="group flex cursor-pointer items-center gap-1.5 rounded px-2 py-1 transition duration-300 ease-out hover:bg-neutral-200/40 dark:hover:bg-neutral-700/50">
						<FiStar className="h-3 w-3 cursor-pointer stroke-neutral-800 transition duration-300 ease-out dark:stroke-neutral-400 group-hover:dark:stroke-neutral-200" />
						<span className="text-[.7rem] font-medium text-neutral-800 dark:text-neutral-200">Watchlist</span>
					</div>
					<div className="group flex cursor-pointer items-center gap-1.5 rounded px-2 py-1 transition duration-300 ease-out hover:bg-neutral-200/40 dark:hover:bg-neutral-700/50">
						<FiPieChart className="h-3 w-3 cursor-pointer stroke-neutral-900 transition duration-300 ease-out dark:stroke-neutral-300 group-hover:dark:stroke-neutral-100" />
						<span className="text-[.7rem] font-medium text-neutral-800 dark:text-neutral-200">Portfolio</span>
					</div>
				</div>
				<Search />
			</div>
		</Header>
	)
}
