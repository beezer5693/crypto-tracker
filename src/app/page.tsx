import MainHeader from "@/components/main/mainheader/MainHeader"
import SubHeader from "@/components/main/subheader/SubHeader"
import Hero from "@/components/main/hero/Hero"
import DataTableMain from "@/components/DataTable"

export const revalidate = 60 * 5 // 5 minutes

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-gradient-to-t from-white from-90% to-[#f8f9fa] to-100% pb-20 dark:from-[#1c1c1c] dark:from-75% dark:to-[#212121] dark:to-100%">
			<SubHeader />
			<MainHeader />
			<Hero />
			<DataTableMain />
		</main>
	)
}
