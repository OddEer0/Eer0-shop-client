import { FC } from "react"
import ReactPaginate from "react-paginate"

import { $Pagination } from "./Pagination.styles"
import { PaginationProps } from "./Pagination.types"

export const Pagination: FC<PaginationProps> = ({
	variant = "standard",
	size = "medium",
	color = "primary",
	className,
	...props
}) => {
	return (
		<$Pagination variant={variant} size={size} color={color} className={className}>
			<ReactPaginate
				{...props}
				className="pagination"
				previousLabel={props.previousLabel ? props.previousLabel : "<"}
				nextLabel={props.nextLabel ? props.nextLabel : ">"}
				pageClassName="pagination__page"
				breakLabel="..."
			/>
		</$Pagination>
	)
}
