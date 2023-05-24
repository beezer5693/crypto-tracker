import ThemeSwitch from "./ThemeSwitch"
import MarketSnapShot from "./MarketSnapShot"
import Profile from "./Profile"

export default function SubHeader() {
	return (
		<header className="flex items-center justify-between border-b border-neutral-200/60 bg-transparent px-6 py-2.5 dark:border-neutral-700/50">
			<MarketSnapShot />
			<div className="flex shrink-0 items-center gap-3 pl-3">
				<ThemeSwitch />
				<div className="h-5 w-[0.5px] border-l border-neutral-200/80 dark:border-neutral-700/50"></div>
				<div className="flex items-center gap-2 pl-0.5">
					<Profile />
				</div>
			</div>
		</header>
	)
}
