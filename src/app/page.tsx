import MainHeader from "@/components/main/mainheader/MainHeader"
import SubHeader from "@/components/main/subheader/SubHeader"
import Hero from "@/components/main/hero/Hero"

export const revalidate = 60 * 5 // 5 minutes

export default function Home() {
	return (
		<main className="flex h-[400vh] min-h-screen flex-col bg-gradient-to-t from-white from-75% to-emerald-100/10 to-100% dark:from-[#1c1c1c] dark:from-75% dark:to-[#212121] dark:to-100%">
			<SubHeader />
			<MainHeader />
			<Hero />
		</main>
	)
}
