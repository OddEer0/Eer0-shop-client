import Image from "next/image"
import { FC, ReactNode } from "react"

import { $Layout, $Section, $Wrapper } from "./Layout.styles"

interface AuthLayoutProps {
	form: ReactNode
	imgHead?: ReactNode
	imgUrl?: Nullable<string>
}

export const AuthLayout: FC<AuthLayoutProps> = ({ form, imgUrl = null, imgHead }) => {
	return (
		<$Layout>
			<$Section>
				<$Wrapper>
					{imgHead}
					{imgUrl ? (
						<Image draggable={false} src={imgUrl} alt="auth-illustration" width={640} height={640} priority />
					) : (
						<span></span>
					)}
				</$Wrapper>
			</$Section>
			<$Section>{form}</$Section>
		</$Layout>
	)
}
