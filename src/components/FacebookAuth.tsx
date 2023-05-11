import { FaFacebookF } from "react-icons/fa"
import { Button } from "./ui/button"

export default function FacebookAuth() {
	return (
		<Button className="relative w-full gap-3 border border-neutral-300 bg-white text-[14px] shadow-sm transition duration-300 ease-in-out hover:border-neutral-400 hover:ring-2 hover:ring-neutral-200/80 dark:border-neutral-600/40 dark:bg-neutral-700/50 dark:shadow-sm dark:shadow-black/30 dark:hover:border-neutral-600 dark:hover:ring-neutral-700/50">
			<FaFacebookF className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 stroke-neutral-700 dark:stroke-neutral-200" />
			<span className="text-neutral-700 dark:text-neutral-200">Continue with Facebook</span>
		</Button>
	)
}
