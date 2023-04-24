import { FC, PropsWithChildren } from "react"

import { Button, ButtonProps } from "@/shared/ui"

interface BuyDeviceButtonProps extends ButtonProps {
	id: string
}

export const BuyDeviceButton: FC<PropsWithChildren<BuyDeviceButtonProps>> = ({ id, children, ...props }) => {
	return <Button {...props}>{children}</Button>
}
