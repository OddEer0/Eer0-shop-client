import { QueryClient, dehydrate } from "@tanstack/react-query"
import { GetStaticProps } from "next"
import { ReactElement } from "react"

import CategoryView from "@/views/Category"

import { categoryService } from "@/shared/api"

import { MainLayout } from "@/widgets/MainLayout"

const Category = () => {
	return <CategoryView />
}
Category.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Category

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(["category"], () => categoryService.getCategory())

	return {
		props: {
			dehydratedState: dehydrate(queryClient)
		},
		revalidate: 60 * 60
	}
}
