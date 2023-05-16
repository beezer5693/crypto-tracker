import MainHeader from "@/components/main/MainHeader"
import SubHeader from "@/components/main/SubHeader"
import Hero from "@/components/main/Hero"

export const revalidate = 60 * 60 // 1 hour

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-white dark:bg-[#1c1c1c]">
			<SubHeader />
			<MainHeader />
			<Hero />
		</main>
	)
}
