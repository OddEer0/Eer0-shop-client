import { QueryClient, dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import DevicesView from "@/views/Devices"

import { brandService, categoryService, deviceService } from "@/shared/api"
import { convertMinutesToMs, convertSecondsToMs } from "@/shared/helpers"
import { Meta } from "@/shared/ui"

import { MainLayout } from "@/widgets/MainLayout"

interface CategoryDeviceProps {
	meta: string
}

const CategoryDevice = ({ meta }: CategoryDeviceProps) => {
	return (
		<>
			<Meta title={`Eer0 Shop | ${meta}`} />
			<DevicesView />
		</>
	)
}

CategoryDevice.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const queryClient = new QueryClient()
	let category
	if (query.category && typeof query.category === "string") {
		await queryClient.prefetchQuery(["device", query], () => deviceService.getFilteredAndSortedDevice(query), {
			cacheTime: convertMinutesToMs(2),
			staleTime: convertSecondsToMs(30)
		})

		await queryClient.prefetchQuery(["brand", query.category], () =>
			brandService.getBrandsByCategoryId(query.category as string)
		)

		category = await categoryService.getOneCategory(query.category)
	}

	return {
		props: { dehydratedState: dehydrate(queryClient), meta: category?.title || "Not" }
	}
}

export default CategoryDevice
