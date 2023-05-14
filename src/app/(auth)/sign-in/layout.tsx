import AuthHeader from "@/components/AuthHeader"
import PrivacyAndTerms from "@/components/PrivacyAndTerms"
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
			<AuthHeader>
				<Logo />
			</AuthHeader>
			{children}
			<PrivacyAndTerms />
		</div>
	)
}
