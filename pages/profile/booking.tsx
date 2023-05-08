import { dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import { AuthGuard, withCSR } from "@/app/hocs"

import { BookingView } from "@/views/Booking"

import { MainLayout } from "@/widgets/MainLayout"
import { ProfileAside } from "@/widgets/ProfileAside"

const Booking = () => {
	return <BookingView />
}

Booking.getLayout = (page: ReactElement) => (
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

export default Booking
