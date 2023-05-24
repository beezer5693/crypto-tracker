"use client"

import React from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export default function Profile() {
	const session = useSession()

	if (session.status === "authenticated") {
		return (
			<Avatar className="h-7 w-7 cursor-pointer border border-neutral-200/50 dark:border-neutral-700/50">
				<AvatarImage src="https://api.dicebear.com/6.x/identicon/svg?seed=Charlie" alt="@shadcn" />
				<AvatarFallback>CD</AvatarFallback>
			</Avatar>
		)
	}

	return (
		<>
			<Link href={"/sign-in"}>
				<Button className="h-6 border border-neutral-300 bg-white px-2.5 text-[.7rem] text-neutral-800 transition duration-200 ease-out hover:border-neutral-400/50 hover:bg-neutral-200/30 hover:ring-2 hover:ring-transparent dark:border-neutral-600/40 dark:border-b-transparent dark:bg-neutral-700/50 dark:text-neutral-200 dark:shadow-sm dark:shadow-black/30 dark:hover:border-neutral-600/50 dark:hover:bg-neutral-700/70">
					Sign in
				</Button>
			</Link>
			<Link href={"/sign-up"}>
				<Button className="h-6 border-x border-b border-t border-emerald-400 bg-emerald-600 px-2.5 text-[.7rem] text-white transition duration-200 ease-out hover:border-emerald-400 hover:bg-emerald-400 dark:border-emerald-500 dark:border-b-transparent dark:bg-emerald-600/80 dark:shadow-sm dark:shadow-black/30 dark:hover:border-emerald-500 dark:hover:bg-emerald-500">
					Get started
				</Button>
			</Link>
		</>
	)
}
