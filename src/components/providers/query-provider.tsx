"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

type QueryClientProviderProps = {
	children: React.ReactNode
}

export default function QueryProvider({ children }: QueryClientProviderProps) {
	return <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
}
