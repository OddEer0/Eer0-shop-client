import { FC } from "react"

import { BuyDeviceCardList, BuyPrice } from "@/entities/Buy"

import { BuyMethod } from "@/features/DeviceAction"

import { $GoCheckoutView } from "./GoCheckout.styles"

const GoCheckoutView: FC = () => {
	return (
		<$GoCheckoutView>
			<div className="content">
				<BuyMethod className="go-checkout__method" />
				<h2 className="h2">Товары</h2>
				<BuyDeviceCardList className="list" />
			</div>
			<aside className="aside">
				<BuyPrice className="go-checkout__price" />
			</aside>
		</$GoCheckoutView>
	)
}

export default GoCheckoutView
