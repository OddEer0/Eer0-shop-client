import { dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import { ProfileView } from "@/views/Profile"

import { AuthGuard } from "@/shared/hocs"

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

export const getServerSideProps: GetServerSideProps = AuthGuard({
	async callback(ctx, queryClient) {
		return {
			props: {
				dehydratedState: dehydrate(queryClient)
			}
		}
	}
})
