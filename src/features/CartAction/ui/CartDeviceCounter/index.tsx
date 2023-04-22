import { FC } from "react"

import { getCartDeviceQuerySelectorWithIdCount, useCartQuery } from "@/entities/Cart"

import { Counter } from "@/shared/ui"

import { useSetCountCartDeviceMutate } from "../../api"

interface CartDeviceCounterProps {
	id: string
}

export const CartDeviceCounter: FC<CartDeviceCounterProps> = ({ id }) => {
	const { data } = useCartQuery(getCartDeviceQuerySelectorWithIdCount(id))
	const { mutate } = useSetCountCartDeviceMutate()

	const changeCounterHandler = (val: number) => {
		if (data && data.count !== val) {
			mutate({ cartDeviceId: data.id, count: val })
		}
	}

	return <Counter value={data?.count} changeValue={changeCounterHandler} debounceTime={1500} />
}
