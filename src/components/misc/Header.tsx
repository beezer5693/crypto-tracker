import { cn } from "@/lib/utils"

type HeaderProps = {
	children?: React.ReactNode
	className?: string
}

export default function Header({ children, className }: HeaderProps) {
	return (
		<header className={cn("flex w-[330px] items-center sm:m-0 sm:w-full sm:justify-between", className)}>
			{children}
		</header>
	)
}
