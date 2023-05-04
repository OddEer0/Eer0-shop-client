/* eslint-disable no-restricted-imports */
import { dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import { AuthGuard, withCSR } from "@/app/hocs"

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

export const getServerSideProps: GetServerSideProps = withCSR(
	AuthGuard({
		async next({ queryClient, store }) {
			const dehydratedState = dehydrate(queryClient)
			queryClient.clear()

			return {
				props: {
					dehydratedState,
					initZustandState: store
				}
			}
		}
	})
)
