import Link from "next/link"
import { FC } from "react"

import { Empty } from "@/shared/ui"

import { useCategoryQuery } from "../../api"
import { CategoryCard } from "../CategoryCard"

import { $CategoryCardList } from "./CategoryCardList.styles"

export const CategoryCardList: FC = () => {
	const { data, error } = useCategoryQuery()

	return (
		<$CategoryCardList>
			{error ? (
				<h2 className="h2">Произошла ошибка! :(</h2>
			) : data ? (
				<>
					{data.map(category => (
						<Link href={{ pathname: `/category/${category.id}`, query: { page: "1" } }} key={category.id}>
							<CategoryCard className="item" data={category} />
						</Link>
					))}
					<Empty className="item" width="260px" count={4} />
				</>
			) : (
				<h2 className="h2">На данный момент нет категорий</h2>
			)}
		</$CategoryCardList>
	)
}
