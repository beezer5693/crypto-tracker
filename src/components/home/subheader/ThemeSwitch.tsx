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
			{theme === "dark" ? (
				<Sun
					onClick={() => setTheme("light")}
					className="h-[18px] w-[18px] cursor-pointer stroke-1 transition duration-300 ease-out dark:stroke-neutral-400 hover:dark:stroke-neutral-200"
				/>
			) : (
				<Moon
					onClick={() => setTheme("dark")}
					className="h-[18px] w-[18px] cursor-pointer stroke-neutral-500 stroke-1 transition duration-300 ease-out hover:stroke-neutral-900"
				/>
			)}
		</>
	)
}
