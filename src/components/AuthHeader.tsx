import Logo from "./Logo"
import { cn } from "@/lib/utils"

type AuthHeaderProps = {
	children?: React.ReactNode
	className?: string
}

export default function AuthHeader({ children, className }: AuthHeaderProps) {
	return (
		<header className={cn("flex w-[330px] items-center sm:m-0 sm:w-full sm:justify-between", className)}>
			{children}
		</header>
	)
}
