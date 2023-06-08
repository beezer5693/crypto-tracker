import { Star } from "lucide-react"

export default function EmptyWatchList() {
	return (
		<div className="mt-20 flex w-full flex-col items-center justify-center gap-3">
			<h2 className="text-2xl sm:text-3xl">Your watchlist is empty</h2>
			<p className="max-w-md text-sm sm:text-base">
				Start building your watchlist by clicking the
				<span className="inline-block align-middle">
					<Star className="mx-1 h-4 w-4 stroke-yellow-400 dark:stroke-yellow-400" />
				</span>
				next to any coin on the table or by visiting the coin page.
			</p>
		</div>
	)
}
