import { QueryClient, dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import DeviceView from "@/views/Device"

import { IDevice, deviceService } from "@/shared/api"
import { Meta } from "@/shared/ui"

import { MainLayout } from "@/widgets/MainLayout"

interface DeviceProps {
	meta: string
}

const Device = ({ meta }: DeviceProps) => {
	return (
		<>
			<Meta title={`Eer0 Shop | ${meta}`} />
			<DeviceView />
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(["device", params?.deviceId], () =>
		deviceService.getOneDevice(params?.deviceId as string)
	)

	const device = queryClient.getQueryData<IDevice>(["device", params?.deviceId])

	return {
		props: { dehydratedState: dehydrate(queryClient), meta: device?.name || "Not" }
	}
}

Device.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Device
