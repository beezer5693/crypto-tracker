import { Loader2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { cn } from "@/lib/utils"
import { Skeleton } from "../ui/skeleton"

type LoadingProps = {
	buttonActive: number
}

export default function ChartLoading({ buttonActive }: LoadingProps) {
	return (
		<div className="w-full">
			<CardHeader>
				<CardTitle className="flex items-center justify-between">
					<div>
						<Skeleton className="h-3 w-[50px] bg-neutral-200 dark:bg-neutral-700/50 sm:w-[160px]" />
					</div>
					<div className="flex items-center gap-2 rounded-md border border-neutral-200/60 p-1 dark:border-neutral-700/50">
						<div
							className={cn(
								"flex h-7 w-9 cursor-pointer items-center justify-center rounded border-transparent text-xs font-semibold text-neutral-800 transition duration-200  ease-out hover:bg-neutral-200/60 dark:text-neutral-100  dark:hover:bg-neutral-700/50",
								{
									"border border-neutral-300/50 bg-neutral-200/50 hover:bg-neutral-200/50 dark:border-neutral-600/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/50":
										buttonActive === 1,
								}
							)}
						>
							1D
						</div>
						<div
							className={cn(
								"flex h-7 w-9 cursor-pointer items-center justify-center rounded border-transparent text-xs font-semibold text-neutral-800 transition duration-200  ease-out hover:bg-neutral-200/60 dark:text-neutral-100  dark:hover:bg-neutral-700/50",
								{
									"border border-neutral-300/50 bg-neutral-200/50 hover:bg-neutral-200/50 dark:border-neutral-600/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/50":
										buttonActive === 7,
								}
							)}
						>
							7D
						</div>
						<div
							className={cn(
								"flex h-7 w-9 cursor-pointer items-center justify-center rounded border-transparent text-xs font-semibold text-neutral-800 transition duration-200  ease-out hover:bg-neutral-200/60 dark:text-neutral-100  dark:hover:bg-neutral-700/50",
								{
									"border border-neutral-300/50 bg-neutral-200/50 hover:bg-neutral-200/50 dark:border-neutral-600/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/50":
										buttonActive === 30,
								}
							)}
						>
							1M
						</div>
						<div
							className={cn(
								"flex h-7 w-9 cursor-pointer items-center justify-center rounded border-transparent text-xs font-semibold text-neutral-800 transition duration-200  ease-out hover:bg-neutral-200/60 dark:text-neutral-100  dark:hover:bg-neutral-700/50",
								{
									"border border-neutral-300/50 bg-neutral-200/50 hover:bg-neutral-200/50 dark:border-neutral-600/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/50":
										buttonActive === 60,
								}
							)}
						>
							60D
						</div>
						<div
							className={cn(
								"flex h-7 w-9 cursor-pointer items-center justify-center rounded border-transparent text-xs font-semibold text-neutral-800 transition duration-200  ease-out hover:bg-neutral-200/60 dark:text-neutral-100  dark:hover:bg-neutral-700/50",
								{
									"border border-neutral-300/50 bg-neutral-200/50 hover:bg-neutral-200/50 dark:border-neutral-600/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/50":
										buttonActive === 90,
								}
							)}
						>
							90D
						</div>
						<div
							className={cn(
								"flex h-7 w-9 cursor-pointer items-center justify-center rounded border-transparent text-xs font-semibold text-neutral-800 transition duration-200  ease-out hover:bg-neutral-200/60 dark:text-neutral-100  dark:hover:bg-neutral-700/50",
								{
									"border border-neutral-300/50 bg-neutral-200/50 hover:bg-neutral-200/50 dark:border-neutral-600/50 dark:bg-neutral-700/50 dark:hover:bg-neutral-700/50":
										buttonActive === 365,
								}
							)}
						>
							1Y
						</div>
					</div>
				</CardTitle>
			</CardHeader>
			<CardContent className="mt-3">
				<div className="relative flex h-[225px] w-full flex-1 items-center justify-center sm:h-[300px] xl:h-[400px]">
					<Loader2 className="h-6 w-6 animate-spin text-neutral-300 dark:text-neutral-700/50 sm:h-10 sm:w-10" />
				</div>
			</CardContent>
		</div>
	)
}
