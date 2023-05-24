import HeroTitle from "./HeroTitle"
import HeroCards from "./HeroCards"

export default function Hero() {
	return (
		<section className="w-full border-b border-neutral-200/50 bg-neutral-100/50 px-5 dark:border-neutral-700/50 dark:bg-[#1a1a1a]">
			<div className="relative mx-auto max-w-screen-2xl flex-col justify-start pb-9 pt-7">
				<HeroTitle />
				<HeroCards />
			</div>
		</section>
	)
}
