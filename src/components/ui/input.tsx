"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				"flex h-[2.4rem] w-full rounded-md border border-neutral-300 bg-white px-4 text-[.8rem] font-medium text-neutral-700 shadow-sm selection:bg-emerald-300 selection:text-neutral-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[.8rem] focus-visible:border-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 disabled:cursor-text disabled:opacity-50 dark:border-neutral-700/60 dark:bg-neutral-800/80 dark:text-white/90 dark:selection:bg-emerald-500/80 dark:placeholder:text-neutral-500/80 focus-visible:dark:border-neutral-500 dark:focus-visible:ring-neutral-700/50",
				className
			)}
			ref={ref}
			{...props}
		/>
	)
})
Input.displayName = "Input"

export { Input }
