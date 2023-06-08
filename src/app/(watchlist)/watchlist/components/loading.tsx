import { Skeleton } from "@/components/ui/skeleton"
import { Loader2 } from "lucide-react"

export default function Loading() {
	return (
		<Skeleton className="flex w-full items-center justify-center">
			<div className="mt-10 flex items-center gap-3 sm:mt-48">
				<Loader2 className="h-5 w-5 animate-spin text-emerald-500 sm:h-7 sm:w-7" />
				<span className="font-medium text-neutral-600 dark:text-neutral-400 sm:text-lg">Loading watchlist...</span>
			</div>
		</Skeleton>
	)
}
