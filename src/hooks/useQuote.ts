import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export function useQuote() {
	return useQuery({
		queryKey: ["listings-latest"],
		queryFn: async () => {
			const { data } = await axios.get("/api/crypto/quote", {
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

			return data
		},
	})
}
