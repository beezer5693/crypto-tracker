import ThemeSwitch from "./theme-switch"
import SnapShot from "./snapshot"
import ProfileSection from "./avatar"

export default function SubHeader() {
	return (
		<header className="flex w-full items-center justify-between border-b border-neutral-200/60 bg-white px-6 py-2.5 dark:border-neutral-700/50 dark:bg-[#1c1c1c]">
			{/* @ts-expect-error Async Server Component */}
			<SnapShot />
			<div className="flex shrink-0 items-center gap-3 pl-3">
				<ThemeSwitch />
				<div className="h-5 w-[0.5px] border-l border-neutral-200/80 dark:border-neutral-700/50"></div>
				<div className="flex items-center gap-2 pl-0.5">
					<ProfileSection />
				</div>
			</div>
		</header>
	)
}
