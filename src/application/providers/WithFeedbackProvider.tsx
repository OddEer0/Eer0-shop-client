import { FC, PropsWithChildren } from "react"
import { ToastContainer } from "react-toastify"

import { Button, Modal, useConfirmStore } from "@/shared/ui"

export const WithFeedbackProvider: FC<PropsWithChildren> = ({ children }) => {
	const { isShow, closeConfirm, message, cancel, confirm } = useConfirmStore()

	const confirmHandler = () => {
		if (confirm) {
			confirm()
		}
		closeConfirm()
	}

	const cancelHandler = () => {
		if (cancel) {
			cancel()
		}
		closeConfirm()
	}

	return (
		<>
			<ToastContainer theme="colored" position="bottom-right" />
			<Modal isShow={isShow} closeHandler={closeConfirm}>
				<p>{message}</p>
				<Button onClick={confirmHandler}>Подтвердить</Button>
				<Button onClick={cancelHandler}>Отмена</Button>
			</Modal>
			{children}
		</>
	)
}
