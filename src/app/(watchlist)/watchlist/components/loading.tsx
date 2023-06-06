import { Loader } from "lucide-react"

export default function Loading() {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-5 p-60">
			<div className="flex items-center gap-3">
				<Loader className="h-8 w-8 animate-spin text-emerald-500" />
				<span className="text-lg font-medium text-neutral-600 dark:text-neutral-400">Loading...</span>
			</div>
		</div>
	)
}
