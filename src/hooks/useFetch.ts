import { useQuery } from "@tanstack/react-query"
import axios from "axios"

// Get cryptos by symbol
export function useQuoteLatest(...symbols: string[]) {
	return useQuery({
		queryKey: ["listings"],
		queryFn: async () => {
			const { data } = await axios.get(`/api/crypto/quote?symbol=${symbols.join(",")}`)
			return data
		},
	})
}

// get global market data (total market cap, 24h volume, BTC dominance, etc.)
export function useGlobalMetrics() {
	return useQuery({
		queryKey: ["global-metrics"],
		queryFn: async () => {
			const { data } = await axios.get("/api/crypto/global-metrics")
			return data as GlobalMetricsData
		},
	})
}

// get a list of all cryptocurrencies (limited to 100 items by default)
export function useLatest() {
	return useQuery({
		queryKey: ["listings-latest"],
		queryFn: async () => {
			const { data } = await axios.get("/api/crypto/latest")
			return data
		},
	})
}
