import { FC, PropsWithChildren } from "react"

import { CircleSkeleton, RoundedSkeleton, SquareSkeleton } from "./Skeleton.styles"
import { SkeletonProps } from "./Skeleton.types"

export const Skeleton: FC<PropsWithChildren<SkeletonProps>> = ({
	variant = "square",
	width = "100%",
	height = "100%",
	minHeight = "10px",
	minWidth = "20px",
	children,
	...props
}) => {
	switch (variant) {
		case "square":
			return (
				<SquareSkeleton minHeight={minHeight} minWidth={minWidth} width={width} height={height} {...props}>
					{children}
				</SquareSkeleton>
			)
		case "rounded":
			return (
				<RoundedSkeleton minHeight={minHeight} minWidth={minWidth} width={width} height={height} {...props}>
					{children}
				</RoundedSkeleton>
			)
		case "circle":
			return (
				<CircleSkeleton minHeight={minHeight} minWidth={minWidth} width={width} height={height} {...props}>
					{children}
				</CircleSkeleton>
			)
		default:
			return null
	}
}
