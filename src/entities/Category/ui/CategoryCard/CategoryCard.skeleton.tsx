import { FC, HTMLAttributes } from "react"

import { Skeleton } from "@/shared/ui"

import { $CategoryCard } from "./CategoryCard.styles"

export const CategoryCardSkeleton: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
	return (
		<$CategoryCard {...props}>
			<Skeleton width="236px" height="166px" variant="rounded" className="img-wrapper" />
			<div className="card-body">
				<Skeleton variant="rounded" width="166px" height="25px" />
			</div>
		</$CategoryCard>
	)
}
