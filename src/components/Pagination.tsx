import { usePagination } from "@/hooks/usePagination"
import { cn } from "@/lib/utils"
import { v4 as uuidv4 } from "uuid"

type PaginationProps = {
	pageSize: number
	totalCount: number
	currentPage: number
	siblingCount?: number
	onPageChange: (number: number) => void
}

export default function Pagination({
	pageSize,
	siblingCount = 1,
	totalCount,
	currentPage,
	onPageChange,
}: PaginationProps) {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	})

	if (!!paginationRange?.length) {
		if (currentPage === 0 || paginationRange.length < 2) return null
	}

	return (
		<div>
			{paginationRange?.length && (
				<ul className="flex justify-center gap-2">
					{paginationRange!.map((number: string | number, i: number) => {
						if (number === "...") {
							return (
								<li
									key={i}
									className="inline-flex h-6 w-6 items-center justify-center rounded p-2.5 text-[.8rem] font-semibold text-neutral-600 dark:text-neutral-400"
								>
									&#8230;
								</li>
							)
						}

						return (
							<li
								key={uuidv4()}
								onClick={() => onPageChange((number as number) - 1)}
								className={cn(
									"inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded p-2.5 text-[.8rem] font-semibold text-neutral-600 transition duration-200 ease-out hover:bg-neutral-300/50 hover:text-neutral-800 dark:text-neutral-400 hover:dark:bg-neutral-700/50 hover:dark:text-neutral-100",
									{
										"cursor-auto bg-neutral-300/50 text-neutral-800 hover:bg-neutral-300/50 dark:bg-neutral-700/50 dark:text-neutral-100 hover:dark:bg-neutral-700/50":
											(number as number) === currentPage,
									}
								)}
							>
								{number}
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}
