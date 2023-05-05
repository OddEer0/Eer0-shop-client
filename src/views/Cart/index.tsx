import { FC } from "react"

import { CartDeviceCardList, CartTotal } from "@/entities/Cart"

import { CartDeviceCounter, RemoveDeviceFromCartText } from "@/features/CartAction"
import { ToggleFavoriteIcon } from "@/features/FavoriteAction"

import { Container, Meta } from "@/shared/ui"

import { $CartView } from "./Cart.styles"

const CartView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Cart" />
			<$CartView>
				<section className="first-section">
					<Container className="container">
						<CartDeviceCardList
							className="cart-view__list"
							counter={CartDeviceCounter}
							cart={RemoveDeviceFromCartText}
							favorite={ToggleFavoriteIcon}
						/>
						<CartTotal className="cart-view__total" />
					</Container>
				</section>
			</$CartView>
		</>
	)
}

export default CartView
