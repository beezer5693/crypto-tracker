"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { useToast } from "./ui/use-toast"
import { Button } from "./ui/button"
import { FaGoogle } from "react-icons/fa"

export default function GoogleAuth() {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const router = useRouter()
	const { toast } = useToast()

	const handleGoogleAuth = () => {
		signIn("google", {
			redirect: false,
		})
			.then(callback => {
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
			.finally(() => {
				setIsLoading(false)
			})
	}
	return (
		<Button
			onClick={handleGoogleAuth}
			className="relative w-full gap-3 border border-neutral-300 bg-white text-[14px] shadow-sm transition duration-300 ease-in-out hover:border-neutral-400 hover:ring-2 hover:ring-neutral-200/80 dark:border-neutral-600/40 dark:bg-neutral-700/50 dark:shadow-sm dark:shadow-black/30 dark:hover:border-neutral-600 dark:hover:ring-neutral-700/50"
		>
			<FaGoogle className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 fill-neutral-700 dark:fill-neutral-200" />
			<span className="text-neutral-700 dark:text-neutral-200">Continue with Google</span>
		</Button>
	)
}
