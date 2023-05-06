import { FC } from "react"

import { BuyDeviceCardList, BuyPrice } from "@/entities/BookingDevice"

import { BuyButton, BuyMethod } from "@/features/DeviceAction"

import { Meta } from "@/shared/ui"

import { $GoCheckoutView } from "./GoCheckout.styles"

const GoCheckoutView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Покупка девайса" />
			<$GoCheckoutView>
				<div className="content">
					<BuyMethod className="go-checkout__method" />
					<h2 className="h2">Товары</h2>
					<BuyDeviceCardList className="list" />
				</div>
				<aside className="aside">
					<BuyPrice className="go-checkout__price" />
					<BuyButton>Купить онлайн</BuyButton>
				</aside>
			</$GoCheckoutView>
		</>
	)
}

export default GoCheckoutView
