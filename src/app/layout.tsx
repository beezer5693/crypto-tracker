import "./globals.css"
import { Inter } from "next/font/google"
import ThemeProvider from "@/components/providers/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export const metadata = {
	title: "Cryptocurrency Price Tracker",
	description: "Track all your favorite cryptocurrencies - all in one place.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} relative min-h-screen bg-white antialiased dark:bg-black`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
