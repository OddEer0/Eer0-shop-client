import { ReactElement } from "react"

import CategoryView from "@/views/Category"

import { MainLayout } from "@/widgets/MainLayout"

const Category = () => {
	return <CategoryView />
}
Category.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Category
