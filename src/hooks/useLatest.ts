import { useQuery } from "@tanstack/react-query"
import axios from "axios"

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
