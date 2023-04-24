import { FC, PropsWithChildren } from "react"

import { Button, ButtonProps, Spinner } from "@/shared/ui"

import { useAddToCart } from "../../lib"
import { CartDeviceCounter } from "../CartDeviceCounter"

import { $AddDeviceToCartButton } from "./AddDeviceToCartButton.styles"

interface AddDeviceToCartButtonProps extends ButtonProps {
	id: string
	className?: string
}

export const AddDeviceToCartButton: FC<PropsWithChildren<AddDeviceToCartButtonProps>> = ({
	id,
	children,
	className = "",
	...props
}) => {
	const { addDeviceToCartHandler, isAddLoading, isFetching, isToCart } = useAddToCart(id)

	return (
		<$AddDeviceToCartButton className={className}>
			<div className=""></div>
			{isToCart ? (
				<CartDeviceCounter id={id} />
			) : (
				<Button className="add-device-to-cart-button" {...props} onClick={addDeviceToCartHandler}>
					{isAddLoading || isFetching ? <Spinner size="small" /> : children}
				</Button>
			)}
		</$AddDeviceToCartButton>
	)
}
