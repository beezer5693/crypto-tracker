import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Clock, Flame, Newspaper } from "lucide-react"

export default function LoadingCardUI() {
	return (
		<div className="-mb-[175px] grid grid-cols-1 gap-3.5 lg:grid-cols-3">
			<Card className="col-span-1 flex flex-col justify-between gap-8">
				<CardHeader>
					<CardTitle className="w-full space-x-3">
						<div className="inline-block rounded-md bg-emerald-400/30 p-1.5 align-middle dark:bg-emerald-800/50">
							<Flame className="h-5 w-5 stroke-emerald-500 dark:stroke-emerald-500" />
						</div>
						<span className="mt-0.5 inline-block align-middle text-neutral-800 dark:text-neutral-200">Trending</span>
					</CardTitle>
				</CardHeader>
				<CardContent className="ml-[10px]">
					<div className="flex flex-col justify-start gap-7">
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">1</div>
								<div className="flex items-center gap-2">
									<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>
							<div className="flex items-center">
								<Skeleton className="h-3 w-[52px] bg-neutral-200 dark:bg-neutral-700/50" />
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2.5">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">2</div>
								<div className="flex items-center gap-2">
									<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>
							<div className="flex items-center">
								<Skeleton className="h-3 w-[52px] bg-neutral-200 dark:bg-neutral-700/50" />
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">1</div>
								<div className="flex items-center gap-2">
									<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>
							<div className="flex items-center">
								<Skeleton className="h-3 w-[52px] bg-neutral-200 dark:bg-neutral-700/50" />
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card className="col-span-1 flex flex-col justify-between gap-8">
				<CardHeader>
					<CardTitle className="w-full space-x-3">
						<div className="inline-block rounded-md bg-emerald-400/30 p-1.5 align-middle dark:bg-emerald-800/50">
							<Clock className="h-5 w-5 stroke-emerald-500 dark:stroke-emerald-500" />
						</div>
						<span className="mt-0.5 inline-block align-middle text-neutral-800 dark:text-neutral-200">
							Recently Added
						</span>
					</CardTitle>
				</CardHeader>
				<CardContent className="ml-[10px]">
					<div className="flex flex-col gap-7">
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-3">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">1</div>
								<div className="flex items-center gap-2">
									<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>
							<div className="text-[.8rem] font-semibold text-neutral-800 dark:text-neutral-300">
								<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2.5">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">1</div>
								<div className="flex items-center gap-2">
									<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>
							<div className="text-[.8rem] font-semibold text-neutral-800 dark:text-neutral-300">
								<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
							</div>
						</div>
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center gap-2.5">
								<div className="text-[.8rem] text-neutral-500 dark:text-neutral-400">1</div>
								<div className="flex items-center gap-2">
									<Skeleton className="h-[20px] w-[20px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-3 w-[41px] bg-neutral-200 dark:bg-neutral-700/50" />
									<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
								</div>
							</div>
							<div className="text-[.8rem] font-semibold text-neutral-800 dark:text-neutral-300">
								<Skeleton className="h-3 w-[24px] bg-neutral-200 dark:bg-neutral-700/50" />
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card className="col-span-1 space-y-5">
				<CardHeader>
					<CardTitle className="w-full space-x-3">
						<div className="inline-block rounded-md bg-emerald-400/30 p-1.5 align-middle dark:bg-emerald-800/50">
							<Newspaper className="h-5 w-5 stroke-emerald-500 dark:stroke-emerald-500" />
						</div>
						<span className="mt-0.5 inline-block align-middle text-neutral-800 dark:text-neutral-200">Latest News</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex items-start justify-center gap-4">
						<Skeleton className="h-[100px] w-[150px] bg-neutral-200 dark:bg-neutral-700/50" />
						<div className="flex flex-col justify-start space-y-2">
							<div className="flex items-center gap-2 self-start">
								<Skeleton className="h-[15px] w-[60px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
								<Skeleton className="h-[15px] w-[35px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
							</div>
							<div className="space-y-1">
								<Skeleton className="h-[15px] w-[200px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
								<Skeleton className="h-[15px] w-[200px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
							</div>
							<Skeleton className="h-[15px] w-[70px] rounded-full bg-neutral-200 dark:bg-neutral-700/50" />
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
