import { FC, lazy } from "react"

const LoginView = lazy(() => import("@/views/auth/Login"))

const Login: FC = () => {
	return <LoginView />
}

export default Login
