"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	return (
		<>
			{theme === "light" ? (
				<Sun
					onClick={() => setTheme("dark")}
					className="h-4 w-4 cursor-pointer stroke-1 dark:stroke-neutral-400 hover:dark:stroke-neutral-200"
				/>
			) : (
				<Moon
					onClick={() => setTheme("light")}
					className="h-4 w-4 cursor-pointer stroke-1 dark:stroke-neutral-400 hover:dark:stroke-neutral-200"
				/>
			)}
		</>
	)
}
