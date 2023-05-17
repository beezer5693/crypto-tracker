import HeroTitle from "./HeroTitle"
import HeroCards from "./HeroCards"

export default function Hero() {
	return (
		<section className="w-full bg-transparent px-5 py-8">
			<div className="mx-auto flex max-w-screen-2xl flex-col gap-2">
				<HeroTitle />
				<HeroCards />
			</div>
		</section>
	)
}
