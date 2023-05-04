import { dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import { AuthGuard, withCSR } from "@/app/hocs"

import CartView from "@/views/Cart"

import { MainLayout } from "@/widgets/MainLayout"

const Cart = () => {
	return <CartView />
}

Cart.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

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

export default Cart
