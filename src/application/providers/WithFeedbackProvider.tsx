import { FC, PropsWithChildren } from "react"
import { ToastContainer } from "react-toastify"
import styled from "styled-components"

import { Button, Modal, useConfirmStore } from "@/shared/ui"

const $Modal = styled(Modal)`
	& > .modal-main {
		p {
			margin: 20px 0;
		}

		& > .cancel {
			margin-left: 15px;
		}
	}
`

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
			<$Modal isShow={isShow} closeHandler={closeConfirm}>
				<p className="h5">{message}</p>
				<Button variant="contained" color="success" onClick={confirmHandler}>
					Подтвердить
				</Button>
				<Button className="cancel" variant="outlined" onClick={cancelHandler} color="danger">
					Отмена
				</Button>
			</$Modal>
			{children}
		</>
	)
}
