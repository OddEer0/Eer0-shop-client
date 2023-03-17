import { LayoutGroup, motion } from "framer-motion"
import { FC, useRef, useState } from "react"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"

import { cn } from "@/shared/helpers"

import { $PaginationWrapper } from "./Pagination.styles"
import { PaginationProps } from "./Pagination.types"

export const Pagination: FC<PaginationProps> = ({
	count,
	className = "",
	color = "primary",
	defaultCount = 1,
	nextArrow = null,
	prevArrow = null,
	siblingCount = 1,
	boundaryCount = 1,
	range = 9,
	size = "medium",
	layoutId = "pagination",
	variant = "standard",
	changeHandle = null,
	...props
}) => {
	const [currentPage, setCurrentPage] = useState(defaultCount)
	const [bodyItems, setBodyItems] = useState(() => {
		if (changeHandle) {
			changeHandle(defaultCount)
		}
		const body = []
		const len = range - siblingCount - boundaryCount - 2
		if (!(defaultCount > range - boundaryCount - 2)) {
			for (let i = 0, k = 3; i < len; i++, k++) {
				body.push(k)
			}
			return body
		}
		if (!(defaultCount < count - boundaryCount - 2)) {
			for (let i = 0, k = count - boundaryCount - 1 - len; i < len; i++, k++) {
				body.push(k)
			}
			return body
		}
		let middle = defaultCount - Math.floor(len / 2)
		for (let i = 0; i < len; i++, middle++) {
			body.push(middle)
		}
		return body
	})
	const startArrRef = useRef(
		(() => {
			const arr = []
			for (let i = 0; i < siblingCount; i++) {
				arr.push(i + 1)
			}
			return arr
		})()
	)
	const endArrRef = useRef(
		(() => {
			const arr = []
			for (let i = count; i > count - boundaryCount; i--) {
				arr.push(i)
			}
			return arr
		})()
	)

	const cl = cn("prefix", className)

	const getList = () => {
		const startArr: Nullable<number>[] = [...startArrRef.current]
		const endArr: Nullable<number>[] = [...endArrRef.current]
		if (bodyItems[0] !== siblingCount + 2) {
			startArr.push(null)
		} else {
			startArr.push(siblingCount + 1)
		}
		if (bodyItems[bodyItems.length - 1] !== count - boundaryCount - 1) {
			endArr.unshift(null)
		} else {
			endArr.unshift(count - boundaryCount)
		}
		return [...startArr, ...bodyItems, ...endArr]
	}

	const clickHandler = (val: number) => {
		if (changeHandle) {
			changeHandle(val)
		}
		setCurrentPage(val)
		if (startArrRef.current.some(num => num === val)) {
			const len = bodyItems.length
			const arr = []
			for (let i = 0, k = siblingCount + 2; i < len; i++, k++) {
				arr.push(k)
			}
			setBodyItems(arr)
		} else if (endArrRef.current.some(num => num === val)) {
			const len = bodyItems.length
			const arr = []
			for (let i = 0, k = count - len - boundaryCount; i < len; i++, k++) {
				arr.push(k)
			}
			setBodyItems(arr)
		} else if (bodyItems[bodyItems.length - 1] === val && currentPage < val && val !== count - boundaryCount - 1) {
			setBodyItems(prev => prev.map(num => num + 1))
		} else if (bodyItems[0] === val && currentPage > val && val !== siblingCount + 2) {
			setBodyItems(prev => prev.map(num => num - 1))
		}
	}

	const prevClickHandler = () => {
		if (currentPage > 1) {
			clickHandler(currentPage - 1)
		}
	}

	const nextClickHandler = () => {
		if (currentPage < count) {
			clickHandler(currentPage + 1)
		}
	}

	return (
		<$PaginationWrapper color={color} size={size} variant={variant} className={cl} {...props}>
			<LayoutGroup id={layoutId}>
				<ul>
					<li className={cn("pagination-li", currentPage === 1 ? "disable" : "")}>
						<button onClick={prevClickHandler}>{prevArrow ? prevArrow : <SlArrowLeft />}</button>
					</li>
					{getList().map((val, i) =>
						val ? (
							<li className="pagination-li" key={i}>
								{currentPage === val && <motion.span className="pagination-bg" layoutId="pagination-bg"></motion.span>}
								<button onClick={() => clickHandler(val)}>{val}</button>
							</li>
						) : (
							<li key={i}>...</li>
						)
					)}
					<li className={cn("pagination-li", currentPage === count ? "disable" : "")}>
						<button onClick={nextClickHandler}>{nextArrow ? nextArrow : <SlArrowRight />}</button>
					</li>
				</ul>
			</LayoutGroup>
		</$PaginationWrapper>
	)
}
