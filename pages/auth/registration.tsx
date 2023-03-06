import { FC, lazy } from "react"

const RegistrationView = lazy(() => import("@/views/auth/Registration"))

const Registration: FC = () => {
	return <RegistrationView />
}

export default Registration
