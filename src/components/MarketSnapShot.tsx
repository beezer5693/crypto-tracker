import ThemeSwitch from "./ThemeSwitch"
import Link from "next/link"
import { Button } from "./ui/button"

export default function MarketSnapShot() {
	const formatCurrency = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	})

	const numberFormat = new Intl.NumberFormat("en-US", {
		style: "decimal",
		maximumFractionDigits: 0,
	})

	return (
		<header className="flex items-center justify-between border-b border-neutral-800 px-4 py-2">
			<div className="flex items-center gap-3.5">
				<div className="flex gap-1 text-[.7rem]">
					<span className="dark:text-neutral-200">Cryptos:</span>
					<span className="text-emerald-500">{numberFormat.format(24135)}</span>
				</div>
				<div className="flex gap-1 text-[.7rem]">
					<span className="dark:text-neutral-200">Exchanges:</span>
					<span className="text-emerald-500">625</span>
				</div>
				<div className="flex gap-1 text-[.7rem]">
					<span className="dark:text-neutral-200">Market Cap:</span>
					<span className="text-emerald-500">{formatCurrency.format(1120228852112)}</span>
				</div>
				<div className="flex gap-1 text-[.7rem]">
					<span className="dark:text-neutral-200">24hr Volume:</span>
					<span className="text-emerald-500">{formatCurrency.format(29322614319)}</span>
				</div>
				<div className="flex gap-1 text-[.7rem]">
					<span className="dark:text-neutral-200">Dominance:</span>
					<span className="text-emerald-500">BTC: 46.4% ETH: 19.7%</span>
				</div>
			</div>
			<div className="flex items-center gap-3">
				<ThemeSwitch />
				<div className="h-7 w-[0.5px] border-l border-neutral-600"></div>
				<div className="flex items-center gap-2 pl-0.5">
					<Button className="h-6 border px-3 text-[.7rem] dark:border-neutral-600/40 dark:bg-neutral-700/50 dark:shadow-sm dark:shadow-black/30 dark:hover:bg-neutral-700/70">
						<Link href={"/sign-in"}>Sign in</Link>
					</Button>
					<Button className="h-6 border px-3 text-[.7rem] dark:border-emerald-500 dark:bg-emerald-500/70 dark:shadow-sm dark:shadow-black/30 dark:hover:border-emerald-500 dark:hover:bg-emerald-500">
						<Link href={"/sign-up"}>Sign up</Link>
					</Button>
				</div>
			</div>
		</header>
	)
}
