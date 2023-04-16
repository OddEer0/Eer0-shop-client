import { FC, PropsWithChildren } from "react"

import { Badge } from "@/shared/ui"

import { useCartQuery } from "../../api"
import { cartDeviceQuerySelector } from "../../model"

export const CartBadge: FC<PropsWithChildren> = ({ children }) => {
	const { data } = useCartQuery(cartDeviceQuerySelector)

	return (
		<Badge overlap="square" size="small" color="primary" variant="content" content={data?.length || 0}>
			{children}
		</Badge>
	)
}
