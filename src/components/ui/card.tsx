import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"rounded-lg border border-neutral-200/70 bg-gradient-to-tl from-white from-60% to-[#f8fefc] p-4 shadow-neutral-400/40 dark:border-neutral-700/50 dark:from-[#232323] dark:from-60% dark:to-[#242928] dark:shadow-black/20",
			className
		)}
		{...props}
	/>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col space-y-1.5", className)} {...props} />
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => <h3 ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
	({ className, ...props }, ref) => (
		<p ref={ref} className={cn("text-muted-foreground text-sm", className)} {...props} />
	)
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn("pt-0", className)} {...props} />
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => <div ref={ref} className={cn(" flex items-center pt-0", className)} {...props} />
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
