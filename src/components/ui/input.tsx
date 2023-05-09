"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				"flex h-10 w-full rounded-md border border-neutral-300 bg-neutral-100/60 px-4 text-[13px] font-medium text-neutral-700 shadow-sm selection:bg-emerald-500/80 selection:text-neutral-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[13px] focus-visible:border-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200/50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700/60 dark:bg-neutral-800/80 dark:text-white/90 dark:placeholder:text-neutral-500/80 focus-visible:dark:border-neutral-600 dark:focus-visible:ring-neutral-700/50 dark:focus-visible:ring-offset-neutral-800/50",
				className
			)}
			ref={ref}
			{...props}
		/>
	)
})
Input.displayName = "Input"

export { Input }
