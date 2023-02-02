/* eslint-disable import/order */
import { FC, PropsWithChildren } from "react"

import { cn } from "@/shared/helpers"

import { Btn } from "./Button.styles"
import { ButtonProps } from "./Button.types"

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	isLoading = false,
	size = "medium",
	color = "primary",
	variant = "text",
	className = "",
	children,
	...props
}) => {
	return (
		<Btn className={cn("prefix", variant, size, color, className)} {...props}>
			{isLoading ? <p>loading</p> : children}
		</Btn>
	)
}
