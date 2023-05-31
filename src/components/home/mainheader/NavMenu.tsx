"use client"

import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useRef } from "react"
import { ChevronRight, Globe, Gamepad2, Coins } from "lucide-react"
import { IoImageOutline } from "react-icons/io5"

type Props = {
	isOpen: boolean
	onClose: () => void
}

async function getCategoryMetaData() {
	const res = await fetch("/api/crypto/meta-data?id=1027,1839,5426,5805,6636")
	return res.json()
}

export default function NavMenu({ isOpen, onClose }: Props) {
	const [metaData, setMetaData] = React.useState<any[]>([])
	const [scrollY, setScrollY] = React.useState<number>(0)
	const ref = useRef<HTMLDivElement>(null)

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
		if (categoryMetaData) {
			setMetaData(Object.values(categoryMetaData.data).map((coin: any) => coin))
		}
	}, [categoryMetaData])

	// Close the menu when clicking outside of it or when scrolling
	React.useEffect(() => {
		const handleOutsideClick = (e: any) => {
			if ((ref.current && ref.current.contains(e.target)) || !ref.current?.contains(e.target)) {
				onClose()
			}
		}
		const handleScroll = () => {
			if (scrollY >= 200 && isOpen) {
				onClose()
			}
			setScrollY(window.scrollY)
		}
		window.addEventListener("scroll", handleScroll, { passive: true })
		document.addEventListener("click", handleOutsideClick)
		return () => {
			document.removeEventListener("click", handleOutsideClick)
			window.removeEventListener("scroll", handleScroll)
		}
	}, [isOpen, onClose, scrollY])

	return (
		<div
			className={cn(
				"absolute z-50 hidden w-full border-y border-neutral-200/60 bg-white shadow-lg shadow-neutral-300/50 dark:border-neutral-700/50 dark:bg-[#1c1c1c] dark:shadow-black/10",
				{
					"flex flex-col border-t-0 fade-in-50 lg:flex-row": isOpen,
				}
			)}
			ref={ref}
		>
			<div className="flex flex-1 flex-col justify-start gap-10 px-10 pb-10 pt-5">
				<div className="space-y-0.5">
					<h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">Cryptocurrency categories</h2>
					<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
						We have created an index for each cryptocurrency category. Categories are ranked by market cap. Click on a
						crypto category name to see the constituent parts of the index and their recent price performance.
					</p>
				</div>
				<div className="grid grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-4">
					<Link href={"/category/618c0beeb7dd913155b462f9"}>
						<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
							<div className="flex h-9 w-9 items-center justify-center rounded-md border bg-white dark:border-neutral-700/50 dark:bg-[#232323]">
								{metaData.length && (
									<Image src={metaData[0].logo} className="rounded-full" width={15} height={15} alt="coin logo" />
								)}
							</div>
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Ethereum</p>
							<ChevronRight className="mt-0.5 h-[12px] w-[12px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
						</div>
					</Link>
					<Link href={"/category/60308028d2088f200c58a005"}>
						<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
							<div className="flex h-9 w-9 items-center justify-center rounded-md border bg-white dark:border-neutral-700/50 dark:bg-[#232323]">
								{metaData.length && (
									<Image src={metaData[1].logo} className="rounded-full" width={15} height={15} alt="coin logo" />
								)}
							</div>
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">BNB Chain</p>
							<ChevronRight className="mt-0.5 h-[12px] w-[12px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
						</div>
					</Link>
					<Link href={"/category/6051bc098a9b3f285eec4d40"}>
						<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
							<div className="flex h-9 w-9 items-center justify-center rounded-md border bg-white dark:border-neutral-700/50 dark:bg-[#232323]">
								{metaData.length && (
									<Image src={metaData[3].logo} className="rounded-full" width={15} height={15} alt="coin logo" />
								)}
							</div>
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Avalanche</p>
							<ChevronRight className="mt-0.5 h-[12px] w-[12px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
						</div>
					</Link>
					<Link href={"/category/601cf8d2d8fd860e4ea5d96f"}>
						<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
							<div className="flex h-9 w-9 items-center justify-center rounded-md border bg-white dark:border-neutral-700/50 dark:bg-[#232323]">
								{metaData.length && (
									<Image src={metaData[4].logo} className="rounded-full" width={15} height={15} alt="coin logo" />
								)}
							</div>
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Polkadot</p>
							<ChevronRight className="mt-0.5 h-[12px] w-[12px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
						</div>
					</Link>
					<Link href={"/category/60521ff1df5d3f36b84fbb61"}>
						<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
							<div className="flex h-9 w-9 items-center justify-center rounded-md border bg-white dark:border-neutral-700/50 dark:bg-[#232323]">
								{metaData.length && (
									<Image src={metaData[2].logo} className="rounded-full" width={15} height={15} alt="coin logo" />
								)}
							</div>
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Solana</p>
							<ChevronRight className="mt-0.5 h-[12px] w-[12px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
						</div>
					</Link>
					<Link href={"/category/604f2753ebccdd50cd175fc1"}>
						<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
							<div className="flex h-9 w-9 items-center justify-center rounded-md border bg-white dark:border-neutral-700/50 dark:bg-[#232323]">
								<Coins className="h-4 w-4 text-neutral-800 dark:text-neutral-100" />
							</div>
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Stablecoins</p>
							<ChevronRight className="mt-0.5 h-[12px] w-[12px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
						</div>
					</Link>
					<Link href={"/category/6051a82166fc1b42617d6dc1"}>
						<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
							<div className="flex h-9 w-9 items-center justify-center rounded-md border bg-white dark:border-neutral-700/50 dark:bg-[#232323]">
								<Gamepad2 className="h-4 w-4 text-neutral-800 dark:text-neutral-100" />
							</div>
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Gaming</p>
							<ChevronRight className="mt-0.5 h-[12px] w-[12px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
						</div>
					</Link>
					<Link href={"/category/60291fa0db1be76c46298e83"}>
						<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
							<div className="flex h-9 w-9 items-center justify-center rounded-md border bg-white dark:border-neutral-700/50 dark:bg-[#232323]">
								<IoImageOutline className="h-4 w-4 text-neutral-800 dark:text-neutral-100" />
							</div>
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">NFT</p>
							<ChevronRight className="mt-0.5 h-[12px] w-[12px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
						</div>
					</Link>
					<Link href={"/category/61693ae410dbb97a52fb2ed0"}>
						<div className="group col-span-1 flex cursor-pointer items-center space-x-2 rounded-xl p-2 transition duration-200 ease-out hover:bg-neutral-200/30 hover:dark:bg-neutral-700/20">
							<div className="flex h-9 w-9 items-center justify-center rounded-md border bg-white dark:border-neutral-700/50 dark:bg-[#232323]">
								<Globe className="h-4 w-4 text-neutral-800 dark:text-neutral-100" />
							</div>
							<p className="text-xs font-medium text-neutral-800 dark:text-neutral-100">Web3</p>
							<ChevronRight className="mt-0.5 h-[12px] w-[12px] transform stroke-1 opacity-0 transition-all duration-200  ease-out group-hover:translate-x-1 group-hover:opacity-100" />
						</div>
					</Link>
				</div>
			</div>
			<div className="w-[1px] items-stretch bg-neutral-200/60 dark:bg-neutral-700/50"></div>
			<div className="flex flex-1 flex-col justify-start gap-10 border-t border-neutral-700/50 px-10 pb-10 pt-5 lg:border-none">
				<div className="space-y-0.5">
					<h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">Platform tokens</h2>
					<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
						View tokens and coins from the most popular crypto platforms.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-3 self-start">
					<Link className="cursor-pointer" href={"/category/618c0beeb7dd913155b462f9"}>
						<div className="flex items-center gap-5 rounded-md border border-neutral-200/60 bg-gradient-to-tl from-white from-60% to-[#edf7f4] p-3 transition duration-300 ease-out hover:border-neutral-300/70 dark:border-neutral-700/50 dark:from-[#202020] dark:from-60% dark:to-[#252a29] hover:dark:border-neutral-600/60">
							<Image
								className="rounded-md border border-neutral-200/60 dark:border-neutral-700/50"
								src="/images/ethereum.png"
								width={150}
								height={150}
								alt="ethereum"
							/>
							<div className="flex flex-col justify-center gap-2">
								<h3 className="font-medium text-neutral-800 dark:text-neutral-200">Ethereum Network</h3>
								<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
									Check out the top crypto coins and tokens that run on the Ethereum platform.
								</p>
							</div>
						</div>
					</Link>
					<Link className="cursor-pointer" href={"/category/60308028d2088f200c58a005"}>
						<div className="flex items-center gap-5 rounded-md border border-neutral-200/60 bg-gradient-to-tl from-white from-60% to-[#edf7f4] p-3 transition duration-300 ease-out hover:border-neutral-300/70 dark:border-neutral-700/50 dark:from-[#202020] dark:from-60% dark:to-[#252a29] hover:dark:border-neutral-600/60">
							<Image
								className="rounded-md border border-neutral-200/60 dark:border-neutral-700/50"
								src="/images/binance.png"
								width={150}
								height={150}
								alt="ethereum"
							/>
							<div className="flex flex-col justify-center gap-2">
								<h3 className="font-medium text-neutral-800 dark:text-neutral-200">Binance Chain Network</h3>
								<p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
									Check out the top crypto coins and tokens that run on the Binance Chain platform.
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
