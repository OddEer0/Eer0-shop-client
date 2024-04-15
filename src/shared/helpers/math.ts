import { RefObject } from "react"

export const getLimitationNumber = (num: number, limit: number, postfix = "+") =>
	num > limit ? limit + postfix : num + ""

interface ICoords {
	x: number | undefined
	y: number | undefined
}

export const getCircularCoords = (
	ref: RefObject<HTMLElement>,
	horizontal: "left" | "right",
	vertical: "top" | "bottom"
): ICoords => {
	let x
	let y

	if (ref.current) {
		const width = ref.current.offsetWidth
		const height = ref.current.offsetHeight
		const lineDifference = (width - height) / 2
		const squareWidth = width - lineDifference
		const percentWidthDifference = squareWidth / width - 1
		const percentHeightDifference = squareWidth / height - 1
		const diagram = Math.sqrt(2 * squareWidth)
		const diff = (diagram - squareWidth) / 2
		const squareSide = diff / Math.sqrt(2) / 2
		const dx = squareSide * (percentHeightDifference + 1)
		const dy = squareSide * (percentWidthDifference + 1)

		if (horizontal === "left") x = -dx
		else x = width + dx

		if (vertical === "top") y = -dy
		else y = width + dy

		return {
			x: x ? x : undefined,
			y: y ? y : undefined
		}
	}
	return { x, y }
}

export const differenceNumberToPercent = (num1: number, num2: number) => {
	return ((num1 - num2) / num1) * 100
}
