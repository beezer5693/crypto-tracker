export function formatNumber(num: number, style: string, notation: string, maxFractionDigits: number) {
	const numberFormat = new Intl.NumberFormat("en-US", {
		style: style as Intl.NumberFormatOptions["style"],
		notation: notation as Intl.NumberFormatOptions["notation"],
		maximumFractionDigits: maxFractionDigits,
	})
	return numberFormat.format(num)
}

export function formatCurrency(
	num: number,
	style: string,
	currency: string,
	notation: string,
	maxFractionDigits: number
) {
	const currencyFormat = new Intl.NumberFormat("en-US", {
		style: style as Intl.NumberFormatOptions["style"],
		currency: currency as Intl.NumberFormatOptions["currency"],
		notation: notation as Intl.NumberFormatOptions["notation"],
		maximumFractionDigits: maxFractionDigits,
	})
	return currencyFormat.format(num)
}
