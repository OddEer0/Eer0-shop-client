import { FC } from "react"

import { CategoryCardList } from "@/entities/Category"

import { Container, Meta } from "@/shared/ui"

const CategoryView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Категория" />
			<Container>
				<CategoryCardList />
			</Container>
		</>
	)
}

export default CategoryView
