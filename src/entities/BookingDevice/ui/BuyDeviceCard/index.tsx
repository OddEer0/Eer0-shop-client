import Image from "next/image"
import { FC, HTMLAttributes } from "react"

import { $BuyDeviceCard } from "./BuyDeviceCard.styles"

interface BuyDeviceCardProps extends HTMLAttributes<HTMLDivElement> {
	img: string
	price: number
	name: string
}

export const BuyDeviceCard: FC<BuyDeviceCardProps> = ({ name, img, price, ...props }) => {
	return (
		<$BuyDeviceCard {...props}>
			<Image draggable={false} src={img} alt={name} width={300} height={200} />
			<p className="h4">{price} Руб</p>
		</$BuyDeviceCard>
	)
}
