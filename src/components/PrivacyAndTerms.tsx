export default function PrivacyAndTerms() {
	return (
		<p className="w-[350px] text-center text-[.70rem] font-medium text-neutral-500 dark:text-neutral-400/70 sm:w-[400px]">
			{"By continuing, your agree to Cointracker's"}{" "}
			<span className="cursor-pointer underline hover:text-neutral-700 dark:hover:text-neutral-300/80">
				Terms of Service
			</span>{" "}
			and{" "}
			<span className="cursor-pointer underline hover:text-neutral-700 dark:hover:text-neutral-300/80">
				Privacy Policy
			</span>{" "}
			and to receive periodic emails with updates.
		</p>
	)
}
