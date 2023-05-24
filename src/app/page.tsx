import MainHeader from "@/components/home/mainheader/MainHeader"
import SubHeader from "@/components/home/subheader/SubHeader"
import Hero from "@/components/home/hero/Hero"
import DataTableMain from "@/components/data-table/datatable"

export const revalidate = 60 * 5 // 5 minutes

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-white pb-20 dark:bg-[#1c1c1c]">
			<SubHeader />
			<MainHeader />
			<Hero />
			<DataTableMain />
		</main>
	)
}
