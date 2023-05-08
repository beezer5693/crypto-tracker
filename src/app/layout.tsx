import "./globals.css"
import { Public_Sans } from "next/font/google"
import ThemeProvider from "@/components/providers/theme-provider"

const sans = Public_Sans({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export const metadata = {
	title: "Cryptocurrency Price Tracker",
	description: "Track all your favorite cryptocurrencies - all in one place.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${sans.className} relative min-h-screen bg-white antialiased dark:bg-white`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
