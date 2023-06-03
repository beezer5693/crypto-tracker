import MainHeader from "@/components/home/mainheader/MainHeader"
import SubHeader from "../../components/home/subheader/SubHeader"
import Hero from "@/components/home/hero/Hero"
import DataTableMain from "@/components/data-table/datatable"

export default async function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-center bg-white pb-20 dark:bg-[#1c1c1c]">
			<SubHeader />
			<MainHeader />
			{/* @ts-expect-error Async Server Component */}
			<Hero />
			{/* @ts-expect-error Async Server Component */}
			<DataTableMain />
		</main>
	)
}
