import { ReactElement } from "react"

import DeviceView from "@/views/Device"

import { MainLayout } from "@/widgets/MainLayout"

const CategoryDevice = () => {
	return <DeviceView />
}

CategoryDevice.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default CategoryDevice
