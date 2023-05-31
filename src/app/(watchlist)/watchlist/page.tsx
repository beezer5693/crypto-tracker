import DataTableWatchlist from "./components/data-table"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function Watchlist() {
	return (
		<section className="w-full bg-transparent px-5 py-9">
			<div className="mx-auto flex w-full max-w-screen-xl flex-col gap-8 overflow-x-auto">
				<Link className="group cursor-pointer space-x-1 self-start text-xs" href={"/"}>
					<ChevronLeft className="inline-block h-3 w-3 transform align-middle text-emerald-500 transition-all duration-300 ease-out group-hover:-translate-x-1 group-hover:text-neutral-800 group-hover:dark:text-neutral-100" />
					<span className="inline-block align-middle font-medium text-emerald-500 transition-all duration-300 ease-out group-hover:text-neutral-800 group-hover:dark:text-neutral-100">
						Back to Home
					</span>
				</Link>
				<h1 className="text-3xl font-medium text-neutral-800 dark:text-neutral-100">My Watchlist</h1>
				<DataTableWatchlist />
			</div>
		</section>
	)
}
