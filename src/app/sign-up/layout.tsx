import AuthHeader from "@/components/AuthHeader"

export const metadata = {
	title: "CoinTracker",
	description: "Track all your favorite cryptocurrencies - all in one place.",
}

interface Props {
	children: React.ReactNode
}

export default function layout({ children }: Props) {
	return (
		<div className="relative flex min-h-screen flex-col items-center justify-between bg-neutral-50/50 px-6 py-7 dark:bg-[#1c1c1c]">
			<AuthHeader />
			{children}
			<p className="w-[300px] text-center text-[.70rem] font-medium text-neutral-500 dark:text-neutral-400/70 sm:w-[400px]">
				{"By continuing, your agree to Cointracker's"}{" "}
				<span className="cursor-pointer underline hover:text-neutral-700 dark:hover:text-neutral-300/80">
					Terms of Service
				</span>{" "}
				and{" "}
				<span className="cursor-pointer underline hover:text-neutral-700 dark:hover:text-neutral-300/80">
					Privacy Policy
				</span>{" "}
				and to receive periodic emails with updates.
			</p>
		</div>
	)
}
