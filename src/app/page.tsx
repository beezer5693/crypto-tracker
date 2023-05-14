"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-white p-24 dark:bg-[#1c1c1c]">
			<Button onClick={() => signOut()} className="border">
				Log out
			</Button>
		</main>
	)
}
