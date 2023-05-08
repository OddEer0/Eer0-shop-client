import { FC, PropsWithChildren } from "react"

import { Button, ButtonProps, useConfirm } from "@/shared/ui"

import { useApproveMutate } from "../../api"
import { CONFIRM_APPROVE_DEVICE } from "../../lib"

interface ApproveButtonProps extends ButtonProps {
	id: string
}

export const ApproveButton: FC<PropsWithChildren<ApproveButtonProps>> = ({ id, children, ...props }) => {
	const { mutate } = useApproveMutate()
	const confirm = useConfirm()

	const clickHandler = () => {
		confirm(CONFIRM_APPROVE_DEVICE, () => mutate(id))
	}

	return (
		<Button {...props} onClick={clickHandler}>
			{children}
		</Button>
	)
}
