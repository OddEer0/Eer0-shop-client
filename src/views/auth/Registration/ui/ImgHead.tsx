import Link from "next/link"
import { FC } from "react"
import styled from "styled-components"

const $Title = styled.h3`
	margin-top: 80px;
	margin-bottom: 25px;
`

const $Link = styled(Link)`
	&:hover {
		text-decoration: underline;
	}
`

export const ImgHead: FC = () => {
	return (
		<div>
			<$Title className="h3">У вас уже имеется аккаунт?</$Title>
			<$Link className="h5" href="login">
				Войти
			</$Link>
		</div>
	)
}
