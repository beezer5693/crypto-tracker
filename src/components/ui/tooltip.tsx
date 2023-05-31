import * as Tooltip from "@radix-ui/react-tooltip"

type Props = {
	children: React.ReactNode
	content: React.ReactNode
	asChild?: boolean
	side?: "top" | "right" | "bottom" | "left"
	sideOffset?: number
}

const TooltipDemo = ({ children, content, side, sideOffset = 5, asChild }: Props) => {
	return (
		<Tooltip.Provider>
			<Tooltip.Root delayDuration={0}>
				<Tooltip.Trigger asChild={asChild}>{children}</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content
						side={side}
						className="TooltipContent z-50 rounded bg-white shadow-md shadow-neutral-400/30 dark:bg-[#252525] dark:text-neutral-300 dark:shadow-black/20"
						sideOffset={sideOffset}
					>
						{content}
						<Tooltip.Arrow className="TooltipArrow fill-white dark:fill-[#252525]" />
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	)
}

export default TooltipDemo
