import { ReactElement } from "react"

import { ProfileSettingsView } from "@/views/ProfileSettings"

import { MainLayout } from "@/widgets/MainLayout"
import { ProfileAside } from "@/widgets/ProfileAside"

const Settings = () => {
	return <ProfileSettingsView />
}

Settings.getLayout = (page: ReactElement) => (
	<MainLayout>
		<ProfileAside>{page}</ProfileAside>
	</MainLayout>
)

export default Settings
