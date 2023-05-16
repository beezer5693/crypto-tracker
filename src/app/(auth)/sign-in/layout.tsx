import Header from "@/components/Header"
import PrivacyAndTerms from "@/components/auth/PrivacyAndTerms"
import Logo from "@/components/Logo"

export const metadata = {
	title: "CoinTracker",
	description: "Track all your favorite cryptocurrencies - all in one place.",
}

interface Props {
	children: React.ReactNode
}

export default function layout({ children }: Props) {
	return (
		<div className="relative flex min-h-screen flex-col items-center justify-between bg-white px-6 py-7 dark:bg-[#1c1c1c]">
			<Header>
				<Logo height={25} width={25} className="text-[1.1rem]" />
			</Header>
			{children}
			<PrivacyAndTerms />
		</div>
	)
}
