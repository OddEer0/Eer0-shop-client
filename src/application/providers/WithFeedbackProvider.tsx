import { FC, PropsWithChildren } from "react"
import { ToastContainer } from "react-toastify"

export const WithFeedbackProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<ToastContainer theme="colored" position="bottom-right" />
			{children}
		</>
	)
}
