import { FC } from "react"

import { getCartDeviceQuerySelectorWithIdCount, useCartQuery } from "@/entities/Cart"

import { Counter, CounterProps } from "@/shared/ui"

import { useSetCountCartDeviceMutate } from "../../api"

interface CartDeviceCounterProps extends CounterProps {
	id: string
}

export const CartDeviceCounter: FC<CartDeviceCounterProps> = ({ id, ...props }) => {
	const { data } = useCartQuery(getCartDeviceQuerySelectorWithIdCount(id))
	const { mutate } = useSetCountCartDeviceMutate()

	const changeCounterHandler = (val: number) => {
		if (data && data.count !== val) {
			mutate({ cartDeviceId: data.id, count: val })
		}
	}

	return data ? (
		<Counter
			{...props}
			maxValue={data.maxValue}
			value={data.count}
			changeValue={changeCounterHandler}
			debounceTime={1500}
		/>
	) : null
}
