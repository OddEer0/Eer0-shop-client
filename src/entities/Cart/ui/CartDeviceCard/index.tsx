import Image from "next/image"
import { FC, ReactNode } from "react"

import { ICart } from "@/shared/api"
import { cn } from "@/shared/helpers"

import { $CartDeviceCard } from "./CartDeviceCard.styles"

interface CartDeviceCardProps {
	cartDevice: ICart
	favorite: ReactNode
	cart: ReactNode
	counter: ReactNode
}

export const CartDeviceCard: FC<CartDeviceCardProps> = ({ cartDevice, cart, favorite, counter }) => {
	const { price, stock, name, images } = cartDevice.device

	return (
		<$CartDeviceCard>
			<Image src={images[0]} alt="" width={325} height={250} />
			<div className="cart-device__content">
				<h4 className="h4 cart-device__title">{name}</h4>
				<div className="cart-device__price-section">
					<p className={cn("cart-device__price", stock ? "stock" : "")}>{price} Руб</p>
					{!!stock && <p className="cart-device__stock">{stock} Руб</p>}
				</div>
				<div className="cart-device__features">
					<span className="cart-device__favorite">{favorite}</span>
					<span className="cart-device__divider" />
					<span className="cart-device__delete">{cart}</span>
				</div>
			</div>
			<span className="cart-device__counter">{counter}</span>
		</$CartDeviceCard>
	)
}
