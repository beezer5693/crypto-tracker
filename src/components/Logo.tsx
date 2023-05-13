import Image from "next/image"
import Icon from "../assets/icon.png"

export default function Logo() {
	return (
		<div className="flex items-center gap-2.5">
			<Image src={Icon} alt="Icon" width={25} height={25} />
			<div>
				<span className="text-[1.1rem] font-bold tracking-wide text-neutral-700  dark:text-white/90">coin</span>
				<span className="text-[1.1rem] font-medium tracking-wide text-emerald-500 dark:text-emerald-400">tracker</span>
			</div>
		</div>
	)
}
