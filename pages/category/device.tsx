import { ReactElement } from "react"

import DevicesView from "@/views/Devices"

import { MainLayout } from "@/widgets/MainLayout"

const CategoryDevice = () => {
	return <DevicesView />
}

CategoryDevice.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default CategoryDevice
