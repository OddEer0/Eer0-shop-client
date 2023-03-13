import { FC } from "react"

import { CategoryCard, CategoryCardSkeleton, useCategoryQuery } from "@/entities/Category"

import { Empty } from "@/shared/ui"

import { $CategoryCardList } from "./CategoryCardList.styles"

export const CategoryCardList: FC = () => {
	const { data, error, isLoading } = useCategoryQuery()

	return (
		<$CategoryCardList>
			{isLoading ? (
				<>
					{new Array(20).fill("").map((_, i) => (
						<CategoryCardSkeleton className="item" key={i} />
					))}
				</>
			) : error ? (
				<h2 className="h2">Произошла ошибка! :(</h2>
			) : data ? (
				<>
					{data.map(category => (
						<CategoryCard className="item" key={category.id} data={category} />
					))}
					<Empty className="item" width="260px" count={4} />
				</>
			) : (
				<h2 className="h2">На данный момент нет категорий</h2>
			)}
		</$CategoryCardList>
	)
}
