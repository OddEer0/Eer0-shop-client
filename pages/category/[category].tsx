import { dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import { AuthGuard, withCSR } from "@/app/hocs"

import DevicesView from "@/views/Devices"

import { brandService, categoryService, deviceService } from "@/shared/api"
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

export const getServerSideProps: GetServerSideProps = withCSR(
	AuthGuard({
		isRedirect: false,
		async next({ ctx, queryClient, store }) {
			const { query } = ctx
			let category
			if (query.category && typeof query.category === "string") {
				await queryClient.prefetchQuery(["device", query], () => deviceService.getFilteredAndSortedDevice(query))

				await queryClient.prefetchQuery(["brand", query.category], () =>
					brandService.getBrandsByCategoryId(query.category as string)
				)

				category = await categoryService.getOneCategory(query.category)
			}

			return {
				props: { dehydratedState: dehydrate(queryClient), meta: category?.title || "Not", initZustandState: store }
			}
		}
	}),
	async ctx => {
		const { params } = ctx
		const category = await categoryService.getOneCategory(params?.category as string)

		return {
			props: { meta: category?.title || "Not" }
		}
	}
)

export default CategoryDevice
