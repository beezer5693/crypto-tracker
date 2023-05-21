import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export function useLatest() {
	return useQuery({
		queryKey: ["market-snapshot"],
		queryFn: async () => {
			const { data } = await axios.get("/api/crypto/latest", {
				headers: {
					"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY,
				},
			})

			return data
		},
	})
}
