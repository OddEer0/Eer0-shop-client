import { FC } from "react"

import { Button, Slider, TextField } from "@/shared/ui"

import { usePriceSlider } from "../../lib"

import { $PriceSlider } from "./PriceSlider.styles"

export const PriceSlider: FC = () => {
	const { changeMaxPriceHandler, changeMinPriceHandler, clickHandler, maxPrice, minPrice, updateHandler } =
		usePriceSlider()

	return (
		<$PriceSlider>
			<div className="input-section">
				<TextField
					inputSize="small"
					className="input"
					label="От"
					value={minPrice}
					onChange={changeMinPriceHandler}
					type="number"
				/>
				<TextField
					inputSize="small"
					className="input"
					label="До"
					value={maxPrice}
					onChange={changeMaxPriceHandler}
					type="number"
				/>
			</div>
			<Slider
				className="slider"
				start={[minPrice ? +minPrice : 0, maxPrice ? +maxPrice : 500000]}
				range={{ min: 0, max: 500000 }}
				connect={[false, true, false]}
				onSet={updateHandler}
				tooltips={[
					{
						to(val) {
							return Math.ceil(val)
						},
						from(val) {
							return Math.ceil(+val)
						}
					},
					{
						to(val) {
							return Math.ceil(val)
						},
						from(val) {
							return Math.ceil(+val)
						}
					}
				]}
			/>
			<Button size="small" onClick={clickHandler} variant="contained">
				OK
			</Button>
		</$PriceSlider>
	)
}
