import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"

import { Button, ButtonProps } from "@/shared/ui"

interface BuyDeviceButtonProps extends ButtonProps {
	id: string
}

export const BuyDeviceButton: FC<PropsWithChildren<BuyDeviceButtonProps>> = ({ id, children, ...props }) => {
	const router = useRouter()

	const clickHandler = () => {
		router.push(`/device/buy`)
	}

	return (
		<Button {...props} onClick={clickHandler}>
			{children}
		</Button>
	)
}
