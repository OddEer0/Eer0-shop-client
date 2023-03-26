import { QueryClient, dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import DeviceView from "@/views/Device"

import { categoryService, deviceService } from "@/shared/api"

import { MainLayout } from "@/widgets/MainLayout"

const CategoryDevice = () => {
	return <DeviceView />
}

CategoryDevice.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default CategoryDevice

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(["device", query], () => deviceService.getFilteredAndSortedDevice(query))

	if (query.category) {
		await queryClient.prefetchQuery(["category", query.category], () =>
			categoryService.getOneCategory(query.category as string)
		)
	}

	return {
		props: { dehydratedState: dehydrate(queryClient) }
	}
}
