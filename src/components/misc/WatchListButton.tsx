"use client"

import React from "react"
import axios from "axios"
import { useContext } from "react"
import { WatchlistContext } from "@/context/WatchListContext"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import Tooltip from "@/components/ui/tooltip"

type WatchListButtonProps = {
	coinId: number
	name?: string
	className?: string
	className2?: string
}

export default function WatchListButton({ coinId, name, className, className2 }: WatchListButtonProps) {
	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const session = useSession()
	const {
		state: { watchlist },
		dispatch,
	} = useContext(WatchlistContext)

	const handleWatchList = async (coinId: number) => {
		setIsLoading(true)
		try {
			if (session?.data?.user && !!watchlist) {
				if (watchlist.includes(coinId)) {
					await axios.delete("/api/user/watchlist", {
						params: {
							coinId,
							email: session.data.user.email,
						},
					})

					dispatch({ type: "REMOVE", payload: coinId })
					setIsLoading(false)
				}

				if (!watchlist.includes(coinId)) {
					await axios.post("/api/user/watchlist", {
						coinId,
						email: session.data.user.email,
						name,
					})

					dispatch({ type: "ADD", payload: coinId })
					setIsLoading(false)
				}
			}
		} catch (error) {
			console.log(error)
			setIsLoading(false)
		}
	}

	return (
		<Button
			onClick={() => handleWatchList(coinId)}
			disabled={session.status !== "authenticated" || isLoading}
			className={"group mr-3 p-0"}
		>
			<Tooltip
				side="top"
				asChild={true}
				content={
					watchlist?.includes(coinId) ? (
						<p className="p-2 text-xs text-neutral-800 dark:text-neutral-100">Remove from watchlist</p>
					) : (
						<p className="p-2 text-xs text-neutral-800 dark:text-neutral-100">Add to watchlist and follow coin</p>
					)
				}
			>
				{isLoading ? (
					<Loader2 className={cn("h-3 w-3 animate-spin text-neutral-800 dark:text-neutral-100", className2)} />
				) : (
					<Star
						className={cn("h-3 w-3 transition duration-200 ease-out group-hover:stroke-emerald-500", className, {
							"fill-emerald-500 stroke-emerald-500": watchlist?.includes(coinId),
						})}
					/>
				)}
			</Tooltip>
		</Button>
	)
}
