"use client"

import { useEffect, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { authSignUpSchema } from "@/lib/validators/authform"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import GoogleAuth from "@/components/auth/GoogleAuth"
import DiscordAuth from "@/components/auth/DiscordAuth"
import axios from "axios"
import Link from "next/link"
import { Collapse } from "react-collapse"
import { cn } from "@/lib/utils"
import { Loader2, EyeOff, Eye, AlertCircle, Circle } from "lucide-react"
import { AiFillCheckCircle } from "react-icons/ai"

type ValidationType = {
	regex: RegExp
	isValidated: boolean
}

export default function SignUp() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [showPasswordValidation, setShowPasswordValidation] = useState<boolean>(false)
	const [passwordValidationCheck, setPasswordValidationCheck] = useState<ValidationType[]>([
		{ regex: /[A-Z]/, isValidated: false },
		{ regex: /[a-z]/, isValidated: false },
		{ regex: /[0-9]/, isValidated: false },
		{ regex: /[^A-Za-z0-9]/, isValidated: false },
		{ regex: /.{8,}/, isValidated: false },
	])

	const router = useRouter()
	const { toast } = useToast()

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<AuthFormType>({ resolver: zodResolver(authSignUpSchema) })

	// Watches password input value on each key press
	// This is fed into the handlePasswordValidation function
	// in the useEffect hook below to check if the password
	// meets the validation criteria
	const passwordInputValue = watch("password")

	useEffect(() => {
		const handlePasswordValidation = (inputVal: string) => {
			const value = inputVal
			const isValidated = passwordValidationCheck.map(validationCheck => {
				if (validationCheck.regex.test(value)) {
					validationCheck.isValidated = true
				} else {
					validationCheck.isValidated = false
				}
				return validationCheck
			})

			setPasswordValidationCheck(isValidated)
		}

		handlePasswordValidation(passwordInputValue)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [passwordInputValue])

	// Handles form submission
	const onSubmit: SubmitHandler<AuthFormType> = formData => {
		setIsLoading(true)
		axios
			.post("/api/register", formData)
			.then(() => {
				signIn("credentials", {
					...formData,
					redirect: false,
				})
				router.push("/")
			})
			.catch(error => {
				toast({
					description: error.response.data,
					variant: "error",
					duration: 100000,
				})
			})
			.finally(() => setIsLoading(false))
	}

	return (
		<main className="flex w-[330px] flex-1 flex-col items-center justify-center space-y-7 bg-transparent py-7 sm:w-[384px]">
			<div className="w-full space-y-2">
				<h1 className="text-2xl text-black dark:text-white sm:text-3xl">Get started</h1>
				<p className="text-xs font-semibold text-neutral-500 dark:text-white/70">Create a new account</p>
			</div>
			<div className="form-card w-full space-y-3">
				<form className="flex flex-col gap-3.5" onSubmit={handleSubmit(onSubmit)}>
					<div className="space-y-1.5">
						<label className="text-[.8rem] font-medium text-neutral-500 dark:text-white/80" htmlFor="firstname">
							First name
						</label>
						<div className="relative">
							<Input
								disabled={isLoading}
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
					<div className="space-y-1.5">
						<label className="text-[.8rem] font-medium text-neutral-500 dark:text-white/80" htmlFor="firstname">
							Last name
						</label>
						<div className="relative">
							<Input
								disabled={isLoading}
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
					<div className="space-y-1.5">
						<label className="text-[.8rem] font-medium text-neutral-500 dark:text-white/80" htmlFor="email">
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
					<div className="relative mb-4 space-y-1.5">
						<label className="text-[.8rem] font-medium text-neutral-500 dark:text-white/80" htmlFor="password">
							Password
						</label>
						<div className="space-y-1">
							<div className="peer relative">
								<Input
									disabled={isLoading}
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
								<Button
									type="button"
									onClick={showPassword ? () => setShowPassword(false) : () => setShowPassword(true)}
									className="absolute right-2 top-1/2 h-6 -translate-y-[50%] cursor-pointer rounded border border-neutral-300 bg-white/90 px-2.5 py-1 transition hover:bg-neutral-50 dark:border-neutral-700 dark:bg-[#303030] dark:hover:bg-[#373737] dark:focus:border-neutral-600"
								>
									{showPassword ? (
										<EyeOff className="h-4 w-4 cursor-pointer stroke-neutral-700 stroke-1 dark:stroke-neutral-300" />
									) : (
										<Eye className="h-4 w-4 cursor-pointer stroke-neutral-700 stroke-1 dark:stroke-neutral-300" />
									)}
								</Button>
								<AlertCircle
									className={cn("invisible absolute right-14 top-1/2 h-5 w-5 -translate-y-1/2 stroke-red-500", {
										visible: errors.password,
									})}
								/>
							</div>
							{errors.password && <p className="text-xs font-medium text-red-500">{errors.password.message}</p>}
							<Collapse isOpened={showPasswordValidation}>
								<div className="pt-3">
									<div className="flex items-center gap-2">
										{passwordValidationCheck[0].isValidated ? (
											<AiFillCheckCircle className="h-[13.5px] w-[13.5px] fill-neutral-500 dark:fill-neutral-300" />
										) : (
											<Circle className="h-[13.5px] w-[13.5px] stroke-neutral-400 stroke-[2.5px] dark:stroke-neutral-400/80" />
										)}
										<span
											className={cn("mt-0.5 text-xs font-semibold text-neutral-400 dark:text-neutral-400/80", {
												"text-neutral-500 dark:text-neutral-300": passwordValidationCheck[0].isValidated,
											})}
										>
											Uppercase letter
										</span>
									</div>
									<div className="flex items-center gap-2">
										{passwordValidationCheck[1].isValidated ? (
											<AiFillCheckCircle className="h-[13.5px] w-[13.5px] fill-neutral-500 dark:fill-neutral-300" />
										) : (
											<Circle className="h-[13.5px] w-[13.5px] stroke-neutral-400 stroke-[2.5px] dark:stroke-neutral-400/80" />
										)}
										<span
											className={cn("mt-0.5 text-xs font-semibold text-neutral-400 dark:text-neutral-400/80", {
												"text-neutral-500 dark:text-neutral-300": passwordValidationCheck[1].isValidated,
											})}
										>
											Lowercase letter
										</span>
									</div>
									<div className="flex items-center gap-2">
										{passwordValidationCheck[2].isValidated ? (
											<AiFillCheckCircle className="h-[13.5px] w-[13.5px] fill-neutral-500 dark:fill-neutral-300" />
										) : (
											<Circle className="h-[13.5px] w-[13.5px] stroke-neutral-400 stroke-[2.5px] dark:stroke-neutral-400/80" />
										)}
										<span
											className={cn("mt-0.5 text-xs font-semibold text-neutral-400 dark:text-neutral-400/80", {
												"text-neutral-500 dark:text-neutral-300": passwordValidationCheck[2].isValidated,
											})}
										>
											Number
										</span>
									</div>
									<div className="flex items-center gap-2">
										{passwordValidationCheck[3].isValidated ? (
											<AiFillCheckCircle className="h-[13.5px] w-[13.5px] fill-neutral-500 dark:fill-neutral-300" />
										) : (
											<Circle className="h-[13.5px] w-[13.5px] stroke-neutral-400 stroke-[2.5px] dark:stroke-neutral-400/80" />
										)}
										<span
											className={cn("mt-0.5 text-xs font-semibold text-neutral-400 dark:text-neutral-400/80", {
												"text-neutral-500 dark:text-neutral-300": passwordValidationCheck[3].isValidated,
											})}
										>
											{"Special character (e.g. !?<>@#$%)"}
										</span>
									</div>
									<div className="flex items-center gap-2">
										{passwordValidationCheck[4].isValidated ? (
											<AiFillCheckCircle className="h-[13.5px] w-[13.5px] fill-neutral-500 dark:fill-neutral-300" />
										) : (
											<Circle className="h-[13.5px] w-[13.5px] stroke-neutral-400 stroke-[2.5px] dark:stroke-neutral-400/80" />
										)}
										<span
											className={cn("mt-0.5 text-xs font-semibold text-neutral-400 dark:text-neutral-400/80", {
												"text-neutral-500 dark:text-neutral-300": passwordValidationCheck[4].isValidated,
											})}
										>
											{"> 7 characters"}
										</span>
									</div>
								</div>
							</Collapse>
						</div>
					</div>
					<Button
						disabled={isLoading}
						type="submit"
						className="mb-2 gap-2 border-x border-t border-emerald-400 bg-emerald-600 text-white shadow-sm transition duration-300 ease-out hover:bg-emerald-400 dark:border-emerald-500 dark:bg-emerald-500/60 dark:hover:border-emerald-500 dark:hover:bg-emerald-500"
					>
						{isLoading ? (
							<>
								<Loader2 className="h-4 w-4 animate-spin text-white" />
								<span className="text-[.95rem] text-white">Signing up...</span>
							</>
						) : (
							<span className="text-[.95rem] text-white">Sign Up</span>
						)}
					</Button>
				</form>
				<div className="flex items-center justify-center gap-2 pb-2">
					<div className="flex-1 border-b dark:border-neutral-600/60"></div>
					<span className="mb-0.5 text-[.85rem] font-medium text-black dark:text-white/90">or</span>
					<div className="flex-1 border-b dark:border-neutral-600/60"></div>
				</div>
				<div className="space-y-2.5">
					<GoogleAuth />
					<DiscordAuth />
				</div>
				<div className="flex justify-center pt-3">
					<p className="py-2 text-[.8rem] font-medium text-neutral-500 dark:text-neutral-400/90">
						Have an account?
						<Link
							href={"/sign-in"}
							className="ml-1 text-[.8rem] font-medium text-neutral-800 underline transition hover:text-neutral-500 dark:text-white/90 dark:hover:text-white/70"
						>
							Sign In Now
						</Link>
					</p>
				</div>
			</div>
		</main>
	)
}
