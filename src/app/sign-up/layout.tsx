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
		</div>
	)
}
