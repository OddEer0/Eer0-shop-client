import { FC, PropsWithChildren } from "react"

import { Badge } from "@/shared/ui"

import { cartLengthQuerySelector, useCartQuery } from "../../api"

export const CartBadge: FC<PropsWithChildren> = ({ children }) => {
	const { data } = useCartQuery(cartLengthQuerySelector)

	return (
		<Badge overlap="square" size="small" color="primary" variant="content" content={data}>
			{children}
		</Badge>
	)
}
