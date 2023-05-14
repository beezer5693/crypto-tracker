"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useToast } from "../ui/use-toast"
import { Button } from "../ui/button"
import { FaGoogle } from "react-icons/fa"
import { Loader2 } from "lucide-react"

export default function GoogleAuth() {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const { toast } = useToast()

	const handleGoogleAuth = () => {
		setIsLoading(true)

		signIn("google", {
			redirect: false,
		}).then(callback => {
			if (callback?.error) {
				toast({
					description: "Invalid login credentials",
					duration: 100000,
					variant: "error",
				})
			}
			if (callback?.ok && !callback?.error) {
				console.log("logged in")
			}
		})
	}
	return (
		<Button
			onClick={handleGoogleAuth}
			className="w-full gap-1.5 border border-neutral-300 bg-white shadow-sm transition duration-300 ease-out hover:border-neutral-400 hover:ring-2 hover:ring-transparent dark:border-neutral-600/40 dark:bg-neutral-700/50 dark:shadow-sm dark:shadow-black/30 dark:hover:bg-neutral-700/70"
		>
			{isLoading ? (
				<Loader2 className="h-4 w-4 animate-spin text-neutral-700 dark:text-neutral-200" />
			) : (
				<FaGoogle className="h-[17px] w-[17px] fill-neutral-700 dark:fill-neutral-200" />
			)}
			<span className="mt-0.5 text-[.95rem] text-neutral-700 dark:text-neutral-200">Continue with Google</span>
		</Button>
	)
}
