"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Icon from "../assets/icon.png"
import { Moon, Sun } from "lucide-react"

type Props = {}

export default function AuthHeader({}: Props) {
	const [mounted, setMounted] = useState<boolean>(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<header className="absolute left-0 right-0 top-0 flex justify-between px-9 py-7">
			<div className="flex items-center gap-2">
				<Image src={Icon} alt="Icon" width={25} height={25} />
				<span className="text-md font-bold tracking-wide text-neutral-700 dark:text-white/90">Cryptotracker</span>
			</div>
			<button>
				{theme === "light" ? (
					<Moon
						onClick={() => setTheme("dark")}
						className="h-5 w-5 cursor-pointer stroke-neutral-400 hover:stroke-neutral-500 dark:hover:stroke-neutral-300"
					/>
				) : (
					<Sun
						onClick={() => setTheme("light")}
						className="h-5 w-5 cursor-pointer stroke-neutral-400 hover:stroke-neutral-500 dark:hover:stroke-neutral-300"
					/>
				)}
			</button>
		</header>
	)
}
