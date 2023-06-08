"use client"

import React from "react"
import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Loader2, LogOut, Star } from "lucide-react"
import Link from "next/link"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ProfileSection() {
	const session = useSession()

	// TODO - once successfully logged out show a toast message
	if (session.status === "loading") {
		return null
	}

	if (session.status === "authenticated") {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger className="cursor-pointer" asChild>
					<Avatar className="h-7 w-7 border border-neutral-400/50 dark:border-neutral-700/50">
						<AvatarImage
							src={`https://robohash.org/${session.data.user?.email}.png?set=set1&size=100x100`}
							alt="@shadcn"
						/>
						<AvatarFallback>CD</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-60">
					<DropdownMenuLabel className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
						<Avatar className="h-12 w-12 border border-neutral-400/50 dark:border-neutral-700/50">
							<AvatarImage
								src={`https://robohash.org/${session.data.user?.email}.png?set=set1&size=100x100`}
								alt="@shadcn"
							/>
							<AvatarFallback>CD</AvatarFallback>
						</Avatar>
						{session.data.user && (
							<div>
								<p className="text-sm text-neutral-800 dark:text-neutral-100">
									<span>Hi, {session.data.user.email?.substring(0, session.data.user.email.indexOf("@"))}</span>
								</p>
								<p className="text-[.7rem] text-neutral-600 dark:text-neutral-400">{session.data.user.email}</p>
							</div>
						)}
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<Link href="/watchlist">
						<DropdownMenuItem className="mt-2 cursor-pointer">
							<div className="flex items-center gap-2">
								<Star className="h-3 w-3 stroke-neutral-800 dark:stroke-neutral-100" />
								<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Watchlist</p>
							</div>
						</DropdownMenuItem>
					</Link>
					<DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
						<div className="flex items-center gap-2">
							<LogOut className="h-3 w-3 stroke-neutral-800 dark:stroke-neutral-100" />
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Sign out</p>
						</div>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	}

	return (
		<>
			<Link href={"/sign-in"}>
				<Button className="h-6 border border-neutral-300/80 bg-white px-2 text-[.7rem] shadow-sm shadow-neutral-200/60 transition duration-300 ease-out hover:border-neutral-400/50  hover:bg-neutral-200/10 hover:ring-2 hover:ring-transparent dark:border-neutral-600/40 dark:border-b-transparent dark:bg-neutral-700/50 dark:shadow-black/10 dark:hover:border-neutral-600/50 dark:hover:bg-neutral-700/70">
					Sign in
				</Button>
			</Link>
			<Link href={"/sign-up"}>
				<Button className="h-6 rounded border-x border-t border-emerald-500 bg-emerald-500 px-2.5 text-[.7rem] text-white transition duration-300 ease-out hover:border-emerald-400 hover:bg-emerald-400 dark:border-emerald-500 dark:bg-emerald-500/60 dark:hover:border-emerald-500 dark:hover:bg-emerald-500">
					Get started
				</Button>
			</Link>
		</>
	)
}
