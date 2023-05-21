import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"
import { Button } from "../../ui/button"
import MarketSnapShot from "./MarketSnapShot"

export default function SubHeader() {
	return (
		<header className="flex items-center justify-between border-b border-neutral-200/60 bg-transparent px-8 py-2  dark:border-neutral-800/70">
			<MarketSnapShot />
			<div className="flex shrink-0 items-center gap-3 pl-3">
				<ThemeSwitch />
				<div className="h-5 w-[0.5px] border-l border-neutral-200/80 dark:border-neutral-700/50"></div>
				<div className="flex items-center gap-2 pl-0.5">
					<Link href={"/sign-in"}>
						<Button className="h-6 border border-neutral-300 bg-white px-2.5 text-[.7rem] text-neutral-800 transition duration-200 ease-out hover:border-neutral-400/50 hover:bg-neutral-200/50 hover:ring-2 hover:ring-transparent dark:border-neutral-600/40 dark:border-b-transparent dark:bg-neutral-700/50 dark:text-neutral-200 dark:shadow-sm dark:shadow-black/30 dark:hover:border-neutral-600/50 dark:hover:bg-neutral-700/70">
							Sign in
						</Button>
					</Link>
					<Link href={"/sign-up"}>
						<Button className="h-6 border-x border-b border-t border-emerald-400 bg-emerald-600 px-2.5 text-[.7rem] text-white transition duration-200 ease-out hover:border-emerald-400 hover:bg-emerald-400 dark:border-emerald-500 dark:border-b-transparent dark:bg-emerald-600/80 dark:shadow-sm dark:shadow-black/30 dark:hover:border-emerald-500 dark:hover:bg-emerald-500">
							Get started
						</Button>
					</Link>
				</div>
			</div>
		</header>
	)
}
