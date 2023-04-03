import { ReactElement } from "react"

import { ProfileView } from "@/views/Profile"

import { MainLayout } from "@/widgets/MainLayout"
import { ProfileAside } from "@/widgets/ProfileAside"

const Profile = () => {
	return <ProfileView />
}

Profile.getLayout = (page: ReactElement) => (
	<MainLayout>
		<ProfileAside>{page}</ProfileAside>
	</MainLayout>
)

export default Profile
