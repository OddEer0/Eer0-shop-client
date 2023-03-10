import { ReactElement } from "react"

import CartView from "@/views/Cart"

import { MainLayout } from "@/widgets/MainLayout"

const Cart = () => {
	return <CartView />
}

Cart.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Cart
