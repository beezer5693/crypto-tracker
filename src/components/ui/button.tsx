"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
	"inline-flex items-center justify-center h-10 rounded px-4 text-sm font-medium transition-colors focus-visible:outline-none  disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "button"
	return <Comp className={cn(buttonVariants({ className }))} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button, buttonVariants }
