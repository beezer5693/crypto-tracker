import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Data {
	id: number
	name: string
	symbol: string
	slug: string
	cmc_rank: number
	num_market_pairs: number
	circulating_supply: number
	total_supply: number
	max_supply: number
	infinite_supply: false
	last_updated: string
	date_added: string
	tags: [string]
	platform: null
	self_reported_circulating_supply: null
	self_reported_market_cap: null
	quote: {
		USD: {
			price: number
			volume_24h: number
			volume_change_24h: number
			percent_change_1h: number
			percent_change_24h: number
			percent_change_7d: number
			market_cap: number
			market_cap_dominance: number
			fully_diluted_market_cap: number
			last_updated: string
		}
		BTC: {
			price: number
			volume_24h: number
			volume_change_24h: number
			percent_change_1h: number
			percent_change_24h: number
			percent_change_7d: number
			market_cap: number
			market_cap_dominance: number
			fully_diluted_market_cap: number
			last_updated: string
		}
	}
}

export default function useFetchMarketLatest() {
	return useQuery({
		queryKey: ["market-snapshot"],
		queryFn: async () => {
			const { data } = await axios.get("/api/crypto", {
				headers: {
					"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY,
				},
			})

			return data as Data
		},
	})
}
