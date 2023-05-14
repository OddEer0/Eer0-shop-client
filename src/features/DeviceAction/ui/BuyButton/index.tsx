import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"
import { toast } from "react-toastify"

import { buyDeviceSelector, useBuyDeviceStore } from "@/entities/BookingDevice"
import { useProfileQuery, userIdQuerySelector } from "@/entities/User"

import { UNAUTHORIZED } from "@/shared/constants"
import { Button, ButtonProps, useConfirm } from "@/shared/ui"

import { useBuyMutate } from "../../api"

type BuyButtonProps = PropsWithChildren<ButtonProps>

export const BuyButton: FC<BuyButtonProps> = ({ children, ...props }) => {
	const { mutate } = useBuyMutate()
	const devices = useBuyDeviceStore(buyDeviceSelector)
	const { data } = useProfileQuery(userIdQuerySelector)
	const confirm = useConfirm()
	const router = useRouter()

	const clickHandler = () => {
		if (data) {
			confirm("Вы уверены, что хотите купить товары?", () => {
				mutate(devices.map(state => ({ count: state.count, deviceId: state.device.id })))
				router.back()
			})
		} else {
			toast.error(UNAUTHORIZED)
		}
	}

	return (
		<Button {...props} onClick={clickHandler}>
			{children}
		</Button>
	)
}
