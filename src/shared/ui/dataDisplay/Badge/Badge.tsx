import { CSSProperties, FC, PropsWithChildren, useEffect, useRef, useState } from "react"

import { cn, getCircularCoords, getLimitationNumber } from "@/shared/helpers"

import { BadgeWrapper } from "./Badge.styles"
import { BadgeProps } from "./Badge.types"

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
	content = 0,
	maxValue = 9,
	horizontal = "right",
	vertical = "top",
	color = "success",
	size = "medium",
	variant = "dot",
	overlap = "circular",
	classNameBadge = "",
	className = "",
	children,
	...props
}) => {
	const [coords, setCoords] = useState<CSSProperties>({})
	const clWrapper = cn("prefix", className)
	const cl = cn("badge", color, variant, size, overlap, horizontal, vertical, classNameBadge)
	const wrapperRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (overlap === "circular") {
			const { x, y } = getCircularCoords(wrapperRef, horizontal, vertical)
			setCoords({ left: x, top: y })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<BadgeWrapper className={clWrapper} ref={wrapperRef} {...props}>
			{children}
			<div style={coords} className={cl}>
				{variant === "content" && getLimitationNumber(content, maxValue)}
			</div>
		</BadgeWrapper>
	)
}
