import { FC } from "react"

import { Container } from "@/shared/ui"

import { CategoryCardList } from "./ui"

const CategoryView: FC = () => {
	return (
		<Container>
			<CategoryCardList />
		</Container>
	)
}

export default CategoryView
