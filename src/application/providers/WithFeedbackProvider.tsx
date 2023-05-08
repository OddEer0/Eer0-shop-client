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

	.confirm-feature {
		display: flex;
		width: 100%;
		gap: 15px;
		align-items: center;
		justify-content: center;
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
				<div className="confirm-feature">
					<Button variant="contained" color="success" onClick={confirmHandler}>
						Подтвердить
					</Button>
					<Button className="cancel" variant="outlined" onClick={cancelHandler} color="danger">
						Отмена
					</Button>
				</div>
			</$Modal>
			{children}
		</>
	)
}
