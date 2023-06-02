import MainHeader from "@/components/home/mainheader/MainHeader"
import SubHeader from "../../../components/home/subheader/subheader"

type Props = {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<main className="relative mx-auto flex min-h-screen flex-col items-center bg-white pb-20 dark:bg-[#1c1c1c]">
			{/* @ts-expect-error Async Server Component */}
			<SubHeader />
			<MainHeader />
			{children}
		</main>
	)
}
