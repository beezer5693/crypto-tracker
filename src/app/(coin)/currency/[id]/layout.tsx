import MainHeader from "@/components/home/mainheader/MainHeader"
import SubHeader from "../../../../components/home/subheader/SubHeader"

type Children = {
	children: React.ReactNode
}

export default function Layout({ children }: Children) {
	return (
		<div className="relative mx-auto flex min-h-screen flex-col items-center overflow-hidden bg-white pb-20 dark:bg-[#1c1c1c] sm:overflow-auto">
			<SubHeader />
			<MainHeader />
			{children}
		</div>
	)
}
