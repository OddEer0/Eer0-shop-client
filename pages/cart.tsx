import { QueryClient, dehydrate } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import { ReactElement } from "react"

import CartView from "@/views/Cart"

import { cartService } from "@/shared/api"

import { MainLayout } from "@/widgets/MainLayout"

const Cart = () => {
	return <CartView />
}

Cart.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(["cart"], () => cartService.getCartByToken())

	return {
		props: dehydrate(queryClient)
	}
}

export default Cart
