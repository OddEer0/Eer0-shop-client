/* eslint-disable import/order */
import { FC, PropsWithChildren } from "react"

import { cn } from "@/shared/helpers"

import { ButtonProps } from "./Button.types"
import { ContainedButton } from "./styles/contained.styles"
import { OutlinedButton } from "./styles/outlined.styles"
import { TextButton } from "./styles/text.styles"

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	size = "medium",
	color = "primary",
	variant = "text",
	className = "",
	children,
	...props
}) => {
	const cl = cn("prefix", variant, size, color, className)

	return (
		<>
			{variant === "contained" ? (
				<ContainedButton className={cl} {...props}>
					{children}
				</ContainedButton>
			) : variant === "outlined" ? (
				<OutlinedButton className={cl} {...props}>
					{children}
				</OutlinedButton>
			) : (
				<TextButton className={cl} {...props}>
					{children}
				</TextButton>
			)}
		</>
	)
}
