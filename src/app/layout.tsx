import "./globals.css"
import { Public_Sans } from "next/font/google"
import ThemeProvider from "@/components/providers/theme-provider"
import AuthContext from "@/context/AuthContext"
import { Toaster } from "@/components/ui/toaster"

const sans = Public_Sans({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export const metadata = {
	title: "Cryptocurrency Price Tracker",
	description: "Track all your favorite cryptocurrencies - all in one place.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${sans.className} relative min-h-screen scroll-smooth bg-white antialiased dark:bg-black`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
					<AuthContext>
						{children}
						<Toaster />
					</AuthContext>
				</ThemeProvider>
			</body>
		</html>
	)
}
