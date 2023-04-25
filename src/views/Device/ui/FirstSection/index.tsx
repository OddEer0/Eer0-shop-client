import { FC } from "react"
import { BsCart } from "react-icons/bs"

import { DeviceImageSlider, DevicePriceAside } from "@/entities/Device"
import { DeviceInfo } from "@/entities/Info"

import { AddDeviceToCartButton } from "@/features/CartAction"
import { BuyDeviceButton } from "@/features/DeviceAction"
import { ToggleFavoriteButton } from "@/features/FavoriteAction"

import { $FirstSection } from "./FirstSection.styles"

interface FirstSectionProps {
	id: string
}

export const FirstSection: FC<FirstSectionProps> = ({ id }) => {
	return (
		<$FirstSection>
			<DeviceImageSlider id={id} />
			<DeviceInfo id={id} className="device-info-content" />
			<DevicePriceAside
				id={id}
				className="aside"
				cart={
					<AddDeviceToCartButton size="small" variant="contained" color="secondary" id={id}>
						Добавить в корзину
						<BsCart className="add-device-to-cart-icon" />
					</AddDeviceToCartButton>
				}
				favorite={
					<ToggleFavoriteButton size="small" color="secondary" variant="outlined" className="favorite-button" id={id} />
				}
				buy={
					<BuyDeviceButton variant="contained" color="quaternary" id={id}>
						Купить в один клик
					</BuyDeviceButton>
				}
			/>
		</$FirstSection>
	)
}
