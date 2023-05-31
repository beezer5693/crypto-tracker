"use client"

import React from "react"
import { signIn, useSession } from "next-auth/react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { FaDiscord } from "react-icons/fa"
import { Loader2 } from "lucide-react"

export default function DiscordAuth() {
	const [isLoading, setIsLoading] = React.useState<boolean>(true)

	const { toast } = useToast()
	const session = useSession()

	React.useEffect(() => {
		if (session.status === "unauthenticated") {
			setIsLoading(false)
		} else if (session.status === "loading") {
			setIsLoading(true)
		}
	}, [session.status])

	const handleDiscordAuth = () => {
		setIsLoading(true)

		signIn("discord", {
			redirect: false,
		}).then(callback => {
			if (callback?.error) {
				toast({
					description: "Invalid login credentials",
					duration: 100000,
					variant: "error",
				})
			}
		})
	}

	return (
		<Button
			onClick={handleDiscordAuth}
			className="w-full gap-1.5 border border-neutral-300 bg-white transition duration-300 ease-out hover:border-neutral-400/50 hover:bg-neutral-200/30 hover:ring-2 hover:ring-transparent dark:border-neutral-600/40 dark:border-b-transparent dark:bg-neutral-700/50 dark:shadow-sm dark:shadow-black/30 dark:hover:border-neutral-600/50 dark:hover:bg-neutral-700/70"
		>
			{isLoading ? (
				<Loader2 className="h-4 w-4 animate-spin stroke-neutral-700 dark:stroke-neutral-200" />
			) : (
				<FaDiscord className="h-5 w-5 fill-neutral-700 dark:fill-neutral-200" />
			)}
			<span className="mt-0.5 text-[.95rem] text-neutral-700 dark:text-neutral-200">Continue with Discord</span>
		</Button>
	)
}
