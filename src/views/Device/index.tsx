import { useRouter } from "next/router"
import { FC } from "react"
import { BsCart } from "react-icons/bs"

import { DeviceImageSlider, DevicePriceAside } from "@/entities/Device"

import { AddDeviceToCartButton } from "@/features/CartAction"
import { BuyDeviceButton } from "@/features/DeviceAction"
import { ToggleFavoriteButton } from "@/features/FavoriteAction"

import { Container } from "@/shared/ui"

import { $DeviceView } from "./Device.styles"

const DeviceView: FC = () => {
	const { query } = useRouter()

	if (typeof query.deviceId !== "string") {
		return null
	}

	return (
		<$DeviceView>
			<Container>
				<section className="first-section">
					<DeviceImageSlider id={query.deviceId} />
					<DevicePriceAside
						id={query.deviceId}
						className="aside"
						cart={
							<AddDeviceToCartButton size="small" variant="contained" color="secondary" id={query.deviceId}>
								Добавить в корзину
								<BsCart className="add-device-to-cart-icon" />
							</AddDeviceToCartButton>
						}
						favorite={
							<ToggleFavoriteButton
								size="small"
								color="secondary"
								variant="outlined"
								className="favorite-button"
								id={query.deviceId}
							/>
						}
						buy={
							<BuyDeviceButton variant="contained" color="quaternary" id={query.deviceId}>
								Купить в один клик
							</BuyDeviceButton>
						}
					/>
				</section>
			</Container>
		</$DeviceView>
	)
}

export default DeviceView
