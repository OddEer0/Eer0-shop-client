import { ReactElement } from "react"

import { ProfileEditView } from "@/views/ProfileEdit"

import { MainLayout } from "@/widgets/MainLayout"
import { ProfileAside } from "@/widgets/ProfileAside"

const Edit = () => {
	return <ProfileEditView />
}

Edit.getLayout = (page: ReactElement) => (
	<MainLayout>
		<ProfileAside>{page}</ProfileAside>
	</MainLayout>
)

export default Edit
