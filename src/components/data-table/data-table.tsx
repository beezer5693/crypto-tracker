"use client"

import React, { ReactNode } from "react"
import {
	ColumnDef,
	SortingState,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
}

export function DataTable<TData, TValue>(this: any, { columns, data }: DataTableProps<TData, TValue>) {
	const [{ pageIndex, pageSize }, setPagination] = React.useState({ pageIndex: 0, pageSize: 25 })
	const [sorting, setSorting] = React.useState<SortingState>([])

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			pagination: {
				pageSize,
				pageIndex,
			},
		},
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setPagination,
	})

	const pages = new Array(table.getPageCount()).fill(0).map((_, i) => i + 1)
	const start = (pageIndex + 1) * pageSize - (pageSize - 1)
	const end = Math.min(start + pageSize - 1, table.getFilteredRowModel().rows.length)

	return (
		<div>
			<div>
				<Table className="min-w-[1250px]">
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow className="shrink-0 border-neutral-200/60 dark:border-neutral-700/50" key={headerGroup.id}>
								{headerGroup.headers.map(header => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map(row => (
								<TableRow
									className="border-neutral-200/60 hover:bg-neutral-200/20 dark:border-neutral-700/50 dark:hover:bg-neutral-800/80"
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map(cell => (
										<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex w-full items-center justify-between space-x-2 py-4">
				<p className="text-[.8rem] text-neutral-800 dark:text-neutral-300">
					Showing {start} - {end} out of {table.getFilteredRowModel().rows.length}
				</p>
				<div className="flex items-center space-x-2">
					<Button
						className="h-6 w-6 px-1 py-0.5"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						<span className="sr-only">Go to previous page</span>
						<ChevronLeft className="h-4 w-4 stroke-neutral-600  dark:stroke-neutral-400" />
					</Button>
					{pages.map((page, i) => (
						<Button
							className={cn(
								"h-6 w-6 rounded p-2.5 text-[.8rem] font-semibold text-neutral-600 transition duration-200 ease-out hover:bg-neutral-300/50 hover:text-neutral-800 dark:text-neutral-400 hover:dark:bg-neutral-700/50 hover:dark:text-neutral-100",
								{
									"cursor-auto bg-neutral-300/50 text-neutral-800 hover:bg-neutral-300/50 dark:bg-neutral-700/50 dark:text-neutral-100 hover:dark:bg-neutral-700/50":
										pageIndex === i,
								}
							)}
							onClick={() => table.setPageIndex(i)}
							key={page}
						>
							{page}
						</Button>
					))}
					<Button
						className="h-6 w-6 px-1 py-0.5 transition"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						<span className="sr-only">Go to next page</span>
						<ChevronRight className="h-4 w-4 stroke-neutral-600 dark:stroke-neutral-400" />
					</Button>
				</div>
				<div className="flex items-center space-x-2">
					<p className="text-[.8rem] text-neutral-800 dark:text-neutral-300">Show rows</p>
					<Select
						value={`${table.getState().pagination.pageSize}`}
						onValueChange={value => {
							table.setPageSize(Number(value))
						}}
					>
						<SelectTrigger className="h-8">
							<SelectValue placeholder={table.getState().pagination.pageSize} />
						</SelectTrigger>
						<SelectContent side="top">
							{[100, 50, 25].map(pageSize => (
								<SelectItem key={pageSize} value={`${pageSize}`}>
									<span className="text-[.8rem] font-medium text-neutral-800 dark:text-neutral-300">{pageSize}</span>
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	)
}
