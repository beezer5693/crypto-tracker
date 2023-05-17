import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export function useQuoteLatest(...symbols: string[]) {
	return useQuery({
		queryKey: ["listings-latest"],
		queryFn: async () => {
			const { data } = await axios.get(`/api/crypto/quote?symbol=${symbols.join(",")}`, {
				headers: {
					"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY,
				},
			})

			return data
		},
	})
}

export function useGlobalMetrics() {
	return useQuery({
		queryKey: ["global-metrics"],
		queryFn: async () => {
			const { data } = await axios.get("/api/crypto/global-metrics", {
				headers: {
					"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY,
				},
			})

			return data as GlobalMetricsData
		},
	})
}
