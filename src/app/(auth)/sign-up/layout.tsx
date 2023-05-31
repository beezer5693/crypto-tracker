import Header from "@/components/misc/Header"
import PrivacyAndTerms from "@/app/(auth)/components/PrivacyAndTerms"
import Logo from "@/components/misc/Logo"

export const metadata = {
	title: "CoinTracker",
	description: "Track all your favorite cryptocurrencies - all in one place.",
}

interface Props {
	children: React.ReactNode
}

export default function layout({ children }: Props) {
	return (
		<div className="relative flex min-h-screen flex-col items-center justify-between gap-10 bg-white px-6 py-7 dark:bg-[#1c1c1c]">
			<Header>
				<Logo height={25} width={25} className="text-[1.1rem]" />
			</Header>
			{children}
			<PrivacyAndTerms />
		</div>
	)
}
