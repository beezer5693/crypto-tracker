import Image from "next/image"
import Icon from "../assets/icon.png"

export default function AuthHeader() {
	return (
		<header className="absolute left-0 right-0 top-0 flex justify-between px-9 py-7">
			<div className="flex items-center gap-2.5">
				<Image src={Icon} alt="Icon" width={25} height={25} />
				<div>
					<span className="text-md font-bold tracking-wide text-neutral-700 dark:text-white/90">Coin</span>
					<span className="text-md font-medium tracking-wide text-emerald-500 dark:text-emerald-400">Tracker</span>
				</div>
			</div>
		</header>
	)
}
