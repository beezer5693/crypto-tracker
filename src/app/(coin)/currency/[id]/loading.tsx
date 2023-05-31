import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { ChevronLeft } from "lucide-react"

export default function Loading() {
	return (
		<div className="flex w-full max-w-screen-lg flex-col gap-9 px-5 py-7">
			<div className="group cursor-pointer space-x-1 self-start text-xs text-emerald-500">
				<ChevronLeft className="group-hover:-tranneutral-x-1 inline-block h-3 w-3 transform align-middle transition-transform duration-300" />
				<span className="-ml-1 inline-block align-middle">Back to Home</span>
			</div>
			<div className="flex max-w-screen-lg flex-col justify-center gap-5 md:flex-row">
				<div className="flex flex-1 flex-col gap-5 md:self-start">
					<Card className="min-w-[380px]">
						<CardHeader>
							<CardTitle className="space-y-2">
								<div className="flex items-center justify-between">
									<div className="flex items-start">
										<div className="flex items-start gap-2">
											<Skeleton className="h-[50px] w-[50px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
											<div className="mt-1.5 flex flex-col items-center justify-center gap-2">
												<Skeleton className="h-4 w-[100px] bg-neutral-200 dark:bg-neutral-700/50" />
												<Skeleton className="h-4 w-[100px] bg-neutral-200 dark:bg-neutral-700/50" />
											</div>
										</div>
									</div>
								</div>
							</CardTitle>
						</CardHeader>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>
								<Skeleton className="h-4 w-[100px] bg-neutral-200 dark:bg-neutral-700/50" />
							</CardTitle>
						</CardHeader>
						<CardContent className="mt-3">
							<div className="mt-3 grid grid-cols-5 gap-3">
								<div className="col-span-1 flex flex-col items-center justify-center gap-2 self-start border-r border-neutral-200/60 dark:border-neutral-700/50">
									<p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">1h</p>
									<Skeleton className="h-4 w-6 bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
								<div className="col-span-1 flex flex-col items-center justify-center gap-2 self-start border-r border-neutral-200/60 dark:border-neutral-700/50">
									<p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">24h</p>
									<Skeleton className="h-4 w-6 bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
								<div className="col-span-1 flex flex-col items-center justify-center gap-2 self-start border-r border-neutral-200/60 dark:border-neutral-700/50">
									<p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">7d</p>
									<Skeleton className="h-4 w-6 bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
								<div className="col-span-1 flex flex-col items-center justify-center gap-2 self-start border-r border-neutral-200/60 dark:border-neutral-700/50">
									<p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">30d</p>
									<Skeleton className="h-4 w-6 bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
								<div className="col-span-1 flex flex-col items-center justify-center gap-2 self-start">
									<p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">90d</p>
									<Skeleton className="h-4 w-6 bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>
								<Skeleton className="h-4 w-[100px] bg-neutral-200 dark:bg-neutral-700/50" />
							</CardTitle>
						</CardHeader>
						<CardContent className="mt-3">
							<div className="space-y-2">
								<Skeleton className="h-2 w-full bg-neutral-200 dark:bg-neutral-700/50" />
								<Skeleton className="h-2 w-full bg-neutral-200 dark:bg-neutral-700/50" />
								<Skeleton className="h-2 w-full bg-neutral-200 dark:bg-neutral-700/50" />
								<Skeleton className="h-2 w-full bg-neutral-200 dark:bg-neutral-700/50" />
								<Skeleton className="h-2 w-full bg-neutral-200 dark:bg-neutral-700/50" />
							</div>
							<div className="mt-5 grid grid-cols-2 gap-2 lg:grid-cols-3">
								<div className="col-span-1 flex items-center space-x-2 p-2">
									<Skeleton className="h-9 w-9 rounded-md bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-2 w-[100px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
								<div className="col-span-1 flex items-center space-x-2 p-2">
									<Skeleton className="h-9 w-9 rounded-md bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-2 w-[100px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
								<div className="col-span-1 flex items-center space-x-2 p-2">
									<Skeleton className="h-9 w-9 rounded-md bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-2 w-[100px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
								<div className="col-span-1 flex items-center space-x-2 p-2">
									<Skeleton className="h-9 w-9 rounded-md bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-2 w-[100px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
								<div className="col-span-1 flex items-center space-x-2 p-2">
									<Skeleton className="h-9 w-9 rounded-md bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-2 w-[100px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
				<Card className="min-w-[380px] flex-1 md:flex-none md:self-start">
					<CardHeader>
						<CardTitle>
							<span className="text-neutral-800 dark:text-neutral-200">Overview</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="mt-4 flex flex-col gap-4">
							<div className="flex flex-col">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-600 dark:text-neutral-400">Rank</p>
									<Skeleton className="h-4 w-[50px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>
							<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
							<div className="flex flex-col">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-600 dark:text-neutral-400">Market Cap</p>
									<Skeleton className="h-4 w-[50px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>
							<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
							<div className="flex flex-col">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-600 dark:text-neutral-400">24h volume</p>
									<Skeleton className="h-4 w-[50px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>
							<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
							<div className="flex flex-col">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-600 dark:text-neutral-400">Circulating supply</p>
									<Skeleton className="h-4 w-[100px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>

							<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
							<div className="flex flex-col">
								<div className="flex items-center justify-between">
									<p className="text-sm text-neutral-600 dark:text-neutral-400">Max supply</p>
									<Skeleton className="h-4 w-[50px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
