"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { formatNumber } from "@/lib/formatNums"

type ConverterProps = {
	coinId: string
	symbol: string
}

export default function Converter({ coinId, symbol }: ConverterProps) {
	const [userInput, setUserInput] = React.useState<string | number>("")
	const [dollarAmount, setDollarAmount] = React.useState<string | number>("")

	async function handleUserInput(e: React.ChangeEvent<HTMLInputElement>, coinId: string) {
		const regex = /^[0-9\b]+$/
		if (e.target.value !== "" && !regex.test(e.target.value)) return
		if (e.target.value === "") {
			setUserInput("")
			setDollarAmount("")
			return
		}
		setUserInput(parseInt(e.target.value))
		const res = await fetch(`/api/crypto/converter?id=${coinId}&amount=${e.target.value}&convert=USD`)
		const data = await res.json()
		setDollarAmount(
			formatNumber(
				data.data.quote.USD.price,
				"decimal",
				"standard",
				data.data.quote.USD.price >= 1
					? 2
					: data.data.quote.USD.price >= 0.1
					? 4
					: data.data.quote.USD.price >= 0.01
					? 6
					: 8
			)
		)
	}

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>{symbol} to USD Converter</CardTitle>
			</CardHeader>
			<CardContent className="mt-3 space-y-2">
				<div className="relative">
					<Input
						type="text"
						placeholder="0"
						className="w-full"
						value={userInput}
						onChange={e => handleUserInput(e, coinId)}
					/>
					<p className="absolute right-3 top-1/2 -translate-y-1/2 text-xs">{symbol}</p>
				</div>
				<div className="relative">
					<Input placeholder="0" type="text" className="w-full cursor-not-allowed" value={dollarAmount} readOnly />
					<p className="absolute right-3 top-1/2 -translate-y-1/2 text-xs">USD</p>
				</div>
			</CardContent>
		</Card>
	)
}