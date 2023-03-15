import { QueryClient, dehydrate } from "@tanstack/react-query"
import { ReactElement } from "react"

import { categoryService } from "@/entities/Category"

import CategoryView from "@/views/Category"

import { MainLayout } from "@/widgets/MainLayout"

const Category = () => {
	return <CategoryView />
}
Category.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Category

export const getStaticProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(["category"], () => categoryService.getCategory())

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		},
		revalidate: 60 * 60
	}
}
