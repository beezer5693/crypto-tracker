import ThemeSwitch from "./theme-switch"
import SnapShot from "./snapshot"
import Avatar from "./avatar"

export default function SubHeader() {
	return (
		<header className="relative flex h-10 w-full items-center justify-between border-b border-neutral-200/60 bg-white dark:border-neutral-700/50 dark:bg-[#1c1c1c] sm:px-6">
			<span className="absolute bottom-0 right-0 top-0 w-12 bg-gradient-to-r from-transparent to-white dark:to-[#1c1c1c] sm:bg-gradient-to-r sm:from-transparent dark:sm:from-transparent"></span>
			{/* @ts-expect-error Async Server Component */}
			<SnapShot />
			<div className="hidden shrink-0 items-center gap-3 pl-3 sm:flex">
				<ThemeSwitch />
				<div className="h-5 w-[0.5px] border-l border-neutral-200/80 dark:border-neutral-700/50"></div>
				<div className="flex items-center gap-2 pl-0.5">
					<Avatar />
				</div>
			</div>
		</header>
	)
}
