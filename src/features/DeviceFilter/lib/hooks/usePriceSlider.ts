import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"

export const usePriceSlider = () => {
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

	return {
		maxPrice,
		minPrice,
		clickHandler,
		updateHandler,
		changeMaxPriceHandler,
		changeMinPriceHandler
	}
}
