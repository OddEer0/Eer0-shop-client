import { ReactElement } from "react"

import GoCheckoutView from "@/views/GoCheckout"

import { BuyLayout } from "@/widgets/BuyLayout"

const GoCheckout = () => {
	return <GoCheckoutView />
}

GoCheckout.getLayout = (page: ReactElement) => <BuyLayout>{page}</BuyLayout>

export default GoCheckout
