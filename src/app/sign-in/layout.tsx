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
		<div className="relative flex min-h-screen flex-row items-center justify-center bg-white px-3 dark:bg-[#1c1c1c]">
			<AuthHeader />
			{children}
			<p className="absolute bottom-7 right-1/2 w-[400px] translate-x-1/2 text-center text-[11px] text-neutral-400/80">
				{"By continuing, your agree to CoinTracker's"}
				<span className="ml-0.5 cursor-pointer underline hover:text-neutral-300">Terms of Service</span> and{" "}
				<span className="cursor-pointer underline hover:text-neutral-300">Privacy Policy</span> and to receive periodic
				emails with updates.
			</p>
		</div>
	)
}
