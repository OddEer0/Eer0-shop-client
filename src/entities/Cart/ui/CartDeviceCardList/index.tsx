import { FC } from "react"

import { IDevice } from "@/shared/api"

import { useCartQuery } from "../../api"
import { CartDeviceCard } from "../CartDeviceCard"

import { $CartDeviceCardList } from "./CartDeviceCardList.styles"

interface IId {
	id: string
}

interface IFavorite {
	device: IDevice
	className?: string
}

interface CartDeviceCardListProps {
	cart: FC<IId>
	favorite: FC<IFavorite>
	counter: FC<IId>
	className?: string
}

export const CartDeviceCardList: FC<CartDeviceCardListProps> = ({
	cart: Cart,
	counter: Counter,
	favorite: Favorite,
	className = ""
}) => {
	const { data, isLoading } = useCartQuery()

	return (
		<$CartDeviceCardList className={className}>
			{data && data.length ? (
				data.map(device => (
					<CartDeviceCard
						cartDevice={device}
						favorite={<Favorite className="device-cart-list__favorite" device={device.device} />}
						cart={<Cart id={device.id} />}
						counter={<Counter id={device.device.id} />}
						key={device.id}
					/>
				))
			) : (
				<p>Нет товаров в корзине</p>
			)}
		</$CartDeviceCardList>
	)
}
