"use client"

import "./globals.css"
import { Inter } from "next/font/google"
import ThemeProvider from "@/components/providers/theme-provider"
import QueryProvider from "@/components/providers/query-provider"
import AuthContext from "@/context/AuthContext"
import { WatchlistContextProvider, inititalState } from "@/context/WatchListContext"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} relative min-h-screen scroll-smooth bg-white antialiased dark:bg-black`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
					<QueryProvider>
						<AuthContext>
							<WatchlistContextProvider watchlist={inititalState.watchlist}>{children}</WatchlistContextProvider>
							<Toaster />
						</AuthContext>
					</QueryProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
