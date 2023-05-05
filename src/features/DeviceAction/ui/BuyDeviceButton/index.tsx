import { useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"

import { buyActionSelector, useBuyDeviceStore } from "@/entities/Buy"

import { Button, ButtonProps } from "@/shared/ui"

interface BuyDeviceButtonProps extends ButtonProps {
	id: string
}

export const BuyDeviceButton: FC<PropsWithChildren<BuyDeviceButtonProps>> = ({ id, children, ...props }) => {
	const router = useRouter()
	const queryClient = useQueryClient()
	const { addDevice } = useBuyDeviceStore(buyActionSelector)

	const clickHandler = () => {
		router.push(`/gocheckout`)
		addDevice(queryClient.getQueryData(["device", id]) || null)
	}

	return (
		<Button {...props} onClick={clickHandler}>
			{children}
		</Button>
	)
}
