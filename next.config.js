/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		appDir: true,
		serverActions: true,
	},
	images: {
		domains: ["s2.coinmarketcap.com"],
	},
}

module.exports = nextConfig
