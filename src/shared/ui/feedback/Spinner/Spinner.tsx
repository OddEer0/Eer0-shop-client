import { FC } from "react"

import { cn } from "@/shared/helpers"

import { SpinnerProps } from "./Spinner.types"
import { DoubleSnakeSpinner } from "./styles/doubleSnake.styles"
import { SnakeSpinner } from "./styles/snake.styles"
import { StandardSpinner } from "./styles/standard.styles"

export const Spinner: FC<SpinnerProps> = ({
	color = "primary",
	size = "medium",
	variant = "standard",
	className = ""
}) => {
	const cl = cn("prefix", size, color, className)

	switch (variant) {
		case "standard":
			return <StandardSpinner data-testid="standard" className={cl} />
		case "double-snake":
			return <DoubleSnakeSpinner data-testid="double-snake" className={cl} />
		case "snake":
			return <SnakeSpinner data-testid="snake" className={cl} />
		default:
			return null
	}
}
