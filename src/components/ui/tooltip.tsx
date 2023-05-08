import * as Tooltip from "@radix-ui/react-tooltip"

const DefaultTooltip = ({ children, showPassword }) => {
	return (
		<Tooltip.Provider delayDuration={100}>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content
						className="select-none rounded-[4px] bg-white border-t border-l border-r px-3 py-2 text-center text-xs font-medium text-slate-700 shadow-md shadow-slate-600/20 dark:shadow-black/20 dark:bg-black dark:text-white/90 dark:border-black"
						sideOffset={0}
					>
						{showPassword ? (
							<span>
								Hide <br /> password
							</span>
						) : (
							<span>
								Show <br /> password
							</span>
						)}
						<Tooltip.Arrow className="fill-white dark:fill-black z-10" />
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	)
}
export default DefaultTooltip
