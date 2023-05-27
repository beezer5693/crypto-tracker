import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
	width?: number
	height?: number
	className?: string
}

export default function Logo({ height, width, className }: LogoProps) {
	return (
		<Link href={"/"}>
			<div className="flex items-center gap-1.5">
				<Image src={"/logo/icon.png"} alt="Icon" height={height} width={width} />
				<div>
					<span className={cn("font-bold tracking-wide text-neutral-700  dark:text-white/90", className)}>coin</span>
					<span className={cn("font-medium tracking-wide text-emerald-500 dark:text-emerald-400", className)}>DEX</span>
				</div>
			</div>
		</Link>
	)
}
