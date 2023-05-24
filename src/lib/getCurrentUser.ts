import client from "./prismadb"

export default async function getCurrentUser(email: string) {
	try {
		const user = await client.user.findUnique({
			where: {
				email,
			},
		})

		return user
	} catch (error) {
		console.log(error, "GET_CURRENT_USER_ERROR")
	}
}
