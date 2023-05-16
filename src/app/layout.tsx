import "./globals.css"
import { Inter } from "next/font/google"
import ThemeProvider from "@/components/providers/theme-provider"
import QueryProvider from "@/components/providers/query-provider"
import AuthContext from "@/context/AuthContext"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export const metadata = {
	title: "Cryptocurrency Price Tracker",
	description: "Track all your favorite cryptocurrencies - all in one place.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} relative min-h-screen scroll-smooth bg-white antialiased dark:bg-black`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
					<QueryProvider>
						<AuthContext>
							{children}
							<Toaster />
						</AuthContext>
					</QueryProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
