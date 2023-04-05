import { ReactElement } from "react"

import { DashboardView } from "@/views/Dashboard"

import { MainLayout } from "@/widgets/MainLayout"
import { ProfileAside } from "@/widgets/ProfileAside"

const Dashboard = () => {
	return <DashboardView />
}

Dashboard.getLayout = (page: ReactElement) => (
	<MainLayout>
		<ProfileAside>{page}</ProfileAside>
	</MainLayout>
)

export default Dashboard
