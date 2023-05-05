import { useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { FC, PropsWithChildren, useState } from "react"

import { buyActionSelector, useBuyDeviceStore } from "@/entities/Buy"

import { IDevice } from "@/shared/api"
import { Button, ButtonProps, Counter } from "@/shared/ui"

import { $BuyDeviceButton } from "./BuyDeviceButton.styles"

interface BuyDeviceButtonProps extends ButtonProps {
	id: string
}

export const BuyDeviceButton: FC<PropsWithChildren<BuyDeviceButtonProps>> = ({ id, children, ...props }) => {
	const router = useRouter()
	const queryClient = useQueryClient()
	const { addDevice } = useBuyDeviceStore(buyActionSelector)
	const [count, setCount] = useState(1)
	const device = queryClient.getQueryData<IDevice>(["device", id])

	const clickHandler = () => {
		router.push(`/gocheckout`)
		addDevice(device ? { count, device } : null)
	}

	return (
		<$BuyDeviceButton>
			<Counter maxValue={device?.count} value={count} changeValue={value => setCount(value)} className="buy-counter" />
			<Button {...props} onClick={clickHandler}>
				{children}
			</Button>
		</$BuyDeviceButton>
	)
}
