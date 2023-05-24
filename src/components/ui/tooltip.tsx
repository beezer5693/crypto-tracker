import * as Tooltip from "@radix-ui/react-tooltip"

type Props = {
	children: React.ReactNode
	content: React.ReactNode
	asChild?: boolean
	side?: "top" | "right" | "bottom" | "left"
}

const TooltipDemo = ({ children, content, side, asChild }: Props) => {
	return (
		<Tooltip.Provider>
			<Tooltip.Root delayDuration={0}>
				<Tooltip.Trigger asChild={asChild}>{children}</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content
						side={side}
						className="TooltipContent rounded-md bg-white shadow-lg shadow-neutral-400/30 dark:bg-[#2c2c2c] dark:text-neutral-300 dark:shadow-black/20"
						sideOffset={5}
					>
						{content}
						<Tooltip.Arrow className="TooltipArrow fill-white dark:fill-[#2c2c2c]" />
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	)
}

export default TooltipDemo
