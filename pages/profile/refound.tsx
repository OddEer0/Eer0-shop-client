import { dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import { AuthGuard, withCSR } from "@/app/hocs"

import { RefoundView } from "@/views/Refound"

import { MainLayout } from "@/widgets/MainLayout"
import { ProfileAside } from "@/widgets/ProfileAside"

const Refound = () => {
	return <RefoundView />
}

Refound.getLayout = (page: ReactElement) => (
	<MainLayout>
		<ProfileAside>{page}</ProfileAside>
	</MainLayout>
)

export const getServerSideProps: GetServerSideProps = withCSR(
	AuthGuard({
		async next({ queryClient, store }) {
			return {
				props: {
					dehydratedState: dehydrate(queryClient),
					initZustandState: store
				}
			}
		}
	})
)

export default Refound
