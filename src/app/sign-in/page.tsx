"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { authSignInSchema } from "@/lib/validators/authform"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { AlertCircle, ChevronRight, Eye, EyeOff, Loader2 } from "lucide-react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import GoogleAuth from "@/components/GoogleAuth"
import FacebookAuth from "@/components/FacebookAuth"

export default function Page() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthFormType>({ resolver: zodResolver(authSignInSchema) })

	const { toast } = useToast()

	// Runs the sign in function from next-auth
	// See @/api/auth/[...nextauth] for details
	const onSubmit: SubmitHandler<AuthFormType> = data => {
		setIsLoading(true)
		signIn("credentials", {
			...data,
			redirect: false,
		})
			.then(cb => {
				if (cb?.error) {
					toast({
						description: "Invalid login credentials",
						duration: 100000,
						variant: "error",
					})
				}
				if (cb?.ok && !cb?.error) {
					console.log("logged in")
				}
			})
			.finally(() => setIsLoading(false))
	}

	return (
		<>
			<div className="mx-auto flex w-[400px] flex-col items-center space-y-7 bg-transparent">
				<div className="w-full space-y-2">
					<h1 className="text-3xl text-black dark:text-white">Welcome back</h1>
					<p className="text-xs font-semibold text-neutral-500 dark:text-white/70">Sign in to your account</p>
				</div>
				<div className="form-card w-full space-y-3">
					<form className="flex flex-col gap-3.5" onSubmit={handleSubmit(onSubmit)}>
						<div className="space-y-1">
							<label className="text-xs font-medium text-neutral-500 dark:text-white/80" htmlFor="email">
								Email
							</label>
							<div className="relative">
								<Input
									disabled={isLoading}
									className={cn({
										"border-red-500 bg-red-500/20 placeholder:text-red-500/80 dark:border-red-900 dark:bg-[#1f1315] dark:placeholder:text-red-600/60":
											errors.email,
									})}
									{...register("email")}
									id="email"
									name="email"
									placeholder={"you@example.com"}
								/>
								<AlertCircle
									className={cn("invisible absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 stroke-red-500", {
										visible: errors.email,
									})}
								/>
							</div>
							{errors.email && <p className="text-xs font-medium text-red-500">{errors.email.message}</p>}
						</div>
						<div className="relative mb-4 space-y-1">
							<label className="text-xs font-medium text-neutral-500 dark:text-white/80" htmlFor="password">
								Password
							</label>
							<div className="space-y-2">
								<div className="group relative">
									<Input
										disabled={isLoading}
										className={cn({
											"border-red-500 bg-red-500/20 placeholder:text-red-500/80 dark:border-red-900 dark:bg-[#1f1315] dark:placeholder:text-red-600/60":
												errors.password,
										})}
										{...register("password")}
										type={showPassword ? "text" : "password"}
										id="password"
										name="password"
										placeholder="●●●●●●●●"
									/>
									<button
										type="button"
										onClick={showPassword ? () => setShowPassword(false) : () => setShowPassword(true)}
										className="absolute right-2 top-1/2 -translate-y-[50%] cursor-pointer rounded border border-neutral-300 bg-white/90 px-2.5 py-1 transition hover:bg-white/40 dark:border-x dark:border-b dark:border-t dark:border-neutral-600/60 dark:border-b-neutral-700/60 dark:bg-[#303030] dark:hover:bg-[#373737]"
									>
										{showPassword ? (
											<EyeOff className="h-4 w-4 cursor-pointer stroke-neutral-700 stroke-1 dark:stroke-neutral-300" />
										) : (
											<Eye className="h-4 w-4 cursor-pointer stroke-neutral-700 stroke-1 dark:stroke-neutral-300" />
										)}
									</button>
									<AlertCircle
										className={cn("invisible absolute right-14 top-1/2 h-5 w-5 -translate-y-1/2 stroke-red-500", {
											visible: errors.password,
										})}
									/>
								</div>
								{errors.password && <p className="text-xs font-medium text-red-500">{errors.password.message}</p>}
							</div>
						</div>
						<Button
							disabled={isLoading}
							type="submit"
							className="group relative mb-2 w-full gap-2 border border-emerald-600 bg-emerald-600/80 px-10 text-base text-white shadow-sm transition duration-300 ease-in-out hover:border-emerald-500 hover:bg-emerald-500"
						>
							{isLoading ? (
								<>
									<Loader2 className="h-4 w-4 animate-spin text-white" />
									<span className="text-[15px] text-white">Signing in...</span>
								</>
							) : (
								<span className="text-[15px] text-white">Sign In</span>
							)}
							<ChevronRight className="absolute right-[150px] top-1/2 h-[15px] w-[15px] -translate-y-1/2 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100" />
						</Button>
					</form>
					<div className="flex items-center justify-center gap-2 pb-2">
						<div className="w-1/2 border-b dark:border-neutral-600/60"></div>
						<span className="mb-0.5 text-sm text-black dark:text-white/90">or</span>
						<div className="w-1/2 border-b dark:border-neutral-600/60"></div>
					</div>
					<div className="space-y-2.5">
						<GoogleAuth />
						<FacebookAuth />
					</div>
					<div className="flex justify-center pt-3">
						<p className="py-2 text-[13px] font-medium text-neutral-500 dark:text-neutral-400/90">
							{"Don't have an account?"}
							<Link
								href={"/sign-up"}
								className="ml-2 text-[13px] font-medium text-neutral-800 underline transition hover:text-neutral-500 dark:text-white/90 dark:hover:text-white/70"
							>
								Sign Up Now
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
