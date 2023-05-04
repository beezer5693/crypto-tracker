import "./globals.css"
import { Inter } from "next/font/google"
import ThemeProvider from "@/components/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Cryptocurrency Price Tracker",
	description: "Track all your favorite cryptocurrencies - all in one place.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} relative min-h-screen bg-white antialiased dark:bg-white`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
