import React from "react"
import Logo from "@/components/misc/Logo"
import Link from "next/link"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import { useSession, signOut } from "next-auth/react"
import { useTheme } from "next-themes"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ChevronDown, Coins, Gamepad2, LogOut, Moon, Star, Sun, X } from "lucide-react"
import { set } from "zod"

type MobileNavMenuProps = {
	menuOpen: boolean
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

async function getCategoryMetaData() {
	const res = await fetch("/api/crypto/meta-data?id=1027,1839,5426,5805,6636")
	return res.json()
}

export default function MobileNavMenu({ menuOpen, setMenuOpen }: MobileNavMenuProps) {
	const [metaData, setMetaData] = React.useState<any[]>([])
	const [mounted, setMounted] = React.useState(false)
	const [isChecked, setIsChecked] = React.useState(false)

	const session = useSession()
	const { theme, setTheme } = useTheme()

	const {
		data: categoryMetaData,
		isLoading: categoryMetaDataIsLoading,
		isFetching: categoryMetaDataIsFetching,
		isError: categoryMetaDataError,
	} = useQuery({
		queryKey: ["categoryMetaData"],
		queryFn: () => getCategoryMetaData(),
	})

	React.useEffect(() => {
		if (categoryMetaData?.data) {
			setMetaData(Object.values(categoryMetaData.data).map((coin: any) => coin))
		}
	}, [categoryMetaData])

	React.useEffect(() => {
		setMounted(true)
	}, [])

	React.useEffect(() => {
		if (theme === "dark") {
			setIsChecked(true)
		} else {
			setIsChecked(false)
		}
	}, [isChecked, theme])

	function handleLogout() {
		signOut()
		setMenuOpen(false)
	}

	function handleThemeChange() {
		if (isChecked) {
			setIsChecked(false)
			setTheme("light")
		} else {
			setIsChecked(true)
			setTheme("dark")
		}
	}

	if (!mounted) return null

	return (
		<div
			className={
				menuOpen
					? "fixed left-0 top-0 z-50 flex h-full w-full flex-col justify-between overflow-y-scroll bg-neutral-50 pb-10 duration-300 ease-in dark:bg-[#1c1c1c] sm:hidden"
					: "fixed left-[-100%] top-0 z-50 flex h-full w-full flex-col overflow-y-auto bg-white dark:bg-[#1c1c1c] sm:hidden"
			}
		>
			<div>
				<div className="flex w-full items-center justify-between border-b border-neutral-200/60 bg-white p-4 dark:border-neutral-700/50 dark:bg-[#1c1c1c]">
					<Logo height={20} width={20} />
					<div
						className="group cursor-pointer rounded p-0.5 transition duration-200 ease-out hover:bg-neutral-200/60 hover:dark:bg-neutral-700/50"
						onClick={() => setMenuOpen(false)}
					>
						<X
							className="stroke-neutral-500 stroke-2 transition duration-200 ease-out group-hover:stroke-neutral-800 dark:stroke-neutral-400 group-hover:dark:stroke-neutral-100"
							size={20}
						/>
					</div>
				</div>
				<div className="px-5">
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger className="[&[data-state=open]>svg]:-rotate-180">
								Categories
								<ChevronDown className="h-4 w-4 stroke-neutral-600 transition-transform duration-200 dark:stroke-neutral-400" />
							</AccordionTrigger>
							<AccordionContent>
								<div className="mb-5">
									<p className="text-neutral-600 dark:text-neutral-400">
										We have created an index for each cryptocurrency category. Categories are ranked by market cap.
										Click on a crypto category name to see the constituent parts of the index and their recent price
										performance.
									</p>
								</div>
								<div className="space-x-2">
									<Link href={"/category/618c0beeb7dd913155b462f9"}>
										<div className="flex items-center gap-3">
											{!!metaData.length && (
												<Image src={metaData[0].logo} className="rounded-full" width={25} height={25} alt="coin logo" />
											)}
											<p className="font-medium text-neutral-800 dark:text-neutral-100">Ethereum</p>
										</div>
									</Link>
									<Link href={"/category/60308028d2088f200c58a005"}>
										<div className="flex items-center gap-3">
											{!!metaData.length && (
												<Image src={metaData[1].logo} className="rounded-full" width={25} height={25} alt="coin logo" />
											)}
											<p className="font-medium text-neutral-800 dark:text-neutral-100">BNB Chain</p>
										</div>
									</Link>
									<Link href={"/category/6051bc098a9b3f285eec4d40"}>
										<div className="flex items-center gap-3">
											{!!metaData.length && (
												<Image src={metaData[3].logo} className="rounded-full" width={25} height={25} alt="coin logo" />
											)}
											<p className="font-medium text-neutral-800 dark:text-neutral-100">Avalanche</p>
										</div>
									</Link>
									<Link href={"/category/601cf8d2d8fd860e4ea5d96f"}>
										<div className="flex items-center gap-3">
											{!!metaData.length && (
												<Image src={metaData[4].logo} className="rounded-full" width={25} height={25} alt="coin logo" />
											)}
											<p className="font-medium text-neutral-800 dark:text-neutral-100">Polkadot</p>
										</div>
									</Link>
									<Link href={"/category/60521ff1df5d3f36b84fbb61"}>
										<div className="flex items-center gap-3">
											{!!metaData.length && (
												<Image src={metaData[2].logo} className="rounded-full" width={25} height={25} alt="coin logo" />
											)}
											<p className="font-medium text-neutral-800 dark:text-neutral-100">Solana</p>
										</div>
									</Link>
									<Link href={"/category/604f2753ebccdd50cd175fc1"}>
										<div className="flex items-center gap-3">
											<div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-neutral-800 dark:bg-white">
												<Coins className="h-4 w-4 text-neutral-100 dark:text-neutral-800" />
											</div>
											<p className="font-medium text-neutral-800 dark:text-neutral-100">Stablecoins</p>
										</div>
									</Link>
									<Link href={"/category/6051a82166fc1b42617d6dc1"}>
										<div className="flex items-center gap-3">
											<div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-neutral-800 dark:bg-white">
												<Gamepad2 className="h-4 w-4 text-neutral-100 dark:text-neutral-800" />
											</div>
											<p className="font-medium text-neutral-800 dark:text-neutral-100">Gaming</p>
										</div>
									</Link>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>
								Exchanges
								<ChevronDown className="h-4 w-4 stroke-neutral-600 transition-transform duration-200 dark:stroke-neutral-400" />
							</AccordionTrigger>
						</AccordionItem>
						<AccordionItem value="item-3">
							<Link href={"/watchlist"}>
								<AccordionTrigger>
									<div className="flex items-center gap-2">
										<Star className="h-4 w-4 fill-neutral-800 stroke-neutral-800 dark:fill-neutral-100 dark:stroke-neutral-100" />
										Watchlist
									</div>
								</AccordionTrigger>
							</Link>
						</AccordionItem>
					</Accordion>
				</div>
				<div className="mt-10 px-5">
					{session.status === "authenticated" ? (
						<Button
							onClick={handleLogout}
							className="w-full rounded-md border border-neutral-300/80 bg-white text-sm shadow-sm shadow-neutral-200/60 transition duration-300 ease-out hover:border-neutral-400/50  hover:bg-neutral-200/10 hover:ring-2 hover:ring-transparent dark:border-neutral-600/40 dark:border-b-transparent dark:bg-neutral-700/50 dark:shadow-black/10 dark:hover:border-neutral-600/50 dark:hover:bg-neutral-700/70"
						>
							<div className="relative">
								<LogOut
									className="absolute -left-7 top-1/2 -translate-y-1/2 text-neutral-800 dark:text-neutral-100"
									size={18}
								/>
								<span className="flex-1">Logout</span>
							</div>
						</Button>
					) : (
						<>
							<Link href={"/sign-up"}>
								<Button className="mb-2 w-full gap-2 rounded-md border-x border-t border-emerald-500 bg-emerald-500 text-sm text-white shadow-sm shadow-neutral-900/70 transition duration-300 ease-out hover:border-emerald-400 hover:bg-emerald-400 dark:border-emerald-500 dark:bg-emerald-500/60 dark:hover:border-emerald-500 dark:hover:bg-emerald-500">
									Get Started
								</Button>
							</Link>
							<Link href={"/sign-in"}>
								<Button className="w-full rounded-md border border-neutral-300/80 bg-white text-sm shadow-sm shadow-neutral-200/60 transition duration-300 ease-out hover:border-neutral-400/50  hover:bg-neutral-200/20 hover:ring-2 hover:ring-transparent dark:border-neutral-600/40 dark:border-b-transparent dark:bg-neutral-700/50 dark:shadow-black/10 dark:hover:border-neutral-600/50 dark:hover:bg-neutral-700/70">
									Sign In
								</Button>
							</Link>
						</>
					)}
				</div>
			</div>
			<div className="mt-4 flex w-full justify-between border-t border-neutral-200/60 px-5 py-4 dark:border-neutral-700/50">
				<p className="text-sm font-medium text-neutral-500">© coinDex</p>
				<div className="flex items-center gap-2">
					<Sun className="h-5 w-5 text-neutral-500/80" />
					<Switch checked={isChecked} onCheckedChange={handleThemeChange} />
					<Moon className="h-5 w-5 text-neutral-500/80" />
				</div>
			</div>
		</div>
	)
}
