import MainHeader from "@/components/home/mainheader/MainHeader"
import SubHeader from "@/components/home/subheader/subheader"

type Children = {
	children: React.ReactNode
}

export default function Layout({ children }: Children) {
	return (
		<div className="relative mx-auto flex min-h-screen flex-col items-center bg-white dark:bg-[#1c1c1c]">
			{/* @ts-expect-error Async Server Component */}
			<SubHeader />
			<MainHeader />
			{children}
		</div>
	)
}
