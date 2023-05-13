import Logo from "./Logo"
import { cn } from "@/lib/utils"

type AuthHeaderProps = {
	children?: React.ReactNode
	className?: string
}

export default function AuthHeader({ children, className }: AuthHeaderProps) {
	return (
		<header className={cn("mb-5 flex w-[350px] items-center sm:m-0 sm:w-full sm:justify-between sm:px-2", className)}>
			{children}
		</header>
	)
}
