import Navbar from "@/components/home/navbar/Navbar"
import SubHeader from "@/components/home/subheader/SubHeader"
import { Metadata } from "next"

type Props = {
	children: React.ReactNode
}

export const metadata: Metadata = {
	title: "coinDex",
	description: "Crypto market data, charts, prices, trades and volumes.",
}

export default function Layout({ children }: Props) {
	return (
		<main className="relative mx-auto flex min-h-screen flex-col items-center bg-white pb-20 dark:bg-[#1c1c1c]">
			<div className="flex w-full flex-col-reverse sm:flex-col">
				<SubHeader />
				<Navbar />
			</div>
			{children}
		</main>
	)
}
