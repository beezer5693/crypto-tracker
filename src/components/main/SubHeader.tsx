import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import { Button } from "../ui/button"
import MarketSnapShot from "./MarketSnapShot"

export default function SubHeader() {
	return (
		<header className="flex items-center justify-between border-b border-neutral-200/60 bg-neutral-200/10 px-8 py-2 dark:border-neutral-700/50 dark:bg-transparent">
			<MarketSnapShot />
			<div className="flex shrink-0 items-center gap-3 pl-3">
				<ThemeSwitch />
				<div className="h-6 w-[0.5px] border-l border-neutral-200/80 dark:border-neutral-600"></div>
				<div className="flex items-center gap-2 pl-0.5">
					<Button className="h-6 border border-neutral-300 bg-white px-3 text-[.7rem] text-neutral-800 transition duration-200 ease-out hover:border-neutral-400 hover:ring-2 hover:ring-transparent dark:border-neutral-600/40 dark:bg-neutral-700/50 dark:text-neutral-200 dark:shadow-sm dark:shadow-black/30 dark:hover:bg-neutral-700/70">
						<Link href={"/sign-in"}>Sign in</Link>
					</Button>
					<Button className="h-6 border border-emerald-500 bg-emerald-500 px-3 text-[.7rem] text-white transition duration-200 ease-out hover:border-emerald-400 hover:bg-emerald-400 dark:border-emerald-600 dark:bg-emerald-600 dark:shadow-sm dark:shadow-black/30 dark:hover:border-emerald-500 dark:hover:bg-emerald-500">
						<Link href={"/sign-up"}>Get started</Link>
					</Button>
				</div>
			</div>
		</header>
	)
}
