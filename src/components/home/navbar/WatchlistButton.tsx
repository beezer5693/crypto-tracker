"use client"

import React from "react"
import { useSession } from "next-auth/react"
import { FiStar } from "react-icons/fi"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import TooltipDemo from "@/components/ui/tooltip"

export default function WatchlistButton() {
	const [userId, setUserId] = React.useState<string>("")
	const session = useSession()

	React.useEffect(() => {
		if (session?.data) {
			async function fetchCurrentUser() {
				const res = await fetch(`/api/user/current-user?email=${session.data?.user?.email}`)
				const data = await res.json()
				setUserId(data.id)
			}

			fetchCurrentUser()
		}
	}, [session])

	const ToolTipContent = (
		<div className="flex w-60 flex-col items-center justify-center gap-2.5 p-3">
			<span className="text-xs text-neutral-800 dark:text-neutral-200">
				Create an account in just a few easy steps to start building a watchlist of your favorite cryptocurrencies!
			</span>
			<Link className="w-full" href={"/sign-up"}>
				<Button className="h-8 w-full border-x border-b border-t border-emerald-400 bg-emerald-500 px-2.5 text-[.8rem] font-semibold text-white transition duration-200 ease-out hover:border-emerald-400 hover:bg-emerald-400 dark:border-emerald-500 dark:border-b-transparent dark:bg-emerald-600/80 dark:shadow-sm dark:shadow-black/30 dark:hover:border-emerald-500 dark:hover:bg-emerald-500">
					Sign Up
				</Button>
			</Link>
		</div>
	)

	return (
		<Link href={session?.status === "authenticated" ? `/watchlist` : "/"}>
			<TooltipDemo
				sideOffset={5}
				asChild={true}
				content={session?.status === "authenticated" ? null : ToolTipContent}
				side="bottom"
			>
				<Button className="group flex h-[24px] cursor-pointer items-center gap-1.5 rounded px-2 py-1 transition duration-300 ease-out hover:bg-neutral-200/40 dark:hover:bg-neutral-700/40">
					<FiStar className="h-3 w-3 cursor-pointer stroke-neutral-800 transition duration-300 ease-out dark:stroke-neutral-400 group-hover:dark:stroke-neutral-200" />
					<span className="text-[.7rem] font-medium text-neutral-800 dark:text-neutral-200">Watchlist</span>
				</Button>
			</TooltipDemo>
		</Link>
	)
}
