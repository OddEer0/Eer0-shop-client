import { QueryClient, dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import DeviceView from "@/views/Device"

import { deviceService } from "@/shared/api"

import { MainLayout } from "@/widgets/MainLayout"

const Device = () => {
	return <DeviceView />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(["device", params?.deviceId], () =>
		deviceService.getOneDevice(params?.deviceId as string)
	)

	return {
		props: { dehydratedState: dehydrate(queryClient) }
	}
}

Device.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Device
