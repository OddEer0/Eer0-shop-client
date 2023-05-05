import { FC, HTMLAttributes } from "react"

import { buyDeviceSelector, useBuyDeviceStore } from "../../model"
import { BuyDeviceCard } from "../BuyDeviceCard"

import { $BuyDeviceCardList } from "./BuyDeviceCardList.styles"

type BuyDeviceCardListProps = HTMLAttributes<HTMLDivElement>

export const BuyDeviceCardList: FC<BuyDeviceCardListProps> = ({ ...props }) => {
	const devices = useBuyDeviceStore(buyDeviceSelector)

	return (
		<$BuyDeviceCardList {...props}>
			{devices.length &&
				devices.map(device => (
					<BuyDeviceCard
						className="buy-device-list"
						name={device.device.name}
						img={device.device.images[0]}
						price={device.device.stock || device.device.price}
						key={device.device.id}
					/>
				))}
		</$BuyDeviceCardList>
	)
}
