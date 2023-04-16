import { QueryClient, dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import DevicesView from "@/views/Devices"

import { brandService, deviceService } from "@/shared/api"
import { convertMinutesToMs, convertSecondsToMs } from "@/shared/helpers"

import { MainLayout } from "@/widgets/MainLayout"

const CategoryDevice = () => {
	return <DevicesView />
}

CategoryDevice.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const queryClient = new QueryClient()

	if (query.category) {
		await queryClient.prefetchQuery(["device", query], () => deviceService.getFilteredAndSortedDevice(query), {
			cacheTime: convertMinutesToMs(2),
			staleTime: convertSecondsToMs(30)
		})
		await queryClient.prefetchQuery(["brand", query.category], () =>
			brandService.getBrandsByCategoryId(query.category as string)
		)
	}

	return {
		props: { dehydratedState: dehydrate(queryClient) }
	}
}

export default CategoryDevice
