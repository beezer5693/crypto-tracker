export const metadata = {
	title: "Sign up for Cryptocurrency Price Tracker",
	description: "Track all your favorite cryptocurrencies - all in one place.",
}

interface Props {
	children: React.ReactNode
}

export default function layout({ children }: Props) {
	return (
		<div className="relative flex min-h-screen flex-row items-center justify-center bg-neutral-50/50 dark:bg-[#1c1c1c]">
			{children}
		</div>
	)
}
