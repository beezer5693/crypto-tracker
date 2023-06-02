"use client"

import React from "react"
import axios from "axios"
import Link from "next/link"
import { useContext } from "react"
import { WatchlistContext } from "@/context/WatchListContext"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { useToast } from "../ui/use-toast"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import Tooltip from "@/components/ui/tooltip"
import Image from "next/image"

type WatchListButtonProps = {
	coinId: number
	name?: string
	icon?: string
	className?: string
	className2?: string
	className3?: string
	side?: "top" | "right" | "bottom" | "left"
}

export default function WatchListButton({
	coinId,
	name,
	icon,
	className,
	className2,
	className3,
	side,
}: WatchListButtonProps) {
	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const session = useSession()
	const {
		state: { watchlist },
		dispatch,
	} = useContext(WatchlistContext)

	const { toast } = useToast()

	const handleWatchList = async (coinId: number) => {
		setIsLoading(true)
		try {
			if (session?.status !== "authenticated") {
				setIsLoading(false)
				return
			}

			if (session?.data?.user && !!watchlist) {
				if (watchlist.includes(coinId)) {
					await axios.delete("/api/user/watchlist", {
						params: {
							coinId,
							email: session.data.user.email,
						},
					})

					dispatch({ type: "REMOVE", payload: coinId })
					toast({
						description: (
							<div className="flex items-center gap-2">
								{icon && <Image src={icon} height={20} width={20} alt="logo" />}
								<p className="font-normal text-neutral-800 dark:text-neutral-300">
									<span className="font-bold text-neutral-800 dark:text-neutral-100">{name}</span> removed from
									watchlist
								</p>
							</div>
						),
						duration: 3000,
					})
					setIsLoading(false)
				}

				if (!watchlist.includes(coinId)) {
					await axios.post("/api/user/watchlist", {
						coinId,
						email: session.data.user.email,
						name,
					})

					dispatch({ type: "ADD", payload: coinId })
					toast({
						description: (
							<div className="flex items-center gap-2">
								{icon && <Image src={icon} height={20} width={20} alt="logo" />}
								<p className="font-normal text-neutral-800 dark:text-neutral-300">
									<span className="font-bold text-neutral-800 dark:text-neutral-100">{name}</span> added to watchlist
								</p>
							</div>
						),
						duration: 3000,
					})
					setIsLoading(false)
				}
			}
		} catch (error) {
			console.log(error)
			setIsLoading(false)
		}
	}

	return (
		<button onClick={() => handleWatchList(coinId)} className={cn("group", className3)}>
			<Tooltip
				side={side}
				asChild={true}
				content={
					session.status !== "authenticated" ? (
						<div className="flex w-60 flex-col items-center justify-center gap-2.5 p-3">
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">
								Sign up for an account in just a few easy steps to add this coin to your watchlist!
							</p>
							<Link className="w-full" href={"/sign-up"}>
								<Button className="h-8 w-full border-x border-b border-t border-emerald-400 bg-emerald-500 px-2.5 text-[.8rem] font-semibold text-white transition duration-200 ease-out hover:border-emerald-400 hover:bg-emerald-400 dark:border-emerald-500 dark:border-b-transparent dark:bg-emerald-600/80 dark:shadow-sm dark:shadow-black/30 dark:hover:border-emerald-500 dark:hover:bg-emerald-500">
									Sign Up
								</Button>
							</Link>
						</div>
					) : watchlist?.includes(coinId) ? (
						<p className="p-3 text-xs font-medium text-neutral-800 dark:text-neutral-100">Remove from watchlist</p>
					) : (
						<p className="p-3 text-xs font-medium text-neutral-800 dark:text-neutral-100">
							Add to watchlist and follow coin
						</p>
					)
				}
			>
				{isLoading ? (
					<Loader2 className={cn("h-3 w-3 animate-spin text-neutral-800 dark:text-neutral-100", className2)} />
				) : (
					<Star
						className={cn(
							"h-[13px] w-[13px] stroke-neutral-700/60 transition duration-200 ease-out group-hover:stroke-yellow-400 dark:stroke-neutral-400",
							className,
							{
								"fill-yellow-400 stroke-yellow-400 dark:fill-yellow-400 dark:stroke-yellow-400":
									watchlist.includes(coinId),
							}
						)}
					/>
				)}
			</Tooltip>
		</button>
	)
}
