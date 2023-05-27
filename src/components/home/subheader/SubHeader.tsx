import ThemeSwitch from "./theme-switch"
import SnapShot from "./snapshot"
import ProfileSection from "./avatar"

async function getGlobalMetrics() {
	const res = await fetch(
		`https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=${process.env.COIN_MARKET_CAP_API_KEY}`,
		{ next: { revalidate: 60 } }
	)

	return res.json()
}

export default async function SubHeader() {
	const globalMetrics: GlobalMetricsData = await getGlobalMetrics()

	return (
		<header className="flex w-full items-center justify-between border-b border-neutral-200/60 bg-transparent px-6 py-2.5 dark:border-neutral-700/50">
			<SnapShot globalMetrics={globalMetrics} />
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
