import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function useFetchLatest() {
	console.log(process.env.NEXT_PUBLIX_COIN_MARKET_CAP_API_KEY)
	return useQuery({
		queryKey: ["market-snapshot"],
		queryFn: async () => {
			const { data } = await axios.get("/api/latest/crypto", {
				headers: {
					"X-CMC_PRO_API_KEY": process.env.COIN_MARKET_CAP_API_KEY,
				},
			})

			return data
		},
	})
}
