"use client"

import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { XCircle } from "lucide-react"

export function Toaster() {
	const { toasts } = useToast()

	return (
		<ToastProvider>
			{toasts.map(function ({ id, title, description, action, ...props }) {
				return (
					<Toast key={id} {...props}>
						<div className="grid place-content-center">
							{title && <ToastTitle>{title}</ToastTitle>}
							<div className="flex items-center justify-between gap-5">
								<div className="flex items-center gap-2">
									{props.variant === "error" && <XCircle className="h-5 w-5 text-red-500" />}
									{description && <ToastDescription>{description}</ToastDescription>}
								</div>
								<div className="mt-0.5 grid place-content-center rounded-md px-[0.5px] transition hover:bg-neutral-200/70 dark:hover:bg-neutral-700/50">
									<ToastClose />
								</div>
							</div>
						</div>
						{action}
					</Toast>
				)
			})}
			<ToastViewport />
		</ToastProvider>
	)
}
