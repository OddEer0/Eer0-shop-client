import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"

import { buyDeviceSelector, useBuyDeviceStore } from "@/entities/Buy"

import { Button, ButtonProps, useConfirm } from "@/shared/ui"

import { useBuyMutate } from "../../api"

type BuyButtonProps = PropsWithChildren<ButtonProps>

export const BuyButton: FC<BuyButtonProps> = ({ children, ...props }) => {
	const { mutate } = useBuyMutate()
	const devices = useBuyDeviceStore(buyDeviceSelector)
	const confirm = useConfirm()
	const router = useRouter()

	const clickHandler = () => {
		confirm("Вы уверены, что хотите купить товары?", () => {
			mutate(devices.map(state => ({ count: state.count, deviceId: state.device.id })))
			router.back()
		})
	}

	return (
		<Button {...props} onClick={clickHandler}>
			{children}
		</Button>
	)
}
