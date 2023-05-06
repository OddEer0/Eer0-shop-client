import { dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import { AuthGuard, withCSR } from "@/app/hocs"

import { PurchaseView } from "@/views/Purchase"

import { MainLayout } from "@/widgets/MainLayout"
import { ProfileAside } from "@/widgets/ProfileAside"

const Purchase = () => {
	return <PurchaseView />
}

Purchase.getLayout = (page: ReactElement) => (
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

export default Purchase
