import Navbar from "@/components/home/navbar/Navbar"
import SubHeader from "../../components/home/subheader/SubHeader"
import Hero from "@/components/home/hero/Hero"
import DataTableMain from "@/components/data-table/datatable"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "coinDex",
	description: "Crypto market data, charts, prices, trades and volumes.",
}

export default async function Home() {
	return (
		<main className="mx-auto flex min-h-screen flex-col items-center overflow-x-hidden bg-white pb-20 dark:bg-[#1c1c1c]">
			<div className="sticky top-0 z-50 flex w-full flex-col-reverse sm:flex-col">
				<SubHeader />
				<Navbar />
			</div>
			{/* @ts-expect-error Async Server Component */}
			<Hero />
			{/* @ts-expect-error Async Server Component */}
			<DataTableMain />
		</main>
	)
}
