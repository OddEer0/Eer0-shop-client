import { FC, PropsWithChildren } from "react"

import { Button, ButtonProps } from "@/shared/ui"

import { useLogoutMutate } from "../../api"

interface LogoutButtonProps extends ButtonProps {
	clickHandle?: () => void
}

export const LogoutButton: FC<PropsWithChildren<LogoutButtonProps>> = ({ children, clickHandle, ...props }) => {
	const { mutate } = useLogoutMutate(clickHandle)

	const clickHandler = () => {
		mutate()
	}

	return (
		<Button {...props} onClick={clickHandler}>
			{children}
		</Button>
	)
}
