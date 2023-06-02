import ChartLoading from "@/components/line-chart/loading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronLeft } from "lucide-react"

export default function Loading() {
	return (
		<div className="flex w-full max-w-screen-xl flex-col gap-9 px-5 py-7">
			<div className="group cursor-pointer space-x-1 self-start text-xs text-emerald-500">
				<ChevronLeft className="group-hover:-transition-x-1 inline-block h-3 w-3 transform align-middle transition-transform duration-300" />
				<span className="-ml-1 inline-block align-middle">Back to Home</span>
			</div>
			<div className="flex min-w-[336px] max-w-screen-xl flex-col items-center justify-center gap-5 xl:flex-row xl:items-start">
				<div className="flex w-full max-w-[800px] flex-1 flex-col gap-5 xl:max-w-none">
					<Card className="min-w-[380px]">
						<CardHeader>
							<CardTitle className="space-y-3">
								<Skeleton className="h-4 w-[70px] bg-neutral-200 dark:bg-neutral-700/50" />
								<div className="flex items-center gap-2">
									<Skeleton className="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-4 w-[100px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
								<Skeleton className="h-5 w-[150px] bg-neutral-200 dark:bg-neutral-700/50" />
							</CardTitle>
						</CardHeader>
						<ChartLoading buttonActive={1} />
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
				<div className="flex w-full min-w-[380px] max-w-[800px] flex-col items-center gap-5 xl:max-w-[400px] xl:flex-none xl:self-start">
					<Card className="w-full">
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
					<Card className="w-full">
						<CardHeader>
							<CardTitle>
								<span className="text-neutral-800 dark:text-neutral-200">Performance</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="mt-4 flex flex-col gap-4">
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">1h</p>
										<Skeleton className="h-4 w-[50px] bg-neutral-200 dark:bg-neutral-700/50" />
									</div>
								</div>
								<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">24h</p>
										<Skeleton className="h-4 w-[50px] bg-neutral-200 dark:bg-neutral-700/50" />
									</div>
								</div>
								<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">7d</p>
										<Skeleton className="h-4 w-[50px] bg-neutral-200 dark:bg-neutral-700/50" />
									</div>
								</div>
								<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">30d</p>
										<Skeleton className="h-4 w-[50px] bg-neutral-200 dark:bg-neutral-700/50" />
									</div>
								</div>
								<div className="h-[1px] w-full bg-neutral-200/80 dark:bg-neutral-700/50"></div>
								<div className="flex flex-col">
									<div className="flex items-center justify-between">
										<p className="text-sm text-neutral-600 dark:text-neutral-400">90d</p>
										<Skeleton className="h-4 w-[50px] bg-neutral-200 dark:bg-neutral-700/50" />
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
					<Card className="w-full">
						<CardHeader>
							<CardTitle>
								<Skeleton className="h-4 w-[200px] bg-neutral-200 dark:bg-neutral-700/50" />
							</CardTitle>
						</CardHeader>
						<CardContent className="mt-3 space-y-2">
							<div className="relative">
								<Input type="text" placeholder="0" className="w-full" value={"0"} readOnly />
							</div>
							<div className="relative">
								<Input placeholder="0" type="text" className="w-full" value={"0"} readOnly />
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
