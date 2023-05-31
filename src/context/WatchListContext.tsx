"use client"

import React from "react"
import { useSession } from "next-auth/react"
import { createContext, useReducer, useEffect, ReactElement, ReactNode } from "react"
import { useQuery } from "@tanstack/react-query"
import { getCurrentUserWatchlist } from "@/lib/getCurrentUserWatchlist"

type StateType = {
	watchlist: number[]
}

export const inititalState: StateType = {
	watchlist: [],
}

type WatchlistActionType = {
	type: string
	payload: number
}

const watchlistReducer = (state: StateType, action: WatchlistActionType) => {
	switch (action.type) {
		case "ADD":
			return { watchlist: [...new Set([...state.watchlist, action.payload])] }
		case "REMOVE":
			return { watchlist: state.watchlist.filter(id => id !== action.payload) }
		default:
			return state
	}
}

function useWatchlistContext(inititalState: StateType) {
	const [state, dispatch] = useReducer(watchlistReducer, inititalState)
	const session = useSession()

	const { data, isLoading, isError } = useQuery(
		["watchlist"],
		() => getCurrentUserWatchlist(session.data?.user?.email!),
		{
			enabled: !!session.data?.user?.email,
		}
	)

	useEffect(() => {
		if (data?.data) {
			data.data.forEach((item: any) => {
				dispatch({ type: "ADD", payload: item.coinId })
			})
		}
	}, [data?.data])

	return { state, isLoading, isError, dispatch }
}

type UseWatchlistContextType = ReturnType<typeof useWatchlistContext>

const initWatchlistContext: UseWatchlistContextType = {
	state: inititalState,
	isLoading: false,
	isError: false,
	dispatch: () => {},
}

export const WatchlistContext = createContext<UseWatchlistContextType>(initWatchlistContext)

type ChildrenType = {
	children?: ReactElement | ReactElement[] | ReactNode | null
}

export function WatchlistContextProvider({ children, ...initialState }: ChildrenType & StateType) {
	return <WatchlistContext.Provider value={useWatchlistContext(initialState)}>{children}</WatchlistContext.Provider>
}
