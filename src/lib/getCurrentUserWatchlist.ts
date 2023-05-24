import axios from "axios"

export function getCurrentUserWatchlist(email: string) {
	return axios.get("/api/user/watchlist", {
		params: {
			email,
		},
	})
}
