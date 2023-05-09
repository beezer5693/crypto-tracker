"use client"

import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { authSchema } from "@/lib/validators/authform"
import AuthHeader from "./components/AuthHeader"
import axios from "axios"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Loader2, EyeOff, Eye, ChevronRight, AlertCircle, Circle } from "lucide-react"
import { AiFillCheckCircle } from "react-icons/ai"
import { FaGoogle, FaFacebookF } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { toast } from "react-hot-toast"

type ValidationType = {
	regex: RegExp
	isValid: boolean
}

export default function SignUp() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [showPasswordValidation, setShowPasswordValidation] = useState<boolean>(false)
	const [passwordValidation, setPasswordValidation] = useState<ValidationType[]>([
		{ regex: /[A-Z]/, isValid: false },
		{ regex: /[a-z]/, isValid: false },
		{ regex: /[0-9]/, isValid: false },
		{ regex: /[^A-Za-z0-9]/, isValid: false },
		{ regex: /.{8,}/, isValid: false },
	])

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<AuthSignUpFormType>({ resolver: zodResolver(authSchema) })

	let passwordInputValue = watch("password")

	useEffect(() => {
		const handlePasswordValidation = (inputVal: string) => {
			const value = inputVal
			const isValid = passwordValidation.map(validCheck => {
				if (validCheck.regex.test(value)) {
					validCheck.isValid = true
				} else {
					validCheck.isValid = false
				}
				return validCheck
			})
			setPasswordValidation(isValid)
		}

		handlePasswordValidation(passwordInputValue)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [passwordInputValue])

	const onSubmit: SubmitHandler<AuthSignUpFormType> = data => {
		setIsLoading(true)
		axios
			.post("/api/register", data)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				console.log(err)
				toast.error("Something went wrong, please try again later")
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	return (
		<>
			<AuthHeader />
			<div className="mx-auto flex max-w-sm flex-col items-center space-y-7 rounded-md bg-transparent">
				<div className="w-full space-y-2">
					<h1 className="text-2xl font-medium text-black dark:text-white">Get started</h1>
					<p className="text-xs font-semibold text-neutral-500 dark:text-white/70">Create a new account</p>
				</div>
				<div className="form-card w-full space-y-3">
					<form className="flex flex-col gap-3.5" onSubmit={handleSubmit(onSubmit)}>
						<div className="space-y-1">
							<label className="text-xs font-medium text-neutral-500 dark:text-white/80" htmlFor="firstname">
								First name
							</label>
							<div className="relative">
								<Input
									className={cn({
										"border-red-500 bg-red-500/20 placeholder:text-red-500/80 dark:border-red-900 dark:bg-[#1f1315] dark:placeholder:text-red-600/60":
											errors.firstname,
									})}
									{...register("firstname", { required: "First name is a required field" })}
									id="firstname"
									name="firstname"
									placeholder="Enter your first name"
								/>
								<AlertCircle
									className={cn("invisible absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 stroke-red-500", {
										visible: errors.firstname,
									})}
								/>
							</div>
							{errors.firstname && <p className="text-xs font-medium text-red-500">{errors.firstname.message}</p>}
						</div>
						<div className="space-y-1">
							<label className="text-xs font-medium text-neutral-500 dark:text-white/80" htmlFor="firstname">
								Last name
							</label>
							<div className="relative">
								<Input
									className={cn({
										"border-red-500 bg-red-500/20 placeholder:text-red-500/80 dark:border-red-900 dark:bg-[#1f1315] dark:placeholder:text-red-600/60":
											errors.lastname,
									})}
									{...register("lastname")}
									id="lastname"
									name="lastname"
									placeholder="Enter your last name"
								/>
								<AlertCircle
									className={cn("invisible absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 stroke-red-500", {
										visible: errors.lastname,
									})}
								/>
							</div>
							{errors.lastname && <p className="text-xs font-medium text-red-500">{errors.lastname.message}</p>}
						</div>
						<div className="space-y-1">
							<label className="text-xs font-medium text-neutral-500 dark:text-white/80" htmlFor="email">
								Email
							</label>
							<div className="relative">
								<Input
									className={cn({
										"border-red-500 bg-red-500/20 placeholder:text-red-500/80 dark:border-red-900 dark:bg-[#1f1315] dark:placeholder:text-red-600/60":
											errors.email,
									})}
									{...register("email")}
									id="email"
									name="email"
									placeholder="you@example.com"
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
										onFocus={() => setShowPasswordValidation(true)}
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
									<div className="absolute right-2 top-1/2 -translate-y-[50%] cursor-pointer rounded border border-neutral-300 bg-white/90 px-2.5 py-1 transition hover:bg-white/40 dark:border-x dark:border-b dark:border-t dark:border-neutral-600/60 dark:border-b-neutral-700/60 dark:bg-[#303030] dark:hover:bg-[#373737]">
										{showPassword ? (
											<EyeOff
												onClick={() => setShowPassword(false)}
												className="h-4 w-4 cursor-pointer stroke-neutral-700 stroke-1 dark:stroke-neutral-300"
											/>
										) : (
											<Eye
												onClick={() => setShowPassword(true)}
												className="h-4 w-4 cursor-pointer stroke-neutral-700 stroke-1 dark:stroke-neutral-300"
											/>
										)}
									</div>
									<AlertCircle
										className={cn("invisible absolute right-14 top-1/2 h-5 w-5 -translate-y-1/2 stroke-red-500", {
											visible: errors.password,
										})}
									/>
								</div>
								{errors.password && <p className="text-xs font-medium text-red-500">{errors.password.message}</p>}
								{showPasswordValidation && (
									<div className="space-y-1 pt-3">
										<div className="flex items-center gap-2">
											{passwordValidation[0].isValid ? (
												<AiFillCheckCircle className="h-[13.5px] w-[13.5px] fill-neutral-500 dark:fill-neutral-300" />
											) : (
												<Circle className="h-[13.5px] w-[13.5px] stroke-neutral-400 stroke-[2.5px] dark:stroke-neutral-400/80" />
											)}
											<span
												className={cn("mt-0.5 text-xs font-semibold text-neutral-400 dark:text-neutral-400/80", {
													"text-neutral-500 dark:text-neutral-300": passwordValidation[0].isValid,
												})}
											>
												Uppercase letter
											</span>
										</div>
										<div className="flex items-center gap-2">
											{passwordValidation[1].isValid ? (
												<AiFillCheckCircle className="h-[13.5px] w-[13.5px] fill-neutral-500 dark:fill-neutral-300" />
											) : (
												<Circle className="h-[13.5px] w-[13.5px] stroke-neutral-400 stroke-[2.5px] dark:stroke-neutral-400/80" />
											)}
											<span
												className={cn("mt-0.5 text-xs font-semibold text-neutral-400 dark:text-neutral-400/80", {
													"text-neutral-500 dark:text-neutral-300": passwordValidation[1].isValid,
												})}
											>
												Lowercase letter
											</span>
										</div>
										<div className="flex items-center gap-2">
											{passwordValidation[2].isValid ? (
												<AiFillCheckCircle className="h-[13.5px] w-[13.5px] fill-neutral-500 dark:fill-neutral-300" />
											) : (
												<Circle className="h-[13.5px] w-[13.5px] stroke-neutral-400 stroke-[2.5px] dark:stroke-neutral-400/80" />
											)}
											<span
												className={cn("mt-0.5 text-xs font-semibold text-neutral-400 dark:text-neutral-400/80", {
													"text-neutral-500 dark:text-neutral-300": passwordValidation[2].isValid,
												})}
											>
												Number
											</span>
										</div>
										<div className="flex items-center gap-2">
											{passwordValidation[3].isValid ? (
												<AiFillCheckCircle className="h-[13.5px] w-[13.5px] fill-neutral-500 dark:fill-neutral-300" />
											) : (
												<Circle className="h-[13.5px] w-[13.5px] stroke-neutral-400 stroke-[2.5px] dark:stroke-neutral-400/80" />
											)}
											<span
												className={cn("mt-0.5 text-xs font-semibold text-neutral-400 dark:text-neutral-400/80", {
													"text-neutral-500 dark:text-neutral-300": passwordValidation[3].isValid,
												})}
											>
												{"Special character (e.g. !?<>@#$%)"}
											</span>
										</div>
										<div className="flex items-center gap-2">
											{passwordValidation[4].isValid ? (
												<AiFillCheckCircle className="h-[13.5px] w-[13.5px] fill-neutral-500 dark:fill-neutral-300" />
											) : (
												<Circle className="h-[13.5px] w-[13.5px] stroke-neutral-400 stroke-[2.5px] dark:stroke-neutral-400/80" />
											)}
											<span
												className={cn("mt-0.5 text-xs font-semibold text-neutral-400 dark:text-neutral-400/80", {
													"text-neutral-500 dark:text-neutral-300": passwordValidation[4].isValid,
												})}
											>
												{"> 7 characters"}
											</span>
										</div>
									</div>
								)}
							</div>
						</div>
						<Button
							disabled={isLoading}
							type="submit"
							className="group relative w-full gap-2 bg-emerald-500 px-10 text-base text-white shadow-sm transition-all hover:opacity-90 hover:ring-2 hover:ring-transparent"
						>
							{isLoading ? (
								<>
									<Loader2 className="h-4 w-4 animate-spin text-white" />
									<span className="text-[15px] text-white">Signing in...</span>
								</>
							) : (
								<span className="text-[15px] text-white">Sign In</span>
							)}
							<ChevronRight className="absolute right-[136px] top-1/2 h-[15px] w-[15px] -translate-y-1/2 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100" />
						</Button>
					</form>
					<p className="py-2 text-[13px] font-medium text-neutral-500 dark:text-neutral-400/60">
						Already have an account?
						<Link
							href={"/"}
							className="ml-2 text-[13px] font-medium text-neutral-800 underline transition hover:text-neutral-500 dark:text-white/90 dark:hover:text-white/70"
						>
							Sign Up Now
						</Link>
					</p>
					<div className="flex items-center justify-center gap-2 pb-2">
						<div className="w-1/2 border-b dark:border-neutral-600"></div>
						<span className="mb-0.5 text-sm text-black dark:text-white/90">or</span>
						<div className="w-1/2 border-b dark:border-neutral-600"></div>
					</div>
					<div className="space-y-2.5 pt-1.5">
						<Button className="relative w-full gap-3 border border-neutral-300 bg-white text-[14px] shadow-sm transition duration-300 ease-in-out hover:border-neutral-400 hover:ring-2 hover:ring-neutral-200/80 dark:border-neutral-600/40 dark:bg-neutral-700/50 dark:shadow-sm dark:shadow-black/30 dark:hover:border-neutral-600 dark:hover:ring-neutral-700/50">
							<FaGoogle className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 fill-neutral-700 dark:fill-neutral-200" />
							<span className="mt-1 text-neutral-700 dark:text-neutral-200">Continue with Google</span>
						</Button>
						<Button className="relative w-full gap-3 border border-neutral-300 bg-white text-[14px] shadow-sm transition duration-300 ease-in-out hover:border-neutral-400 hover:ring-2 hover:ring-neutral-200/80 dark:border-neutral-600/40 dark:bg-neutral-700/50 dark:shadow-sm dark:shadow-black/30 dark:hover:border-neutral-600 dark:hover:ring-neutral-700/50">
							<FaFacebookF className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 fill-neutral-700 dark:fill-neutral-200" />
							<span className="mt-1 text-neutral-700 dark:text-neutral-200">Continue with Facebook</span>
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}
