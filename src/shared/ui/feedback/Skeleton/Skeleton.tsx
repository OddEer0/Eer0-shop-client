import { FC } from "react"

import { CircleSkeleton, RoundedSkeleton, SquareSkeleton } from "./Skeleton.styles"
import { SkeletonProps } from "./Skeleton.types"

export const Skeleton: FC<SkeletonProps> = ({
	variant = "square",
	width = "100%",
	height = "100%",
	minHeight = "10px",
	minWidth = "20px",
	...props
}) => {
	switch (variant) {
		case "square":
			return <SquareSkeleton minHeight={minHeight} minWidth={minWidth} width={width} height={height} {...props} />
		case "rounded":
			return <RoundedSkeleton minHeight={minHeight} minWidth={minWidth} width={width} height={height} {...props} />
		case "circle":
			return <CircleSkeleton minHeight={minHeight} minWidth={minWidth} width={width} height={height} {...props} />
		default:
			return null
	}
}
