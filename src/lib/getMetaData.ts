import axios from "axios"

export function getMetaData(...ids: any[]) {
	return axios.get("/api/crypto/meta-data?id=" + ids.join(","))
}
