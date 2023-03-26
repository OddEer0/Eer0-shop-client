import { useRouter } from "next/router"
import { ChangeEvent, FC, useState } from "react"

import { Button, Slider, TextField } from "@/shared/ui"

import { $PriceSlider } from "./PriceSlider.styles"

export const PriceSlider: FC = () => {
	const router = useRouter()
	const [maxPrice, setMaxPrice] = useState(() => {
		const val = router.query.maxprice
		if (val) {
			return +val
		}
		return 500000
	})
	const [minPrice, setMinPrice] = useState(() => {
		const val = router.query.minprice
		if (val) {
			return +val
		}
		return 0
	})

	const changeMaxPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setMaxPrice(+e.target.value)
	}

	const changeMinPriceHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setMinPrice(+e.target.value)
	}

	const updateHandler = (value: string[]) => {
		const [min, max] = value
		setMinPrice(+min.split(".")[0])
		setMaxPrice(+max.split(".")[0])
	}

	const clickHandler = () => {
		const queryResult = new Map(Object.entries(router.query))

		if (maxPrice < 500000) {
			queryResult.set("maxprice", String(maxPrice))
		} else if (queryResult.has("maxprice")) {
			queryResult.delete("maxprice")
		}

		if (minPrice > 0) {
			queryResult.set("minprice", String(minPrice))
		} else if (queryResult.has("minprice")) {
			queryResult.delete("minprice")
		}

		router.push({
			query: Object.fromEntries(queryResult)
		})
	}

	return (
		<$PriceSlider>
			<div className="input-section">
				<TextField className="input" label="От" value={minPrice} onChange={changeMinPriceHandler} type="number" />
				<TextField className="input" label="До" value={maxPrice} onChange={changeMaxPriceHandler} type="number" />
			</div>
			<Slider
				className="slider"
				start={[minPrice ? +minPrice : 0, maxPrice ? +maxPrice : 500000]}
				range={{ min: 0, max: 500000 }}
				connect={[false, true, false]}
				onSet={updateHandler}
				tooltips={true}
			/>
			<Button onClick={clickHandler} variant="contained">
				OK
			</Button>
		</$PriceSlider>
	)
}
